import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { YogaMembershipRevenueCalculator } from "@/components/calculator/YogaMembershipRevenueCalculator";
import { faqs, introContent, meta } from "@/lib/industries/yoga-membership-revenue-calculator";
import { yogaStudioAttribution } from "@/lib/data-sources/yoga-studio";

export const metadata: Metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="MRR · autopay · recurring revenue"
      hubHref="/industries/yoga-studio/"
      hubLabel="Yoga Studio"
      sampleSize={yogaStudioAttribution.sampleSize}
      dataVintage={yogaStudioAttribution.dataVintage}
      faqs={faqs}
    >
      <YogaMembershipRevenueCalculator />
    </CalculatorPageShell>
  );
}
