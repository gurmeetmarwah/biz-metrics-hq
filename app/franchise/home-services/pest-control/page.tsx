import type { Metadata } from "next";
import { HomeServicesFranchiseGuide } from "@/components/franchise/HomeServicesFranchiseGuide";
import { pestControlFranchiseGuide } from "@/lib/franchise/home-services/pest-control-franchise";

export const metadata: Metadata = {
  title: `${pestControlFranchiseGuide.meta.title} | BizMetricsHQ`,
  description: pestControlFranchiseGuide.meta.subtitle,
};

export default function PestControlFranchisePage() {
  return <HomeServicesFranchiseGuide data={pestControlFranchiseGuide} />;
}
