import type { Metadata } from "next";
import { HomeServicesDualComparisonPage } from "@/components/comparison/HomeServicesDualComparisonPage";
import {
  comparisonMeta,
  homeServicesDualComparisonData,
} from "@/lib/industries/comparisons/cleaning-business-vs-janitorial-business";

export const metadata: Metadata = {
  title: "Facilities Management Company Valuation: Cleaning vs Janitorial | BizMetricsHQ",
  description:
    "Facilities management company valuation compared — cleaning vs janitorial SDE multiples, revenue, margins, and owner pay. See which model commands stronger exit value.",
};

export default function Page() {
  return <HomeServicesDualComparisonPage data={homeServicesDualComparisonData} />;
}
