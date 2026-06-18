import type { Metadata } from "next";
import { BakeryDualComparisonPage } from "@/components/comparison/BakeryDualComparisonPage";
import * as data from "@/lib/industries/comparisons/bakery-vs-home-bakery";

export const metadata: Metadata = {
  title: `${data.comparisonMeta.title} — Startup Costs, Revenue & Margins | BizMetricsHQ`,
  description:
    "Bakery vs home bakery comparison: retail bakery vs cottage food startup costs, revenue, margins, regulations, scalability, and interactive decision tool.",
};

export default function BakeryVsHomeBakeryPage() {
  return <BakeryDualComparisonPage data={data} />;
}
