import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { PestControlProfitMarginCalculator } from "@/components/calculator/PestControlProfitMarginCalculator";
import { faqs, introContent, meta } from "@/lib/industries/pest-control-profit-margin-calculator";
import { pestControlAttribution } from "@/lib/data-sources/pest-control";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Industry benchmarks · cost diagnostics"
      hubHref="/industries/pest-control/"
      hubLabel="Pest Control"
      sampleSize={pestControlAttribution.sampleSize}
      dataVintage={pestControlAttribution.dataVintage}
      faqs={faqs}
    >
      <PestControlProfitMarginCalculator />
    </CalculatorPageShell>
  );
}
