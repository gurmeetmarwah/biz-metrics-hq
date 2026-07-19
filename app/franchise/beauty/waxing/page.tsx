import type { Metadata } from "next";
import { BeautyFranchiseGuidePage } from "@/components/franchise/BeautyFranchiseGuidePage";
import { waxingFranchiseGuide } from "@/lib/franchise/beauty/waxing-franchise";

export const metadata: Metadata = {
  title: `${waxingFranchiseGuide.meta.title} | BizMetricsHQ`,
  description: waxingFranchiseGuide.meta.subtitle,
};

export default function WaxingFranchisePage() {
  return <BeautyFranchiseGuidePage data={waxingFranchiseGuide} />;
}
