import type { Metadata } from "next";
import { HomeServicesFranchiseGuide } from "@/components/franchise/HomeServicesFranchiseGuide";
import { swimSchoolFranchiseGuide } from "@/lib/franchise/fitness/swim-school-franchise";

export const metadata: Metadata = {
  title: `${swimSchoolFranchiseGuide.meta.title} | BizMetricsHQ`,
  description: swimSchoolFranchiseGuide.meta.subtitle,
};

export default function SwimSchoolFranchisePage() {
  return <HomeServicesFranchiseGuide data={swimSchoolFranchiseGuide} />;
}
