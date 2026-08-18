import type { Metadata } from "next";

export type FranchiseGuideMetaInput = {
  /** SERP / H1 title — front-load high-CTR long-tails */
  title: string;
  /** Answer-led meta description with numbers + brands when possible */
  description: string;
  keywords: readonly string[];
};

/**
 * Shared SERP metadata for franchise guide pages — long-tail titles,
 * CTR-oriented descriptions, and keyword arrays.
 */
export function buildFranchiseGuideMetadata({
  title,
  description,
  keywords,
}: FranchiseGuideMetaInput): Metadata {
  return {
    title: `${title} | BizMetricsHQ`,
    description,
    keywords: [...keywords],
  };
}
