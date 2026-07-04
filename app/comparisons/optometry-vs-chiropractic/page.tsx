import type { Metadata } from "next";
import { HealthcareDualComparisonPage } from "@/components/comparison/HealthcareDualComparisonPage";
import { healthcareDualComparisonData, comparisonMeta } from "@/lib/industries/comparisons/optometry-vs-chiropractic";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Optometry practice vs chiropractic clinic comparison: revenue, profit margins, owner compensation, patient economics, startup costs, valuation, and interactive decision tool.",
};

export default function OptometryVsChiropracticPage() {
  return <HealthcareDualComparisonPage data={healthcareDualComparisonData} />;
}
