"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { FaPhp, FaGithub, FaDatabase, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMysql, SiBootstrap } from "react-icons/si";

import Circles from "@/components/Circles";
import { fadeIn } from "@/variants";
const screenshots = [
  { src: "/projects/Inventory IT/Asset project magang.png", label: "Halaman aset" },
  { src: "/projects/Inventory IT/Dashboard Project Magang.png", label: "Dashboard" },
  { src: "/projects/Inventory IT/Login project magang.png", label: "Halaman login" },
  { src: "/projects/Inventory IT/Peminjaman Project Magang.png", label: "Halaman peminjaman" },
];

const InventoryITPage = () => {
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
              Inventory <span className="text-accent">IT Assets</span>
            </h1>
            <p className="text-white/70 leading-relaxed text-sm mb-6">
              Sistem manajemen inventaris aset IT berbasis web untuk pencatatan,
              pelacakan, dan pengelolaan aset teknologi informasi di lingkungan
              perusahaan atau institusi. Membantu tim IT memantau kondisi,
              lokasi, dan riwayat aset secara efisien.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { Icon: FaReact, label: "React" },
                { Icon: FaNodeJs, label: "Node.js" },
                { Icon: FaPhp, label: "PHP" },
                { Icon: SiMysql, label: "MySQL" },
                { Icon: SiBootstrap, label: "Bootstrap" },
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
                { label: "Kategori", value: "Web Development" },
                { label: "Tahun", value: "2024" },
                { label: "Tim", value: "3 Orang" },
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
                  alt={`${label} - Inventory IT Assets`}
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
              Inventory IT Assets mencakup pendataan perangkat keras seperti
              laptop, PC, printer, switch, router, dan perangkat jaringan.
              Setiap aset dapat dilacak berdasarkan kondisi, lokasi, pengguna
              yang bertanggung jawab, serta riwayat pemeliharaan dan perbaikan.
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
              <li>CRUD lengkap untuk manajemen data aset IT</li>
              <li>Kategorisasi aset berdasarkan jenis dan status</li>
              <li>Dashboard statistik kondisi dan distribusi aset</li>
              <li>Riwayat pemeliharaan setiap aset</li>
              <li>Ekspor laporan dalam format PDF dan Excel</li>
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
                Merancang skema database relasional MySQL dan optimasi relasi
                data
              </li>
              <li>
                Mengembangkan arsitektur backend PHP berbasis Object-Oriented
                Programming (OOP)
              </li>
              <li>
                Membangun logika bisnis CRUD komprehensif dan validasi data
                terpusat
              </li>
              <li>Merancang antarmuka dashboard interaktif dan responsif</li>
              <li>
                Mengimplementasikan modul otomasi pelaporan dan ekspor data (PDF
                & Excel)
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InventoryITPage;
