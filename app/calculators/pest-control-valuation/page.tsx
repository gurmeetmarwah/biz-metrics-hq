import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { PestControlValuationCalculator } from "@/components/calculator/PestControlValuationCalculator";
import { faqs, introContent, meta } from "@/lib/industries/pest-control-valuation-calculator";
import { pestControlAttribution } from "@/lib/data-sources/pest-control";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="SDE multiples · acquisition pricing"
      hubHref="/industries/pest-control/"
      hubLabel="Pest Control"
      sampleSize={pestControlAttribution.sampleSize}
      dataVintage={pestControlAttribution.dataVintage}
      faqs={faqs}
    >
      <PestControlValuationCalculator />
    </CalculatorPageShell>
  );
}
