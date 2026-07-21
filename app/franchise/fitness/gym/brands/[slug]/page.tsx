import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FranchiseBrandStubPage } from "@/components/franchise/FranchiseBrandStubPage";
import {
  gymFranchiseBrandNames,
  gymFranchiseBrandSlugs,
} from "@/lib/franchise/fitness/gym-franchise";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return gymFranchiseBrandSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const name = gymFranchiseBrandNames[slug as (typeof gymFranchiseBrandSlugs)[number]];
  if (!name) return { title: "Franchise Brand | BizMetricsHQ" };
  return {
    title: `${name} Franchise Costs, Fees & ROI | BizMetricsHQ`,
    description: `${name} franchise investment, royalty fees, unit economics, and owner earnings — part of the BizMetricsHQ gym franchise guide.`,
  };
}

export default async function GymFranchiseBrandPage({ params }: Props) {
  const { slug } = await params;
  const name = gymFranchiseBrandNames[slug as (typeof gymFranchiseBrandSlugs)[number]];
  if (!name) notFound();

  return (
    <FranchiseBrandStubPage
      brandName={name}
      industryLabel="Gym"
      guideHref="/franchise/fitness/gym/"
      guideLabel="Gym Franchise Guide"
    />
  );
}
