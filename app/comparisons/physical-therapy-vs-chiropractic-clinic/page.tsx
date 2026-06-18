import type { Metadata } from "next";
import { HealthcareDualComparisonPage } from "@/components/comparison/HealthcareDualComparisonPage";
import {
  healthcareDualComparisonData,
  comparisonMeta,
} from "@/lib/industries/comparisons/physical-therapy-vs-chiropractic-clinic";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Physical therapy vs chiropractic clinic comparison: revenue, profit margins, owner compensation, patient economics, startup costs, scalability, valuation, and interactive decision tool.",
};

export default function PhysicalTherapyVsChiropracticClinicPage() {
  return <HealthcareDualComparisonPage data={healthcareDualComparisonData} />;
}
