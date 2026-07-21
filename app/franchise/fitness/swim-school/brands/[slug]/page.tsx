import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FranchiseBrandStubPage } from "@/components/franchise/FranchiseBrandStubPage";
import {
  swimSchoolFranchiseBrandNames,
  swimSchoolFranchiseBrandSlugs,
} from "@/lib/franchise/fitness/swim-school-franchise";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return swimSchoolFranchiseBrandSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const name = swimSchoolFranchiseBrandNames[slug as (typeof swimSchoolFranchiseBrandSlugs)[number]];
  if (!name) return { title: "Franchise Brand | BizMetricsHQ" };
  return {
    title: `${name} Franchise Costs, Fees & ROI | BizMetricsHQ`,
    description: `${name} franchise investment, royalty fees, unit economics, and owner earnings — part of the BizMetricsHQ swim school franchise guide.`,
  };
}

export default async function SwimSchoolFranchiseBrandPage({ params }: Props) {
  const { slug } = await params;
  const name = swimSchoolFranchiseBrandNames[slug as (typeof swimSchoolFranchiseBrandSlugs)[number]];
  if (!name) notFound();

  return (
    <FranchiseBrandStubPage
      brandName={name}
      industryLabel="Swim School"
      guideHref="/franchise/fitness/swim-school/"
      guideLabel="Swim School Franchise Guide"
    />
  );
}
