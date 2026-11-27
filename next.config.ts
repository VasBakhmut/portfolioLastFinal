import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/guides/wordpress-vs-shopify-vs-nextjs-australia",
        destination: "/guides/wordpress-vs-shopify-vs-custom-website-australia",
        permanent: true,
      },
      {
        source: "/services/web-design/brisbane",
        destination: "/locations/brisbane",
        permanent: true,
      },
      {
        source: "/services/web-design/perth",
        destination: "/locations/perth",
        permanent: true,
      },
      {
        source: "/services/web-design/adelaide",
        destination: "/locations/adelaide",
        permanent: true,
      },
      {
        source: "/services/web-design/canberra",
        destination: "/locations/canberra",
        permanent: true,
      },
      {
        source: "/services/web-design/gold-coast",
        destination: "/locations/gold-coast",
        permanent: true,
      },
      {
        source: "/services/web-design/hobart",
        destination: "/locations/hobart",
        permanent: true,
      },
      {
        source: "/services/shopify-stores/brisbane",
        destination: "/locations/brisbane",
        permanent: true,
      },
      {
        source: "/services/shopify-stores/perth",
        destination: "/locations/perth",
        permanent: true,
      },
      {
        source: "/services/shopify-stores/adelaide",
        destination: "/locations/adelaide",
        permanent: true,
      },
      {
        source: "/services/shopify-stores/canberra",
        destination: "/locations/canberra",
        permanent: true,
      },
      {
        source: "/services/shopify-stores/gold-coast",
        destination: "/locations/gold-coast",
        permanent: true,
      },
      {
        source: "/services/shopify-stores/hobart",
        destination: "/locations/hobart",
        permanent: true,
      },
      {
        source: "/services/cloud-devops/melbourne",
        destination: "/services/cloud-devops",
        permanent: true,
      },
      {
        source: "/services/cloud-devops/sydney",
        destination: "/services/cloud-devops",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
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
