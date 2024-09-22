/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"], // No need for localhost for local images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
    unoptimized: true, // Add this line to prevent optimization for local images
  },
};

module.exports = nextConfig;
