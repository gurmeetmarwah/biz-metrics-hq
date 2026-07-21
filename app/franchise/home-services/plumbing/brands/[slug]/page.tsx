import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FranchiseBrandStubPage } from "@/components/franchise/FranchiseBrandStubPage";
import {
  plumbingFranchiseBrandNames,
  plumbingFranchiseBrandSlugs,
} from "@/lib/franchise/home-services/plumbing-franchise";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return plumbingFranchiseBrandSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const name = plumbingFranchiseBrandNames[slug as (typeof plumbingFranchiseBrandSlugs)[number]];
  if (!name) return { title: "Franchise Brand | BizMetricsHQ" };
  return {
    title: `${name} Franchise Costs, Fees & ROI | BizMetricsHQ`,
    description: `${name} franchise investment, royalty fees, unit economics, and owner earnings — part of the BizMetricsHQ plumbing franchise guide.`,
  };
}

export default async function PlumbingFranchiseBrandPage({ params }: Props) {
  const { slug } = await params;
  const name = plumbingFranchiseBrandNames[slug as (typeof plumbingFranchiseBrandSlugs)[number]];
  if (!name) notFound();

  return (
    <FranchiseBrandStubPage
      brandName={name}
      industryLabel="Plumbing"
      guideHref="/franchise/home-services/plumbing/"
      guideLabel="Plumbing Franchise Guide"
    />
  );
}
