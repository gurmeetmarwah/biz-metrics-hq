import type { Metadata } from "next";
import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { PlumbingValuationCalculator } from "@/components/calculator/PlumbingValuationCalculator";
import { faqs, introContent, meta } from "@/lib/industries/plumbing-valuation-calculator";
import { plumbingAttribution } from "@/lib/data-sources/plumbing";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="SDE multiples · valuation range"
      hubHref="/industries/plumbing/"
      hubLabel="Plumbing"
      sampleSize={plumbingAttribution.sampleSize}
      dataVintage={plumbingAttribution.dataVintage}
      faqs={faqs}
    >
      <PlumbingValuationCalculator />
    </CalculatorPageShell>
  );
}
