import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { LandscapingCrewProductivityCalculator } from "@/components/calculator/LandscapingCrewProductivityCalculator";
import { faqs, introContent, meta } from "@/lib/industries/landscaping-crew-productivity-calculator";
import { landscapingAttribution } from "@/lib/data-sources/landscaping";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Industry benchmarks · crew productivity"
      hubHref="/industries/landscaping/"
      hubLabel="Landscaping"
      sampleSize={landscapingAttribution.sampleSize}
      dataVintage={landscapingAttribution.dataVintage}
      faqs={faqs}
    >
      <LandscapingCrewProductivityCalculator />
    </CalculatorPageShell>
  );
}
