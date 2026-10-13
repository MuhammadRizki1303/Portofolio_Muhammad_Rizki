"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { FaReact, FaGithub, FaDatabase } from "react-icons/fa";
import { SiArduino, SiMysql } from "react-icons/si";

import Circles from "@/components/Circles";
import { fadeIn } from "@/variants";
const screenshots = [
  { src: "/projects/Smart Locker/Dashboard RFID.png", label: "Dashboard" },
  { src: "/projects/Smart Locker/Design RFID.png", label: "Desain sistem" },
  { src: "/projects/Smart Locker/Face Recognice Test.png", label: "Uji face recognition" },
  { src: "/projects/Smart Locker/Implementasi RFID.png", label: "Implementasi RFID" },
  { src: "/projects/Smart Locker/web RFID.png", label: "Antarmuka web" },
];

const SmartLockerPage = () => {
  return (
    <div className="min-h-full bg-primary/30 py-24 xl:py-36 overflow-y-auto pb-24 xl:pb-0">
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
              Smart <span className="text-accent">Locker</span>
            </h1>
            <p className="text-white/70 leading-relaxed text-sm mb-6">
              Sistem loker pintar berbasis Internet of Things (IoT) yang
              mengintegrasikan mikrokontroler hardware dengan antarmuka web
              modern. Memungkinkan kontrol akses digital nirsentuh (touchless)
              menggunakan autentikasi QR code dan PIN dinamis dengan
              sinkronisasi status real-time.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { Icon: SiArduino, label: "Arduino / ESP" },
                { Icon: FaReact, label: "React" },
                { Icon: SiMysql, label: "MySQL" },
                { Icon: FaDatabase, label: "Database" },
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
                { label: "Kategori", value: "IoT & Web" },
                { label: "Tahun", value: "2024" },
                { label: "Tim", value: "4 Orang" },
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
                  alt={`${label} - Smart Locker`}
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
              Solusi loker cerdas yang memadukan komputasi web dan hardware IoT
              untuk efisiensi fasilitas publik maupun perkantoran. Menggantikan
              kunci fisik konvensional dengan sistem autentikasi digital aman,
              dilengkapi pencatatan log transaksi terpusat dan pemantauan status
              loker langsung melalui dashboard admin.
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
                Kontrol buka/tutup loker via antarmuka web dan autentikasi QR
                Code
              </li>
              <li>Dashboard real-time pemantauan status ketersediaan loker</li>
              <li>Sistem pencatatan log transaksi otomatis dan audit trail</li>
              <li>Manajemen hak akses pengguna dan alokasi loker digital</li>
              <li>
                Integrasi mikrokontroler ESP dengan protokol komunikasi
                HTTP/MQTT
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
                Membangun antarmuka web manajemen loker menggunakan React yang
                responsif
              </li>
              <li>
                Merancang arsitektur database MySQL untuk pencatatan log dan
                status loker
              </li>
              <li>
                Mengembangkan endpoint API untuk komunikasi data web server ke
                mikrokontroler
              </li>
              <li>
                Mengimplementasikan fitur monitoring visual status loker secara
                real-time
              </li>
              <li>
                Melakukan pengujian reliabilitas komunikasi data IoT end-to-end
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SmartLockerPage;
