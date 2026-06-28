import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { YogaClassCapacityCalculator } from "@/components/calculator/YogaClassCapacityCalculator";
import { faqs, introContent, meta } from "@/lib/industries/yoga-class-capacity-calculator";
import { yogaStudioAttribution } from "@/lib/data-sources/yoga-studio";

export const metadata: Metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Class fill rate · studio capacity · revenue per class"
      hubHref="/industries/yoga-studio/"
      hubLabel="Yoga Studio"
      sampleSize={yogaStudioAttribution.sampleSize}
      dataVintage={yogaStudioAttribution.dataVintage}
      faqs={faqs}
    >
      <YogaClassCapacityCalculator />
    </CalculatorPageShell>
  );
}
