import type { Metadata } from "next";
import { BeautyFranchiseGuidePage } from "@/components/franchise/BeautyFranchiseGuidePage";
import { massageFranchiseGuide } from "@/lib/franchise/beauty/massage-franchise";

export const metadata: Metadata = {
  title: `${massageFranchiseGuide.meta.title} | BizMetricsHQ`,
  description: massageFranchiseGuide.meta.subtitle,
};

export default function MassageFranchisePage() {
  return <BeautyFranchiseGuidePage data={massageFranchiseGuide} />;
}
