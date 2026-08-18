import type { Metadata } from "next";
import { HomeServicesFranchiseGuide } from "@/components/franchise/HomeServicesFranchiseGuide";
import { buildFranchiseGuideMetadata } from "@/lib/franchise/franchise-page-meta";
import { crossfitFranchiseGuide } from "@/lib/franchise/fitness/crossfit-franchise";

export const metadata: Metadata = buildFranchiseGuideMetadata({
  title: "Best CrossFit Franchise 2026: Affiliate vs F45 Costs, ROI & Brands",
  description:
    "Find the best CrossFit or functional fitness franchise — compare CrossFit Affiliate, F45, 9Round, and D1. See startup costs, dues vs royalties, profit margins, and ROI before you buy.",
  keywords: [
    "best crossfit franchise",
    "crossfit franchise cost",
    "crossfit affiliate cost",
    "f45 franchise",
    "9round franchise",
    "functional fitness franchise",
    "crossfit franchise ROI",
    "best hiit franchise",
  ],
});

export default function CrossFitFranchisePage() {
  return <HomeServicesFranchiseGuide data={crossfitFranchiseGuide} />;
}
