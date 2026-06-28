import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { MartialArtsStudentCapacityCalculator } from "@/components/calculator/MartialArtsStudentCapacityCalculator";
import { faqs, introContent, meta } from "@/lib/industries/martial-arts-student-capacity-calculator";
import { martialArtsSchoolAttribution } from "@/lib/data-sources/martial-arts-school";

export const metadata: Metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Class fill rate · dojo capacity · revenue per class"
      hubHref="/industries/martial-arts-school/"
      hubLabel="Martial Arts School"
      sampleSize={martialArtsSchoolAttribution.sampleSize}
      dataVintage={martialArtsSchoolAttribution.dataVintage}
      faqs={faqs}
    >
      <MartialArtsStudentCapacityCalculator />
    </CalculatorPageShell>
  );
}
