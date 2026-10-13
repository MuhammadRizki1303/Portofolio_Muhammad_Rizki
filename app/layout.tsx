import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import { Toaster } from "react-hot-toast";

import Header from "@/components/Header";
import Nav from "@/components/Nav";
import TopLeftImg from "@/components/TopLeftImg";

import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora-family",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Muhammad Rizki | Portofolio",
  description:
    "Portofolio resmi Muhammad Rizki - Mahasiswa Teknik Informatika & Web Developer.",
  keywords: [
    "react",
    "next",
    "nextjs",
    "html",
    "css",
    "javascript",
    "js",
    "modern-ui",
    "modern-ux",
    "portfolio",
    "framer-motion",
    "react-hot-toast",
    "resend",
    "3d-website",
    "particle-effect",
  ],
  authors: [{ name: "Muhammad Rizki" }],
  other: {
    "theme-color": "#f13024",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-full xl:h-full">
      <body
        className={`${sora.variable} font-sora page bg-site text-white bg-cover bg-no-repeat relative`}
      >
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
        <aside>
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: "#393a47",
                color: "#fff",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              },
            }}
          />
        </aside>
      </body>
    </html>
  );
}
