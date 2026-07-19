import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FranchiseBrandStubPage } from "@/components/franchise/FranchiseBrandStubPage";
import {
  medicalSpaFranchiseBrandNames,
  medicalSpaFranchiseBrandSlugs,
} from "@/lib/franchise/beauty/medical-spa-franchise";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return medicalSpaFranchiseBrandSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const name = medicalSpaFranchiseBrandNames[slug as (typeof medicalSpaFranchiseBrandSlugs)[number]];
  if (!name) return { title: "Franchise Brand | BizMetricsHQ" };
  return {
    title: `${name} Franchise Costs, Fees & ROI | BizMetricsHQ`,
    description: `${name} franchise investment, royalty fees, unit economics, and owner earnings — part of the BizMetricsHQ medical spa franchise guide.`,
  };
}

export default async function MedicalSpaFranchiseBrandPage({ params }: Props) {
  const { slug } = await params;
  const name = medicalSpaFranchiseBrandNames[slug as (typeof medicalSpaFranchiseBrandSlugs)[number]];
  if (!name) notFound();

  return (
    <FranchiseBrandStubPage
      brandName={name}
      industryLabel="Medical Spa"
      guideHref="/franchise/beauty/medical-spa/"
      guideLabel="Medical Spa Franchise Guide"
    />
  );
}
