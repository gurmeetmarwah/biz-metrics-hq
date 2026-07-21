import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FranchiseBrandStubPage } from "@/components/franchise/FranchiseBrandStubPage";
import {
  pestControlFranchiseBrandNames,
  pestControlFranchiseBrandSlugs,
} from "@/lib/franchise/home-services/pest-control-franchise";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return pestControlFranchiseBrandSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const name = pestControlFranchiseBrandNames[slug as (typeof pestControlFranchiseBrandSlugs)[number]];
  if (!name) return { title: "Franchise Brand | BizMetricsHQ" };
  return {
    title: `${name} Franchise Costs, Fees & ROI | BizMetricsHQ`,
    description: `${name} franchise investment, royalty fees, unit economics, and owner earnings — part of the BizMetricsHQ Pest Control franchise guide.`,
  };
}

export default async function PestControlFranchiseBrandPage({ params }: Props) {
  const { slug } = await params;
  const name = pestControlFranchiseBrandNames[slug as (typeof pestControlFranchiseBrandSlugs)[number]];
  if (!name) notFound();

  return (
    <FranchiseBrandStubPage
      brandName={name}
      industryLabel="Pest Control"
      guideHref="/franchise/home-services/pest-control/"
      guideLabel="Pest Control Franchise Guide"
    />
  );
}
