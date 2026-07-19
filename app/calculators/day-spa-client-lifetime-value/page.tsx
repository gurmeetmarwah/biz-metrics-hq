import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { DaySpaClientLifetimeValueCalculator } from "@/components/calculator/DaySpaClientLifetimeValueCalculator";
import { faqs, introContent, meta } from "@/lib/industries/day-spa-client-lifetime-value-calculator";
import { daySpaAttribution } from "@/lib/data-sources/day-spa";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Client LTV · retention"
      hubHref="/industries/beauty/day-spa/"
      hubLabel="Day Spa"
      sampleSize={daySpaAttribution.sampleSize}
      dataVintage={daySpaAttribution.dataVintage}
      faqs={faqs}
    >
      <DaySpaClientLifetimeValueCalculator />
    </CalculatorPageShell>
  );
}
