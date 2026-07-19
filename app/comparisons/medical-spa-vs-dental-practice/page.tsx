import type { Metadata } from "next";
import { BeautyDualComparisonPage } from "@/components/comparison/BeautyDualComparisonPage";
import { beautyDualComparisonData, comparisonMeta } from "@/lib/industries/comparisons/medical-spa-vs-dental-practice";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Medical spa vs dental practice comparison: revenue, profit margins, owner pay, startup costs, payer mix, valuation, and an interactive decision tool.",
};

export default function MedicalSpaVsDentalPracticePage() {
  return <BeautyDualComparisonPage data={beautyDualComparisonData} />;
}
