import type { Metadata } from "next";
import { HomeServicesDualComparisonPage } from "@/components/comparison/HomeServicesDualComparisonPage";
import {
  comparisonMeta,
  homeServicesDualComparisonData,
} from "@/lib/industries/comparisons/cleaning-business-vs-landscaping";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description: comparisonMeta.subtitle,
};

export default function Page() {
  return <HomeServicesDualComparisonPage data={homeServicesDualComparisonData} />;
}
