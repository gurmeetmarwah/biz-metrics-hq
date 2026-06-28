import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { PilatesValuationCalculator } from "@/components/calculator/PilatesValuationCalculator";
import { faqs, introContent, meta } from "@/lib/industries/pilates-valuation-calculator";
import { pilatesStudioAttribution } from "@/lib/data-sources/pilates-studio";

export const metadata: Metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="SDE multiples · recurring revenue quality"
      hubHref="/industries/pilates-studio/"
      hubLabel="Pilates Studio"
      sampleSize={pilatesStudioAttribution.sampleSize}
      dataVintage={pilatesStudioAttribution.dataVintage}
      faqs={faqs}
    >
      <PilatesValuationCalculator />
    </CalculatorPageShell>
  );
}
