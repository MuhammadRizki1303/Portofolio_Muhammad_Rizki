import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import Circles from "@/components/Circles";
import { experiences } from "@/lib/experience";

export default function ExperiencePage() {
  return (
    <div className="page-scroll min-h-screen overflow-y-auto bg-primary/30 py-24 pb-24 xl:py-36 xl:pb-12">
      <Circles />
      <main className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Perjalanan profesional
          </p>
          <h1 className="h2">
            Pengalaman <span className="text-accent">.</span>
          </h1>
          <p className="text-sm leading-relaxed text-white/70">
            Ringkasan pengalaman kerja, program pengembangan, kontribusi, dan
            hasil yang saya kerjakan di setiap tahap perjalanan profesional.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
          {experiences.map((experience) => (
            <article
              key={experience.slug}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 backdrop-blur-sm"
            >
              <div className="mb-5 flex items-start justify-between gap-3">
                <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent">
                  {experience.period}
                </span>
                <span className="text-xs text-white/40">
                  {experience.gallery.length} dokumentasi
                </span>
              </div>
              <h2 className="mb-2 text-xl font-semibold text-white">
                {experience.company}
              </h2>
              <p className="mb-3 text-sm font-medium text-accent">
                {experience.position}
              </p>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-white/65">
                {experience.summary}
              </p>
              <Link
                href={`/experience/${experience.slug}`}
                className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-accent hover:bg-accent hover:text-white focus-visible:outline-2 focus-visible:outline-accent"
              >
                Lihat detail
                <BsArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
