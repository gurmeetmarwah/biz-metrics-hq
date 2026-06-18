import type { Metadata } from "next";
import { HomeServicesDualComparisonPage } from "@/components/comparison/HomeServicesDualComparisonPage";
import {
  comparisonMeta,
  homeServicesDualComparisonData,
} from "@/lib/industries/comparisons/hvac-vs-plumbing";

export const metadata: Metadata = {
  title: `${comparisonMeta.title} — Revenue, Margins & Valuation | BizMetricsHQ`,
  description:
    "HVAC vs plumbing comparison: revenue, profit margins, owner compensation, technician productivity, startup costs, recurring revenue, scalability, valuation, and interactive decision tool.",
};

export default function HvacVsPlumbingPage() {
  return <HomeServicesDualComparisonPage data={homeServicesDualComparisonData} />;
}
