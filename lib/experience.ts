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
    position: "IT Support",
    period: "Juli 2025 - Januari 2026",
    summary:
      "Memberikan dukungan teknis tingkat pertama bagi 10-15 staf lintas tiga lantai gedung, sekaligus membantu menjaga kesiapan perangkat dan konektivitas operasional.",
    responsibilities: [
      "Menangani kendala laptop dan aplikasi sebagai dukungan teknis tingkat pertama untuk rata-rata 10-15 staf per hari.",
      "Menginstal dan mengonfigurasi server, switch, hub, router, serta perangkat jaringan lainnya.",
      "Memelihara perangkat keras divisi IT untuk menjaga ketersediaan dan kesiapan sistem.",
      "Berkoordinasi lintas divisi untuk menyelesaikan rata-rata 2-3 permintaan teknis khusus per minggu.",
    ],
    results: [
      "Mendukung kelancaran operasional harian melalui penanganan kendala perangkat dan aplikasi secara efisien.",
      "Menjaga konektivitas dan kesiapan infrastruktur IT melalui konfigurasi jaringan dan pemeliharaan perangkat.",
      "Membangun pengalaman langsung dalam dukungan IT industri dan koordinasi lintas divisi.",
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
    position: "Asisten Teknisi",
    period: "Januari 2020 - Juni 2020",
    summary:
      "Menangani pemeliharaan, troubleshooting, instalasi ulang sistem operasi, dan konsultasi teknis bagi pelanggan.",
    responsibilities: [
      "Menangani pemeliharaan dan troubleshooting 5-6 unit laptop pelanggan per hari.",
      "Menginstal ulang sistem operasi pada 5-6 unit laptop atau PC per hari sesuai spesifikasi dan kebutuhan pelanggan.",
      "Memberikan konsultasi teknis dengan menerjemahkan istilah teknis menjadi solusi yang mudah dipahami.",
      "Mengidentifikasi kebutuhan pelanggan dan memberikan solusi teknis yang tepat sasaran.",
    ],
    results: [
      "Membangun pengalaman praktis dalam perawatan, troubleshooting, dan instalasi sistem operasi.",
      "Mengembangkan komunikasi layanan pelanggan serta kemampuan menjelaskan solusi teknis.",
      "Menangani kebutuhan hardware dan software pelanggan dalam ritme kerja harian.",
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
