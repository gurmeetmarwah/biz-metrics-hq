import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { PilatesMembershipRevenueCalculator } from "@/components/calculator/PilatesMembershipRevenueCalculator";
import { faqs, introContent, meta } from "@/lib/industries/pilates-membership-revenue-calculator";
import { pilatesStudioAttribution } from "@/lib/data-sources/pilates-studio";

export const metadata: Metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="MRR · autopay · recurring revenue"
      hubHref="/industries/pilates-studio/"
      hubLabel="Pilates Studio"
      sampleSize={pilatesStudioAttribution.sampleSize}
      dataVintage={pilatesStudioAttribution.dataVintage}
      faqs={faqs}
    >
      <PilatesMembershipRevenueCalculator />
    </CalculatorPageShell>
  );
}
