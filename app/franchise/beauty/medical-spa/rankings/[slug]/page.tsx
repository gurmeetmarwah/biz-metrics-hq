import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BeautyFranchiseRankingPage } from "@/components/franchise/BeautyFranchiseRankingPage";
import {
  medicalSpaFranchiseRankings,
  medicalSpaFranchiseRankingSlugs,
} from "@/lib/franchise/beauty/medical-spa-rankings";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return medicalSpaFranchiseRankingSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ranking = medicalSpaFranchiseRankings[slug];
  if (!ranking) return { title: "Franchise Ranking Not Found | BizMetricsHQ" };
  return {
    title: `${ranking.meta.title} | BizMetricsHQ`,
    description: ranking.meta.description,
  };
}

export default async function MedicalSpaFranchiseRankingRoute({ params }: PageProps) {
  const { slug } = await params;
  const ranking = medicalSpaFranchiseRankings[slug];
  if (!ranking) notFound();

  const siblings = medicalSpaFranchiseRankingSlugs
    .filter((s) => s !== slug)
    .map((s) => medicalSpaFranchiseRankings[s].meta);

  return (
    <BeautyFranchiseRankingPage
      ranking={ranking}
      siblingRankings={siblings}
      guideHref="/franchise/beauty/medical-spa/"
      guideLabel="Medical Spa Franchise Guide"
      industryNavLabel="Medical Spa Franchise"
      siblingsHeading="More Medical Spa Franchise Rankings"
      finalCtaTitle="Ready to compare medical spa franchise opportunities?"
    />
  );
}
