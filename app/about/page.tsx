"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import CountUp from "react-countup";
import { BsArrowRight } from "react-icons/bs";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaPhp,
  FaGithub,
  FaDocker,
  FaDatabase,
} from "react-icons/fa";
import type { IconType } from "react-icons";

import Avatar from "@/components/Avatar";
import Circles from "@/components/Circles";
import { fadeIn } from "@/variants";

type AboutInfoItem = {
  title: string;
  stage?: string;
  icons?: IconType[];
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
        title: "Web Development",
        icons: [FaHtml5, FaCss3, FaJs, FaReact, FaPhp],
      },
      {
        title: "Programming & Tools",
        icons: [FaPython, FaJava, FaDatabase, FaGithub, FaDocker],
      },
    ],
  },
  {
    title: "pengalaman",
    info: [
      {
        title: "IT Support Specialist (Intern) - PT. Yageo TMSS Indonesia",
        stage: "Jul 2025 - Apr 2026",
      },
      {
        title: "Machine Learning Cohort - DBS Foundation Coding Camp",
        stage: "Jan 2025 - Jun 2025",
      },
      {
        title: "Hardware & IT Support (Intern) - SIMBADDA Technology",
        stage: "Jan 2020 - Jun 2020",
      },
    ],
  },
  {
    title: "pendidikan",
    info: [
      {
        title:
          "D4 Teknik Informatika - Politeknik Negeri Lhokseumawe (IPK 3.87 - Cum Laude)",
        stage: "2022 - 2026 (Lulus)",
      },
      {
        title: "Teknik Komputer dan Jaringan - SMK Negeri 1 Bireuen",
        stage: "2019 - 2022",
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
    <div className="min-h-screen bg-primary/30 py-24 xl:py-32 text-center xl:text-left pb-24 xl:pb-0">
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

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 relative z-10 xl:pl-[360px] 2xl:pl-[440px] xl:pr-32 2xl:pr-40">
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
            Lulusan Sarjana Terapan (D4) Teknik Informatika Politeknik Negeri
            Lhokseumawe dengan predikat Cum Laude (IPK 3.87). Berfokus pada
            Full-Stack Web Development dan penerapan Machine Learning, dengan
            pengalaman industri di PT. Yageo TMSS Indonesia serta DBS Foundation
            Coding Camp. Terbiasa memecahkan masalah rekayasa secara analitis,
            disiplin, dan berorientasi pada clean code serta performa optimal.
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
                  IPK (Cum Laude)
                </div>
              </div>

              <div className="relative flex-1 after:w-px after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={13} duration={4} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-25">
                  Sertifikasi Resmi
                </div>
              </div>

              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={4} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-25">
                  Pengalaman Industri
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
          <div className="flex gap-x-3 sm:gap-x-4 xl:gap-x-2 mx-auto xl:mx-0 mb-4 overflow-x-auto pb-1 max-w-full xl:flex-nowrap xl:justify-between xl:overflow-visible">
            {aboutData.map((item, itemI) => (
              <button
                type="button"
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-full after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize text-sm xl:text-[13px] relative after:w-8 after:h-0.5 after:bg-white after:absolute after:-bottom-1 after:left-0 whitespace-nowrap shrink-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {aboutData[index].title === "sertifikasi" && (
              <div className="pt-2">
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
