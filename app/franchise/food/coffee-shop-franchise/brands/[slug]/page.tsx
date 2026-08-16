import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FranchiseBrandStubPage } from "@/components/franchise/FranchiseBrandStubPage";
import {
  coffeeShopFranchiseBrandNames,
  coffeeShopFranchiseBrandSlugs,
} from "@/lib/franchise/food/coffee-shop-franchise";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return coffeeShopFranchiseBrandSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const name =
    coffeeShopFranchiseBrandNames[slug as (typeof coffeeShopFranchiseBrandSlugs)[number]];
  if (!name) return { title: "Coffee Shop Franchise Brand | BizMetricsHQ" };
  return {
    title: `${name} Coffee Franchise Costs, Fees & ROI | BizMetricsHQ`,
    description: `${name} coffee franchise investment, royalty fees, unit economics, and owner earnings — part of the BizMetricsHQ coffee shop franchise guide.`,
  };
}

export default async function CoffeeShopFranchiseBrandPage({ params }: Props) {
  const { slug } = await params;
  const name =
    coffeeShopFranchiseBrandNames[slug as (typeof coffeeShopFranchiseBrandSlugs)[number]];
  if (!name) notFound();

  return (
    <FranchiseBrandStubPage
      brandName={name}
      industryLabel="Coffee Shop"
      guideHref="/franchise/food/coffee-shop-franchise/"
      guideLabel="Coffee Shop Franchise Guide"
    />
  );
}
