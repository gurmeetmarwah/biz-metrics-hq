import type { Metadata } from "next";
import { BeautyDualComparisonPage } from "@/components/comparison/BeautyDualComparisonPage";
import { beautyDualComparisonData, comparisonMeta } from "@/lib/industries/comparisons/medical-spa-vs-wellness-clinic";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Medical spa vs wellness clinic comparison: revenue, profit margins, owner pay, startup costs, valuation, and an interactive decision tool.",
};

export default function MedicalSpaVsWellnessClinicPage() {
  return <BeautyDualComparisonPage data={beautyDualComparisonData} />;
}
