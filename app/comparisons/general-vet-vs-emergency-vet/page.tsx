import type { Metadata } from "next";
import { HealthcareDualComparisonPage } from "@/components/comparison/HealthcareDualComparisonPage";
import {
  comparisonMeta,
  healthcareDualComparisonData,
} from "@/lib/industries/comparisons/general-vet-vs-emergency-vet";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "General vet vs emergency vet comparison: revenue, profit margins, owner compensation, staffing models, startup costs, valuation, and interactive decision tool.",
};

export default function GeneralVetVsEmergencyVetPage() {
  return <HealthcareDualComparisonPage data={healthcareDualComparisonData} />;
}
