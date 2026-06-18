import type { Metadata } from "next";
import { HealthcareDualComparisonPage } from "@/components/comparison/HealthcareDualComparisonPage";
import {
  comparisonMeta,
  healthcareDualComparisonData,
} from "@/lib/industries/comparisons/private-practice-vs-corporate-vet";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Private vet practice vs corporate vet clinic comparison: autonomy, EBITDA retention, compensation, scale economics, and risk profile.",
};

export default function PrivatePracticeVsCorporateVetPage() {
  return <HealthcareDualComparisonPage data={healthcareDualComparisonData} />;
}
