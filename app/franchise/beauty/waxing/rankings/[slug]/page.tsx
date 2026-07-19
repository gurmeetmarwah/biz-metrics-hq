import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BeautyFranchiseRankingPage } from "@/components/franchise/BeautyFranchiseRankingPage";
import {
  waxingFranchiseRankings,
  waxingFranchiseRankingSlugs,
} from "@/lib/franchise/beauty/waxing-rankings";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return waxingFranchiseRankingSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ranking = waxingFranchiseRankings[slug];
  if (!ranking) return { title: "Franchise Ranking Not Found | BizMetricsHQ" };
  return {
    title: `${ranking.meta.title} | BizMetricsHQ`,
    description: ranking.meta.description,
  };
}

export default async function WaxingFranchiseRankingRoute({ params }: PageProps) {
  const { slug } = await params;
  const ranking = waxingFranchiseRankings[slug];
  if (!ranking) notFound();

  const siblings = waxingFranchiseRankingSlugs
    .filter((s) => s !== slug)
    .map((s) => waxingFranchiseRankings[s].meta);

  return (
    <BeautyFranchiseRankingPage
      ranking={ranking}
      siblingRankings={siblings}
      guideHref="/franchise/beauty/waxing/"
      guideLabel="Waxing Franchise Guide"
      industryNavLabel="Waxing Franchise"
      siblingsHeading="More Waxing Franchise Rankings"
      finalCtaTitle="Ready to compare waxing franchise opportunities?"
    />
  );
}
