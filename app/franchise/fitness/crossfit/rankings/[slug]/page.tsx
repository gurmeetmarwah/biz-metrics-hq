import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BeautyFranchiseRankingPage } from "@/components/franchise/BeautyFranchiseRankingPage";
import {
  crossfitFranchiseRankings,
  crossfitFranchiseRankingSlugs,
} from "@/lib/franchise/fitness/crossfit-rankings";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return crossfitFranchiseRankingSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ranking = crossfitFranchiseRankings[slug];
  if (!ranking) return { title: "Franchise Ranking Not Found | BizMetricsHQ" };
  return {
    title: `${ranking.meta.title} | BizMetricsHQ`,
    description: ranking.meta.description,
  };
}

export default async function CrossfitFranchiseRankingRoute({ params }: PageProps) {
  const { slug } = await params;
  const ranking = crossfitFranchiseRankings[slug];
  if (!ranking) notFound();

  const siblings = crossfitFranchiseRankingSlugs
    .filter((s) => s !== slug)
    .map((s) => crossfitFranchiseRankings[s].meta);

  return (
    <BeautyFranchiseRankingPage
      ranking={ranking}
      siblingRankings={siblings}
      guideHref="/franchise/fitness/crossfit/"
      guideLabel="CrossFit Franchise Guide"
      industryNavLabel="CrossFit Franchise"
      siblingsHeading="More CrossFit Franchise Rankings"
      finalCtaTitle="Ready to compare CrossFit franchise opportunities?"
    />
  );
}
