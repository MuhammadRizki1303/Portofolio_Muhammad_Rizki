export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  screenshots: { src: string; label: string }[];
  description: string;
  category: string;
  focus: string;
  technologies: string[];
  features: string[];
  contributions: string[];
};

export const additionalProjects: Project[] = [
  {
    slug: "chatku",
    title: "Chatku",
    subtitle: "Aplikasi Pesan Instan Aman",
    image: "/projects/Chatku/1.jpeg",
    screenshots: [
      { src: "/projects/Chatku/1.jpeg", label: "Tampilan aplikasi" },
      { src: "/projects/Chatku/2.jpeg", label: "Percakapan" },
      { src: "/projects/Chatku/3.jpeg", label: "Daftar kontak" },
      { src: "/projects/Chatku/4.jpeg", label: "Pengelolaan pesan" },
    ],
    description:
      "Aplikasi pesan instan yang mengutamakan keamanan dan privasi, dilengkapi fitur percakapan serta klasifikasi pesan berbasis machine learning.",
    category: "Aplikasi Web",
    focus: "Pesan instan & keamanan",
    technologies: ["PHP", "React", "MySQL", "Machine Learning"],
    features: [
      "Enkripsi end-to-end dan verifikasi akun",
      "Percakapan pribadi dan daftar kontak",
      "Pengelolaan pesan dengan perlindungan data pribadi",
      "Klasifikasi pesan untuk membantu mendeteksi spam",
    ],
    contributions: [
      "Membangun aplikasi pesan instan dengan fitur keamanan dan privasi",
      "Mengembangkan percakapan pribadi, daftar kontak, dan pengelolaan pesan",
      "Mengintegrasikan model machine learning untuk klasifikasi pesan spam",
    ],
  },
  {
    slug: "website-kopi-gayo",
    title: "Website Kopi Gayo",
    subtitle: "Profil dan Katalog Kopi Khas Aceh",
    image: "/projects/KopiGayo/1.png",
    screenshots: [
      { src: "/projects/KopiGayo/1.png", label: "Halaman utama" },
      { src: "/projects/KopiGayo/2.png", label: "Katalog produk" },
      { src: "/projects/KopiGayo/3.png", label: "Informasi produk" },
      { src: "/projects/KopiGayo/4.png", label: "Profil Kopi Gayo" },
    ],
    description:
      "Website profil merek dan katalog kopi Gayo, Aceh, yang membantu pelanggan mengenal produk dan menemukan kopi sesuai preferensi.",
    category: "Aplikasi Web",
    focus: "Katalog & rekomendasi produk",
    technologies: ["PHP", "Laravel", "MySQL", "Machine Learning"],
    features: [
      "Profil merek dan cerita asal-usul kopi Gayo",
      "Informasi lokasi dan kontak toko",
      "Pencarian dan penyaringan produk berdasarkan jenis, bentuk, kemasan, dan kategori",
      "Rekomendasi produk berbasis machine learning",
    ],
    contributions: [
      "Membangun website profil merek dan katalog produk kopi Gayo",
      "Mengembangkan pencarian dan penyaringan produk berdasarkan atributnya",
      "Mengintegrasikan model machine learning untuk rekomendasi produk",
    ],
  },
  {
    slug: "sahamiq",
    title: "SAHAMIQ",
    subtitle: "Platform Analisis dan Monitoring Saham",
    image: "/projects/SAHAMIQ - Dashboard Analisis/1.png",
    screenshots: [
      {
        src: "/projects/SAHAMIQ - Dashboard Analisis/1.png",
        label: "Dashboard analisis",
      },
      {
        src: "/projects/SAHAMIQ - Dashboard Analisis/2.png",
        label: "Monitoring saham",
      },
      {
        src: "/projects/SAHAMIQ - Dashboard Analisis/3.png",
        label: "Riset emiten",
      },
      {
        src: "/projects/SAHAMIQ - Dashboard Analisis/4.png",
        label: "Visualisasi data",
      },
    ],
    description:
      "Platform monitoring dan analisis saham dengan berbagai alat bantu untuk meninjau emiten, memantau harga, dan membaca indikator kinerja keuangan.",
    category: "Aplikasi Web",
    focus: "Analisis & monitoring saham",
    technologies: ["PHP", "Laravel", "MySQL", "Machine Learning"],
    features: [
      "Dashboard, screener, dan riset emiten",
      "Watchlist dan notifikasi harga sesuai target",
      "Grafik serta indikator kinerja keuangan",
      "Klasifikasi tren pergerakan saham menggunakan machine learning",
    ],
    contributions: [
      "Membangun platform monitoring saham dengan dashboard dan screener",
      "Mengembangkan fitur riset emiten, watchlist, dan notifikasi target harga",
      "Mengintegrasikan model machine learning untuk klasifikasi tren saham",
    ],
  },
  {
    slug: "monthlab",
    title: "MONTHLAB",
    subtitle: "Dashboard Monitoring Data Wilayah Desa",
    image: "/projects/MonthLab/1.png",
    screenshots: [
      { src: "/projects/MonthLab/1.png", label: "Dashboard wilayah" },
      { src: "/projects/MonthLab/2.png", label: "Monitoring capaian" },
      { src: "/projects/MonthLab/3.png", label: "Visualisasi data" },
    ],
    description:
      "Dashboard interaktif untuk memantau data dan capaian wilayah desa, dilengkapi visualisasi serta pengelolaan laporan.",
    category: "Aplikasi Web",
    focus: "Monitoring & analisis wilayah",
    technologies: ["PHP", "React", "MySQL", "Machine Learning"],
    features: [
      "Pencarian data dan pengelolaan capaian wilayah",
      "Impor data dari file Excel",
      "Visualisasi data dalam bentuk grafik dan ekspor laporan",
      "Clustering wilayah berdasarkan capaian menggunakan machine learning",
    ],
    contributions: [
      "Membangun dashboard interaktif untuk monitoring data wilayah desa",
      "Mengembangkan pencarian data, pengelolaan capaian, impor Excel, dan ekspor laporan",
      "Menerapkan machine learning untuk pengelompokan wilayah berdasarkan capaian",
    ],
  },
  {
    slug: "smartumkm",
    title: "SmartUMKM",
    subtitle: "Platform Manajemen Operasional UMKM",
    image: "/projects/SmartUMKM - Dashboard Manajemen Usaha/1.png",
    screenshots: [
      {
        src: "/projects/SmartUMKM - Dashboard Manajemen Usaha/1.png",
        label: "Dashboard usaha",
      },
      {
        src: "/projects/SmartUMKM - Dashboard Manajemen Usaha/2.png",
        label: "Kasir dan transaksi",
      },
      {
        src: "/projects/SmartUMKM - Dashboard Manajemen Usaha/3.png",
        label: "Manajemen inventaris",
      },
      {
        src: "/projects/SmartUMKM - Dashboard Manajemen Usaha/4.png",
        label: "Laporan analitik",
      },
    ],
    description:
      "Platform terintegrasi untuk membantu UMKM mengelola operasional usaha serta meninjau kinerja bisnis melalui laporan analitik.",
    category: "Aplikasi Web",
    focus: "Operasional & analitik bisnis",
    technologies: ["PHP", "Laravel", "React", "MySQL", "Machine Learning"],
    features: [
      "Kasir/POS, inventaris, produksi, dan resep",
      "Pengelolaan keuangan, pelanggan, dan pegawai",
      "Laporan pendapatan, transaksi, laba bersih, dan tren penjualan",
      "Rekomendasi produk dan prediksi penjualan berbasis machine learning",
    ],
    contributions: [
      "Membangun platform terintegrasi untuk manajemen operasional UMKM",
      "Mengembangkan modul kasir, inventaris, produksi, keuangan, pelanggan, dan pegawai",
      "Mengintegrasikan rekomendasi produk dan prediksi penjualan dengan machine learning",
    ],
  },
];
