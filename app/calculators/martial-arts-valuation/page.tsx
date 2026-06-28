import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { MartialArtsValuationCalculator } from "@/components/calculator/MartialArtsValuationCalculator";
import { faqs, introContent, meta } from "@/lib/industries/martial-arts-valuation-calculator";
import { martialArtsSchoolAttribution } from "@/lib/data-sources/martial-arts-school";

export const metadata: Metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="SDE multiples · tuition retention · exit value"
      hubHref="/industries/martial-arts-school/"
      hubLabel="Martial Arts School"
      sampleSize={martialArtsSchoolAttribution.sampleSize}
      dataVintage={martialArtsSchoolAttribution.dataVintage}
      faqs={faqs}
    >
      <MartialArtsValuationCalculator />
    </CalculatorPageShell>
  );
}
