import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { DaySpaMembershipRevenueCalculator } from "@/components/calculator/DaySpaMembershipRevenueCalculator";
import { faqs, introContent, meta } from "@/lib/industries/day-spa-membership-revenue-calculator";
import { daySpaAttribution } from "@/lib/data-sources/day-spa";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Membership · MRR"
      hubHref="/industries/beauty/day-spa/"
      hubLabel="Day Spa"
      sampleSize={daySpaAttribution.sampleSize}
      dataVintage={daySpaAttribution.dataVintage}
      faqs={faqs}
    >
      <DaySpaMembershipRevenueCalculator />
    </CalculatorPageShell>
  );
}
