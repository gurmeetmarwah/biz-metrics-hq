import type { MetadataRoute } from "next";
import { getAllSitemapPaths } from "@/lib/sitemap-paths";
import { absoluteUrl } from "@/lib/site-url";

export const SITEMAP_LAST_MODIFIED = new Date("2026-07-03");

export function getSitemapEntries(): MetadataRoute.Sitemap {
  return getAllSitemapPaths().map((path) => ({
    url: absoluteUrl(path),
    lastModified: SITEMAP_LAST_MODIFIED,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").filter(Boolean).length <= 2 ? 0.8 : 0.6,
  }));
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function formatLastModified(value: MetadataRoute.Sitemap[number]["lastModified"]): string {
  if (!value) return SITEMAP_LAST_MODIFIED.toISOString().slice(0, 10);
  const date = value instanceof Date ? value : new Date(value);
  return date.toISOString().slice(0, 10);
}

export function buildSitemapXml(entries: MetadataRoute.Sitemap = getSitemapEntries()): string {
  const urls = entries
    .map((entry) => {
      const loc = escapeXml(entry.url);
      const lastmod = formatLastModified(entry.lastModified);
      const changefreq = entry.changeFrequency ?? "monthly";
      const priority =
        typeof entry.priority === "number" ? entry.priority.toFixed(1) : "0.5";

      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>",
    "",
  ].join("\n");
}
