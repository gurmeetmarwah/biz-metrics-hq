import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BeautyFranchiseRankingPage } from "@/components/franchise/BeautyFranchiseRankingPage";
import {
  pilatesFranchiseRankings,
  pilatesFranchiseRankingSlugs,
} from "@/lib/franchise/fitness/pilates-rankings";

type PageProps = { params: Promise<{ slug: string }> };

const rankingKeywords: Record<string, string[]> = {
  "best-pilates-franchises-2026": [
    "best franchise for pilates",
    "best pilates franchises 2026",
    "best pilates franchise to buy",
    "top pilates franchises",
    "club pilates vs solidcore",
  ],
  "lowest-cost-pilates-franchises-2026": [
    "cheapest pilates franchise",
    "lowest cost pilates franchises",
    "pilates franchise under 400k",
  ],
  "highest-revenue-pilates-franchises-2026": [
    "highest roi pilates franchise",
    "pilates franchise revenue",
    "club pilates franchise revenue",
  ],
  "best-franchise-for-first-time-owners-2026": [
    "best pilates franchise for first-time owners",
    "best franchise for pilates beginners",
  ],
  "most-profitable-pilates-franchises-2026": [
    "most profitable pilates franchise",
    "pilates franchise profit margin",
  ],
};

export function generateStaticParams() {
  return pilatesFranchiseRankingSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ranking = pilatesFranchiseRankings[slug];
  if (!ranking) return { title: "Franchise Ranking Not Found | BizMetricsHQ" };
  return {
    title: `${ranking.meta.title} | BizMetricsHQ`,
    description: ranking.meta.description,
    keywords: rankingKeywords[slug] ?? [
      "pilates franchise",
      "pilates franchise rankings",
      "best franchise for pilates",
    ],
  };
}

export default async function PilatesFranchiseRankingRoute({ params }: PageProps) {
  const { slug } = await params;
  const ranking = pilatesFranchiseRankings[slug];
  if (!ranking) notFound();

  const siblings = pilatesFranchiseRankingSlugs
    .filter((s) => s !== slug)
    .map((s) => pilatesFranchiseRankings[s].meta);

  return (
    <BeautyFranchiseRankingPage
      ranking={ranking}
      siblingRankings={siblings}
      guideHref="/franchise/fitness/pilates/"
      guideLabel="Pilates Franchise Guide"
      industryNavLabel="Pilates Franchise"
      siblingsHeading="More Pilates Franchise Rankings"
      finalCtaTitle="Ready to find the best franchise for Pilates?"
    />
  );
}
