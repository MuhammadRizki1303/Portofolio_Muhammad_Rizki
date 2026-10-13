"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { FaPython, FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTensorflow, SiKeras, SiJupyter } from "react-icons/si";

import Circles from "@/components/Circles";
import { fadeIn } from "@/variants";
const screenshots = [
  { src: "/projects/Klasifikasi Jamur/Dashboard Jamur.png", label: "Dashboard" },
  { src: "/projects/Klasifikasi Jamur/History Jamur.png", label: "Riwayat klasifikasi" },
  { src: "/projects/Klasifikasi Jamur/Klasifikasi Jamur.png", label: "Halaman klasifikasi" },
  { src: "/projects/Klasifikasi Jamur/Login Jamur.png", label: "Halaman login" },
];

const KlasifikasiJamurPage = () => {
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
              Klasifikasi Jamur <span className="text-accent">CNN</span>
            </h1>
            <p className="text-white/70 leading-relaxed text-sm mb-6">
              Sistem visi komputer berbasis Convolutional Neural Network (CNN)
              untuk klasifikasi citra spesies jamur secara otomatis.
              Dikembangkan dalam program DBS Foundation Coding Camp, sistem ini
              mampu mengidentifikasi spesies jamur yang aman dikonsumsi maupun
              beracun dengan tingkat akurasi tinggi.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { Icon: FaReact, label: "React" },
                { Icon: FaNodeJs, label: "Node.js" },
                { Icon: FaPython, label: "Python" },
                { Icon: SiTensorflow, label: "TensorFlow" },
                { Icon: SiKeras, label: "Keras" },
                { Icon: SiJupyter, label: "Jupyter" },
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
                { label: "Kategori", value: "Machine Learning" },
                { label: "Tahun", value: "2025" },
                { label: "Tim", value: "5 Orang" },
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
                  alt={`${label} - Klasifikasi Jamur CNN`}
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
              Aplikasi cerdas berbasis visi komputer yang memanfaatkan
              arsitektur CNN untuk klasifikasi visual spesies jamur. Model
              dilatih melalui tahapan augmentasi data, ekstraksi fitur visual
              bertingkat, dan lapisan klasifikasi fully-connected untuk
              menghasilkan inferensi yang cepat, presisi, dan dapat diandalkan.
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
              <li>Klasifikasi gambar jamur real-time menggunakan model CNN</li>
              <li>
                Pipeline preprocessing otomatis (resize, normalisasi, augmentasi
                citra)
              </li>
              <li>
                Visualisasi hasil prediksi lengkap dengan confidence score
              </li>
              <li>
                Antarmuka web interaktif untuk upload dan inferensi langsung
              </li>
              <li>
                Analisis evaluasi model menyeluruh dengan confusion matrix
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
                Merancang data pipeline: pengumpulan, pembersihan, dan
                augmentasi dataset
              </li>
              <li>
                Membangun dan melatih arsitektur deep learning CNN dengan
                TensorFlow & Keras
              </li>
              <li>
                Tuning hyperparameter (learning rate, optimizer, dropout) untuk
                mencegah overfitting
              </li>
              <li>
                Mengevaluasi performa model dengan metrik precision, recall, dan
                F1-score
              </li>
              <li>
                Mengintegrasikan model AI ke dalam antarmuka web demo aplikasi
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default KlasifikasiJamurPage;
