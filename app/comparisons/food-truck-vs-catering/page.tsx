import type { Metadata } from "next";
import { FoodTruckPrimaryComparisonPage } from "@/components/comparison/FoodTruckPrimaryComparisonPage";
import * as data from "@/lib/industries/comparisons/food-truck-vs-catering";

export const metadata: Metadata = {
  title: `${data.comparisonMeta.title} — Startup Costs, Revenue & Margins | BizMetricsHQ`,
  description:
    "Food truck vs catering business comparison: startup costs, event revenue, profit margins, break-even time, owner income, valuation, and interactive decision tool.",
};

export default function FoodTruckVsCateringPage() {
  return <FoodTruckPrimaryComparisonPage data={data} />;
}
