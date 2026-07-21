import type { Metadata } from "next";
import { HomeServicesFranchiseGuide } from "@/components/franchise/HomeServicesFranchiseGuide";
import { crossfitFranchiseGuide } from "@/lib/franchise/fitness/crossfit-franchise";

export const metadata: Metadata = {
  title: `${crossfitFranchiseGuide.meta.title} | BizMetricsHQ`,
  description: crossfitFranchiseGuide.meta.subtitle,
};

export default function CrossfitFranchisePage() {
  return <HomeServicesFranchiseGuide data={crossfitFranchiseGuide} />;
}
