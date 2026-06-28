import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { GymMemberLifetimeValueCalculator } from "@/components/calculator/GymMemberLifetimeValueCalculator";
import { faqs, introContent, meta } from "@/lib/industries/gym-member-lifetime-value-calculator";
import { gymAttribution } from "@/lib/data-sources/gym";

export const metadata: Metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="LTV · CAC payback"
      hubHref="/industries/gym/"
      hubLabel="Gym"
      sampleSize={gymAttribution.sampleSize}
      dataVintage={gymAttribution.dataVintage}
      faqs={faqs}
    >
      <GymMemberLifetimeValueCalculator />
    </CalculatorPageShell>
  );
}
