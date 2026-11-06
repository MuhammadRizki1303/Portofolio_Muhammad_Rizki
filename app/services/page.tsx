"use client";

import { motion } from "framer-motion";

import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import ServiceSlider from "@/components/ServiceSlider";
import { fadeIn } from "@/variants";

const Services = () => {
  return (
    <div className="relative isolate min-h-[calc(100svh-4.5rem)] overflow-hidden bg-primary/30 py-24 pb-24 xl:min-h-screen xl:flex xl:items-center xl:py-36 xl:pb-0">
      <Circles />
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              Keahlian & Layanan <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-100 mx-auto lg:mx-0 text-white/75 text-sm leading-relaxed"
            >
              Menyediakan kapabilitas teknis komprehensif mulai dari rekayasa perangkat
              lunak web modern, penerapan kecerdasan buatan (Machine Learning), hingga
              keandalan infrastruktur IT untuk mendukung efisiensi dan akselerasi bisnis.
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
