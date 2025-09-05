import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow all hosts for Replit proxy environment
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
  // Configure for Replit environment - allow all dev origins
  allowedDevOrigins: [
    "127.0.0.1", 
    "localhost",
    "*.replit.dev",
    "*.repl.co",
  ],
  // Enable experimental features for better compatibility
  experimental: {
    esmExternals: true,
  },
};

export default nextConfig;
