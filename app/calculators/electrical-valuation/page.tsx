import type { Metadata } from "next";
import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { ElectricalValuationCalculator } from "@/components/calculator/ElectricalValuationCalculator";
import { faqs, introContent, meta } from "@/lib/industries/electrical-valuation-calculator";
import { electricalAttribution } from "@/lib/data-sources/electrical";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="SDE multiples · valuation range"
      hubHref="/industries/electrical/"
      hubLabel="Electrical"
      sampleSize={electricalAttribution.sampleSize}
      dataVintage={electricalAttribution.dataVintage}
      faqs={faqs}
    >
      <ElectricalValuationCalculator />
    </CalculatorPageShell>
  );
}
