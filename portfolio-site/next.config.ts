import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['NEXT_PUBLIC_URL'], // replace with your actual Supabase domain
  },
};

export default nextConfig;
