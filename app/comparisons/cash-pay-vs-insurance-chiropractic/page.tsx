import type { Metadata } from "next";
import { HealthcareDualComparisonPage } from "@/components/comparison/HealthcareDualComparisonPage";
import {
  healthcareDualComparisonData,
  comparisonMeta,
} from "@/lib/industries/comparisons/cash-pay-vs-insurance-chiropractic";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Margins, Billing & Revenue | BizMetricsHQ`,
  description:
    "Cash-pay vs insurance-based chiropractic comparison: revenue models, profit margins, billing complexity, patient acquisition, visit pricing, and interactive decision tool.",
};

export default function CashPayVsInsuranceChiropracticPage() {
  return <HealthcareDualComparisonPage data={healthcareDualComparisonData} />;
}
