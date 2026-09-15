import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // picsum.photos serves the placeholder photography used throughout
    // this demo — remove once real photos (local files or a CDN) are in place.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;