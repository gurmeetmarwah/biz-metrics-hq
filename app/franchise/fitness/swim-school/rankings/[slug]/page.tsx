import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BeautyFranchiseRankingPage } from "@/components/franchise/BeautyFranchiseRankingPage";
import {
  swimSchoolFranchiseRankings,
  swimSchoolFranchiseRankingSlugs,
} from "@/lib/franchise/fitness/swim-school-rankings";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return swimSchoolFranchiseRankingSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ranking = swimSchoolFranchiseRankings[slug];
  if (!ranking) return { title: "Franchise Ranking Not Found | BizMetricsHQ" };
  return {
    title: `${ranking.meta.title} | BizMetricsHQ`,
    description: ranking.meta.description,
  };
}

export default async function SwimSchoolFranchiseRankingRoute({ params }: PageProps) {
  const { slug } = await params;
  const ranking = swimSchoolFranchiseRankings[slug];
  if (!ranking) notFound();

  const siblings = swimSchoolFranchiseRankingSlugs
    .filter((s) => s !== slug)
    .map((s) => swimSchoolFranchiseRankings[s].meta);

  return (
    <BeautyFranchiseRankingPage
      ranking={ranking}
      siblingRankings={siblings}
      guideHref="/franchise/fitness/swim-school/"
      guideLabel="Swim School Franchise Guide"
      industryNavLabel="Swim School Franchise"
      siblingsHeading="More Swim School Franchise Rankings"
      finalCtaTitle="Ready to compare swim school franchise opportunities?"
    />
  );
}
