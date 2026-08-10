import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FranchiseBrandStubPage } from "@/components/franchise/FranchiseBrandStubPage";
import {
  restaurantFranchiseBrandNames,
  restaurantFranchiseBrandSlugs,
} from "@/lib/franchise/food/restaurant-franchise";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return restaurantFranchiseBrandSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const name =
    restaurantFranchiseBrandNames[slug as (typeof restaurantFranchiseBrandSlugs)[number]];
  if (!name) return { title: "Franchise Brand | BizMetricsHQ" };
  return {
    title: `${name} Franchise Costs, Fees & ROI | BizMetricsHQ`,
    description: `${name} franchise investment, royalty fees, unit economics, and owner earnings — part of the BizMetricsHQ restaurant franchise guide.`,
  };
}

export default async function RestaurantFranchiseBrandPage({ params }: Props) {
  const { slug } = await params;
  const name =
    restaurantFranchiseBrandNames[slug as (typeof restaurantFranchiseBrandSlugs)[number]];
  if (!name) notFound();

  return (
    <FranchiseBrandStubPage
      brandName={name}
      industryLabel="Restaurant"
      guideHref="/franchise/food/restaurant-franchise/"
      guideLabel="Restaurant Franchise Guide"
    />
  );
}
