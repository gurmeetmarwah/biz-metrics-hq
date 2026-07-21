import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BeautyFranchiseRankingPage } from "@/components/franchise/BeautyFranchiseRankingPage";
import {
  hvacFranchiseRankings,
  hvacFranchiseRankingSlugs,
} from "@/lib/franchise/home-services/hvac-rankings";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return hvacFranchiseRankingSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ranking = hvacFranchiseRankings[slug];
  if (!ranking) return { title: "Franchise Ranking Not Found | BizMetricsHQ" };
  return {
    title: `${ranking.meta.title} | BizMetricsHQ`,
    description: ranking.meta.description,
  };
}

export default async function HvacFranchiseRankingRoute({ params }: PageProps) {
  const { slug } = await params;
  const ranking = hvacFranchiseRankings[slug];
  if (!ranking) notFound();

  const siblings = hvacFranchiseRankingSlugs
    .filter((s) => s !== slug)
    .map((s) => hvacFranchiseRankings[s].meta);

  return (
    <BeautyFranchiseRankingPage
      ranking={ranking}
      siblingRankings={siblings}
      guideHref="/franchise/home-services/hvac/"
      guideLabel="HVAC Franchise Guide"
      industryNavLabel="HVAC Franchise"
      siblingsHeading="More HVAC Franchise Rankings"
      finalCtaTitle="Ready to compare HVAC franchise opportunities?"
    />
  );
}
