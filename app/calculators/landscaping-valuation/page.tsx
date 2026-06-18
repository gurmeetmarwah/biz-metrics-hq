import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { LandscapingValuationCalculator } from "@/components/calculator/LandscapingValuationCalculator";
import { faqs, introContent, meta } from "@/lib/industries/landscaping-valuation-calculator";
import { landscapingAttribution } from "@/lib/data-sources/landscaping";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Industry benchmarks · landscaping valuation"
      hubHref="/industries/landscaping/"
      hubLabel="Landscaping"
      sampleSize={landscapingAttribution.sampleSize}
      dataVintage={landscapingAttribution.dataVintage}
      faqs={faqs}
    >
      <LandscapingValuationCalculator />
    </CalculatorPageShell>
  );
}
