import type { Metadata } from "next";
import { BeautyDualComparisonPage } from "@/components/comparison/BeautyDualComparisonPage";
import { beautyDualComparisonData, comparisonMeta } from "@/lib/industries/comparisons/nail-salon-vs-medical-spa";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Nail salon vs medical spa comparison: revenue, average ticket, profit margins, owner pay, startup costs, valuation, and an interactive decision tool.",
};

export default function NailSalonVsMedicalSpaPage() {
  return <BeautyDualComparisonPage data={beautyDualComparisonData} />;
}
