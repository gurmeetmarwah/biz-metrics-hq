import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BeautyFranchiseRankingPage } from "@/components/franchise/BeautyFranchiseRankingPage";
import {
  massageFranchiseRankings,
  massageFranchiseRankingSlugs,
} from "@/lib/franchise/beauty/massage-rankings";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return massageFranchiseRankingSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ranking = massageFranchiseRankings[slug];
  if (!ranking) return { title: "Franchise Ranking Not Found | BizMetricsHQ" };
  return {
    title: `${ranking.meta.title} | BizMetricsHQ`,
    description: ranking.meta.description,
  };
}

export default async function MassageFranchiseRankingRoute({ params }: PageProps) {
  const { slug } = await params;
  const ranking = massageFranchiseRankings[slug];
  if (!ranking) notFound();

  const siblings = massageFranchiseRankingSlugs
    .filter((s) => s !== slug)
    .map((s) => massageFranchiseRankings[s].meta);

  return (
    <BeautyFranchiseRankingPage
      ranking={ranking}
      siblingRankings={siblings}
      guideHref="/franchise/beauty/massage/"
      guideLabel="Massage Franchise Guide"
      industryNavLabel="Massage Franchise"
      siblingsHeading="More Massage Franchise Rankings"
      finalCtaTitle="Ready to compare massage franchise opportunities?"
    />
  );
}
