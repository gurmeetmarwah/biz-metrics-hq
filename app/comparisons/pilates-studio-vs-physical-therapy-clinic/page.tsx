import type { Metadata } from "next";
import { HealthcareDualComparisonPage } from "@/components/comparison/HealthcareDualComparisonPage";
import {
  comparisonMeta,
  healthcareDualComparisonData,
} from "@/lib/industries/comparisons/pilates-studio-vs-physical-therapy-clinic";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description: comparisonMeta.subtitle,
};

export default function Page() {
  return <HealthcareDualComparisonPage data={healthcareDualComparisonData} />;
}
