import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FranchiseBrandStubPage } from "@/components/franchise/FranchiseBrandStubPage";
import {
  fastFoodFranchiseBrandNames,
  fastFoodFranchiseBrandSlugs,
} from "@/lib/franchise/food/fast-food-franchise";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return fastFoodFranchiseBrandSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const name =
    fastFoodFranchiseBrandNames[slug as (typeof fastFoodFranchiseBrandSlugs)[number]];
  if (!name) return { title: "Fast Food Franchise Brand | BizMetricsHQ" };
  return {
    title: `${name} Fast Food Franchise Costs, Fees & ROI | BizMetricsHQ`,
    description: `${name} fast food franchise investment, royalty fees, unit economics, and owner earnings — part of the BizMetricsHQ fast food franchise guide.`,
  };
}

export default async function FastFoodFranchiseBrandPage({ params }: Props) {
  const { slug } = await params;
  const name =
    fastFoodFranchiseBrandNames[slug as (typeof fastFoodFranchiseBrandSlugs)[number]];
  if (!name) notFound();

  return (
    <FranchiseBrandStubPage
      brandName={name}
      industryLabel="Fast Food"
      guideHref="/franchise/food/restaurant-franchise/fast-food/"
      guideLabel="Fast Food Franchise Guide"
    />
  );
}
