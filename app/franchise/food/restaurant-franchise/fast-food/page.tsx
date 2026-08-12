import type { Metadata } from "next";
import { FastFoodFranchiseGuide } from "@/components/franchise/FastFoodFranchiseGuide";
import { fastFoodFranchiseGuide } from "@/lib/franchise/food/fast-food-franchise";

export const metadata: Metadata = {
  title: `${fastFoodFranchiseGuide.meta.title} | BizMetricsHQ`,
  description: fastFoodFranchiseGuide.meta.subtitle,
  keywords: [
    "fast food franchise cost",
    "fast food franchise owner make",
    "fast food franchise profit margin",
    "fast food franchise revenue",
    "cheapest fast food franchises",
    "fast food franchises under $500K",
    "fast food franchise investment",
    "fast food franchise ROI",
    "how much cash to open a fast food franchise",
  ],
};

export default function FastFoodFranchisePage() {
  return <FastFoodFranchiseGuide />;
}
