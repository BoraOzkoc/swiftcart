import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [],
  images: {
    domains: ["via.placeholder.com"],
  },
};

export default nextConfig;
