import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { MartialArtsBeltTestingRevenueCalculator } from "@/components/calculator/MartialArtsBeltTestingRevenueCalculator";
import { faqs, introContent, meta } from "@/lib/industries/martial-arts-belt-testing-revenue-calculator";
import { martialArtsSchoolAttribution } from "@/lib/data-sources/martial-arts-school";

export const metadata: Metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Promotion fees · testing cycles · pass rates"
      hubHref="/industries/martial-arts-school/"
      hubLabel="Martial Arts School"
      sampleSize={martialArtsSchoolAttribution.sampleSize}
      dataVintage={martialArtsSchoolAttribution.dataVintage}
      faqs={faqs}
    >
      <MartialArtsBeltTestingRevenueCalculator />
    </CalculatorPageShell>
  );
}
