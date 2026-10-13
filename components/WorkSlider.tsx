"use client";

import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Klasifikasi Jamur CNN",
          path: "/projects/Klasifikasi Jamur/Dashboard Jamur.png",
          link: "/projects/klasifikasi-jamur",
        },
        {
          title: "Inventory IT Assets",
          path: "/projects/Inventory IT/Dashboard Project Magang.png",
          link: "/projects/inventory-it",
        },
        {
          title: "Smart Locker",
          path: "/projects/Smart Locker/Dashboard RFID.png",
          link: "/projects/smart-locker",
        },
        {
          title: "Web IT Class D",
          path: "/projects/web class D/1_Home_web_D.png",
          link: "/projects/web-it-class-d",
        },
        {
          title: "TravelMate",
          path: "/projects/Travelmate/Travelmate_1.png",
          link: "/projects/Travelmate",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[420px] sm:h-70 md:h-120"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {slide.images.map((image, imageI) => (
              <Link
                href={image.link}
                aria-label={`Lihat detail proyek ${image.title}`}
                className="relative aspect-video rounded-lg overflow-hidden flex items-center justify-center group bg-black/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                key={imageI}
              >
                <Image
                  src={image.path}
                  alt=""
                  width={500}
                  height={300}
                  className="h-full w-full object-contain"
                />

                <div
                  className="absolute inset-0 bg-linear-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 transition-opacity duration-300 group-hover:opacity-60 group-focus-visible:opacity-60"
                  aria-hidden
                />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-1 bg-linear-to-t from-black/95 to-transparent px-2 pb-1.5 pt-6 sm:px-3 sm:pb-2">
                  <span className="min-w-0 truncate text-left text-[9px] font-semibold leading-tight text-white sm:text-[11px]">
                    {image.title}
                  </span>
                  <span className="shrink-0 text-[8px] font-semibold uppercase tracking-wide text-white/80 sm:text-[9px]">
                    Lihat
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
