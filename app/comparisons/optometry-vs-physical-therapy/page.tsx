import type { Metadata } from "next";
import { HealthcareDualComparisonPage } from "@/components/comparison/HealthcareDualComparisonPage";
import { healthcareDualComparisonData, comparisonMeta } from "@/lib/industries/comparisons/optometry-vs-physical-therapy";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Optometry practice vs physical therapy clinic comparison: revenue, profit margins, owner compensation, patient economics, startup costs, valuation, and interactive decision tool.",
};

export default function OptometryVsPhysicalTherapyPage() {
  return <HealthcareDualComparisonPage data={healthcareDualComparisonData} />;
}
