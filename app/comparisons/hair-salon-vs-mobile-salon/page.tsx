import type { Metadata } from "next";
import { BeautyDualComparisonPage } from "@/components/comparison/BeautyDualComparisonPage";
import { beautyDualComparisonData, comparisonMeta } from "@/lib/industries/comparisons/hair-salon-vs-mobile-salon";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Hair salon vs mobile salon comparison: revenue, profit margins, overhead, owner pay, startup costs, valuation, and an interactive decision tool.",
};

export default function HairSalonVsMobileSalonPage() {
  return <BeautyDualComparisonPage data={beautyDualComparisonData} />;
}
