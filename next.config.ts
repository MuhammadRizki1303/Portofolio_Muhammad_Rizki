import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  compress: true,
  devIndicators: false,
  agentRules: false,
  experimental: {
    optimizePackageImports: [
      "react-icons",
      "framer-motion",
      "@tsparticles/react",
      "@tsparticles/engine",
    ],
  },
  images: {
    qualities: [75, 95],
  },
};

export default nextConfig;
