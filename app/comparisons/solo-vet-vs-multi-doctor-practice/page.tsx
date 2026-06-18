import type { Metadata } from "next";
import { HealthcareDualComparisonPage } from "@/components/comparison/HealthcareDualComparisonPage";
import {
  comparisonMeta,
  healthcareDualComparisonData,
} from "@/lib/industries/comparisons/solo-vet-vs-multi-doctor-practice";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Solo vet vs multi-doctor practice comparison: owner economics, staffing leverage, throughput, valuation, and scaling paths for veterinary clinics.",
};

export default function SoloVetVsMultiDoctorPracticePage() {
  return <HealthcareDualComparisonPage data={healthcareDualComparisonData} />;
}
