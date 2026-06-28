import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { MartialArtsStudentLifetimeValueCalculator } from "@/components/calculator/MartialArtsStudentLifetimeValueCalculator";
import { faqs, introContent, meta } from "@/lib/industries/martial-arts-student-lifetime-value-calculator";
import { martialArtsSchoolAttribution } from "@/lib/data-sources/martial-arts-school";

export const metadata: Metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="LTV · churn · CAC payback"
      hubHref="/industries/martial-arts-school/"
      hubLabel="Martial Arts School"
      sampleSize={martialArtsSchoolAttribution.sampleSize}
      dataVintage={martialArtsSchoolAttribution.dataVintage}
      faqs={faqs}
    >
      <MartialArtsStudentLifetimeValueCalculator />
    </CalculatorPageShell>
  );
}
