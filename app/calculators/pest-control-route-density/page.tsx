import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { PestControlRouteDensityCalculator } from "@/components/calculator/PestControlRouteDensityCalculator";
import { faqs, introContent, meta } from "@/lib/industries/pest-control-route-density-calculator";
import { pestControlAttribution } from "@/lib/data-sources/pest-control";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Route density · technician productivity"
      hubHref="/industries/pest-control/"
      hubLabel="Pest Control"
      sampleSize={pestControlAttribution.sampleSize}
      dataVintage={pestControlAttribution.dataVintage}
      faqs={faqs}
    >
      <PestControlRouteDensityCalculator />
    </CalculatorPageShell>
  );
}
