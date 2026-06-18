import type { NextConfig } from "next";

// Set GITHUB_PAGES=true in CI for project sites (username.github.io/repo-name/).
// For a custom domain or user site (username.github.io), set BASE_PATH= instead.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath =
  process.env.BASE_PATH ?? (isGithubPages ? "/biz-metrics-hq" : "");

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
