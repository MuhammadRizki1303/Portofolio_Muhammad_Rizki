"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { FaHtml5, FaCss3, FaJs, FaGithub, FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

import Circles from "@/components/Circles";
import { fadeIn } from "@/variants";
const screenshots = [
  { src: "/projects/web class D/1_berita_web_D.png", label: "Berita" },
  { src: "/projects/web class D/1_Home_web_D.png", label: "Beranda" },
  { src: "/projects/web class D/1_Kalender_kegiatan_web_D.png", label: "Kalender kegiatan" },
  { src: "/projects/web class D/1_Kegiatan_web_D.png", label: "Kegiatan" },
];

const WebITClassDPage = () => {
  return (
    <div className="page-scroll min-h-full bg-primary/30 py-24 xl:py-36 overflow-y-auto pb-24 xl:pb-0">
      <Circles />
      <div className="container mx-auto px-4 relative z-10">
        {/* Back Button */}
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

        {/* TOP SECTION: Header kiri + Gambar kanan */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-10">
          {/* Kiri: Judul, deskripsi singkat, tech stack */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col justify-center"
          >
            <h1 className="text-[28px] md:text-[36px] font-semibold leading-tight mb-4">
              Web IT <span className="text-accent">Class D</span>
            </h1>
            <p className="text-white/70 leading-relaxed text-sm mb-6">
              Platform web portal informasi akademik dan kolaborasi komunitas
              terpusat. Dirancang dengan antarmuka modern dan responsif untuk
              menyajikan direktori data, integrasi jadwal dinamis, serta pusat
              pengumuman kegiatan secara efisien.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { Icon: FaHtml5, label: "HTML5" },
                { Icon: FaCss3, label: "CSS3" },
                { Icon: FaJs, label: "JavaScript" },
                { Icon: FaPhp, label: "PHP" },
                { Icon: SiMysql, label: "MySQL" },
                { Icon: FaGithub, label: "GitHub" },
              ].map(({ Icon, label }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-white/70"
                >
                  <Icon className="text-accent" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            {/* Info ringkas */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Kategori", value: "Web Development" },
                { label: "Tahun", value: "2023" },
                { label: "Tim", value: "Kelas IT D" },
                { label: "Status", value: "Selesai" },
              ].map(({ label, value }, i) => (
                <div
                  key={i}
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

          {/* Kanan: Gallery 2x2 */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-2 gap-3"
          >
            {screenshots.map(({ src, label }, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl border border-white/10 group aspect-video bg-white/5"
              >
                <Image
                  src={src}
                  alt={`${label} - Web IT Class D`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* BOTTOM SECTION: Deskripsi, Fitur, Kontribusi */}
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
              Portal informasi akademik berbasis web yang dibangun untuk
              memfasilitasi komunikasi dan pertukaran materi secara terpusat.
              Menyediakan direktori terstruktur, integrasi jadwal dinamis, serta
              pengelolaan pengumuman dengan performa akses lintas perangkat yang
              cepat dan andal.
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
                Portal beranda interaktif dengan pusat informasi dan pembaruan
                terkini
              </li>
              <li>
                Direktori profil terstruktur dengan integrasi database MySQL
              </li>
              <li>Kalender akademik dan jadwal kegiatan dinamis</li>
              <li>Manajemen publikasi materi dan pengumuman terpadu</li>
              <li>
                Optimasi tampilan responsif untuk smartphone, tablet, dan
                desktop
              </li>
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
                Merancang arsitektur tata letak antarmuka dan sistem navigasi
                yang intuitif
              </li>
              <li>
                Mengimplementasikan desain responsif multi-device dengan CSS
                modern
              </li>
              <li>
                Membangun modul backend PHP & MySQL untuk manajemen direktori
                data
              </li>
              <li>
                Mengintegrasikan modul jadwal dinamis dan alur publikasi konten
              </li>
              <li>
                Melakukan pengujian fungsionalitas lintas peramban
                (cross-browser testing)
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WebITClassDPage;
