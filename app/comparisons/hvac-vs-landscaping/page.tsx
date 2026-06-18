import type { Metadata } from "next";
import { HomeServicesDualComparisonPage } from "@/components/comparison/HomeServicesDualComparisonPage";
import {
  comparisonMeta,
  homeServicesDualComparisonData,
} from "@/lib/industries/comparisons/hvac-vs-landscaping";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "HVAC vs landscaping comparison: revenue, profit margins, owner compensation, labor economics, seasonality, startup costs, scalability, valuation, and interactive decision tool.",
};

export default function HvacVsLandscapingPage() {
  return <HomeServicesDualComparisonPage data={homeServicesDualComparisonData} />;
}
