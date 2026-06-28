import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { CrossFitMembershipRevenueCalculator } from "@/components/calculator/CrossFitMembershipRevenueCalculator";
import { faqs, introContent, meta } from "@/lib/industries/crossfit-membership-revenue-calculator";
import { crossfitGymAttribution } from "@/lib/data-sources/crossfit-gym";

export const metadata: Metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Membership MRR · coach productivity · class utilization"
      hubHref="/industries/crossfit-gym/"
      hubLabel="CrossFit Gym"
      sampleSize={crossfitGymAttribution.sampleSize}
      dataVintage={crossfitGymAttribution.dataVintage}
      faqs={faqs}
    >
      <CrossFitMembershipRevenueCalculator />
    </CalculatorPageShell>
  );
}
