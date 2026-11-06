"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const ParticlesContainer = dynamic(
  () => import("@/components/ParticlesContainer"),
  { ssr: false }
);
import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "@/components/Avatar";
import { fadeIn } from "@/variants";

const Home = () => {
  return (
    <div className="relative isolate min-h-[calc(100svh-4.5rem)] overflow-hidden bg-primary/60 xl:min-h-screen xl:h-full">
      <div className="relative z-10 w-full min-h-[calc(100svh-4.5rem)] bg-linear-to-r from-primary/10 via-black/30 to-black/10 xl:min-h-screen xl:h-full">
        <div className="container mx-auto flex min-h-[calc(100svh-4.5rem)] flex-col justify-center px-4 pt-24 pb-10 text-center xl:min-h-screen xl:h-full xl:pt-72 xl:pb-0 xl:text-left">
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

          <motion.div
            variants={fadeIn("down", 0.15)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="inline-flex items-center gap-x-2 bg-white/5 border border-accent/30 rounded-full px-4 py-1.5 mb-3 text-xs tracking-wide text-white/90 font-medium w-fit mx-auto xl:mx-0 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>Lulusan D4 Teknik Informatika • IPK 3.87 (Cum Laude)</span>
          </motion.div>

          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 mb-2"
          >
            Halo, Saya <br />
            <span className="text-accent">Muhammad Rizki</span>
          </motion.h1>

          <motion.div
            variants={fadeIn("down", 0.25)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-base md:text-xl font-semibold text-white/80 mb-4 tracking-wide"
          >
            Software Engineer <span className="text-accent">&</span> AI Enthusiast
          </motion.div>

          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-6 xl:mb-8 text-white/75 text-sm md:text-[15px] leading-relaxed"
          >
            Lulusan Sarjana Terapan Teknik Informatika dengan predikat Cum Laude (IPK 3.87).
            Berfokus pada rekayasa perangkat lunak modern, pengembangan Full-Stack Web, dan
            implementasi Machine Learning. Berpengalaman menangani infrastruktur IT industri di
            PT. Yageo TMSS Indonesia serta membangun solusi cerdas di DBS Foundation Coding Camp.
            Siap memberikan kontribusi optimal dengan arsitektur kode yang bersih, scalable, dan
            berdampak nyata bagi pertumbuhan tim teknologi Anda.
          </motion.p>

          <motion.div
            variants={fadeIn("down", 0.35)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-wrap gap-2 justify-center xl:justify-start mb-8 xl:mb-10 text-xs text-white/70"
          >
            <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-md">Full-Stack Web Dev</span>
            <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-md">Machine Learning & CNN</span>
            <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-md">IT Infrastructure</span>
            <span className="bg-accent/10 border border-accent/30 text-accent font-medium px-3 py-1 rounded-md">IPK 3.87 (Cum Laude)</span>
          </motion.div>

          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full xl:right-0 xl:bottom-0 xl:w-[1200px]">
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        <ParticlesContainer />

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="hidden xl:flex w-full h-full max-w-[550px] max-h-[550px] 2xl:max-w-[650px] 2xl:max-h-[650px] absolute bottom-0 right-[4%] 2xl:right-[8%] items-end justify-center pointer-events-none z-10"
        >
          <Avatar
            className="w-full h-full flex items-end justify-center mix-blend-multiply"
            imageClassName="object-contain object-bottom"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
