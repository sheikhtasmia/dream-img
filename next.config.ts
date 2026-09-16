import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // picsum.photos serves any leftover placeholder photography —
        // remove once every image is a real, final photo.
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        // imgbb's direct image-hosting domain — used so real wedding
        // photos can live off-repo instead of bloating the git history.
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        // imgbb also serves direct links from this variant domain.
        hostname: "i.ibb.co.com",
      },
    ],
  },
};


export default nextConfig;

