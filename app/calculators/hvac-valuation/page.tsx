import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { HvacValuationCalculator } from "@/components/calculator/HvacValuationCalculator";
import { faqs, introContent, meta } from "@/lib/industries/hvac-valuation-calculator";
import { hvacAttribution } from "@/lib/data-sources/hvac";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="SDE multiples · business value"
      hubHref="/industries/hvac/"
      hubLabel="HVAC"
      sampleSize={hvacAttribution.sampleSize}
      dataVintage={hvacAttribution.dataVintage}
      faqs={faqs}
    >
      <HvacValuationCalculator />
    </CalculatorPageShell>
  );
}
