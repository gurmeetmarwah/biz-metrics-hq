import type { Metadata } from "next";
import { HomeServicesFranchiseGuide } from "@/components/franchise/HomeServicesFranchiseGuide";
import { buildFranchiseGuideMetadata } from "@/lib/franchise/franchise-page-meta";
import { gymFranchiseGuide } from "@/lib/franchise/fitness/gym-franchise";

export const metadata: Metadata = buildFranchiseGuideMetadata({
  title: gymFranchiseGuide.meta.title,
  description: gymFranchiseGuide.meta.subtitle,
  keywords: [
    "best gym franchises",
    "best gym franchises 2026",
    "best gym franchise",
    "best gym franchise 2026",
    "gym franchise cost",
    "anytime fitness franchise",
    "planet fitness franchise",
    "orangetheory franchise",
    "gym franchise ROI",
    "gym franchise profit margin",
    "fitness franchise cost",
    "cheapest gym franchise",
  ],
});

export default function GymFranchisePage() {
  return <HomeServicesFranchiseGuide data={gymFranchiseGuide} />;
}
