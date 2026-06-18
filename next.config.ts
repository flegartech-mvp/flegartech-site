import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Project screenshots are already converted to right-sized, quality-tuned
    // WebP under /public/projects, so the on-demand optimizer adds latency and
    // upscaling for no quality gain. Serving them directly keeps every image a
    // plain static asset — no /_next/image round-trip that can race or 404.
    // next/image still provides lazy loading and intrinsic width/height (no CLS).
    unoptimized: true,
  },
};

export default nextConfig;
