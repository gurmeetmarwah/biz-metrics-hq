import type { Metadata } from "next";
import { HealthcareDualComparisonPage } from "@/components/comparison/HealthcareDualComparisonPage";
import { healthcareDualComparisonData, comparisonMeta } from "@/lib/industries/comparisons/solo-vs-group-dental-practice";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Solo vs group dental practice comparison: owner economics, revenue scale, profit margins, valuation, startup paths, and interactive decision tool.",
};

export default function SoloVsGroupDentalPracticePage() {
  return <HealthcareDualComparisonPage data={healthcareDualComparisonData} />;
}
