"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { BsArrowLeft, BsArrowRight, BsX } from "react-icons/bs";

type Screenshot = {
  src: string;
  label: string;
};

const ProjectGallery = ({
  screenshots,
  projectTitle,
}: {
  screenshots: Screenshot[];
  projectTitle: string;
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") {
        setActiveIndex((index) =>
          index === null
            ? null
            : (index - 1 + screenshots.length) % screenshots.length,
        );
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((index) =>
          index === null ? null : (index + 1) % screenshots.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex, screenshots.length]);

  const activeScreenshot =
    activeIndex === null ? null : screenshots[activeIndex];
  const currentIndex = activeIndex ?? 0;

  return (
    <>
      {screenshots.map(({ src, label }, index) => (
        <button
          key={src}
          type="button"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setActiveIndex(index);
          }}
          aria-label={`Perbesar ${label} - ${projectTitle}`}
          className="group relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <Image
            src={src}
            alt={`${label} - ${projectTitle}`}
            fill
            sizes="(max-width: 1280px) 50vw, 25vw"
            className="object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent px-3 pb-2 pt-6 text-left text-xs text-white/90 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            Klik untuk melihat penuh
          </span>
        </button>
      ))}

      {activeScreenshot &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${activeScreenshot.label} - ${projectTitle}`}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black p-4"
            onClick={(event) => {
              if (event.target === event.currentTarget) setActiveIndex(null);
            }}
          >
            <div className="pointer-events-none absolute left-4 top-4 right-16 z-10 text-sm text-white/80 sm:left-8 sm:top-6">
              <p className="font-medium">{activeScreenshot.label}</p>
              <p className="text-xs text-white/50">
                {projectTitle} · {currentIndex + 1} / {screenshots.length}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Tutup foto"
              className="absolute right-4 top-3 z-10 rounded-full p-2 text-3xl text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-accent"
            >
              <BsX />
            </button>

            <div className="relative z-0 h-full w-full max-w-7xl">
              <Image
                src={activeScreenshot.src}
                alt={`${activeScreenshot.label} - ${projectTitle}`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {screenshots.length > 1 && (
              <>
              <button
                type="button"
                onClick={() =>
                  setActiveIndex(
                    (currentIndex - 1 + screenshots.length) % screenshots.length,
                  )
                }
                aria-label="Lihat foto sebelumnya"
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-3 text-2xl text-white transition hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-accent sm:left-6"
              >
                <BsArrowLeft />
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((currentIndex + 1) % screenshots.length)
                }
                aria-label="Lihat foto berikutnya"
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-3 text-2xl text-white transition hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-accent sm:right-6"
              >
                <BsArrowRight />
              </button>
              </>
            )}
          </div>,
          document.body,
        )}
    </>
  );
};

export default ProjectGallery;
