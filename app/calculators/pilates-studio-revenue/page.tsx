import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { PilatesStudioRevenueCalculator } from "@/components/calculator/PilatesStudioRevenueCalculator";
import { faqs, introContent, meta } from "@/lib/industries/pilates-studio-revenue-calculator";
import { pilatesStudioAttribution } from "@/lib/data-sources/pilates-studio";

export const metadata: Metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Membership MRR · private sessions · class packages"
      hubHref="/industries/pilates-studio/"
      hubLabel="Pilates Studio"
      sampleSize={pilatesStudioAttribution.sampleSize}
      dataVintage={pilatesStudioAttribution.dataVintage}
      faqs={faqs}
    >
      <PilatesStudioRevenueCalculator />
    </CalculatorPageShell>
  );
}
