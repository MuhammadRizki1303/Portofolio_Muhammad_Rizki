import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  compress: true,
  devIndicators: false,
  agentRules: false,
  images: {
    qualities: [75, 95],
  },
};

export default nextConfig;
