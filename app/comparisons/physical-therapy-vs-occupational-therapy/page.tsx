import type { Metadata } from "next";
import { HealthcareDualComparisonPage } from "@/components/comparison/HealthcareDualComparisonPage";
import {
  comparisonMeta,
  healthcareDualComparisonData,
} from "@/lib/industries/comparisons/physical-therapy-vs-occupational-therapy";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Physical therapy vs occupational therapy comparison: benchmark revenue, EBITDA margins, referral mix, patient economics, startup costs, valuation, and decision guidance.",
};

export default function PhysicalTherapyVsOccupationalTherapyPage() {
  return <HealthcareDualComparisonPage data={healthcareDualComparisonData} />;
}
