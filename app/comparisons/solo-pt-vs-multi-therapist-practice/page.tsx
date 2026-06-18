import type { Metadata } from "next";
import { HealthcareDualComparisonPage } from "@/components/comparison/HealthcareDualComparisonPage";
import {
  comparisonMeta,
  healthcareDualComparisonData,
} from "@/lib/industries/comparisons/solo-pt-vs-multi-therapist-practice";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Solo PT vs multi-therapist practice comparison: owner economics, staffing leverage, throughput, valuation, and scaling paths for physical therapy clinics.",
};

export default function SoloPtVsMultiTherapistPracticePage() {
  return <HealthcareDualComparisonPage data={healthcareDualComparisonData} />;
}
