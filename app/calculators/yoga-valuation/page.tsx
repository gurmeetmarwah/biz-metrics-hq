import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { YogaValuationCalculator } from "@/components/calculator/YogaValuationCalculator";
import { faqs, introContent, meta } from "@/lib/industries/yoga-valuation-calculator";
import { yogaStudioAttribution } from "@/lib/data-sources/yoga-studio";

export const metadata: Metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="SDE multiples · community retention · exit value"
      hubHref="/industries/yoga-studio/"
      hubLabel="Yoga Studio"
      sampleSize={yogaStudioAttribution.sampleSize}
      dataVintage={yogaStudioAttribution.dataVintage}
      faqs={faqs}
    >
      <YogaValuationCalculator />
    </CalculatorPageShell>
  );
}
