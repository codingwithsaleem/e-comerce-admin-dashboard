import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images:{
    domains: ['https://images.unsplash.com', 'images.unsplash.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "**"
      }
    ]
  }
};

export default nextConfig;
