import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BeautyFranchiseRankingPage } from "@/components/franchise/BeautyFranchiseRankingPage";
import {
  pestControlFranchiseRankings,
  pestControlFranchiseRankingSlugs,
} from "@/lib/franchise/home-services/pest-control-rankings";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return pestControlFranchiseRankingSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ranking = pestControlFranchiseRankings[slug];
  if (!ranking) return { title: "Franchise Ranking Not Found | BizMetricsHQ" };
  return {
    title: `${ranking.meta.title} | BizMetricsHQ`,
    description: ranking.meta.description,
  };
}

export default async function PestControlFranchiseRankingRoute({ params }: PageProps) {
  const { slug } = await params;
  const ranking = pestControlFranchiseRankings[slug];
  if (!ranking) notFound();

  const siblings = pestControlFranchiseRankingSlugs
    .filter((s) => s !== slug)
    .map((s) => pestControlFranchiseRankings[s].meta);

  return (
    <BeautyFranchiseRankingPage
      ranking={ranking}
      siblingRankings={siblings}
      guideHref="/franchise/home-services/pest-control/"
      guideLabel="Pest Control Franchise Guide"
      industryNavLabel="Pest Control Franchise"
      siblingsHeading="More Pest Control Franchise Rankings"
      finalCtaTitle="Ready to compare pest control franchise opportunities?"
    />
  );
}
