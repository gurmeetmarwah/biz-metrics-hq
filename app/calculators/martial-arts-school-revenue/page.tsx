import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { MartialArtsSchoolRevenueCalculator } from "@/components/calculator/MartialArtsSchoolRevenueCalculator";
import { faqs, introContent, meta } from "@/lib/industries/martial-arts-school-revenue-calculator";
import { martialArtsSchoolAttribution } from "@/lib/data-sources/martial-arts-school";

export const metadata: Metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Tuition MRR · belt testing · camps · merchandise"
      hubHref="/industries/martial-arts-school/"
      hubLabel="Martial Arts School"
      sampleSize={martialArtsSchoolAttribution.sampleSize}
      dataVintage={martialArtsSchoolAttribution.dataVintage}
      faqs={faqs}
    >
      <MartialArtsSchoolRevenueCalculator />
    </CalculatorPageShell>
  );
}
