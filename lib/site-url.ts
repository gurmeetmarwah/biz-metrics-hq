/** Canonical origin without trailing slash (e.g. https://www.bizmetricshq.com). */
export function getSiteOrigin(): string {
  const explicit = process.env.SITE_URL ?? process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  if (process.env.GITHUB_PAGES === "true") {
    return "https://gurmeetmarwah.github.io";
  }

  return "https://www.bizmetricshq.com";
}

/** Base path prefix for GitHub Pages project sites (e.g. /biz-metrics-hq). Empty for custom domains. */
export function getBasePath(): string {
  if (process.env.BASE_PATH !== undefined) {
    return process.env.BASE_PATH;
  }

  if (process.env.GITHUB_PAGES === "true") {
    return "/biz-metrics-hq";
  }

  return "";
}

/** Full site URL including optional base path — use for sitemap and robots. */
export function getSiteUrl(): string {
  const origin = getSiteOrigin();
  const basePath = getBasePath();
  if (!basePath) return origin;
  return `${origin}${basePath}`;
}

/** Build an absolute URL for a site path (path must start with /). */
export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const withSlash = normalized.endsWith("/") ? normalized : `${normalized}/`;
  return `${getSiteUrl()}${withSlash}`;
}
