import type { Metadata } from "next";
import { FitnessDualComparisonPage } from "@/components/comparison/FitnessDualComparisonPage";
import { comparisonMeta, fitnessDualComparisonData } from "@/lib/industries/comparisons/pilates-studio-vs-yoga-studio";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description: comparisonMeta.subtitle,
};

export default function Page() {
  return <FitnessDualComparisonPage data={fitnessDualComparisonData} />;
}
