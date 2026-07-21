import type { Metadata } from "next";
import { HomeServicesFranchiseGuide } from "@/components/franchise/HomeServicesFranchiseGuide";
import { yogaFranchiseGuide } from "@/lib/franchise/fitness/yoga-franchise";

export const metadata: Metadata = {
  title: `${yogaFranchiseGuide.meta.title} | BizMetricsHQ`,
  description: yogaFranchiseGuide.meta.subtitle,
};

export default function YogaFranchisePage() {
  return <HomeServicesFranchiseGuide data={yogaFranchiseGuide} />;
}
