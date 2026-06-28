import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { PilatesClassOccupancyCalculator } from "@/components/calculator/PilatesClassOccupancyCalculator";
import { faqs, introContent, meta } from "@/lib/industries/pilates-class-occupancy-calculator";
import { pilatesStudioAttribution } from "@/lib/data-sources/pilates-studio";

export const metadata: Metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Reformer utilization · fill rate · class revenue"
      hubHref="/industries/pilates-studio/"
      hubLabel="Pilates Studio"
      sampleSize={pilatesStudioAttribution.sampleSize}
      dataVintage={pilatesStudioAttribution.dataVintage}
      faqs={faqs}
    >
      <PilatesClassOccupancyCalculator />
    </CalculatorPageShell>
  );
}
