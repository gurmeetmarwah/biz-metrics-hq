import type { Metadata } from "next";
import { HomeServicesFranchiseGuide } from "@/components/franchise/HomeServicesFranchiseGuide";
import { buildFranchiseGuideMetadata } from "@/lib/franchise/franchise-page-meta";
import { swimSchoolFranchiseGuide } from "@/lib/franchise/fitness/swim-school-franchise";

export const metadata: Metadata = buildFranchiseGuideMetadata({
  title: "Best Swim School Franchise 2026: Costs, ROI, Profit Margins & Brands",
  description:
    "Find the best swim school franchise — compare British Swim School, Goldfish, Aqua-Tots, and SafeSplash. See startup costs, fees, royalties, profit margins, and ROI before you buy.",
  keywords: [
    "best swim school franchise",
    "swim school franchise cost",
    "british swim school franchise",
    "goldfish swim school franchise",
    "aqua-tots franchise",
    "swim school franchise ROI",
    "learn to swim franchise",
  ],
});

export default function SwimSchoolFranchisePage() {
  return <HomeServicesFranchiseGuide data={swimSchoolFranchiseGuide} />;
}
