"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { SiFirebase, SiTailwindcss } from "react-icons/si";

import Circles from "@/components/Circles";
import { fadeIn } from "@/variants";
const screenshots = [
  { src: "/projects/Travelmate/Travelmate_1.png", label: "Halaman utama" },
  { src: "/projects/Travelmate/Travelmate_2.png", label: "Eksplorasi perjalanan" },
  { src: "/projects/Travelmate/Travelmate_3.png", label: "Detail destinasi" },
  { src: "/projects/Travelmate/Travelmate_4.png", label: "Perencanaan perjalanan" },
];

const TravelmatePage = () => {
  return (
    <div className="page-scroll min-h-full bg-primary/30 py-24 xl:py-36 overflow-y-auto pb-24 xl:pb-0">
      <Circles />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mb-6"
        >
          <Link
            href="/work"
            className="flex items-center gap-x-2 text-white/60 hover:text-accent transition-colors duration-300 w-fit"
          >
            <BsArrowLeft className="text-lg" />
            <span className="text-sm tracking-widest uppercase">
              Kembali ke Portofolio
            </span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-10">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col justify-center"
          >
            <h1 className="text-[28px] md:text-[36px] font-semibold leading-tight mb-4">
              Travel<span className="text-accent">Mate</span>
            </h1>
            <p className="text-white/70 leading-relaxed text-sm mb-6">
              Aplikasi pendamping perjalanan yang membantu pengguna menemukan
              inspirasi destinasi, menyusun rencana perjalanan, dan menyimpan
              informasi tempat wisata dalam satu pengalaman digital yang
              praktis.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { Icon: FaReact, label: "React" },
                { Icon: FaNodeJs, label: "Node.js" },
                { Icon: SiTailwindcss, label: "Tailwind CSS" },
                { Icon: SiFirebase, label: "Firebase" },
                { Icon: FaGithub, label: "GitHub" },
              ].map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-white/70"
                >
                  <Icon className="text-accent" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Kategori", value: "Travel & Web App" },
                { label: "Tahun", value: "2025" },
                { label: "Tim", value: "4 Orang" },
                { label: "Status", value: "Selesai" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3"
                >
                  <div className="text-white/40 text-xs mb-1">{label}</div>
                  <div
                    className={`text-sm font-medium ${value === "Selesai" ? "text-accent" : "text-white"}`}
                  >
                    {value}
                  </div>
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
            {screenshots.map(({ src, label }) => (
              <div
                key={label}
                className="relative overflow-hidden rounded-xl border border-white/10 group aspect-video bg-white/5"
              >
                <Image
                  src={src}
                  alt={`${label} - TravelMate`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="bg-white/5 border border-white/10 rounded-xl p-6"
          >
            <h3 className="text-base font-semibold text-accent mb-3">
              Deskripsi Proyek
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              TravelMate dirancang sebagai ruang digital untuk merencanakan
              perjalanan secara lebih terstruktur, mulai dari mencari destinasi
              sampai menyusun daftar kunjungan.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="bg-white/5 border border-white/10 rounded-xl p-6"
          >
            <h3 className="text-base font-semibold text-accent mb-3">
              Fitur Utama
            </h3>
            <ul className="text-white/70 text-sm space-y-1.5 leading-relaxed list-disc list-inside">
              <li>
                Eksplorasi destinasi wisata berdasarkan kebutuhan pengguna
              </li>
              <li>Detail tempat wisata dengan informasi yang terstruktur</li>
              <li>Penyusunan itinerary perjalanan yang mudah digunakan</li>
              <li>Penyimpanan destinasi favorit secara personal</li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="bg-white/5 border border-white/10 rounded-xl p-6"
          >
            <h3 className="text-base font-semibold text-accent mb-3">
              Kontribusi Utama
            </h3>
            <ul className="text-white/70 text-sm space-y-1.5 leading-relaxed list-disc list-inside">
              <li>
                Membangun antarmuka responsif untuk desktop dan perangkat mobile
              </li>
              <li>Merancang alur eksplorasi dan perencanaan perjalanan</li>
              <li>
                Mengintegrasikan penyimpanan data pengguna dengan Firebase
              </li>
              <li>
                Menjaga pengalaman navigasi tetap sederhana dan informatif
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TravelmatePage;
