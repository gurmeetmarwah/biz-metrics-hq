import type { Metadata } from "next";
import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { YogaClientLifetimeValueCalculator } from "@/components/calculator/YogaClientLifetimeValueCalculator";
import { faqs, introContent, meta } from "@/lib/industries/yoga-client-lifetime-value-calculator";
import { yogaStudioAttribution } from "@/lib/data-sources/yoga-studio";

export const metadata: Metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="LTV · churn · CAC payback"
      hubHref="/industries/yoga-studio/"
      hubLabel="Yoga Studio"
      sampleSize={yogaStudioAttribution.sampleSize}
      dataVintage={yogaStudioAttribution.dataVintage}
      faqs={faqs}
    >
      <YogaClientLifetimeValueCalculator />
    </CalculatorPageShell>
  );
}
