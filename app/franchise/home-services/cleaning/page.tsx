import type { Metadata } from "next";
import { HomeServicesFranchiseGuide } from "@/components/franchise/HomeServicesFranchiseGuide";
import { cleaningFranchiseGuide } from "@/lib/franchise/home-services/cleaning-franchise";

export const metadata: Metadata = {
  title: `${cleaningFranchiseGuide.meta.title} | BizMetricsHQ`,
  description: cleaningFranchiseGuide.meta.subtitle,
};

export default function CleaningFranchisePage() {
  return <HomeServicesFranchiseGuide data={cleaningFranchiseGuide} />;
}
