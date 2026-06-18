import type { Metadata } from "next";
import { HealthcareDualComparisonPage } from "@/components/comparison/HealthcareDualComparisonPage";
import {
  healthcareDualComparisonData,
  comparisonMeta,
} from "@/lib/industries/comparisons/chiropractic-vs-massage-therapy";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Chiropractic clinic vs massage therapy practice comparison: revenue, profit margins, owner compensation, patient economics, startup costs, licensing, and interactive decision tool.",
};

export default function ChiropracticVsMassageTherapyPage() {
  return <HealthcareDualComparisonPage data={healthcareDualComparisonData} />;
}
