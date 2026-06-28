import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { GymValuationCalculator } from "@/components/calculator/GymValuationCalculator";
import { faqs, introContent, meta } from "@/lib/industries/gym-valuation-calculator";
import { gymAttribution } from "@/lib/data-sources/gym";

export const metadata: Metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="SDE multiples · recurring revenue quality"
      hubHref="/industries/gym/"
      hubLabel="Gym"
      sampleSize={gymAttribution.sampleSize}
      dataVintage={gymAttribution.dataVintage}
      faqs={faqs}
    >
      <GymValuationCalculator />
    </CalculatorPageShell>
  );
}
