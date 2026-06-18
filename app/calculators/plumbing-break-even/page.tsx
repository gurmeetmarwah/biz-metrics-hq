import type { Metadata } from "next";
import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { PlumbingBreakEvenCalculator } from "@/components/calculator/PlumbingBreakEvenCalculator";
import { faqs, introContent, meta } from "@/lib/industries/plumbing-break-even-calculator";
import { plumbingAttribution } from "@/lib/data-sources/plumbing";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Monthly targets · safety score"
      hubHref="/industries/plumbing/"
      hubLabel="Plumbing"
      sampleSize={plumbingAttribution.sampleSize}
      dataVintage={plumbingAttribution.dataVintage}
      faqs={faqs}
    >
      <PlumbingBreakEvenCalculator />
    </CalculatorPageShell>
  );
}
