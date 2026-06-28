import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { PilatesInstructorProductivityCalculator } from "@/components/calculator/PilatesInstructorProductivityCalculator";
import { faqs, introContent, meta } from "@/lib/industries/pilates-instructor-productivity-calculator";
import { pilatesStudioAttribution } from "@/lib/data-sources/pilates-studio";

export const metadata: Metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Revenue per instructor · teaching hours · utilization"
      hubHref="/industries/pilates-studio/"
      hubLabel="Pilates Studio"
      sampleSize={pilatesStudioAttribution.sampleSize}
      dataVintage={pilatesStudioAttribution.dataVintage}
      faqs={faqs}
    >
      <PilatesInstructorProductivityCalculator />
    </CalculatorPageShell>
  );
}
