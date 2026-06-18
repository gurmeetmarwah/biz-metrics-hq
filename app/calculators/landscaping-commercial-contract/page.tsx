import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { LandscapingCommercialContractCalculator } from "@/components/calculator/LandscapingCommercialContractCalculator";
import { faqs, introContent, meta } from "@/lib/industries/landscaping-commercial-contract-calculator";
import { landscapingAttribution } from "@/lib/data-sources/landscaping";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Industry benchmarks · commercial contracts"
      hubHref="/industries/landscaping/"
      hubLabel="Landscaping"
      sampleSize={landscapingAttribution.sampleSize}
      dataVintage={landscapingAttribution.dataVintage}
      faqs={faqs}
    >
      <LandscapingCommercialContractCalculator />
    </CalculatorPageShell>
  );
}
