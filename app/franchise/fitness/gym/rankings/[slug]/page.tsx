import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BeautyFranchiseRankingPage } from "@/components/franchise/BeautyFranchiseRankingPage";
import {
  gymFranchiseRankings,
  gymFranchiseRankingSlugs,
} from "@/lib/franchise/fitness/gym-rankings";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return gymFranchiseRankingSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ranking = gymFranchiseRankings[slug];
  if (!ranking) return { title: "Franchise Ranking Not Found | BizMetricsHQ" };
  return {
    title: `${ranking.meta.title} | BizMetricsHQ`,
    description: ranking.meta.description,
  };
}

export default async function GymFranchiseRankingRoute({ params }: PageProps) {
  const { slug } = await params;
  const ranking = gymFranchiseRankings[slug];
  if (!ranking) notFound();

  const siblings = gymFranchiseRankingSlugs
    .filter((s) => s !== slug)
    .map((s) => gymFranchiseRankings[s].meta);

  return (
    <BeautyFranchiseRankingPage
      ranking={ranking}
      siblingRankings={siblings}
      guideHref="/franchise/fitness/gym/"
      guideLabel="Gym Franchise Guide"
      industryNavLabel="Gym Franchise"
      siblingsHeading="More Gym Franchise Rankings"
      finalCtaTitle="Ready to compare gym franchise opportunities?"
    />
  );
}
