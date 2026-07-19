import type { Metadata } from "next";
import { BeautyDualComparisonPage } from "@/components/comparison/BeautyDualComparisonPage";
import { beautyDualComparisonData, comparisonMeta } from "@/lib/industries/comparisons/medical-spa-vs-dermatology-practice";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Medical spa vs dermatology practice comparison: revenue, margins, owner pay, payer mix, startup costs, valuation, and an interactive decision tool.",
};

export default function MedicalSpaVsDermatologyPracticePage() {
  return <BeautyDualComparisonPage data={beautyDualComparisonData} />;
}
