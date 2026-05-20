import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // This is required for Tailwind CSS v4 with Next.js 16.2.6 and Turbopack
    // It ensures that Tailwind CSS is processed correctly.
    optimizeCss: true,
  },
};

export default nextConfig;
