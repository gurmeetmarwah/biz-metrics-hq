import type { Metadata } from "next";
import { HealthcareDualComparisonPage } from "@/components/comparison/HealthcareDualComparisonPage";
import {
  healthcareDualComparisonData,
  comparisonMeta,
} from "@/lib/industries/comparisons/family-chiropractic-vs-sports-chiropractic";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Family chiropractic vs sports chiropractic comparison: revenue models, patient demographics, visit pricing, marketing channels, margins, scalability, and interactive decision tool.",
};

export default function FamilyChiropracticVsSportsChiropracticPage() {
  return <HealthcareDualComparisonPage data={healthcareDualComparisonData} />;
}
