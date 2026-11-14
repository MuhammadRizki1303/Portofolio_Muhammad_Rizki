"use client";

import { motion } from "framer-motion";

import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "@/components/Avatar";
import About from "@/app/about/page";
import Services from "@/app/services/page";
import Work from "@/app/work/page";
import ExperiencePage from "@/app/experience/page";
import SertifikatPage from "@/app/sertifikat/page";
import Contact from "@/app/contact/page";
import { fadeIn } from "@/variants";

const Home = () => {
  return (
    <main>
      <section id="home" className="home-shell relative isolate min-h-screen overflow-hidden xl:min-h-screen xl:h-full">
        <div className="relative z-10 w-full min-h-[calc(100svh-4.5rem)] xl:min-h-screen xl:h-full">
          <div className="container mx-auto flex min-h-screen flex-col justify-center px-4 pb-20 pt-32 text-center sm:px-8 xl:min-h-screen xl:h-full xl:pb-0 xl:pt-56 xl:text-left">
          <motion.div
            variants={fadeIn("down", 0.15)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-5 inline-flex w-fit items-center gap-x-2 rounded-full border border-accent/25 bg-accent/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent shadow-sm xl:mx-0"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>Full-Stack Developer · IT Support · Aceh, Indonesia</span>
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
            className="mb-5 text-base font-medium tracking-wide text-white/70 md:text-xl"
          >
            Full-Stack Web Developer <span className="text-accent">&</span> IT Support
          </motion.div>

          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-7 max-w-sm text-sm leading-relaxed text-white/60 md:text-[15px] xl:mx-0 xl:mb-8 xl:max-w-xl"
          >
            Lulusan D4 Teknik Informatika Politeknik Negeri Lhokseumawe dengan IPK 3,87/4,00.
            Berfokus pada pengembangan aplikasi web end-to-end dan dukungan infrastruktur IT,
            dengan pengalaman Machine Learning melalui Coding Camp by DBS Foundation. Menguasai
            Python, Java, PHP, Go, JavaScript, basis data, Docker, dan konfigurasi jaringan.
            Lima proyek web dan IoT saya, dua di antaranya saya pimpin sebagai ketua tim.
          </motion.p>

          <motion.div
            variants={fadeIn("down", 0.35)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-8 flex flex-wrap justify-center gap-2 text-[11px] text-white/60 xl:mb-10 xl:justify-start"
          >
            <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5">Full-Stack Web</span>
            <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5">Machine Learning</span>
            <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5">IT Support &amp; Jaringan</span>
            <span className="rounded-md border border-accent/30 bg-accent/10 px-3 py-1.5 font-medium text-accent">IPK 3,87 / 4,00</span>
          </motion.div>

          {/* Keep the profile visual below the main message on smaller screens. */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-6 flex justify-center xl:hidden"
          >
            <div className="relative h-36 w-36 md:h-44 md:w-44">
              <Avatar
                className="flex h-full w-full items-center justify-center drop-shadow-[0_10px_25px_rgba(34,211,238,0.18)]"
                imageClassName="object-contain"
                priority
              />
            </div>
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
          <div className="ambient-3d" aria-hidden="true">
            <div className="ambient-3d__sphere" />
            <div className="ambient-3d__ring" />
            <div className="ambient-3d__ring ambient-3d__ring--inner" />
          </div>
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
      </section>

      <section id="about" className="section-surface scroll-mt-6">
        <About />
      </section>
      <section id="services" className="section-surface scroll-mt-6">
        <Services />
      </section>
      <section id="work" className="section-surface scroll-mt-6">
        <Work />
      </section>
      <section id="experience" className="section-surface scroll-mt-6">
        <ExperiencePage />
      </section>
      <section id="sertifikat" className="section-surface scroll-mt-6">
        <SertifikatPage />
      </section>
      <section id="contact" className="section-surface scroll-mt-6">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
