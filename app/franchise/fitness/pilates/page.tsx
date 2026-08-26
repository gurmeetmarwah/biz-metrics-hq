import type { Metadata } from "next";
import { HomeServicesFranchiseGuide } from "@/components/franchise/HomeServicesFranchiseGuide";
import { buildFranchiseGuideMetadata } from "@/lib/franchise/franchise-page-meta";
import { pilatesFranchiseGuide } from "@/lib/franchise/fitness/pilates-franchise";

export const metadata: Metadata = buildFranchiseGuideMetadata({
  title: pilatesFranchiseGuide.meta.title,
  description: pilatesFranchiseGuide.meta.subtitle,
  keywords: [
    "best pilates franchises",
    "best pilates franchises 2026",
    "best franchise for pilates",
    "best pilates franchise",
    "best pilates franchise 2026",
    "best pilates franchise to buy",
    "pilates franchise cost",
    "how much does a pilates franchise cost",
    "club pilates franchise",
    "club pilates franchise cost",
    "solidcore franchise",
    "pilates franchise ROI",
    "pilates franchise profit margin",
    "pilates franchise owner salary",
    "pilates studio franchise",
    "cheapest pilates franchise",
    "best pilates franchise for first-time owners",
  ],
});

export default function PilatesFranchisePage() {
  return <HomeServicesFranchiseGuide data={pilatesFranchiseGuide} />;
}
