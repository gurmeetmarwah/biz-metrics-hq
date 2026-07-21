import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FranchiseBrandStubPage } from "@/components/franchise/FranchiseBrandStubPage";
import {
  pilatesFranchiseBrandNames,
  pilatesFranchiseBrandSlugs,
} from "@/lib/franchise/fitness/pilates-franchise";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return pilatesFranchiseBrandSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const name = pilatesFranchiseBrandNames[slug as (typeof pilatesFranchiseBrandSlugs)[number]];
  if (!name) return { title: "Franchise Brand | BizMetricsHQ" };
  return {
    title: `${name} Franchise Costs, Fees & ROI | BizMetricsHQ`,
    description: `${name} franchise investment, royalty fees, unit economics, and owner earnings — part of the BizMetricsHQ Pilates franchise guide.`,
  };
}

export default async function PilatesFranchiseBrandPage({ params }: Props) {
  const { slug } = await params;
  const name = pilatesFranchiseBrandNames[slug as (typeof pilatesFranchiseBrandSlugs)[number]];
  if (!name) notFound();

  return (
    <FranchiseBrandStubPage
      brandName={name}
      industryLabel="Pilates"
      guideHref="/franchise/fitness/pilates/"
      guideLabel="Pilates Franchise Guide"
    />
  );
}
