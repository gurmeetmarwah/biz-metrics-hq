import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { CleaningBusinessCustomerLifetimeValueCalculator } from "@/components/calculator/CleaningBusinessCustomerLifetimeValueCalculator";
import { faqs, introContent, meta } from "@/lib/industries/cleaning-business-customer-lifetime-value-calculator";
import { cleaningBusinessAttribution } from "@/lib/data-sources/cleaning-business";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Customer LTV · retention economics"
      hubHref="/industries/cleaning-business/"
      hubLabel="Cleaning Business"
      sampleSize={cleaningBusinessAttribution.sampleSize}
      dataVintage={cleaningBusinessAttribution.dataVintage}
      faqs={faqs}
    >
      <CleaningBusinessCustomerLifetimeValueCalculator />
    </CalculatorPageShell>
  );
}
