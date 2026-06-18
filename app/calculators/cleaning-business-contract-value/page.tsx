import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { CleaningBusinessContractValueCalculator } from "@/components/calculator/CleaningBusinessContractValueCalculator";
import { faqs, introContent, meta } from "@/lib/industries/cleaning-business-contract-value-calculator";
import { cleaningBusinessAttribution } from "@/lib/data-sources/cleaning-business";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Contract revenue · recurring mix"
      hubHref="/industries/cleaning-business/"
      hubLabel="Cleaning Business"
      sampleSize={cleaningBusinessAttribution.sampleSize}
      dataVintage={cleaningBusinessAttribution.dataVintage}
      faqs={faqs}
    >
      <CleaningBusinessContractValueCalculator />
    </CalculatorPageShell>
  );
}
