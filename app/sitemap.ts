import type { MetadataRoute } from "next";
import { getAllSitemapPaths } from "@/lib/sitemap-paths";
import { absoluteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-01");

  return getAllSitemapPaths().map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").filter(Boolean).length <= 2 ? 0.8 : 0.6,
  }));
}
