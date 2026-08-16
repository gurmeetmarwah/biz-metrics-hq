import type { Metadata } from "next";
import { CoffeeShopFranchiseGuide } from "@/components/franchise/CoffeeShopFranchiseGuide";
import { coffeeShopFranchiseGuide } from "@/lib/franchise/food/coffee-shop-franchise";

export const metadata: Metadata = {
  title: `${coffeeShopFranchiseGuide.meta.title} | BizMetricsHQ`,
  description: coffeeShopFranchiseGuide.meta.subtitle,
  keywords: [...coffeeShopFranchiseGuide.keywords],
};

export default function CoffeeShopFranchisePage() {
  return <CoffeeShopFranchiseGuide />;
}
