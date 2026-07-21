import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BeautyFranchiseRankingPage } from "@/components/franchise/BeautyFranchiseRankingPage";
import {
  pilatesFranchiseRankings,
  pilatesFranchiseRankingSlugs,
} from "@/lib/franchise/fitness/pilates-rankings";

type PageProps = { params: Promise<{ slug: string }> };

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
      finalCtaTitle="Ready to compare Pilates franchise opportunities?"
    />
  );
}
