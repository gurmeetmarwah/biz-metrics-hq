import type { Metadata } from "next";
import { HomeServicesFranchiseGuide } from "@/components/franchise/HomeServicesFranchiseGuide";
import { gymFranchiseGuide } from "@/lib/franchise/fitness/gym-franchise";

export const metadata: Metadata = {
  title: `${gymFranchiseGuide.meta.title} | BizMetricsHQ`,
  description: gymFranchiseGuide.meta.subtitle,
};

export default function GymFranchisePage() {
  return <HomeServicesFranchiseGuide data={gymFranchiseGuide} />;
}
