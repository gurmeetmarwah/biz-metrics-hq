import type { Metadata } from "next";
import { HealthcareDualComparisonPage } from "@/components/comparison/HealthcareDualComparisonPage";
import {
  comparisonMeta,
  healthcareDualComparisonData,
} from "@/lib/industries/comparisons/private-practice-vs-hospital-based-pt";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Private practice vs hospital-based PT comparison: autonomy, margins, referral stability, compensation trade-offs, and long-term value paths.",
};

export default function PrivatePracticeVsHospitalBasedPtPage() {
  return <HealthcareDualComparisonPage data={healthcareDualComparisonData} />;
}
