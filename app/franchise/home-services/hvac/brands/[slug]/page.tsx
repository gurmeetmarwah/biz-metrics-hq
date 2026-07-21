import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FranchiseBrandStubPage } from "@/components/franchise/FranchiseBrandStubPage";
import {
  hvacFranchiseBrandNames,
  hvacFranchiseBrandSlugs,
} from "@/lib/franchise/home-services/hvac-franchise";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return hvacFranchiseBrandSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const name = hvacFranchiseBrandNames[slug as (typeof hvacFranchiseBrandSlugs)[number]];
  if (!name) return { title: "Franchise Brand | BizMetricsHQ" };
  return {
    title: `${name} Franchise Costs, Fees & ROI | BizMetricsHQ`,
    description: `${name} franchise investment, royalty fees, unit economics, and owner earnings — part of the BizMetricsHQ HVAC franchise guide.`,
  };
}

export default async function HvacFranchiseBrandPage({ params }: Props) {
  const { slug } = await params;
  const name = hvacFranchiseBrandNames[slug as (typeof hvacFranchiseBrandSlugs)[number]];
  if (!name) notFound();

  return (
    <FranchiseBrandStubPage
      brandName={name}
      industryLabel="HVAC"
      guideHref="/franchise/home-services/hvac/"
      guideLabel="HVAC Franchise Guide"
    />
  );
}
