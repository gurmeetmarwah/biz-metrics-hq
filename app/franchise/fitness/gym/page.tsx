import type { Metadata } from "next";
import { HomeServicesFranchiseGuide } from "@/components/franchise/HomeServicesFranchiseGuide";
import { buildFranchiseGuideMetadata } from "@/lib/franchise/franchise-page-meta";
import { gymFranchiseGuide } from "@/lib/franchise/fitness/gym-franchise";

export const metadata: Metadata = buildFranchiseGuideMetadata({
  title: "Best Gym Franchise 2026: Costs, ROI, Profit Margins & Top Brands",
  description:
    "Find the best gym franchise — compare Anytime Fitness, Planet Fitness, Orangetheory, and Snap Fitness. See startup costs, franchise fees, royalties, profit margins, owner income, and ROI before you buy.",
  keywords: [
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
