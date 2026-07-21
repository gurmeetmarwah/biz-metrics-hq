import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FranchiseBrandStubPage } from "@/components/franchise/FranchiseBrandStubPage";
import {
  cleaningFranchiseBrandNames,
  cleaningFranchiseBrandSlugs,
} from "@/lib/franchise/home-services/cleaning-franchise";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cleaningFranchiseBrandSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const name = cleaningFranchiseBrandNames[slug as (typeof cleaningFranchiseBrandSlugs)[number]];
  if (!name) return { title: "Franchise Brand | BizMetricsHQ" };
  return {
    title: `${name} Franchise Costs, Fees & ROI | BizMetricsHQ`,
    description: `${name} franchise investment, royalty fees, unit economics, and owner earnings — part of the BizMetricsHQ Cleaning franchise guide.`,
  };
}

export default async function CleaningFranchiseBrandPage({ params }: Props) {
  const { slug } = await params;
  const name = cleaningFranchiseBrandNames[slug as (typeof cleaningFranchiseBrandSlugs)[number]];
  if (!name) notFound();

  return (
    <FranchiseBrandStubPage
      brandName={name}
      industryLabel="Cleaning"
      guideHref="/franchise/home-services/cleaning/"
      guideLabel="Cleaning Franchise Guide"
    />
  );
}
