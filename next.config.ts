import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "*.railway.app",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "4001",
      },
    ],
  },
};

export default nextConfig;
