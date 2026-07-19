import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { DaySpaRevenuePerTherapistCalculator } from "@/components/calculator/DaySpaRevenuePerTherapistCalculator";
import { faqs, introContent, meta } from "@/lib/industries/day-spa-revenue-per-therapist-calculator";
import { daySpaAttribution } from "@/lib/data-sources/day-spa";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Revenue per therapist · productivity"
      hubHref="/industries/beauty/day-spa/"
      hubLabel="Day Spa"
      sampleSize={daySpaAttribution.sampleSize}
      dataVintage={daySpaAttribution.dataVintage}
      faqs={faqs}
    >
      <DaySpaRevenuePerTherapistCalculator />
    </CalculatorPageShell>
  );
}
