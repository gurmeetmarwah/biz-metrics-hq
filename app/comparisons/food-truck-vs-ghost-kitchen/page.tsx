import type { Metadata } from "next";
import { FoodTruckPrimaryComparisonPage } from "@/components/comparison/FoodTruckPrimaryComparisonPage";
import * as data from "@/lib/industries/comparisons/food-truck-vs-ghost-kitchen";

export const metadata: Metadata = {
  title: `${data.comparisonMeta.title} — Startup Costs, Revenue & Margins | BizMetricsHQ`,
  description:
    "Food truck vs ghost kitchen comparison: startup costs, delivery economics, profit margins, scalability, valuation, and interactive decision tool.",
};

export default function FoodTruckVsGhostKitchenPage() {
  return <FoodTruckPrimaryComparisonPage data={data} />;
}
