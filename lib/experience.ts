export type ExperienceGalleryItem = {
  src: string;
  label: string;
};

export type Experience = {
  slug: string;
  company: string;
  position: string;
  period: string;
  summary: string;
  responsibilities: string[];
  results: string[];
  gallery: ExperienceGalleryItem[];
};

export const experiences: Experience[] = [
  {
    slug: "yageo-tmss-indonesia",
    company: "PT. Yageo TMSS Indonesia",
    position: "IT Support Specialist (Intern)",
    period: "Jul 2025 - Apr 2026",
    summary:
      "Mendukung operasional infrastruktur IT di lingkungan industri melalui penanganan perangkat, jaringan, dan kebutuhan teknis pengguna.",
    responsibilities: [
      "Menangani troubleshooting perangkat keras, perangkat lunak, dan konektivitas jaringan.",
      "Membantu instalasi, konfigurasi, serta pemeliharaan perangkat komputer dan perangkat jaringan.",
      "Mendokumentasikan aset dan aktivitas dukungan IT agar proses tindak lanjut lebih terarah.",
      "Berkoordinasi dengan pengguna dan tim terkait untuk menyelesaikan kendala operasional.",
    ],
    results: [
      "Kebutuhan dukungan teknis pengguna dapat ditangani dengan alur kerja yang lebih terstruktur.",
      "Dokumentasi aset dan riwayat penanganan membantu tim IT memantau kondisi perangkat.",
      "Mendapat pengalaman langsung mengelola infrastruktur IT pada skala industri.",
    ],
    gallery: [
      {
        src: "/projects/Inventory IT/Dashboard Project Magang.png",
        label: "Dashboard inventaris aset",
      },
      {
        src: "/projects/Inventory IT/Asset project magang.png",
        label: "Halaman data aset",
      },
      {
        src: "/projects/Inventory IT/Peminjaman Project Magang.png",
        label: "Halaman peminjaman perangkat",
      },
      {
        src: "/projects/Inventory IT/Login project magang.png",
        label: "Halaman login sistem",
      },
    ],
  },
  {
    slug: "simbadda-technology",
    company: "SIMBADDA Technology",
    position: "Hardware & IT Support (Intern)",
    period: "Jan 2020 - Jun 2020",
    summary:
      "Mendapatkan pengalaman awal di bidang hardware dan dukungan teknis melalui praktik kerja industri.",
    responsibilities: [
      "Melakukan pemeriksaan dan perawatan dasar perangkat komputer.",
      "Membantu instalasi sistem operasi, aplikasi, dan konfigurasi perangkat.",
      "Menangani kebutuhan teknis sederhana serta mendampingi pengguna.",
      "Mencatat proses pemeriksaan dan perbaikan perangkat.",
    ],
    results: [
      "Memperkuat fondasi troubleshooting hardware dan software secara langsung.",
      "Terbiasa bekerja mengikuti prosedur layanan dan dokumentasi teknis.",
      "Membangun pengalaman kerja profesional pertama di bidang IT support.",
    ],
    gallery: [
      {
        src: "/certificates/previews/Bukti_Magang_Simbadda.png",
        label: "Bukti pengalaman magang",
      },
      {
        src: "/projects/Inventory IT/Asset project magang.png",
        label: "Dokumentasi pengelolaan aset",
      },
      {
        src: "/projects/Inventory IT/Login project magang.png",
        label: "Dokumentasi sistem pendukung",
      },
    ],
  },
];

export function getExperience(slug: string) {
  return experiences.find((experience) => experience.slug === slug);
}
