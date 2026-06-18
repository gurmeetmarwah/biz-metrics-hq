import type { Metadata } from "next";
import { HealthcareDualComparisonPage } from "@/components/comparison/HealthcareDualComparisonPage";
import {
  comparisonMeta,
  healthcareDualComparisonData,
} from "@/lib/industries/comparisons/sports-pt-vs-general-pt";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Sports PT vs general PT comparison: revenue benchmarks, visit pricing, cash-pay mix, referrals, margins, startup economics, and scaling pathways.",
};

export default function SportsPtVsGeneralPtPage() {
  return <HealthcareDualComparisonPage data={healthcareDualComparisonData} />;
}
