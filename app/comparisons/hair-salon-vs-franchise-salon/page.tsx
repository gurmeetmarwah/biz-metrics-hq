import type { Metadata } from "next";
import { BeautyDualComparisonPage } from "@/components/comparison/BeautyDualComparisonPage";
import { beautyDualComparisonData, comparisonMeta } from "@/lib/industries/comparisons/hair-salon-vs-franchise-salon";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Independent hair salon vs franchise salon comparison: revenue, royalties, profit margins, owner pay, startup costs, valuation, and an interactive decision tool.",
};

export default function HairSalonVsFranchiseSalonPage() {
  return <BeautyDualComparisonPage data={beautyDualComparisonData} />;
}
