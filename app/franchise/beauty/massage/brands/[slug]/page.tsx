import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FranchiseBrandStubPage } from "@/components/franchise/FranchiseBrandStubPage";
import {
  massageFranchiseBrandNames,
  massageFranchiseBrandSlugs,
} from "@/lib/franchise/beauty/massage-franchise";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return massageFranchiseBrandSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const name = massageFranchiseBrandNames[slug as (typeof massageFranchiseBrandSlugs)[number]];
  if (!name) return { title: "Franchise Brand | BizMetricsHQ" };
  return {
    title: `${name} Franchise Costs, Fees & ROI | BizMetricsHQ`,
    description: `${name} franchise investment, royalty fees, unit economics, and owner earnings — part of the BizMetricsHQ massage franchise guide.`,
  };
}

export default async function MassageFranchiseBrandPage({ params }: Props) {
  const { slug } = await params;
  const name = massageFranchiseBrandNames[slug as (typeof massageFranchiseBrandSlugs)[number]];
  if (!name) notFound();

  return (
    <FranchiseBrandStubPage
      brandName={name}
      industryLabel="Massage"
      guideHref="/franchise/beauty/massage/"
      guideLabel="Massage Franchise Guide"
    />
  );
}
