/** Canonical origin without trailing slash (e.g. https://bizmetricshq.com). */
export function getSiteOrigin(): string {
  const explicit = process.env.SITE_URL ?? process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  if (process.env.GITHUB_PAGES === "true") {
    return "https://gurmeetmarwah.github.io";
  }

  return "https://bizmetricshq.com";
}

/** Base path prefix for GitHub Pages project sites (e.g. /biz-metrics-hq). */
export function getBasePath(): string {
  const isGithubPages = process.env.GITHUB_PAGES === "true";
  return process.env.BASE_PATH ?? (isGithubPages ? "/biz-metrics-hq" : "");
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
