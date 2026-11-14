"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  HiArrowDownTray,
  HiPrinter,
  HiDocumentText,
  HiBriefcase,
  HiAcademicCap,
  HiSparkles,
  HiCheckBadge,
  HiArrowLeft,
  HiWrenchScrewdriver,
  HiCommandLine,
  HiCheckCircle,
} from "react-icons/hi2";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCode,
  FaServer,
  FaDatabase,
} from "react-icons/fa";

import Circles from "@/components/Circles";

export default function ExportPage() {
  const [isExporting, setIsExporting] = useState(false);

  const handlePrint = () => {
    setIsExporting(true);
    setTimeout(() => {
      window.print();
      setIsExporting(false);
    }, 250);
  };

  return (
    <div className="page-scroll w-full min-h-screen bg-primary/40 pt-20 sm:pt-28 pb-24 xl:pt-32 xl:pb-36 relative">
      <Circles />

      {/* TOP ACTION BAR (Hidden in print) */}
      <div className="no-print container mx-auto px-4 relative z-20 mb-8 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white/5 border border-white/10 backdrop-blur-md p-5 rounded-2xl shadow-xl">
          <div className="flex items-center gap-x-3">
            <Link
              href="/"
              className="flex items-center gap-x-2 text-white/70 hover:text-accent transition-colors text-sm px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10"
            >
              <HiArrowLeft />
              <span>Kembali</span>
            </Link>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                Dokumen Resmi & Export <span className="text-accent">Portofolio (6 Halaman Landscape)</span>
              </h2>
              <p className="text-xs text-white/60">
                Format editorial A4 landscape: 1 Cover & Profil, 4 Showcase Proyek Lengkap, dan 1 Halaman Sertifikasi & Lisensi Resmi.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Download ATS CV Button */}
            <a
              href="/CV_Muhammad_Rizki_ATS.pdf"
              download="CV_Muhammad_Rizki_ATS.pdf"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-all border border-white/20 hover:border-white/40 shadow-sm"
              title="Unduh CV format ATS (PDF)"
            >
              <HiDocumentText className="text-lg text-accent" />
              <span>Unduh CV (ATS)</span>
              <HiArrowDownTray className="text-xs opacity-75" />
            </a>

            {/* Print / Save to PDF Button */}
            <button
              onClick={handlePrint}
              disabled={isExporting}
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-accent hover:bg-red-600 text-white font-semibold text-sm transition-all shadow-lg hover:shadow-red-500/30 cursor-pointer disabled:opacity-50"
              title="Cetak atau Simpan Portofolio ke format PDF"
            >
              <HiPrinter className="text-lg" />
              <span>{isExporting ? "Menyiapkan PDF..." : "Export Portofolio (PDF)"}</span>
            </button>
          </div>
        </div>

        {/* Petunjuk Cetak */}
        <div className="mt-3 text-xs text-white/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 px-2">
          <span>
            💡 <strong>Panduan Cetak Browser:</strong> Pada dialog print, pilih Destination: <em>Save as PDF</em> • Paper: <em>A4</em> • Margins: <em>Default</em> • Centang <em>Background graphics</em>.
          </span>
          <span className="text-accent font-semibold">Tepat 6 Halaman A4 Landscape • Gambar Lengkap & Jernih</span>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 6-PAGE EDITORIAL PORTOFOLIO DOCUMENT CONTAINER                 */}
      {/* ============================================================== */}
      <div className="container mx-auto px-4 relative z-10 max-w-6xl space-y-8 print:space-y-0">

        {/* ------------------------------------------------------------ */}
        {/* HALAMAN 1: COVER, EXECUTIVE SUMMARY, BIO & CORE COMPETENCIES */}
        {/* ------------------------------------------------------------ */}
        <section className="portfolio-page bg-[#0f101d] print:bg-white text-white print:text-gray-900 border border-white/10 print:border-none rounded-3xl print:rounded-none shadow-2xl p-8 md:p-12 print:p-0">
          <div>
            {/* Header / Identity Banner */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 pb-6 border-b border-white/10 print:border-gray-200">
              <div className="text-center md:text-left flex-1">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/20 print:bg-red-50 text-accent font-semibold text-xs tracking-wider uppercase mb-3 border border-accent/30 print:border-red-200">
                    <HiCheckBadge className="text-base" /> Sarjana Terapan Komputer • IPK 3,87 / 4,00
                </div>
                <h1 className="text-3xl md:text-4xl print:text-3xl font-extrabold tracking-tight text-white print:text-gray-900 mb-2">
                  Muhammad Rizki
                </h1>
                <p className="text-base print:text-sm text-accent font-medium mb-4">
                  Full-Stack Web Developer • IT Support Specialist
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs md:text-sm print:text-xs text-white/70 print:text-gray-600">
                  <span className="flex items-center gap-1.5">
                    <FaEnvelope className="text-accent" /> muhammad.rizki1303@gmail.com
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaLinkedin className="text-accent" /> linkedin.com/in/muhammadrizki130304
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaGithub className="text-accent" /> github.com/MuhammadRizki1303
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-accent" /> Lhokseumawe / Bireuen, Indonesia
                  </span>
                </div>
              </div>

              {/* Profile Avatar Frame */}
              <div className="w-28 h-28 md:w-36 md:h-36 print:w-28 print:h-28 shrink-0 rounded-2xl overflow-hidden border-2 border-accent/40 shadow-xl bg-gradient-to-b from-white/10 to-transparent print:bg-gray-100 flex items-center justify-center">
                <Image
                  src="/avatar.png"
                  alt="Muhammad Rizki"
                  width={144}
                  height={144}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Profil Profesional */}
            <div className="mt-6">
              <h2 className="text-sm md:text-base font-bold text-white print:text-gray-900 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <span className="w-2 h-4 bg-accent rounded-full inline-block"></span>
                Ringkasan Profil Profesional
              </h2>
              <p className="text-sm print:text-xs leading-relaxed text-white/80 print:text-gray-700 text-justify">
                Lulusan <strong>Sarjana Terapan (D4) Teknik Informatika</strong> dari Politeknik Negeri Lhokseumawe dengan <strong>IPK 3,87 / 4,00</strong>. Siap berkontribusi sebagai Full-Stack Developer maupun IT Support. Menguasai pengembangan aplikasi web end-to-end dengan Python, Java, PHP, Go, dan JavaScript, serta basis data, algoritma, OOP, design patterns, Git, GitHub, dan Docker. Berpengalaman membangun model klasifikasi CNN, Multi-Label Decision Tree, dan Gradient Boosting dengan akurasi di atas 85% pada dataset 3.000-4.000 sampel melalui Coding Camp by DBS Foundation. Mengembangkan lima proyek web dan IoT, dua di antaranya sebagai ketua tim.
              </p>
            </div>

            {/* Dua Kolom: Pendidikan & Pengalaman */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
              {/* Pendidikan */}
              <div className="p-4 rounded-2xl bg-white/5 print:bg-gray-50 border border-white/5 print:border-gray-200">
                <h3 className="font-bold text-xs md:text-sm text-white print:text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <HiAcademicCap className="text-accent text-lg" /> Riwayat Pendidikan Formal
                </h3>
                <div className="space-y-3 text-xs md:text-sm print:text-xs">
                  <div>
                    <div className="font-semibold text-white print:text-gray-800">D4 Teknik Informatika</div>
                    <div className="text-accent font-medium">Politeknik Negeri Lhokseumawe (2022 - 2026)</div>
                    <div className="text-white/60 print:text-gray-500 text-xs">
                      IPK 3,87 / 4,00
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-white print:text-gray-800">Teknik Komputer & Jaringan (TKJ)</div>
                    <div className="text-accent font-medium">SMK Negeri 1 Bireuen (2019 - 2022)</div>
                    <div className="text-white/60 print:text-gray-500 text-xs">
                      Nilai akhir: 87
                    </div>
                  </div>
                </div>
              </div>

              {/* Pengalaman Praktis */}
              <div className="p-4 rounded-2xl bg-white/5 print:bg-gray-50 border border-white/5 print:border-gray-200">
                <h3 className="font-bold text-xs md:text-sm text-white print:text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <HiBriefcase className="text-accent text-lg" /> Pengalaman Praktis & Magang
                </h3>
                <div className="space-y-3 text-xs md:text-sm print:text-xs">
                  <div>
                    <div className="font-semibold text-white print:text-gray-800">IT Support</div>
                    <div className="text-accent font-medium">PT. Yageo TMSS Indonesia (Juli 2025 - Januari 2026)</div>
                    <div className="text-white/60 print:text-gray-500 text-xs">
                      Dukungan teknis harian untuk 10-15 staf lintas tiga lantai gedung.
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-white print:text-gray-800">Asisten Teknisi</div>
                    <div className="text-accent font-medium">SIMBADDA Technology (Januari - Juni 2020)</div>
                    <div className="text-white/60 print:text-gray-500 text-xs">
                      Pemeliharaan, troubleshooting, instalasi ulang OS, dan konsultasi teknis.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Matriks Keahlian Lengkap */}
            <div className="mt-6">
              <h2 className="text-sm md:text-base font-bold text-white print:text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-2 h-4 bg-accent rounded-full inline-block"></span>
                Matriks Keahlian & Tech Stack
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-white/5 print:bg-gray-50 border border-white/5 print:border-gray-200">
                  <div className="font-semibold text-xs text-white print:text-gray-900 flex items-center gap-1.5 mb-1.5">
                    <FaCode className="text-accent" /> Web Development
                  </div>
                  <p className="text-[11px] print:text-[10px] text-white/70 print:text-gray-600 leading-snug">
                    Python, Java, PHP, Go, JavaScript, OOP, Design Patterns, REST API
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 print:bg-gray-50 border border-white/5 print:border-gray-200">
                  <div className="font-semibold text-xs text-white print:text-gray-900 flex items-center gap-1.5 mb-1.5">
                    <HiSparkles className="text-accent" /> AI & Machine Learning
                  </div>
                  <p className="text-[11px] print:text-[10px] text-white/70 print:text-gray-600 leading-snug">
                    Python, scikit-learn, TensorFlow, CNN, Multi-Label Decision Tree, Gradient Boosting
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 print:bg-gray-50 border border-white/5 print:border-gray-200">
                  <div className="font-semibold text-xs text-white print:text-gray-900 flex items-center gap-1.5 mb-1.5">
                    <FaDatabase className="text-accent" /> Database & Storage
                  </div>
                  <p className="text-[11px] print:text-[10px] text-white/70 print:text-gray-600 leading-snug">
                    MySQL, PostgreSQL, Supabase
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 print:bg-gray-50 border border-white/5 print:border-gray-200">
                  <div className="font-semibold text-xs text-white print:text-gray-900 flex items-center gap-1.5 mb-1.5">
                    <FaServer className="text-accent" /> Sistem & Hardware
                  </div>
                  <p className="text-[11px] print:text-[10px] text-white/70 print:text-gray-600 leading-snug">
                    Git, GitHub, Docker, PAN/LAN/MAN/WAN, VLAN/WLAN, Administrasi Server, Troubleshooting
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Halaman 1 */}
          <div className="mt-8 pt-4 border-t border-white/10 print:border-gray-200 flex items-center justify-between text-xs print:text-[10px] text-white/50 print:text-gray-500">
            <span>Portofolio Resmi • Muhammad Rizki (S.Tr.Kom)</span>
            <span>Halaman 1 dari 6</span>
          </div>
        </section>


        {/* ------------------------------------------------------------ */}
        {/* HALAMAN 2: PROYEK 1 - KLASIFIKASI JAMUR CNN                  */}
        {/* ------------------------------------------------------------ */}
        <section className="portfolio-page bg-[#0f101d] print:bg-white text-white print:text-gray-900 border border-white/10 print:border-none rounded-3xl print:rounded-none shadow-2xl p-8 md:p-12 print:p-0">
          <div>
            {/* Header Proyek */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pb-4 border-b border-white/10 print:border-gray-200 mb-6">
              <div>
                <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                  Showcase Proyek Rekayasa 01 • Machine Learning & Computer Vision
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white print:text-gray-900 mt-1">
                  MushroomAI • Klasifikasi Jamur Berbasis CNN
                </h2>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-white/10 print:bg-gray-100 text-white/80 print:text-gray-700 font-medium">
                  Proyek Skripsi
                </span>
                <span className="px-3 py-1 rounded-full bg-accent/20 print:bg-red-50 text-accent font-semibold">
                  CNN & Web Demo
                </span>
              </div>
            </div>

            {/* Gallery Gambar 2x2 */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { src: "/projects/Klasifikasi Jamur/Dashboard Jamur.png", label: "Dashboard Utama" },
                { src: "/projects/Klasifikasi Jamur/Klasifikasi Jamur.png", label: "Halaman Deteksi & Prediksi" },
                { src: "/projects/Klasifikasi Jamur/History Jamur.png", label: "Histori & Riwayat Klasifikasi" },
                { src: "/projects/Klasifikasi Jamur/Login Jamur.png", label: "Autentikasi Pengguna" },
              ].map((img, idx) => (
                <div
                  key={idx}
                  className="rounded-xl overflow-hidden border border-white/10 print:border-gray-300 h-36 md:h-44 print:h-36 relative bg-black/30 print:bg-gray-100 flex items-center justify-center p-1"
                >
                  <Image
                    src={img.src}
                    alt={img.label}
                    width={400}
                    height={250}
                    className="max-w-full max-h-full object-contain"
                  />
                  <div className="absolute bottom-1 left-2 bg-black/70 print:bg-white/90 px-2 py-0.5 rounded text-[10px] text-white print:text-gray-900 font-medium">
                    {img.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Deskripsi & Ringkasan Solusi */}
            <div className="p-4 rounded-xl bg-white/5 print:bg-gray-50 border border-white/5 print:border-gray-200 mb-5">
              <h3 className="font-bold text-xs uppercase tracking-wider text-accent mb-1.5">
                Gambaran Sistem & Arsitektur
              </h3>
              <p className="text-xs md:text-sm print:text-xs leading-relaxed text-white/80 print:text-gray-700 text-justify">
                MushroomAI adalah proyek skripsi untuk klasifikasi citra jamur menggunakan Convolutional Neural Network (CNN). Model dilatih melalui pipeline pengumpulan, pembersihan, dan augmentasi data, lalu diintegrasikan ke antarmuka web demo.
              </p>
            </div>

            {/* Dua Kolom: Fitur Utama & Kontribusi Rekayasa */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 print:bg-gray-50 border border-white/5 print:border-gray-200">
                <h4 className="font-bold text-xs uppercase tracking-wider text-white print:text-gray-900 mb-2 flex items-center gap-1.5">
                  <HiCommandLine className="text-accent" /> Fitur Utama Aplikasi
                </h4>
                <ul className="text-xs print:text-[11px] text-white/70 print:text-gray-600 space-y-1.5 list-disc list-inside">
                  <li>Klasifikasi citra jamur menggunakan model CNN</li>
                  <li>Pipeline pengumpulan, pembersihan, dan augmentasi data</li>
                  <li>Evaluasi menggunakan precision, recall, dan F1-score</li>
                  <li>Antarmuka web demo untuk mencoba model klasifikasi</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white/5 print:bg-gray-50 border border-white/5 print:border-gray-200">
                <h4 className="font-bold text-xs uppercase tracking-wider text-white print:text-gray-900 mb-2 flex items-center gap-1.5">
                  <HiWrenchScrewdriver className="text-accent" /> Kontribusi & Implementasi Teknis
                </h4>
                <ul className="text-xs print:text-[11px] text-white/70 print:text-gray-600 space-y-1.5 list-disc list-inside">
                  <li>Merancang pipeline pengumpulan, pembersihan, dan augmentasi citra</li>
                  <li>Membangun dan melatih arsitektur CNN menggunakan TensorFlow & Keras</li>
                  <li>Melakukan tuning hyperparameter untuk membantu mencegah overfitting</li>
                  <li>Mengevaluasi model dengan precision, recall, dan F1-score</li>
                  <li>Mengintegrasikan model ke antarmuka web demo</li>
                </ul>
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="mt-5 pt-3 border-t border-white/10 print:border-gray-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-white/60 print:text-gray-500 mr-2">Teknologi:</span>
              {["Python", "TensorFlow", "Keras", "CNN", "scikit-learn", "Web Demo"].map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs print:text-[10px] font-medium bg-white/10 print:bg-gray-200 text-white/90 print:text-gray-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Halaman 2 */}
          <div className="mt-8 pt-4 border-t border-white/10 print:border-gray-200 flex items-center justify-between text-xs print:text-[10px] text-white/50 print:text-gray-500">
            <span>Showcase Proyek: MushroomAI</span>
            <span>Halaman 2 dari 6</span>
          </div>
        </section>


        {/* ------------------------------------------------------------ */}
        {/* HALAMAN 3: PROYEK 2 - INVENTORY IT ASSETS                    */}
        {/* ------------------------------------------------------------ */}
        <section className="portfolio-page bg-[#0f101d] print:bg-white text-white print:text-gray-900 border border-white/10 print:border-none rounded-3xl print:rounded-none shadow-2xl p-8 md:p-12 print:p-0">
          <div>
            {/* Header Proyek */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pb-4 border-b border-white/10 print:border-gray-200 mb-6">
              <div>
                <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                  Showcase Proyek Rekayasa 02 • Enterprise Web Application
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white print:text-gray-900 mt-1">
                  Inventory IT Assets Management
                </h2>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-white/10 print:bg-gray-100 text-white/80 print:text-gray-700 font-medium">
                  Implementasi Magang Industri
                </span>
                <span className="px-3 py-1 rounded-full bg-accent/20 print:bg-red-50 text-accent font-semibold">
                  Status: Terverifikasi
                </span>
              </div>
            </div>

            {/* Gallery Gambar 2x2 */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { src: "/projects/Inventory IT/Dashboard Project Magang.png", label: "Dashboard Ringkasan Aset" },
                { src: "/projects/Inventory IT/Asset project magang.png", label: "Manajemen Data Inventaris" },
                { src: "/projects/Inventory IT/Peminjaman Project Magang.png", label: "Sistem Peminjaman & Mutasi" },
                { src: "/projects/Inventory IT/Login project magang.png", label: "Otoritas Hak Akses Admin" },
              ].map((img, idx) => (
                <div
                  key={idx}
                  className="rounded-xl overflow-hidden border border-white/10 print:border-gray-300 h-36 md:h-44 print:h-36 relative bg-black/30 print:bg-gray-100 flex items-center justify-center p-1"
                >
                  <Image
                    src={img.src}
                    alt={img.label}
                    width={400}
                    height={250}
                    className="max-w-full max-h-full object-contain"
                  />
                  <div className="absolute bottom-1 left-2 bg-black/70 print:bg-white/90 px-2 py-0.5 rounded text-[10px] text-white print:text-gray-900 font-medium">
                    {img.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Deskripsi & Ringkasan Solusi */}
            <div className="p-4 rounded-xl bg-white/5 print:bg-gray-50 border border-white/5 print:border-gray-200 mb-5">
              <h3 className="font-bold text-xs uppercase tracking-wider text-accent mb-1.5">
                Gambaran Sistem & Urgensi Bisnis
              </h3>
              <p className="text-xs md:text-sm print:text-xs leading-relaxed text-white/80 print:text-gray-700 text-justify">
                Sistem manajemen aset IT yang dikembangkan selama magang di PT. Yageo TMSS Indonesia untuk melacak kondisi, lokasi, dan riwayat pemeliharaan aset.
              </p>
            </div>

            {/* Dua Kolom: Fitur Utama & Kontribusi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 print:bg-gray-50 border border-white/5 print:border-gray-200">
                <h4 className="font-bold text-xs uppercase tracking-wider text-white print:text-gray-900 mb-2 flex items-center gap-1.5">
                  <HiCommandLine className="text-accent" /> Fitur Utama Sistem
                </h4>
                <ul className="text-xs print:text-[11px] text-white/70 print:text-gray-600 space-y-1.5 list-disc list-inside">
                  <li>Manajemen CRUD komprehensif seluruh inventaris perangkat IT</li>
                  <li>Pencatatan dan pelacakan kondisi serta lokasi aset IT</li>
                  <li>Riwayat pemeliharaan perangkat</li>
                  <li>Ekspor laporan otomatis ke format PDF dan Excel</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white/5 print:bg-gray-50 border border-white/5 print:border-gray-200">
                <h4 className="font-bold text-xs uppercase tracking-wider text-white print:text-gray-900 mb-2 flex items-center gap-1.5">
                  <HiWrenchScrewdriver className="text-accent" /> Kontribusi & Arsitektur Kode
                </h4>
                <ul className="text-xs print:text-[11px] text-white/70 print:text-gray-600 space-y-1.5 list-disc list-inside">
                  <li>Merancang skema database relasional MySQL untuk pelacakan aset</li>
                  <li>Membangun backend PHP berorientasi Object-Oriented Programming (OOP)</li>
                  <li>Membangun logika CRUD untuk pengelolaan aset</li>
                  <li>Mengembangkan modul ekspor laporan PDF dan Excel</li>
                </ul>
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="mt-5 pt-3 border-t border-white/10 print:border-gray-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-white/60 print:text-gray-500 mr-2">Teknologi:</span>
              {["PHP (OOP)", "MySQL", "CRUD", "Laporan PDF & Excel"].map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs print:text-[10px] font-medium bg-white/10 print:bg-gray-200 text-white/90 print:text-gray-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Halaman 3 */}
          <div className="mt-8 pt-4 border-t border-white/10 print:border-gray-200 flex items-center justify-between text-xs print:text-[10px] text-white/50 print:text-gray-500">
            <span>Showcase Proyek: Inventory IT Assets</span>
            <span>Halaman 3 dari 6</span>
          </div>
        </section>


        {/* ------------------------------------------------------------ */}
        {/* HALAMAN 4: PROYEK 3 - SMART LOCKER (IOT SYSTEM)              */}
        {/* ------------------------------------------------------------ */}
        <section className="portfolio-page bg-[#0f101d] print:bg-white text-white print:text-gray-900 border border-white/10 print:border-none rounded-3xl print:rounded-none shadow-2xl p-8 md:p-12 print:p-0">
          <div>
            {/* Header Proyek */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pb-4 border-b border-white/10 print:border-gray-200 mb-6">
              <div>
                <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                  Showcase Proyek Rekayasa 03 • Internet of Things (IoT) & Embedded
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white print:text-gray-900 mt-1">
                  Smart Locker • Proyek Computer Vision & IoT
                </h2>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-white/10 print:bg-gray-100 text-white/80 print:text-gray-700 font-medium">
                  Ketua Tim
                </span>
                <span className="px-3 py-1 rounded-full bg-accent/20 print:bg-red-50 text-accent font-semibold">
                  Web • ESP32
                </span>
              </div>
            </div>

            {/* Gallery Gambar 2x2 */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { src: "/projects/Smart Locker/Dashboard RFID.png", label: "Dashboard Pemantauan Loker" },
                { src: "/projects/Smart Locker/Implementasi RFID.png", label: "Implementasi Hardware" },
                { src: "/projects/Smart Locker/Design RFID.png", label: "Desain Sistem" },
                { src: "/projects/Smart Locker/web RFID.png", label: "Antarmuka Web" },
              ].map((img, idx) => (
                <div
                  key={idx}
                  className="rounded-xl overflow-hidden border border-white/10 print:border-gray-300 h-36 md:h-44 print:h-36 relative bg-black/30 print:bg-gray-100 flex items-center justify-center p-1"
                >
                  <Image
                    src={img.src}
                    alt={img.label}
                    width={400}
                    height={250}
                    className="max-w-full max-h-full object-contain"
                  />
                  <div className="absolute bottom-1 left-2 bg-black/70 print:bg-white/90 px-2 py-0.5 rounded text-[10px] text-white print:text-gray-900 font-medium">
                    {img.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Deskripsi & Ringkasan Solusi */}
            <div className="p-4 rounded-xl bg-white/5 print:bg-gray-50 border border-white/5 print:border-gray-200 mb-5">
              <h3 className="font-bold text-xs uppercase tracking-wider text-accent mb-1.5">
                Konsep & Inovasi Teknologi
              </h3>
              <p className="text-xs md:text-sm print:text-xs leading-relaxed text-white/80 print:text-gray-700 text-justify">
                Sistem loker digital dengan antarmuka web manajemen, autentikasi QR Code, dan dashboard untuk memantau status loker secara real-time. Web server berkomunikasi dengan mikrokontroler ESP32 melalui HTTP/MQTT.
              </p>
            </div>

            {/* Dua Kolom: Fitur Utama & Kontribusi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 print:bg-gray-50 border border-white/5 print:border-gray-200">
                <h4 className="font-bold text-xs uppercase tracking-wider text-white print:text-gray-900 mb-2 flex items-center gap-1.5">
                  <HiCommandLine className="text-accent" /> Fitur Unggulan Sistem
                </h4>
                <ul className="text-xs print:text-[11px] text-white/70 print:text-gray-600 space-y-1.5 list-disc list-inside">
                  <li>Antarmuka web responsif untuk manajemen loker</li>
                  <li>Autentikasi QR Code dan dashboard pemantauan status real-time</li>
                  <li>Komunikasi data antara web server dan ESP32 melalui HTTP/MQTT</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white/5 print:bg-gray-50 border border-white/5 print:border-gray-200">
                <h4 className="font-bold text-xs uppercase tracking-wider text-white print:text-gray-900 mb-2 flex items-center gap-1.5">
                  <HiWrenchScrewdriver className="text-accent" /> Kontribusi Rekayasa Hardware & Web
                </h4>
                <ul className="text-xs print:text-[11px] text-white/70 print:text-gray-600 space-y-1.5 list-disc list-inside">
                  <li>Memimpin tim dengan pembagian tugas sesuai keahlian anggota</li>
                  <li>Menyusun timeline agar pengerjaan proyek terstruktur dan tepat waktu</li>
                  <li>Membangun antarmuka web manajemen loker yang responsif</li>
                  <li>Mengembangkan komunikasi data web server dan ESP32 menggunakan HTTP/MQTT</li>
                </ul>
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="mt-5 pt-3 border-t border-white/10 print:border-gray-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-white/60 print:text-gray-500 mr-2">Teknologi:</span>
              {["React", "MySQL", "ESP32", "HTTP/MQTT"].map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs print:text-[10px] font-medium bg-white/10 print:bg-gray-200 text-white/90 print:text-gray-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Halaman 4 */}
          <div className="mt-8 pt-4 border-t border-white/10 print:border-gray-200 flex items-center justify-between text-xs print:text-[10px] text-white/50 print:text-gray-500">
            <span>Showcase Proyek: Smart Locker (IoT)</span>
            <span>Halaman 4 dari 6</span>
          </div>
        </section>


        {/* ------------------------------------------------------------ */}
        {/* HALAMAN 5: PROYEK 4 & 5 - WEB IT CLASS D & TRAVELMATE        */}
        {/* ------------------------------------------------------------ */}
        <section className="portfolio-page bg-[#0f101d] print:bg-white text-white print:text-gray-900 border border-white/10 print:border-none rounded-3xl print:rounded-none shadow-2xl p-8 md:p-12 print:p-0">
          <div>
            <div className="pb-4 border-b border-white/10 print:border-gray-200 mb-6">
              <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                Showcase Proyek Rekayasa 04 & 05 • Full-Stack Web & Mobile Application
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white print:text-gray-900 mt-1">
                Platform Komunitas Akademik & Perjalanan
              </h2>
            </div>

            {/* PROYEK A: WEB IT CLASS D */}
            <div className="p-5 rounded-2xl bg-white/5 print:bg-gray-50 border border-white/10 print:border-gray-200 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                <div className="md:col-span-5 rounded-xl overflow-hidden border border-white/10 print:border-gray-300 h-44 md:h-48 print:h-44 relative bg-black/40 print:bg-gray-100 flex items-center justify-center p-1">
                  <Image
                    src="/projects/web class D/1_Home_web_D.png"
                    alt="Web IT Class D"
                    width={450}
                    height={280}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="md:col-span-7">
                  <span className="text-[10px] font-semibold uppercase text-accent tracking-wider">
                    Portal Informasi Akademik
                  </span>
                  <h3 className="text-lg font-bold text-white print:text-gray-900 mb-1.5">
                    Portal Informasi Akademik
                  </h3>
                  <p className="text-xs print:text-[11px] text-white/75 print:text-gray-700 leading-relaxed mb-3">
                    Portal akademik dengan modul backend untuk manajemen direktori data, kalender akademik dinamis, dan publikasi konten.
                  </p>
                  <div className="text-[11px] print:text-[10px] text-white/60 print:text-gray-600 space-y-1 mb-3">
                    <div>• Memimpin tim dan mengatur pembagian tugas serta alokasi waktu</div>
                    <div>• Mengembangkan modul backend direktori, kalender, dan publikasi konten</div>
                    <div>• Mengimplementasikan desain responsif dan melakukan pengujian cross-browser</div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["PHP", "MySQL", "Responsive Web"].map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[10px] bg-white/10 print:bg-gray-200 text-white/90 print:text-gray-800 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* PROYEK B: TRAVELMATE */}
            <div className="p-5 rounded-2xl bg-white/5 print:bg-gray-50 border border-white/10 print:border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                <div className="md:col-span-5 rounded-xl overflow-hidden border border-white/10 print:border-gray-300 h-44 md:h-48 print:h-44 relative bg-black/40 print:bg-gray-100 flex items-center justify-center p-1">
                  <Image
                    src="/projects/Travelmate/Travelmate_1.png"
                    alt="TravelMate"
                    width={450}
                    height={280}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="md:col-span-7">
                  <span className="text-[10px] font-semibold uppercase text-accent tracking-wider">
                    Travel & Itinerary Planner
                  </span>
                  <h3 className="text-lg font-bold text-white print:text-gray-900 mb-1.5">
                    TravelMate - Smart Trip Planner
                  </h3>
                  <p className="text-xs print:text-[11px] text-white/75 print:text-gray-700 leading-relaxed mb-3">
                    Proyek final Coding Camp by DBS Foundation untuk mengeksplorasi destinasi, menyusun itinerary, menyimpan tempat favorit di Firebase, dan memperoleh rekomendasi wisata berbasis Machine Learning.
                  </p>
                  <div className="text-[11px] print:text-[10px] text-white/60 print:text-gray-600 space-y-1 mb-3">
                    <div>• Eksplorasi destinasi dan penyusunan itinerary</div>
                    <div>• Penyimpanan destinasi favorit menggunakan Firebase</div>
                    <div>• Rekomendasi wisata dari model Machine Learning</div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["Firebase", "Machine Learning", "Responsive Web"].map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[10px] bg-white/10 print:bg-gray-200 text-white/90 print:text-gray-800 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Halaman 5 */}
          <div className="mt-8 pt-4 border-t border-white/10 print:border-gray-200 flex items-center justify-between text-xs print:text-[10px] text-white/50 print:text-gray-500">
            <span>Showcase Proyek: Web IT Class D & TravelMate</span>
            <span>Halaman 5 dari 6</span>
          </div>
        </section>


        {/* ------------------------------------------------------------ */}
        {/* HALAMAN 6: SERTIFIKASI, LISENSI RESMI & CLOSING STATEMENT   */}
        {/* ------------------------------------------------------------ */}
        <section className="portfolio-page bg-[#0f101d] print:bg-white text-white print:text-gray-900 border border-white/10 print:border-none rounded-3xl print:rounded-none shadow-2xl p-8 md:p-12 print:p-0">
          <div>
            <div className="pb-4 border-b border-white/10 print:border-gray-200 mb-6">
              <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                Kredensial Resmi & Validasi Kompetensi
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white print:text-gray-900 mt-1">
                Sertifikasi, Penghargaan & Lisensi
              </h2>
              <p className="text-xs md:text-sm print:text-xs text-white/60 print:text-gray-600 mt-1">
                Bukti verifikasi keahlian teknis dan penghargaan akademik yang diterbitkan oleh badan resmi terakreditasi.
              </p>
            </div>

            {/* Grid 6 Sertifikasi Pilihan */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  badge: "Pelatihan Vokasi",
                  title: "MTU Batch II • Teknologi Informasi",
                  issuer: "Balai Pelatihan Vokasi dan Produktivitas",
                  year: "",
                  desc: "Pelatihan Mobile Training Unit bidang teknologi informasi.",
                },
                {
                  badge: "Sertifikasi Profesi Nasional",
                  title: "Web Developer",
                  issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
                  year: "",
                  desc: "Sertifikasi kompetensi profesi bidang pengembangan web.",
                },
                {
                  badge: "Kursus Profesional",
                  title: "Pemrograman dengan Python",
                  issuer: "Dicoding Indonesia",
                  year: "",
                  desc: "Kursus pemrograman Python.",
                },
                {
                  badge: "Kursus Profesional",
                  title: "Belajar Git dan GitHub",
                  issuer: "Dicoding Indonesia",
                  year: "",
                  desc: "Kursus version control menggunakan Git dan GitHub.",
                },
                {
                  badge: "Kursus Profesional",
                  title: "Visualisasi Data Basic & Basic SQL",
                  issuer: "Dicoding Indonesia",
                  year: "",
                  desc: "Kursus visualisasi data dan dasar SQL.",
                },
                {
                  badge: "Kursus Profesional",
                  title: "Programming Logic 101 & Basic AI",
                  issuer: "Dicoding Indonesia",
                  year: "",
                  desc: "Kursus logika pemrograman dan dasar kecerdasan artifisial.",
                },
              ].map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/5 print:bg-gray-50 border border-white/5 print:border-gray-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-accent/20 print:bg-red-50 text-accent border border-accent/20">
                        {cert.badge}
                      </span>
                      {cert.year && (
                        <span className="text-xs text-white/50 print:text-gray-500 font-medium">
                          {cert.year}
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-bold text-white print:text-gray-900 mb-1 leading-snug">
                      {cert.title}
                    </h3>
                    <div className="text-xs text-accent font-medium mb-1.5">
                      {cert.issuer}
                    </div>
                    <p className="text-xs print:text-[11px] text-white/70 print:text-gray-600 leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pernyataan Penutup & Nilai Tambah */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-accent/10 to-transparent border border-accent/30 print:border-gray-200 print:bg-gray-50">
              <h3 className="text-sm font-bold text-white print:text-gray-900 mb-2 flex items-center gap-2">
                <HiCheckCircle className="text-accent text-lg" /> Komitmen Profesional & Kesiapan Kerja
              </h3>
              <p className="text-xs md:text-sm print:text-xs leading-relaxed text-white/80 print:text-gray-700 text-justify">
                Dengan latar belakang D4 Teknik Informatika, pengalaman dukungan IT di lingkungan industri, serta keterampilan Full-Stack Web dan Machine Learning, saya siap berkontribusi dalam membangun solusi teknologi dan mendukung kebutuhan tim.
              </p>
            </div>
          </div>

          {/* Footer Halaman 6 */}
          <div className="mt-8 pt-4 border-t border-white/10 print:border-gray-200 flex items-center justify-between text-xs print:text-[10px] text-white/50 print:text-gray-500">
            <div>
              Dokumen Portofolio Resmi • <strong>Muhammad Rizki, S.Tr.Kom</strong>
            </div>
            <div>
              Halaman 6 dari 6 (Selesai)
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
