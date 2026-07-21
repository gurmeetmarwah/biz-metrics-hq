import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FranchiseBrandStubPage } from "@/components/franchise/FranchiseBrandStubPage";
import {
  yogaFranchiseBrandNames,
  yogaFranchiseBrandSlugs,
} from "@/lib/franchise/fitness/yoga-franchise";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return yogaFranchiseBrandSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const name = yogaFranchiseBrandNames[slug as (typeof yogaFranchiseBrandSlugs)[number]];
  if (!name) return { title: "Franchise Brand | BizMetricsHQ" };
  return {
    title: `${name} Franchise Costs, Fees & ROI | BizMetricsHQ`,
    description: `${name} franchise investment, royalty fees, unit economics, and owner earnings — part of the BizMetricsHQ yoga franchise guide.`,
  };
}

export default async function YogaFranchiseBrandPage({ params }: Props) {
  const { slug } = await params;
  const name = yogaFranchiseBrandNames[slug as (typeof yogaFranchiseBrandSlugs)[number]];
  if (!name) notFound();

  return (
    <FranchiseBrandStubPage
      brandName={name}
      industryLabel="Yoga"
      guideHref="/franchise/fitness/yoga/"
      guideLabel="Yoga Franchise Guide"
    />
  );
}
