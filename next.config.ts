import type { NextConfig } from "next";

// Set GITHUB_PAGES=true for project sites (username.github.io/repo-name/) — adds /biz-metrics-hq basePath.
// For a custom domain, set BASE_PATH= and SITE_URL=https://www.bizmetricshq.com in CI instead.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath =
  process.env.BASE_PATH !== undefined
    ? process.env.BASE_PATH
    : isGithubPages
      ? "/biz-metrics-hq"
      : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
