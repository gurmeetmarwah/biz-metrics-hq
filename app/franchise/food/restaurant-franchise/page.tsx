import type { Metadata } from "next";
import { RestaurantFranchiseGuide } from "@/components/franchise/RestaurantFranchiseGuide";
import { restaurantFranchiseGuide } from "@/lib/franchise/food/restaurant-franchise";

export const metadata: Metadata = {
  title: `${restaurantFranchiseGuide.meta.title} | BizMetricsHQ`,
  description: restaurantFranchiseGuide.meta.subtitle,
};

export default function RestaurantFranchisePage() {
  return <RestaurantFranchiseGuide />;
}
