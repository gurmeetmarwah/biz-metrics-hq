import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { CleaningBusinessValuationCalculator } from "@/components/calculator/CleaningBusinessValuationCalculator";
import { faqs, introContent, meta } from "@/lib/industries/cleaning-business-valuation-calculator";
import { cleaningBusinessAttribution } from "@/lib/data-sources/cleaning-business";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="SDE multiples · business value"
      hubHref="/industries/cleaning-business/"
      hubLabel="Cleaning Business"
      sampleSize={cleaningBusinessAttribution.sampleSize}
      dataVintage={cleaningBusinessAttribution.dataVintage}
      faqs={faqs}
    >
      <CleaningBusinessValuationCalculator />
    </CalculatorPageShell>
  );
}
