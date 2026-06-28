import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { YogaInstructorProductivityCalculator } from "@/components/calculator/YogaInstructorProductivityCalculator";
import { faqs, introContent, meta } from "@/lib/industries/yoga-instructor-productivity-calculator";
import { yogaStudioAttribution } from "@/lib/data-sources/yoga-studio";

export const metadata: Metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Revenue per instructor · teaching hours · class load"
      hubHref="/industries/yoga-studio/"
      hubLabel="Yoga Studio"
      sampleSize={yogaStudioAttribution.sampleSize}
      dataVintage={yogaStudioAttribution.dataVintage}
      faqs={faqs}
    >
      <YogaInstructorProductivityCalculator />
    </CalculatorPageShell>
  );
}
