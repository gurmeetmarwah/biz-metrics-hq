import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { GymMembershipGrowthCalculator } from "@/components/calculator/GymMembershipGrowthCalculator";
import { faqs, introContent, meta } from "@/lib/industries/gym-membership-growth-calculator";
import { gymAttribution } from "@/lib/data-sources/gym";

export const metadata: Metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Net growth · churn modeling"
      hubHref="/industries/gym/"
      hubLabel="Gym"
      sampleSize={gymAttribution.sampleSize}
      dataVintage={gymAttribution.dataVintage}
      faqs={faqs}
    >
      <GymMembershipGrowthCalculator />
    </CalculatorPageShell>
  );
}
