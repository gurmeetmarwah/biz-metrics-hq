import type { Metadata } from "next";
import { HealthcareDualComparisonPage } from "@/components/comparison/HealthcareDualComparisonPage";
import {
  comparisonMeta,
  healthcareDualComparisonData,
} from "@/lib/industries/comparisons/veterinary-clinic-vs-medical-practice";

export const metadata: Metadata = {
  title: `Vet Clinic vs Medical Practice: Which Makes More Profit? | BizMetricsHQ`,
  description:
    "Vet clinic vs medical practice: which clears more profit? Compare revenue, margins, owner pay, payer mix, startup costs, and valuation — with an interactive decision tool.",
};

export default function VeterinaryClinicVsMedicalPracticePage() {
  return <HealthcareDualComparisonPage data={healthcareDualComparisonData} />;
}
