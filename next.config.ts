import type { NextConfig } from "next";

// Baseline security headers applied to every response. This is a static,
// cookieless marketing site (no auth, no user sessions), so the set is
// intentionally lean: hardening against MIME sniffing, clickjacking and
// referrer/permission leakage without breaking Vercel Analytics or fonts.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
