import type { Metadata } from "next";
import { HealthcareDualComparisonPage } from "@/components/comparison/HealthcareDualComparisonPage";
import { healthcareDualComparisonData, comparisonMeta } from "@/lib/industries/comparisons/private-practice-vs-dso";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Private dental practice vs DSO comparison: owner compensation, clinical autonomy, margins, scale, valuation, and interactive decision tool.",
};

export default function PrivatePracticeVsDsoPage() {
  return <HealthcareDualComparisonPage data={healthcareDualComparisonData} />;
}
