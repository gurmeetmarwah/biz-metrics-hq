import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { DaySpaValuationCalculator } from "@/components/calculator/DaySpaValuationCalculator";
import { faqs, introContent, meta } from "@/lib/industries/day-spa-valuation-calculator";
import { daySpaAttribution } from "@/lib/data-sources/day-spa";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Valuation · SDE multiple"
      hubHref="/industries/beauty/day-spa/"
      hubLabel="Day Spa"
      sampleSize={daySpaAttribution.sampleSize}
      dataVintage={daySpaAttribution.dataVintage}
      faqs={faqs}
    >
      <DaySpaValuationCalculator />
    </CalculatorPageShell>
  );
}
