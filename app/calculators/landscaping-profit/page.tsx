import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { LandscapingProfitCalculator } from "@/components/calculator/LandscapingProfitCalculator";
import { faqs, introContent, meta } from "@/lib/industries/landscaping-profit-calculator";
import { landscapingAttribution } from "@/lib/data-sources/landscaping";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Industry benchmarks · landscaping profitability"
      hubHref="/industries/landscaping/"
      hubLabel="Landscaping"
      sampleSize={landscapingAttribution.sampleSize}
      dataVintage={landscapingAttribution.dataVintage}
      faqs={faqs}
    >
      <LandscapingProfitCalculator />
    </CalculatorPageShell>
  );
}
