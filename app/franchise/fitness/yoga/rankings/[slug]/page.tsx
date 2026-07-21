import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BeautyFranchiseRankingPage } from "@/components/franchise/BeautyFranchiseRankingPage";
import {
  yogaFranchiseRankings,
  yogaFranchiseRankingSlugs,
} from "@/lib/franchise/fitness/yoga-rankings";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return yogaFranchiseRankingSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ranking = yogaFranchiseRankings[slug];
  if (!ranking) return { title: "Franchise Ranking Not Found | BizMetricsHQ" };
  return {
    title: `${ranking.meta.title} | BizMetricsHQ`,
    description: ranking.meta.description,
  };
}

export default async function YogaFranchiseRankingRoute({ params }: PageProps) {
  const { slug } = await params;
  const ranking = yogaFranchiseRankings[slug];
  if (!ranking) notFound();

  const siblings = yogaFranchiseRankingSlugs
    .filter((s) => s !== slug)
    .map((s) => yogaFranchiseRankings[s].meta);

  return (
    <BeautyFranchiseRankingPage
      ranking={ranking}
      siblingRankings={siblings}
      guideHref="/franchise/fitness/yoga/"
      guideLabel="Yoga Franchise Guide"
      industryNavLabel="Yoga Franchise"
      siblingsHeading="More Yoga Franchise Rankings"
      finalCtaTitle="Ready to compare yoga franchise opportunities?"
    />
  );
}
