import type { Metadata } from "next";
import { HealthcareDualComparisonPage } from "@/components/comparison/HealthcareDualComparisonPage";
import { healthcareDualComparisonData, comparisonMeta } from "@/lib/industries/comparisons/dental-practice-vs-medical-practice";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Dental practice vs medical practice comparison: revenue, EBITDA margins, owner compensation, payer mix, startup costs, valuation, and interactive decision tool.",
};

export default function DentalPracticeVsMedicalPracticePage() {
  return <HealthcareDualComparisonPage data={healthcareDualComparisonData} />;
}
