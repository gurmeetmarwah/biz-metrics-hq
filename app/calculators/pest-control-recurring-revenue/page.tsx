import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { PestControlRecurringRevenueCalculator } from "@/components/calculator/PestControlRecurringRevenueCalculator";
import { faqs, introContent, meta } from "@/lib/industries/pest-control-recurring-revenue-calculator";
import { pestControlAttribution } from "@/lib/data-sources/pest-control";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Subscription revenue · contract mix"
      hubHref="/industries/pest-control/"
      hubLabel="Pest Control"
      sampleSize={pestControlAttribution.sampleSize}
      dataVintage={pestControlAttribution.dataVintage}
      faqs={faqs}
    >
      <PestControlRecurringRevenueCalculator />
    </CalculatorPageShell>
  );
}
