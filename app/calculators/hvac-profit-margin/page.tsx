import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { HvacProfitMarginCalculator } from "@/components/calculator/HvacProfitMarginCalculator";
import { faqs, introContent, meta } from "@/lib/industries/hvac-profit-margin-calculator";
import { hvacAttribution } from "@/lib/data-sources/hvac";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Industry benchmarks · cost diagnostics"
      hubHref="/industries/hvac/"
      hubLabel="HVAC"
      sampleSize={hvacAttribution.sampleSize}
      dataVintage={hvacAttribution.dataVintage}
      faqs={faqs}
    >
      <HvacProfitMarginCalculator />
    </CalculatorPageShell>
  );
}
