import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BeautyFranchiseRankingPage } from "@/components/franchise/BeautyFranchiseRankingPage";
import {
  cleaningFranchiseRankings,
  cleaningFranchiseRankingSlugs,
} from "@/lib/franchise/home-services/cleaning-rankings";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cleaningFranchiseRankingSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ranking = cleaningFranchiseRankings[slug];
  if (!ranking) return { title: "Franchise Ranking Not Found | BizMetricsHQ" };
  return {
    title: `${ranking.meta.title} | BizMetricsHQ`,
    description: ranking.meta.description,
  };
}

export default async function CleaningFranchiseRankingRoute({ params }: PageProps) {
  const { slug } = await params;
  const ranking = cleaningFranchiseRankings[slug];
  if (!ranking) notFound();

  const siblings = cleaningFranchiseRankingSlugs
    .filter((s) => s !== slug)
    .map((s) => cleaningFranchiseRankings[s].meta);

  return (
    <BeautyFranchiseRankingPage
      ranking={ranking}
      siblingRankings={siblings}
      guideHref="/franchise/home-services/cleaning/"
      guideLabel="Cleaning Franchise Guide"
      industryNavLabel="Cleaning Franchise"
      siblingsHeading="More Cleaning Franchise Rankings"
      finalCtaTitle="Ready to compare cleaning franchise opportunities?"
    />
  );
}
