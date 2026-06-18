import type { Metadata } from "next";
import { BakeryDualComparisonPage } from "@/components/comparison/BakeryDualComparisonPage";
import * as data from "@/lib/industries/comparisons/bakery-vs-food-truck";

export const metadata: Metadata = {
  title: `${data.comparisonMeta.title} — Startup Costs, Revenue & Margins | BizMetricsHQ`,
  description:
    "Bakery vs food truck comparison: startup costs, revenue, profit margins, wholesale vs mobile sales, workload, valuation, and interactive decision tool.",
};

export default function BakeryVsFoodTruckPage() {
  return <BakeryDualComparisonPage data={data} />;
}
