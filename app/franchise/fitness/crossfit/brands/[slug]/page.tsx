import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FranchiseBrandStubPage } from "@/components/franchise/FranchiseBrandStubPage";
import {
  crossfitFranchiseBrandNames,
  crossfitFranchiseBrandSlugs,
} from "@/lib/franchise/fitness/crossfit-franchise";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return crossfitFranchiseBrandSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const name = crossfitFranchiseBrandNames[slug as (typeof crossfitFranchiseBrandSlugs)[number]];
  if (!name) return { title: "Franchise Brand | BizMetricsHQ" };
  return {
    title: `${name} Franchise Costs, Fees & ROI | BizMetricsHQ`,
    description: `${name} franchise investment, fees, unit economics, and owner earnings — part of the BizMetricsHQ CrossFit franchise guide.`,
  };
}

export default async function CrossfitFranchiseBrandPage({ params }: Props) {
  const { slug } = await params;
  const name = crossfitFranchiseBrandNames[slug as (typeof crossfitFranchiseBrandSlugs)[number]];
  if (!name) notFound();

  return (
    <FranchiseBrandStubPage
      brandName={name}
      industryLabel="CrossFit"
      guideHref="/franchise/fitness/crossfit/"
      guideLabel="CrossFit Franchise Guide"
    />
  );
}
