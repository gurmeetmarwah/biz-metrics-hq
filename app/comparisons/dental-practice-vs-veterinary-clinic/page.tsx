import type { Metadata } from "next";
import { HealthcareDualComparisonPage } from "@/components/comparison/HealthcareDualComparisonPage";
import { healthcareDualComparisonData, comparisonMeta } from "@/lib/industries/comparisons/dental-practice-vs-veterinary-clinic";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Dental practice vs veterinary clinic comparison: revenue, profit margins, owner compensation, patient economics, startup costs, valuation, and interactive decision tool.",
};

export default function DentalPracticeVsVeterinaryClinicPage() {
  return <HealthcareDualComparisonPage data={healthcareDualComparisonData} />;
}
