import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { HvacBreakEvenCalculator } from "@/components/calculator/HvacBreakEvenCalculator";
import { faqs, introContent, meta } from "@/lib/industries/hvac-break-even-calculator";
import { hvacAttribution } from "@/lib/data-sources/hvac";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Monthly targets · jobs per day"
      hubHref="/industries/hvac/"
      hubLabel="HVAC"
      sampleSize={hvacAttribution.sampleSize}
      dataVintage={hvacAttribution.dataVintage}
      faqs={faqs}
    >
      <HvacBreakEvenCalculator />
    </CalculatorPageShell>
  );
}
