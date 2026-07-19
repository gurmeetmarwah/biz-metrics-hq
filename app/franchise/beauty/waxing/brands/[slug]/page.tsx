import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FranchiseBrandStubPage } from "@/components/franchise/FranchiseBrandStubPage";
import {
  waxingFranchiseBrandNames,
  waxingFranchiseBrandSlugs,
} from "@/lib/franchise/beauty/waxing-franchise";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return waxingFranchiseBrandSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const name = waxingFranchiseBrandNames[slug as (typeof waxingFranchiseBrandSlugs)[number]];
  if (!name) return { title: "Franchise Brand | BizMetricsHQ" };
  return {
    title: `${name} Franchise Costs, Fees & ROI | BizMetricsHQ`,
    description: `${name} franchise investment, royalty fees, unit economics, and owner earnings — part of the BizMetricsHQ waxing franchise guide.`,
  };
}

export default async function WaxingFranchiseBrandPage({ params }: Props) {
  const { slug } = await params;
  const name = waxingFranchiseBrandNames[slug as (typeof waxingFranchiseBrandSlugs)[number]];
  if (!name) notFound();

  return (
    <FranchiseBrandStubPage
      brandName={name}
      industryLabel="Waxing"
      guideHref="/franchise/beauty/waxing/"
      guideLabel="Waxing Franchise Guide"
    />
  );
}
