import type { NextConfig } from "next";
import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'aceternity.com'
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com'
      }
    ],
  },
  experimental: {
    mdxRs: true,
  },
  require: ['./scripts/generateSitemap.js'],
};

const withMDX = createMDX()

export default withMDX(nextConfig);