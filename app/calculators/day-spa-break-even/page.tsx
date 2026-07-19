import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { DaySpaBreakEvenCalculator } from "@/components/calculator/DaySpaBreakEvenCalculator";
import { faqs, introContent, meta } from "@/lib/industries/day-spa-break-even-calculator";
import { daySpaAttribution } from "@/lib/data-sources/day-spa";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Break-even · fixed costs"
      hubHref="/industries/beauty/day-spa/"
      hubLabel="Day Spa"
      sampleSize={daySpaAttribution.sampleSize}
      dataVintage={daySpaAttribution.dataVintage}
      faqs={faqs}
    >
      <DaySpaBreakEvenCalculator />
    </CalculatorPageShell>
  );
}
