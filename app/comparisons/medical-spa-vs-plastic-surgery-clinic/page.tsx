import type { Metadata } from "next";
import { BeautyDualComparisonPage } from "@/components/comparison/BeautyDualComparisonPage";
import { beautyDualComparisonData, comparisonMeta } from "@/lib/industries/comparisons/medical-spa-vs-plastic-surgery-clinic";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "Medical spa vs plastic surgery clinic comparison: procedure economics, profit margins, owner pay, startup costs, valuation, and an interactive decision tool.",
};

export default function MedicalSpaVsPlasticSurgeryClinicPage() {
  return <BeautyDualComparisonPage data={beautyDualComparisonData} />;
}
