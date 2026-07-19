import type { Metadata } from "next";
import { BeautyFranchiseGuidePage } from "@/components/franchise/BeautyFranchiseGuidePage";
import { medicalSpaFranchiseGuide } from "@/lib/franchise/beauty/medical-spa-franchise";

export const metadata: Metadata = {
  title: `${medicalSpaFranchiseGuide.meta.title} | BizMetricsHQ`,
  description: medicalSpaFranchiseGuide.meta.subtitle,
};

export default function MedicalSpaFranchisePage() {
  return <BeautyFranchiseGuidePage data={medicalSpaFranchiseGuide} />;
}
