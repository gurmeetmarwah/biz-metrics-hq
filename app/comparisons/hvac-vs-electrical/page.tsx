import type { Metadata } from "next";
import { HomeServicesDualComparisonPage } from "@/components/comparison/HomeServicesDualComparisonPage";
import {
  comparisonMeta,
  homeServicesDualComparisonData,
} from "@/lib/industries/comparisons/hvac-vs-electrical";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "HVAC vs electrical comparison: revenue, profit margins, owner compensation, commercial mix, technician productivity, startup costs, scalability, valuation, and interactive decision tool.",
};

export default function HvacVsElectricalPage() {
  return <HomeServicesDualComparisonPage data={homeServicesDualComparisonData} />;
}
