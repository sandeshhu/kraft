import type { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: ['k72.ca',"picsum.photos"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'k72.ca',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig;