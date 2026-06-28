import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { GymChurnRateCalculator } from "@/components/calculator/GymChurnRateCalculator";
import { faqs, introContent, meta } from "@/lib/industries/gym-churn-rate-calculator";
import { gymAttribution } from "@/lib/data-sources/gym";

export const metadata: Metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Monthly churn · annual retention"
      hubHref="/industries/gym/"
      hubLabel="Gym"
      sampleSize={gymAttribution.sampleSize}
      dataVintage={gymAttribution.dataVintage}
      faqs={faqs}
    >
      <GymChurnRateCalculator />
    </CalculatorPageShell>
  );
}
