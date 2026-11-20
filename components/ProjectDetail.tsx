"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

import Circles from "@/components/Circles";
import type { Project } from "@/lib/projects";
import { fadeIn } from "@/variants";

const ProjectDetail = ({ project }: { project: Project }) => {
  return (
    <div className="page-scroll min-h-full overflow-y-auto bg-primary/30 py-24 pb-24 xl:py-36 xl:pb-0">
      <Circles />
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mb-6"
        >
          <Link
            href="/work"
            className="flex w-fit items-center gap-x-2 text-white/60 transition-colors duration-300 hover:text-accent"
          >
            <BsArrowLeft className="text-lg" />
            <span className="text-sm tracking-widest uppercase">
              Kembali ke Portofolio
            </span>
          </Link>
        </motion.div>

        <div className="mb-10 grid grid-cols-1 gap-8 xl:grid-cols-2">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col justify-center"
          >
            <h1 className="mb-2 text-[28px] font-semibold leading-tight md:text-[36px]">
              <span className="text-accent">{project.title}</span>
            </h1>
            <p className="mb-4 text-base text-white/80">{project.subtitle}</p>
            <p className="mb-6 text-sm leading-relaxed text-white/70">
              {project.description}
            </p>

            <div className="mb-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Kategori", value: project.category },
                { label: "Fokus", value: project.focus },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-3"
                >
                  <div className="mb-1 text-xs text-white/40">{label}</div>
                  <div className="text-sm font-medium text-white">{value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-2 gap-3"
          >
            {project.screenshots.map(({ src, label }) => (
              <div
                key={src}
                className="group relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-white/5"
              >
                <Image
                  src={src}
                  alt={`${label} - ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-8 xl:grid-cols-2">
          <motion.section
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="rounded-xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="mb-3 text-base font-semibold text-accent">
              Fitur Utama
            </h2>
            <ul className="list-inside list-disc space-y-1.5 text-sm leading-relaxed text-white/70">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="rounded-xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="mb-3 text-base font-semibold text-accent">
              Kontribusi
            </h2>
            <ul className="list-inside list-disc space-y-1.5 text-sm leading-relaxed text-white/70">
              {project.contributions.map((contribution) => (
                <li key={contribution}>{contribution}</li>
              ))}
            </ul>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
