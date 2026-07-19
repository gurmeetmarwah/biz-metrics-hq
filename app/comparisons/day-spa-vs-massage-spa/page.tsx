import type { Metadata } from "next";
import { BeautyDualComparisonPage } from "@/components/comparison/BeautyDualComparisonPage";
import { beautyDualComparisonData, comparisonMeta } from "@/lib/industries/comparisons/day-spa-vs-massage-spa";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Day spa vs massage spa comparison: revenue, average ticket, profit margins, owner pay, startup costs, valuation, and an interactive decision tool.",
};

export default function DaySpaVsMassageSpaPage() {
  return <BeautyDualComparisonPage data={beautyDualComparisonData} />;
}
