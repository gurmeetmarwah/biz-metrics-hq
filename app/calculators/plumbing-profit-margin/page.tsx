import type { Metadata } from "next";
import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { PlumbingProfitMarginCalculator } from "@/components/calculator/PlumbingProfitMarginCalculator";
import { faqs, introContent, meta } from "@/lib/industries/plumbing-profit-margin-calculator";
import { plumbingAttribution } from "@/lib/data-sources/plumbing";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Industry benchmarks · cost diagnostics"
      hubHref="/industries/plumbing/"
      hubLabel="Plumbing"
      sampleSize={plumbingAttribution.sampleSize}
      dataVintage={plumbingAttribution.dataVintage}
      faqs={faqs}
    >
      <PlumbingProfitMarginCalculator />
    </CalculatorPageShell>
  );
}
