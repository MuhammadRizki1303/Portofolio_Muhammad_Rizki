"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import CountUp from "react-countup";
import { BsArrowRight } from "react-icons/bs";

import Avatar from "@/components/Avatar";
import Circles from "@/components/Circles";
import { experiences } from "@/lib/experience";
import { fadeIn } from "@/variants";

type AboutInfoItem = {
  title: string;
  stage?: string;
  details?: string[];
  href?: string;
};

type AboutDataItem = {
  title: string;
  info: AboutInfoItem[];
};

const aboutData: AboutDataItem[] = [
  {
    title: "keahlian",
    info: [
      {
        title: "Full-Stack & Backend",
        details: [
          "Python",
          "Java",
          "PHP",
          "Go",
          "JavaScript",
          "OOP",
          "Design Patterns",
          "REST API",
        ],
      },
      {
        title: "Machine Learning & Infrastruktur IT",
        details: [
          "scikit-learn",
          "TensorFlow",
          "Git & GitHub",
          "Docker",
          "Administrasi server",
          "Konfigurasi jaringan",
          "Troubleshooting",
        ],
      },
    ],
  },
  {
    title: "pengalaman",
    info: [
      {
        title: experiences[0].position + " - " + experiences[0].company,
        stage: experiences[0].period,
        href: `/experience/${experiences[0].slug}`,
      },
      {
        title: experiences[1].position + " - " + experiences[1].company,
        stage: experiences[1].period,
        href: `/experience/${experiences[1].slug}`,
      },
    ],
  },
  {
    title: "pendidikan",
    info: [
      {
        title:
          "D4 Teknik Informatika - Politeknik Negeri Lhokseumawe",
        stage: "2022 - 2026 · IPK 3,87 / 4,00",
      },
      {
        title: "Teknik Komputer dan Jaringan - SMK Negeri 1 Bireuen",
        stage: "2019 - 2022 · Nilai akhir 87",
      },
    ],
  },
  {
    title: "bahasa",
    info: [
      { title: "Bahasa Indonesia", stage: "Native" },
      { title: "Bahasa Inggris", stage: "Low intermediate" },
      { title: "Bahasa Aceh", stage: "Aktif" },
    ],
  },
  {
    title: "program & pelatihan",
    info: [
      {
        title: "Peserta Machine Learning - Coding Camp by DBS Foundation",
        stage: "Januari - Juni 2025",
      },
    ],
  },
  {
    title: "sertifikasi",
    info: [
      {
        title: "Pemrograman Python, GIT & Github - Dicoding",
        stage: "",
      },
      {
        title: "Visualisasi Data & Basic SQL - Dicoding",
        stage: "",
      },
      {
        title: "Programming Logic 101 & Basic AI - Dicoding",
        stage: "",
      },
      {
        title: "Web Developer - BNSP",
        stage: "",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative isolate min-h-[calc(100svh-4.5rem)] overflow-hidden bg-primary/30 px-0 py-24 pb-24 text-center xl:min-h-screen xl:py-32 xl:pb-0 xl:text-left">
      <Circles />

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-12 2xl:left-0 w-[420px] h-[420px] xl:w-[500px] xl:h-[500px] 2xl:w-[560px] 2xl:h-[560px] pointer-events-none z-0"
      >
        <Avatar
          className="w-full h-full flex items-end opacity-90 xl:opacity-100 filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] mix-blend-multiply"
          imageClassName="object-contain object-bottom"
          priority
        />
      </motion.div>

      <div className="container relative z-10 mx-auto flex h-full flex-col items-center gap-x-6 xl:flex-row xl:pl-[360px] 2xl:pl-[440px] xl:pr-32 2xl:pr-40">
        <div className="flex-1 flex flex-col justify-center">
          {/* Avatar for Mobile & Tablet (Transparent Cutout) */}
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="xl:hidden flex justify-center mb-6"
          >
            <div className="w-40 h-40 md:w-52 md:h-52 relative">
              <Avatar
                className="w-full h-full flex items-center justify-center filter drop-shadow-[0_10px_25px_rgba(241,48,36,0.25)]"
                imageClassName="object-contain"
                priority
              />
            </div>
          </motion.div>

          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[22px] leading-tight md:text-[28px] xl:text-[32px] md:leading-[1.3] mb-4 font-semibold max-w-sm xl:max-w-md"
          >
            Mengubah tantangan kompleks menjadi{" "}
            <span className="text-accent">solusi terukur.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-sm xl:max-w-md mx-auto xl:mx-0 mb-6 xl:mb-10 px-2 xl:px-0 text-white/75 text-sm leading-relaxed"
          >
            Lulusan D4 Teknik Informatika Politeknik Negeri Lhokseumawe dengan
            IPK 3,87/4,00. Mengembangkan aplikasi web end-to-end menggunakan
            Python, Java, PHP, Go, dan JavaScript, serta membangun model
            CNN, Multi-Label Decision Tree, dan Gradient Boosting. Melalui
            Coding Camp by DBS Foundation, model mencapai akurasi di atas 85%
            pada dataset 3.000-4.000 sampel. Berpengalaman dalam dukungan IT
            industri dan memimpin dua proyek.
          </motion.p>

          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="flex max-w-xs sm:max-w-md xl:max-w-md mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-px after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3.87} decimals={2} duration={3} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-25">
                  IPK / 4,00
                </div>
              </div>

              <div className="relative flex-1 after:w-px after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={4} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-25">
                  Proyek Portofolio
                </div>
              </div>

              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={4} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-25">
                  Proyek Dipimpin
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="relative z-20 flex min-w-0 w-full flex-col xl:max-w-[40%]"
        >
          <div className="mb-4 grid w-full grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-2">
            {aboutData.map((item, itemI) => (
              <button
                type="button"
                key={item.title}
                aria-pressed={index === itemI}
                className={`min-h-10 rounded-lg border px-2 py-2 text-center text-[10px] font-medium capitalize leading-tight transition-colors sm:text-xs ${
                  index === itemI
                    ? "border-accent/40 bg-accent/10 text-accent"
                    : "border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:text-white"
                }`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="flex w-full min-w-0 flex-col gap-3">
            {aboutData[index].info.map((item) => {
              const content = (
                <>
                  <div className="flex min-w-0 items-start justify-between gap-3">
                    <h3 className="min-w-0 break-words text-left text-xs font-medium leading-relaxed text-white sm:text-sm">
                      {item.title}
                    </h3>
                    {item.href && (
                      <BsArrowRight className="mt-1 shrink-0 text-accent transition-transform group-hover:translate-x-1" />
                    )}
                  </div>
                  {item.stage && (
                    <p className="mt-1 text-left text-[11px] leading-relaxed text-white/55 sm:text-xs">
                      {item.stage}
                    </p>
                  )}
                  {item.details && (
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {item.details.map((detail) => (
                        <li
                          key={detail}
                          className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] leading-tight text-white/70 sm:text-[11px]"
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              );

              return item.href ? (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group block w-full min-w-0 rounded-xl border border-white/10 bg-white/5 p-3 text-left transition-colors hover:border-accent/30 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-accent"
                >
                  {content}
                </Link>
              ) : (
                <article
                  key={item.title}
                  className="w-full min-w-0 rounded-xl border border-white/10 bg-white/5 p-3"
                >
                  {content}
                </article>
              );
            })}

            {aboutData[index].title === "sertifikasi" && (
              <div className="pt-1">
                <Link
                  href="/sertifikat"
                  className="relative z-20 inline-flex items-center gap-x-2 text-xs font-semibold text-accent hover:text-white bg-accent/10 hover:bg-accent border border-accent/30 px-4 py-2 rounded-full transition-all duration-300 group"
                >
                  <span>Lihat Semua Sertifikat & Penghargaan</span>
                  <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
