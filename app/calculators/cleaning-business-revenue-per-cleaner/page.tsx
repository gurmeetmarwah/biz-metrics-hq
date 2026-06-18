import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { CleaningBusinessRevenuePerCleanerCalculator } from "@/components/calculator/CleaningBusinessRevenuePerCleanerCalculator";
import { faqs, introContent, meta } from "@/lib/industries/cleaning-business-revenue-per-cleaner-calculator";
import { cleaningBusinessAttribution } from "@/lib/data-sources/cleaning-business";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Labor productivity · revenue per cleaner"
      hubHref="/industries/cleaning-business/"
      hubLabel="Cleaning Business"
      sampleSize={cleaningBusinessAttribution.sampleSize}
      dataVintage={cleaningBusinessAttribution.dataVintage}
      faqs={faqs}
    >
      <CleaningBusinessRevenuePerCleanerCalculator />
    </CalculatorPageShell>
  );
}
