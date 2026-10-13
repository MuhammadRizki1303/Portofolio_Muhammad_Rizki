"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import {
  HiDocumentCheck,
  HiDocumentText,
  HiEye,
  HiMagnifyingGlass,
  HiTrophy,
  HiXMark,
} from "react-icons/hi2";

import Circles from "@/components/Circles";
import { fadeIn } from "@/variants";

type CertificateItem = {
  id: string;
  title: string;
  issuer: string;
  category:
    | "Kompetensi & Vokasi"
    | "AI & Machine Learning"
    | "Data Science & DB"
    | "Software Dev"
    | "Penghargaan";
  fileName?: string;
  previewImage?: string;
  tags: string[];
  isAward?: boolean;
};

const CERTIFICATES_DATA: CertificateItem[] = [
  // 1. PENGHARGAAN PRESTASI AKADEMIK TERTINGGI (CUMLAUDE)
  {
    id: "award-cumlaude",
    title: "Piagam Penghargaan Lulusan Terbaik (Predikat Cumlaude)",
    issuer: "Politeknik Negeri Lhokseumawe",
    category: "Penghargaan",
    fileName: "Piagam_Penghargaan_Lulusan_Terbaik.pdf",
    previewImage:
      "/certificates/previews/Piagam_Penghargaan_Lulusan_Terbaik.png",
    tags: [
      "Penghargaan Resmi",
      "Predikat Cumlaude",
      "Lulusan Terbaik",
      "Sarjana Terapan Komputer",
    ],
    isAward: true,
  },
  // 2. KREDENSIAL AKADEMIK RESMI
  {
    id: "str-kom",
    title: "Sertifikat Kelulusan Sarjana Terapan Komputer (S.Tr.Kom)",
    issuer: "Politeknik Negeri Lhokseumawe",
    category: "Kompetensi & Vokasi",
    fileName: "Sertifikat_S.Tr.Kom.pdf",
    previewImage: "/certificates/previews/Sertifikat_S.Tr.Kom.png",
    tags: ["Sarjana Terapan", "S.Tr.Kom", "Teknik Informatika", "Akademik"],
  },
  {
    id: "skl-transkrip",
    title: "Surat Keterangan Lulus (SKL) & Transkrip Akademik (IPK 3.87)",
    issuer: "Politeknik Negeri Lhokseumawe",
    category: "Kompetensi & Vokasi",
    fileName: "Surat_Keterangan_LULUS_politeknik_negeri_lhokseumawe.pdf",
    previewImage:
      "/certificates/previews/Surat_Keterangan_LULUS_politeknik_negeri_lhokseumawe.png",
    tags: ["SKL Resmi", "Transkrip Nilai", "IPK 3.87", "Teknik Informatika"],
  },
  {
    id: "toefl-test",
    title: "Certificate of Achievement English Proficiency Test (TOEFL)",
    issuer: "Language Centre Politeknik Negeri Lhokseumawe",
    category: "Kompetensi & Vokasi",
    fileName: "TOEFL.pdf",
    previewImage: "/certificates/previews/TOEFL.png",
    tags: ["TOEFL Test", "English Proficiency", "Skor 407", "Language Centre"],
  },
  {
    id: "magang-simbadda",
    title: "Praktik Kerja Lapangan (PKL) - Simbadda Technology",
    issuer: "SIMBADDA Technology / SMK Negeri 1 Bireuen",
    category: "Kompetensi & Vokasi",
    fileName: "Bukti_Magang_Simbadda.pdf",
    previewImage: "/certificates/previews/Bukti_Magang_Simbadda.png",
    tags: [
      "Praktik Kerja Lapangan",
      "Simbadda Technology",
      "Hardware & IT Support",
      "Nilai 92",
    ],
  },
  // 3. SERTIFIKASI KOMPETENSI BNSP & BPVP
  {
    id: "ukk-kompetensi",
    title: "Sertifikat Uji Kompetensi Keahlian (UKK)",
    issuer: "BNSP / SMK Negeri 1 Bireuen",
    category: "Kompetensi & Vokasi",
    fileName: "Sertifikat_Kompetensi_Keahlian.pdf",
    previewImage: "/certificates/previews/Sertifikat_Kompetensi_Keahlian.png",
    tags: ["Kompetensi Keahlian", "Hardware & Networking", "BNSP"],
  },
  {
    id: "mtu-ti",
    title: "Pelatihan Mobile Training Unit (MTU) II - Teknologi Informasi",
    issuer: "Balai Pelatihan Vokasi dan Produktivitas (BPVP)",
    category: "Kompetensi & Vokasi",
    fileName: "Sertifikat_MTU_II_-_Teknologi_Infotmasi.pdf",
    previewImage:
      "/certificates/previews/Sertifikat_MTU_II_-_Teknologi_Infotmasi.png",
    tags: ["Pelatihan Vokasi", "Teknologi Informasi", "Kemnaker"],
  },
  {
    id: "soft-skill",
    title: "Pelatihan & Pengembangan Soft Skill",
    issuer: "Pengembangan Karir & Profesionalisme",
    category: "Kompetensi & Vokasi",
    fileName: "Sertfikat_SoftSkill.pdf",
    previewImage: "/certificates/previews/Sertfikat_SoftSkill.png",
    tags: ["Soft Skill", "Komunikasi", "Leadership"],
  },
  {
    id: "financial-literacy",
    title: "Financial Literacy 101",
    issuer: "DBS Foundation x Dicoding Indonesia",
    category: "Kompetensi & Vokasi",
    fileName: "sertifikat_course_Financial_Literacy_101.pdf",
    previewImage:
      "/certificates/previews/sertifikat_course_Financial_Literacy_101.png",
    tags: ["DBS Foundation", "Financial Literacy"],
  },
  // 4. AI & MACHINE LEARNING
  {
    id: "ai-dasar",
    title: "Belajar Dasar AI (Artificial Intelligence)",
    issuer: "Dicoding Indonesia",
    category: "AI & Machine Learning",
    fileName: "sertifikat_course_belajar_dasar_ai.pdf",
    previewImage:
      "/certificates/previews/sertifikat_course_belajar_dasar_ai.png",
    tags: ["Artificial Intelligence", "Machine Learning", "Neural Network"],
  },
  {
    id: "ml-supervised-unsupervised",
    title: "Machine Learning: Supervised & Unsupervised Learning",
    issuer: "Dicoding Indonesia",
    category: "AI & Machine Learning",
    fileName: "sertifikat_course_Machine_learning_supervised_unsupervised.pdf",
    previewImage:
      "/certificates/previews/sertifikat_course_Machine_learning_supervised_unsupervised.png",
    tags: ["Machine Learning", "Scikit-Learn", "Model Training"],
  },
  // 5. DATA SCIENCE & DATABASE
  {
    id: "data-analysis-python",
    title: "Belajar Analisis Data dengan Python",
    issuer: "Dicoding Indonesia",
    category: "Data Science & DB",
    fileName: "sertifikat_course_analysis_data_with_python.pdf",
    previewImage:
      "/certificates/previews/sertifikat_course_analysis_data_with_python.png",
    tags: ["Data Analysis", "Python", "Pandas", "NumPy"],
  },
  {
    id: "visualisasi-data",
    title: "Belajar Dasar Visualisasi Data",
    issuer: "Dicoding Indonesia",
    category: "Data Science & DB",
    fileName: "sertifikat_course_dasar_visualisasi_data.pdf",
    previewImage:
      "/certificates/previews/sertifikat_course_dasar_visualisasi_data.png",
    tags: ["Data Visualization", "Matplotlib", "Seaborn"],
  },
  {
    id: "dasar-sql",
    title: "Belajar Dasar Structured Query Language (SQL)",
    issuer: "Dicoding Indonesia",
    category: "Data Science & DB",
    fileName: "sertifikat_course_dasar_sql.pdf",
    previewImage: "/certificates/previews/sertifikat_course_dasar_sql.png",
    tags: ["SQL", "Relational Database", "Queries"],
  },
  // 6. SOFTWARE DEVELOPMENT & PROGRAMMING
  {
    id: "pemrograman-python",
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    category: "Software Dev",
    fileName: "sertifikat_course_pemograman_dengan_python.pdf",
    previewImage:
      "/certificates/previews/sertifikat_course_pemograman_dengan_python.png",
    tags: ["Python", "Object Oriented Programming", "Logic"],
  },
  {
    id: "git-github",
    title: "Belajar Dasar Git dengan GitHub",
    issuer: "Dicoding Indonesia",
    category: "Software Dev",
    fileName: "sertifikat_course_belajar_dasar_git_dengan_github.pdf",
    previewImage:
      "/certificates/previews/sertifikat_course_belajar_dasar_git_dengan_github.png",
    tags: ["Git", "GitHub", "Version Control", "Workflow"],
  },
  {
    id: "dasar-pemrograman-software",
    title: "Pengantar Dasar Pemrograman untuk Pengembangan Software",
    issuer: "Dicoding Indonesia",
    category: "Software Dev",
    fileName:
      "sertifikat_course_dasar_pemograman_untuk_pengembangan_software.pdf",
    previewImage:
      "/certificates/previews/sertifikat_course_dasar_pemograman_untuk_pengembangan_software.png",
    tags: ["Software Engineering", "Clean Code", "Fundamentals"],
  },
  {
    id: "programming-logic-101",
    title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    issuer: "Dicoding Indonesia",
    category: "Software Dev",
    fileName: "sertifikat_course_programming_logic_101.pdf",
    previewImage:
      "/certificates/previews/sertifikat_course_programming_logic_101.png",
    tags: ["Logic 101", "Algoritma", "Problem Solving"],
  },
];

const CATEGORIES = [
  "Semua",
  "Kompetensi & Vokasi",
  "AI & Machine Learning",
  "Data Science & DB",
  "Software Dev",
  "Penghargaan",
] as const;

const SertifikatPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalCert, setActiveModalCert] =
    useState<CertificateItem | null>(null);

  const filteredCertificates = useMemo(() => {
    return CERTIFICATES_DATA.filter((item) => {
      const matchCategory =
        selectedCategory === "Semua" || item.category === selectedCategory;
      const matchQuery =
        searchQuery.trim() === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        );
      return matchCategory && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="page-scroll min-h-screen bg-primary/30 py-24 xl:py-36 pb-24 xl:pb-0">
      <Circles />
      <div className="container mx-auto px-4 relative z-10">
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="inline-flex items-center gap-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-4 text-xs tracking-wider uppercase text-accent font-medium"
          >
            <HiDocumentCheck className="text-base" />
            <span>Dokumentasi Resmi & Bukti Kredensial</span>
          </motion.div>

          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[30px] md:text-[44px] font-bold leading-tight mb-4"
          >
            Sertifikasi & <span className="text-accent">Penghargaan.</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-white/70 text-sm md:text-base leading-relaxed"
          >
            Representasi komitmen terhadap pengembangan kompetensi profesional
            dalam Rekayasa Perangkat Lunak, Artificial Intelligence, Analisis
            Data, dan Teknologi Informasi. Setiap sertifikasi merefleksikan
            proses pembelajaran berkelanjutan serta kesiapan untuk menghadirkan
            solusi yang terukur dan bernilai.
          </motion.p>
        </div>

        {/* SEARCH & FILTER CONTROLS */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-4xl mx-auto mb-10 space-y-4"
        >
          {/* Search Box */}
          <div className="relative">
            <HiMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-xl" />
            <input
              type="text"
              placeholder="Cari berdasarkan nama sertifikat, penerbit (Dicoding, BNSP), atau topik..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 text-sm focus:outline-none focus:border-accent/60 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/50 hover:text-white"
              >
                Hapus
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => {
              const count =
                cat === "Semua"
                  ? CERTIFICATES_DATA.length
                  : CERTIFICATES_DATA.filter((c) => c.category === cat).length;

              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-x-1.5 ${
                    isSelected
                      ? "bg-accent text-white shadow-lg shadow-accent/20"
                      : "bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10"
                  }`}
                >
                  {cat === "Penghargaan" && <HiTrophy className="text-sm" />}
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-white/10 text-white/60"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* CERTIFICATES GRID */}
        {filteredCertificates.length === 0 ? (
          <div className="text-center py-16 bg-white/5 rounded-2xl border border-white/10 max-w-md mx-auto">
            <HiDocumentText className="text-4xl text-white/30 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-white mb-1">
              Tidak ada sertifikat ditemukan
            </h3>
            <p className="text-xs text-white/50 mb-4">
              Coba gunakan kata kunci pencarian atau kategori lain.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("Semua");
              }}
              className="text-xs text-accent hover:underline"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
            {filteredCertificates.map((cert, index) => {
              if (cert.isAward) {
                // KARTU SPESIAL: PENGHARGAAN CUMLAUDE (DOKUMEN RESMI)
                const pdfUrl = `/certificates/${cert.fileName}`;
                const previewUrl = cert.previewImage || "";

                return (
                  <motion.div
                    key={cert.id}
                    variants={fadeIn("up", 0.1 * ((index % 3) + 1))}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="relative rounded-2xl border-2 border-amber-500/60 bg-gradient-to-b from-amber-500/15 via-white/5 to-transparent hover:border-amber-400 transition-all duration-300 p-5 flex flex-col justify-between group shadow-lg shadow-amber-500/10 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl tracking-wider flex items-center gap-x-1 shadow-md z-10">
                      <HiTrophy className="text-xs" />
                      <span>PENGHARGAAN RESMI</span>
                    </div>

                    <div>
                      {/* GAMBAR PRATINJAU PIAGAM PENGHARGAAN */}
                      <div
                        onClick={() => setActiveModalCert(cert)}
                        className="relative w-full aspect-video rounded-xl overflow-hidden border border-amber-500/40 bg-black/40 mb-4 cursor-pointer group/preview"
                        title="Klik untuk memperbesar pratinjau piagam penghargaan"
                      >
                        {previewUrl ? (
                          <Image
                            src={previewUrl}
                            alt={`Pratinjau ${cert.title}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover object-top group-hover/preview:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <HiTrophy className="text-4xl text-amber-400" />
                          </div>
                        )}

                        {/* Overlay On Hover */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-x-2">
                          <span className="bg-amber-500 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-x-1.5 shadow-lg font-medium">
                            <HiEye className="text-sm" />
                            <span>Perbesar Piagam</span>
                          </span>
                        </div>

                        {/* Category Badge On Image */}
                        <div className="absolute top-2.5 left-2.5">
                          <span className="text-[10px] px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-xs text-amber-300 font-semibold border border-amber-500/30 flex items-center gap-x-1">
                            <HiTrophy className="text-xs" />
                            <span>Cumlaude</span>
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        onClick={() => setActiveModalCert(cert)}
                        className="text-base font-bold text-white mb-1.5 leading-snug group-hover:text-amber-400 transition-colors line-clamp-2 cursor-pointer"
                      >
                        {cert.title}
                      </h3>

                      {/* Issuer */}
                      <div className="text-xs text-amber-300/90 mb-2 flex items-center gap-x-1.5 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
                        <span>{cert.issuer}</span>
                      </div>

                      {/* Description / Achievement text */}
                      <p className="text-xs text-white/70 leading-relaxed mb-4">
                        Penghargaan resmi atas keberhasilan memperoleh predikat
                        kelulusan dengan pujian (Cumlaude) jenjang Sarjana
                        Terapan Komputer.
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {cert.tags.map((tag, tagI) => (
                          <span
                            key={tagI}
                            className="bg-amber-500/15 text-amber-300 border border-amber-500/30 text-[10px] px-2 py-0.5 rounded-md font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-4 border-t border-amber-500/20 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setActiveModalCert(cert)}
                        className="inline-flex items-center gap-x-1.5 text-xs text-amber-300 hover:text-white transition-colors font-medium"
                      >
                        <HiEye className="text-sm text-amber-400" />
                        <span>Pratinjau</span>
                      </button>

                      {cert.fileName && (
                        <a
                          href={pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-x-1.5 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-500 px-3 py-1.5 rounded-lg transition-colors shadow-md group/btn"
                          title="Buka file PDF di tab baru browser"
                        >
                          <span>Buka PDF</span>
                          <BsArrowUpRight className="text-xs group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                );
              }

              // KARTU STANDAR: 13 SERTIFIKAT DENGAN GAMBAR PRATINJAU REAL & LINK DOKUMEN
              const pdfUrl = `/certificates/${cert.fileName}`;
              const previewUrl = cert.previewImage || "";

              return (
                <motion.div
                  key={cert.id}
                  variants={fadeIn("up", 0.1 * ((index % 3) + 1))}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="rounded-2xl border border-white/10 hover:border-accent/60 bg-white/5 hover:bg-white/10 transition-all duration-300 p-5 flex flex-col justify-between group"
                >
                  <div>
                    {/* GAMBAR PRATINJAU (PREVIEW SERTIFIKAT LANGSUNG NAMPAK) */}
                    <div
                      onClick={() => setActiveModalCert(cert)}
                      className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/40 mb-4 cursor-pointer group/preview"
                      title="Klik untuk memperbesar pratinjau sertifikat"
                    >
                      {previewUrl ? (
                        <Image
                          src={previewUrl}
                          alt={`Pratinjau Sertifikat ${cert.title}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-top group-hover/preview:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <HiDocumentText className="text-4xl text-white/30" />
                        </div>
                      )}

                      {/* Overlay On Hover */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-x-2">
                        <span className="bg-accent/90 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-x-1.5 shadow-lg font-medium">
                          <HiEye className="text-sm" />
                          <span>Perbesar Pratinjau</span>
                        </span>
                      </div>

                      {/* Category Badge On Image */}
                      <div className="absolute top-2.5 right-2.5">
                        <span className="text-[10px] px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-xs text-white/90 font-medium border border-white/20">
                          {cert.category}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => setActiveModalCert(cert)}
                      className="text-base font-semibold text-white mb-1.5 leading-snug group-hover:text-accent transition-colors line-clamp-2 cursor-pointer"
                    >
                      {cert.title}
                    </h3>

                    {/* Issuer */}
                    <div className="text-xs text-white/50 mb-3 flex items-center gap-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                      <span>{cert.issuer}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {cert.tags.map((tag, tagI) => (
                        <span
                          key={tagI}
                          className="bg-white/5 text-white/60 text-[10px] px-2 py-0.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* AKSI LIHAT DOKUMEN ASLI */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveModalCert(cert)}
                      className="inline-flex items-center gap-x-1.5 text-xs text-white/70 hover:text-white transition-colors"
                    >
                      <HiEye className="text-sm text-accent" />
                      <span>Pratinjau</span>
                    </button>

                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-x-1.5 text-xs font-semibold text-white hover:text-accent transition-colors group/btn px-2.5 py-1.5 rounded-lg hover:bg-white/5"
                      title="Buka file PDF di tab baru browser"
                    >
                      <span>Buka PDF</span>
                      <BsArrowUpRight className="text-xs group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* FOOTER INFO FOR HR */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-3xl mx-auto text-center p-6 bg-white/5 border border-white/10 rounded-2xl"
        >
          <h4 className="text-sm font-semibold text-white mb-1">
            Verifikasi & Keaslian Dokumen
          </h4>
          <p className="text-xs text-white/60 leading-relaxed mb-4">
            Seluruh sertifikat dan penghargaan yang tercantum diterbitkan secara
            resmi oleh institusi dan lembaga terkait (Politeknik Negeri
            Lhokseumawe, BNSP, BPVP Kemnaker, Dicoding Indonesia, dan DBS
            Foundation). Dokumen asli dapat dibuka langsung untuk kebutuhan
            verifikasi HR.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-x-2 text-xs text-accent font-medium hover:underline"
          >
            <span>Hubungi Saya di Halaman Kontak</span>
            <BsArrowUpRight />
          </Link>
        </motion.div>
      </div>

      {/* MODAL LIGHTBOX / FULL PREVIEW SERTIFIKAT */}
      <AnimatePresence>
        {activeModalCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl bg-site border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b border-white/10 bg-white/5">
                <div>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-wider flex items-center gap-x-1 ${
                      activeModalCert.isAward ? "text-amber-400" : "text-accent"
                    }`}
                  >
                    {activeModalCert.isAward && <HiTrophy className="text-xs" />}
                    <span>{activeModalCert.category}</span>
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-white">
                    {activeModalCert.title}
                  </h3>
                  <p className="text-xs text-white/60">
                    Penerbit: {activeModalCert.issuer}
                  </p>
                </div>
                <button
                  onClick={() => setActiveModalCert(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shrink-0 ml-4"
                  title="Tutup"
                >
                  <HiXMark className="text-xl" />
                </button>
              </div>

              {/* Modal Body: High Resolution Preview Image */}
              <div className="p-4 overflow-y-auto flex items-center justify-center bg-black/40 min-h-[300px]">
                {activeModalCert.previewImage ? (
                  <div className="relative w-full max-w-3xl aspect-[1.414/1] rounded-lg overflow-hidden border border-white/20 shadow-xl bg-white">
                    <Image
                      src={activeModalCert.previewImage}
                      alt={activeModalCert.title}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                ) : (
                  <div className="py-20 text-center text-white/50">
                    Pratinjau tidak tersedia
                  </div>
                )}
              </div>

              {/* Modal Footer: Action Buttons */}
              <div className="p-4 border-t border-white/10 bg-white/5 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-white/50">
                  Format: Dokumen PDF Resmi
                </div>
                <div className="flex items-center gap-x-3">
                  <a
                    href={`/certificates/${activeModalCert.fileName}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-x-2 text-xs font-semibold text-white px-4 py-2 rounded-xl transition-colors shadow-lg ${
                      activeModalCert.isAward
                        ? "bg-amber-600 hover:bg-amber-500 shadow-amber-600/30"
                        : "bg-accent hover:bg-accent/80 shadow-accent/20"
                    }`}
                  >
                    <span>Buka PDF di Tab Baru</span>
                    <BsArrowUpRight />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SertifikatPage;
