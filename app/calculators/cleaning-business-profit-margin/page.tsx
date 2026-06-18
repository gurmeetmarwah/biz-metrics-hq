import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { CleaningBusinessProfitMarginCalculator } from "@/components/calculator/CleaningBusinessProfitMarginCalculator";
import { faqs, introContent, meta } from "@/lib/industries/cleaning-business-profit-margin-calculator";
import { cleaningBusinessAttribution } from "@/lib/data-sources/cleaning-business";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Net margin · cost structure"
      hubHref="/industries/cleaning-business/"
      hubLabel="Cleaning Business"
      sampleSize={cleaningBusinessAttribution.sampleSize}
      dataVintage={cleaningBusinessAttribution.dataVintage}
      faqs={faqs}
    >
      <CleaningBusinessProfitMarginCalculator />
    </CalculatorPageShell>
  );
}
