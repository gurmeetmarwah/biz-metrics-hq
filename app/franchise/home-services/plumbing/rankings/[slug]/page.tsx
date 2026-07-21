import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BeautyFranchiseRankingPage } from "@/components/franchise/BeautyFranchiseRankingPage";
import {
  plumbingFranchiseRankings,
  plumbingFranchiseRankingSlugs,
} from "@/lib/franchise/home-services/plumbing-rankings";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return plumbingFranchiseRankingSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ranking = plumbingFranchiseRankings[slug];
  if (!ranking) return { title: "Franchise Ranking Not Found | BizMetricsHQ" };
  return {
    title: `${ranking.meta.title} | BizMetricsHQ`,
    description: ranking.meta.description,
  };
}

export default async function PlumbingFranchiseRankingRoute({ params }: PageProps) {
  const { slug } = await params;
  const ranking = plumbingFranchiseRankings[slug];
  if (!ranking) notFound();

  const siblings = plumbingFranchiseRankingSlugs
    .filter((s) => s !== slug)
    .map((s) => plumbingFranchiseRankings[s].meta);

  return (
    <BeautyFranchiseRankingPage
      ranking={ranking}
      siblingRankings={siblings}
      guideHref="/franchise/home-services/plumbing/"
      guideLabel="Plumbing Franchise Guide"
      industryNavLabel="Plumbing Franchise"
      siblingsHeading="More Plumbing Franchise Rankings"
      finalCtaTitle="Ready to compare plumbing franchise opportunities?"
    />
  );
}
