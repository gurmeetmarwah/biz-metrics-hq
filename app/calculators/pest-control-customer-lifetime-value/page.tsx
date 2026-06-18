import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { PestControlCustomerLifetimeValueCalculator } from "@/components/calculator/PestControlCustomerLifetimeValueCalculator";
import { faqs, introContent, meta } from "@/lib/industries/pest-control-customer-lifetime-value-calculator";
import { pestControlAttribution } from "@/lib/data-sources/pest-control";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Customer LTV · retention economics"
      hubHref="/industries/pest-control/"
      hubLabel="Pest Control"
      sampleSize={pestControlAttribution.sampleSize}
      dataVintage={pestControlAttribution.dataVintage}
      faqs={faqs}
    >
      <PestControlCustomerLifetimeValueCalculator />
    </CalculatorPageShell>
  );
}
