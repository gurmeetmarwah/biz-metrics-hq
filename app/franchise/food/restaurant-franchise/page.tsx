import type { Metadata } from "next";
import { RestaurantFranchiseGuide } from "@/components/franchise/RestaurantFranchiseGuide";
import { restaurantFranchiseGuide } from "@/lib/franchise/food/restaurant-franchise";

export const metadata: Metadata = {
  title: `${restaurantFranchiseGuide.meta.title} | BizMetricsHQ`,
  description: restaurantFranchiseGuide.meta.subtitle,
  keywords: [
    "restaurant franchise cost",
    "how much does a restaurant franchise cost",
    "restaurant franchise owner make",
    "restaurant franchise profit margin",
    "average restaurant franchise profit margin",
    "restaurant franchise revenue",
    "lowest cost restaurant franchises",
    "restaurant franchises under $500k",
    "restaurant franchise ROI",
    "restaurant franchise vs independent",
  ],
};

export default function RestaurantFranchisePage() {
  return <RestaurantFranchiseGuide />;
}
