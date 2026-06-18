import type { Metadata } from "next";
import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { RoofingRevenueCalculator } from "@/components/calculator/RoofingRevenueCalculator";
import { faqs, introContent, meta } from "@/lib/industries/roofing-revenue-calculator";
import { roofingAttribution } from "@/lib/data-sources/roofing";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Industry benchmarks · roofing revenue"
      hubHref="/industries/roofing/"
      hubLabel="Roofing"
      sampleSize={roofingAttribution.sampleSize}
      dataVintage={roofingAttribution.dataVintage}
      faqs={faqs}
    >
      <RoofingRevenueCalculator />
    </CalculatorPageShell>
  );
}
