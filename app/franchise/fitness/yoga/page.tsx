import type { Metadata } from "next";
import { HomeServicesFranchiseGuide } from "@/components/franchise/HomeServicesFranchiseGuide";
import { buildFranchiseGuideMetadata } from "@/lib/franchise/franchise-page-meta";
import { yogaFranchiseGuide } from "@/lib/franchise/fitness/yoga-franchise";

export const metadata: Metadata = buildFranchiseGuideMetadata({
  title: "Top Yoga Franchises 2026: Costs, ROI & Best Brands to Buy",
  description:
    "Top yoga franchises ranked for 2026 — compare YogaSix, Hotworx, CorePower Yoga, and Yoga Pod on startup costs, fees, royalties, profit margins, owner income, and ROI.",
  keywords: [
    "top yoga franchises",
    "top yoga franchises 2026",
    "best yoga franchise",
    "best yoga franchise 2026",
    "yoga franchise cost",
    "yogasix franchise",
    "hotworx franchise",
    "corepower yoga franchise",
    "yoga studio franchise",
    "yoga franchise ROI",
    "yoga franchise profit margin",
  ],
});

export default function YogaFranchisePage() {
  return <HomeServicesFranchiseGuide data={yogaFranchiseGuide} />;
}
