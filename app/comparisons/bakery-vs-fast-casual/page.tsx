import type { Metadata } from "next";
import { BakeryDualComparisonPage } from "@/components/comparison/BakeryDualComparisonPage";
import * as data from "@/lib/industries/comparisons/bakery-vs-fast-casual";

export const metadata: Metadata = {
  title: `${data.comparisonMeta.title} — Startup Costs, Revenue & Margins | BizMetricsHQ`,
  description:
    "Bakery vs fast casual comparison: startup costs, revenue, profit margins, wholesale opportunities, workload, valuation, and interactive decision tool.",
};

export default function BakeryVsFastCasualPage() {
  return <BakeryDualComparisonPage data={data} />;
}
