import type { Metadata } from "next";
import { HomeServicesFranchiseGuide } from "@/components/franchise/HomeServicesFranchiseGuide";
import { pilatesFranchiseGuide } from "@/lib/franchise/fitness/pilates-franchise";

export const metadata: Metadata = {
  title: `${pilatesFranchiseGuide.meta.title} | BizMetricsHQ`,
  description: pilatesFranchiseGuide.meta.subtitle,
};

export default function PilatesFranchisePage() {
  return <HomeServicesFranchiseGuide data={pilatesFranchiseGuide} />;
}
