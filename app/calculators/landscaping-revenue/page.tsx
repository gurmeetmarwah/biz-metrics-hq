import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { LandscapingRevenueCalculator } from "@/components/calculator/LandscapingRevenueCalculator";
import { faqs, introContent, meta } from "@/lib/industries/landscaping-revenue-calculator";
import { landscapingAttribution } from "@/lib/data-sources/landscaping";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Industry benchmarks · landscaping revenue"
      hubHref="/industries/landscaping/"
      hubLabel="Landscaping"
      sampleSize={landscapingAttribution.sampleSize}
      dataVintage={landscapingAttribution.dataVintage}
      faqs={faqs}
    >
      <LandscapingRevenueCalculator />
    </CalculatorPageShell>
  );
}
