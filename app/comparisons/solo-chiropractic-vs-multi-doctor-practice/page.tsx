import type { Metadata } from "next";
import { HealthcareDualComparisonPage } from "@/components/comparison/HealthcareDualComparisonPage";
import {
  healthcareDualComparisonData,
  comparisonMeta,
} from "@/lib/industries/comparisons/solo-chiropractic-vs-multi-doctor-practice";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Owner Economics & Scale | BizMetricsHQ`,
  description:
    "Solo chiropractic vs multi-doctor practice comparison: owner economics, staffing leverage, throughput, valuation, break-even, and interactive decision tool.",
};

export default function SoloChiropracticVsMultiDoctorPracticePage() {
  return <HealthcareDualComparisonPage data={healthcareDualComparisonData} />;
}
