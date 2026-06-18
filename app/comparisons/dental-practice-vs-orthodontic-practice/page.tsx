import type { Metadata } from "next";
import { HealthcareDualComparisonPage } from "@/components/comparison/HealthcareDualComparisonPage";
import { healthcareDualComparisonData, comparisonMeta } from "@/lib/industries/comparisons/dental-practice-vs-orthodontic-practice";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Dental practice vs orthodontic practice comparison: revenue, EBITDA margins, owner compensation, patient economics, startup costs, valuation, and interactive decision tool.",
};

export default function DentalPracticeVsOrthodonticPracticePage() {
  return <HealthcareDualComparisonPage data={healthcareDualComparisonData} />;
}
