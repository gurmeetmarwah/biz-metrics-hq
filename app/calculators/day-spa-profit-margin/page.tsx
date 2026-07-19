import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { DaySpaProfitMarginCalculator } from "@/components/calculator/DaySpaProfitMarginCalculator";
import { faqs, introContent, meta } from "@/lib/industries/day-spa-profit-margin-calculator";
import { daySpaAttribution } from "@/lib/data-sources/day-spa";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Profit margin · P&L"
      hubHref="/industries/beauty/day-spa/"
      hubLabel="Day Spa"
      sampleSize={daySpaAttribution.sampleSize}
      dataVintage={daySpaAttribution.dataVintage}
      faqs={faqs}
    >
      <DaySpaProfitMarginCalculator />
    </CalculatorPageShell>
  );
}
