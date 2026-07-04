import type { Metadata } from "next";
import { HealthcareDualComparisonPage } from "@/components/comparison/HealthcareDualComparisonPage";
import { healthcareDualComparisonData, comparisonMeta } from "@/lib/industries/comparisons/optometry-vs-dermatology";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Optometry practice vs dermatology practice comparison: revenue, profit margins, owner compensation, patient economics, startup costs, valuation, and interactive decision tool.",
};

export default function OptometryVsDermatologyPage() {
  return <HealthcareDualComparisonPage data={healthcareDualComparisonData} />;
}
