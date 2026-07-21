import type { Metadata } from "next";
import { HomeServicesFranchiseGuide } from "@/components/franchise/HomeServicesFranchiseGuide";
import { plumbingFranchiseGuide } from "@/lib/franchise/home-services/plumbing-franchise";

export const metadata: Metadata = {
  title: `${plumbingFranchiseGuide.meta.title} | BizMetricsHQ`,
  description: plumbingFranchiseGuide.meta.subtitle,
};

export default function PlumbingFranchisePage() {
  return <HomeServicesFranchiseGuide data={plumbingFranchiseGuide} />;
}
