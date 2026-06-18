import type { Metadata } from "next";
import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { ElectricalProfitMarginCalculator } from "@/components/calculator/ElectricalProfitMarginCalculator";
import { faqs, introContent, meta } from "@/lib/industries/electrical-profit-margin-calculator";
import { electricalAttribution } from "@/lib/data-sources/electrical";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Industry benchmarks · cost diagnostics"
      hubHref="/industries/electrical/"
      hubLabel="Electrical"
      sampleSize={electricalAttribution.sampleSize}
      dataVintage={electricalAttribution.dataVintage}
      faqs={faqs}
    >
      <ElectricalProfitMarginCalculator />
    </CalculatorPageShell>
  );
}
