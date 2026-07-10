import type { MetadataRoute } from "next";
import { getSitemapEntries } from "@/lib/sitemap-xml";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return getSitemapEntries();
}
