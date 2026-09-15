import type { MetadataRoute } from "next";
import { albums } from "@/lib/albums";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/frames-films", "/packages", "/about", "/contact"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const albumRoutes = albums.map((album) => ({
    url: `${siteConfig.url}/frames-films/${album.slug}`,
    lastModified: new Date(album.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...albumRoutes];
}