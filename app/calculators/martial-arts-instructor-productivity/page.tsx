import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { MartialArtsInstructorProductivityCalculator } from "@/components/calculator/MartialArtsInstructorProductivityCalculator";
import { faqs, introContent, meta } from "@/lib/industries/martial-arts-instructor-productivity-calculator";
import { martialArtsSchoolAttribution } from "@/lib/data-sources/martial-arts-school";

export const metadata: Metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Revenue per instructor · teaching hours · class load"
      hubHref="/industries/martial-arts-school/"
      hubLabel="Martial Arts School"
      sampleSize={martialArtsSchoolAttribution.sampleSize}
      dataVintage={martialArtsSchoolAttribution.dataVintage}
      faqs={faqs}
    >
      <MartialArtsInstructorProductivityCalculator />
    </CalculatorPageShell>
  );
}
