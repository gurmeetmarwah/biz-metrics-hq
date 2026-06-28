import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { GymRevenueCalculator } from "@/components/calculator/GymRevenueCalculator";
import { faqs, introContent, meta } from "@/lib/industries/gym-revenue-calculator";
import { gymAttribution } from "@/lib/data-sources/gym";

export const metadata: Metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Membership MRR · ancillary revenue"
      hubHref="/industries/gym/"
      hubLabel="Gym"
      sampleSize={gymAttribution.sampleSize}
      dataVintage={gymAttribution.dataVintage}
      faqs={faqs}
    >
      <GymRevenueCalculator />
    </CalculatorPageShell>
  );
}
