import type { Metadata } from "next";
import { BeautyDualComparisonPage } from "@/components/comparison/BeautyDualComparisonPage";
import { beautyDualComparisonData, comparisonMeta } from "@/lib/industries/comparisons/hair-salon-vs-day-spa";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Hair salon vs day spa comparison: revenue, average ticket, profit margins, memberships, owner pay, startup costs, valuation, and an interactive decision tool.",
};

export default function HairSalonVsDaySpaPage() {
  return <BeautyDualComparisonPage data={beautyDualComparisonData} />;
}
