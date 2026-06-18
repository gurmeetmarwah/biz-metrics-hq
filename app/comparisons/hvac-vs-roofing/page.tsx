import type { Metadata } from "next";
import { HomeServicesDualComparisonPage } from "@/components/comparison/HomeServicesDualComparisonPage";
import {
  comparisonMeta,
  homeServicesDualComparisonData,
} from "@/lib/industries/comparisons/hvac-vs-roofing";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "HVAC vs roofing comparison: revenue, profit margins, owner compensation, storm-driven demand, crew productivity, startup costs, scalability, valuation, and interactive decision tool.",
};

export default function HvacVsRoofingPage() {
  return <HomeServicesDualComparisonPage data={homeServicesDualComparisonData} />;
}
