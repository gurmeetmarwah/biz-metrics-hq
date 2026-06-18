import type { Metadata } from "next";
import { HealthcareDualComparisonPage } from "@/components/comparison/HealthcareDualComparisonPage";
import {
  comparisonMeta,
  healthcareDualComparisonData,
} from "@/lib/industries/comparisons/veterinary-clinic-vs-medical-practice";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Veterinary clinic vs medical practice comparison: revenue, profit margins, owner compensation, payer mix, startup costs, valuation, and interactive decision tool.",
};

export default function VeterinaryClinicVsMedicalPracticePage() {
  return <HealthcareDualComparisonPage data={healthcareDualComparisonData} />;
}
