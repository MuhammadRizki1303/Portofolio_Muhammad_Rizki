import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

import Circles from "@/components/Circles";
import { experiences, getExperience } from "@/lib/experience";

export function generateStaticParams() {
  return experiences.map(({ slug }) => ({ slug }));
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const experience = getExperience(slug);

  if (!experience) {
    notFound();
  }

  return (
    <div className="page-scroll min-h-screen overflow-y-auto bg-primary/30 py-24 pb-24 xl:py-36 xl:pb-12">
      <Circles />
      <main className="container relative z-10 mx-auto px-4">
        <Link
          href="/experience"
          className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
        >
          <BsArrowLeft />
          Kembali ke pengalaman
        </Link>

        <header className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            {experience.period}
          </p>
          <h1 className="mb-3 text-3xl font-semibold leading-tight md:text-5xl">
            {experience.company}
          </h1>
          <p className="mb-4 text-lg font-medium text-accent">
            {experience.position}
          </p>
          <p className="text-sm leading-relaxed text-white/70">
            {experience.summary}
          </p>
        </header>

        <section className="mb-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-4 text-lg font-semibold text-accent">
              Apa yang dilakukan
            </h2>
            <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-white/70">
              {experience.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-4 text-lg font-semibold text-accent">
              Hasil dan pembelajaran
            </h2>
            <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-white/70">
              {experience.results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Dokumentasi</h2>
              <p className="mt-1 text-sm text-white/55">
                Beberapa tampilan dan dokumentasi yang terkait dengan pengalaman
                ini.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {experience.gallery.map((image) => (
              <figure
                key={image.src}
                className="group overflow-hidden rounded-xl border border-white/10 bg-white/5"
              >
                <div className="relative aspect-video">
                  <Image
                    src={image.src}
                    alt={`${image.label} - ${experience.company}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="px-3 py-2 text-xs text-white/65">
                  {image.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
