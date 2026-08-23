import type { Metadata } from "next";
import { HomeServicesFranchiseGuide } from "@/components/franchise/HomeServicesFranchiseGuide";
import { buildFranchiseGuideMetadata } from "@/lib/franchise/franchise-page-meta";
import { crossfitFranchiseGuide } from "@/lib/franchise/fitness/crossfit-franchise";

export const metadata: Metadata = buildFranchiseGuideMetadata({
  title: "CrossFit Franchise Guide 2026: Affiliate vs F45 Costs, ROI & Brands",
  description:
    "CrossFit franchise guide — compare CrossFit Affiliate, F45, 9Round, and D1. See startup costs, dues vs royalties, profit margins, owner income, and ROI before you buy.",
  keywords: [
    "crossfit franchise",
    "crossfit franchise 2026",
    "crossfit franchise cost",
    "crossfit affiliate cost",
    "best crossfit franchise",
    "f45 franchise",
    "9round franchise",
    "functional fitness franchise",
    "crossfit franchise ROI",
  ],
});

export default function CrossFitFranchisePage() {
  return <HomeServicesFranchiseGuide data={crossfitFranchiseGuide} />;
}
