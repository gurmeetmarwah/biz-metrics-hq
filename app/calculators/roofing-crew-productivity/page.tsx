import type { Metadata } from "next";
import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { RoofingCrewProductivityCalculator } from "@/components/calculator/RoofingCrewProductivityCalculator";
import { faqs, introContent, meta } from "@/lib/industries/roofing-crew-productivity-calculator";
import { roofingAttribution } from "@/lib/data-sources/roofing";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Industry benchmarks · crew productivity"
      hubHref="/industries/roofing/"
      hubLabel="Roofing"
      sampleSize={roofingAttribution.sampleSize}
      dataVintage={roofingAttribution.dataVintage}
      faqs={faqs}
    >
      <RoofingCrewProductivityCalculator />
    </CalculatorPageShell>
  );
}
