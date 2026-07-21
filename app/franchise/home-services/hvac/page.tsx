import type { Metadata } from "next";
import { HvacFranchiseGuide } from "@/components/franchise/HvacFranchiseGuide";
import { hvacFranchisePageMeta } from "@/lib/franchise/home-services/hvac-franchise";

export const metadata: Metadata = {
  title: `${hvacFranchisePageMeta.title} | BizMetricsHQ`,
  description: hvacFranchisePageMeta.subtitle,
};

export default function HvacFranchisePage() {
  return <HvacFranchiseGuide />;
}
