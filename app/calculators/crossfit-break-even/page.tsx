import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { CrossFitBreakEvenCalculator } from "@/components/calculator/CrossFitBreakEvenCalculator";
import { faqs, introContent, meta } from "@/lib/industries/crossfit-break-even-calculator";
import { crossfitGymAttribution } from "@/lib/data-sources/crossfit-gym";

export const metadata: Metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Membership MRR · coach productivity · class utilization"
      hubHref="/industries/crossfit-gym/"
      hubLabel="CrossFit Gym"
      sampleSize={crossfitGymAttribution.sampleSize}
      dataVintage={crossfitGymAttribution.dataVintage}
      faqs={faqs}
    >
      <CrossFitBreakEvenCalculator />
    </CalculatorPageShell>
  );
}
