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

<<<<<<< HEAD
export default nextConfig;
=======
export default nextConfig;
>>>>>>> f4d8eab25006e4e2b248506d546d84685c571b7b
