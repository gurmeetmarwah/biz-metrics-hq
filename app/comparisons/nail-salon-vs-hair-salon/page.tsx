import type { Metadata } from "next";
import { BeautyDualComparisonPage } from "@/components/comparison/BeautyDualComparisonPage";
import { beautyDualComparisonData, comparisonMeta } from "@/lib/industries/comparisons/nail-salon-vs-hair-salon";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Nail salon vs hair salon comparison: revenue, average ticket, profit margins, owner pay, startup costs, valuation, and an interactive decision tool.",
};

export default function NailSalonVsHairSalonPage() {
  return <BeautyDualComparisonPage data={beautyDualComparisonData} />;
}
