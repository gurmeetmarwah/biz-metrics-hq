import { getAllSitemapPaths } from "@/lib/sitemap-paths";
import { buildBasePlatformStats, buildPlatformQuickStats } from "@/lib/platform-stats";

const base = buildBasePlatformStats();

/** Full platform counts including published pages from the sitemap. Server-only. */
export const platformStats = {
  ...base,
  dataPages: getAllSitemapPaths().length,
} as const;

export const platformQuickStats = buildPlatformQuickStats(platformStats);
