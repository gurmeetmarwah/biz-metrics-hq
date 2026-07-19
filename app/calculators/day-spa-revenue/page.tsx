import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { DaySpaRevenueCalculator } from "@/components/calculator/DaySpaRevenueCalculator";
import { faqs, introContent, meta } from "@/lib/industries/day-spa-revenue-calculator";
import { daySpaAttribution } from "@/lib/data-sources/day-spa";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Revenue · appointment volume"
      hubHref="/industries/beauty/day-spa/"
      hubLabel="Day Spa"
      sampleSize={daySpaAttribution.sampleSize}
      dataVintage={daySpaAttribution.dataVintage}
      faqs={faqs}
    >
      <DaySpaRevenueCalculator />
    </CalculatorPageShell>
  );
}
