import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { DaySpaRevenuePerTreatmentRoomCalculator } from "@/components/calculator/DaySpaRevenuePerTreatmentRoomCalculator";
import { faqs, introContent, meta } from "@/lib/industries/day-spa-revenue-per-treatment-room-calculator";
import { daySpaAttribution } from "@/lib/data-sources/day-spa";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Revenue per room · capacity"
      hubHref="/industries/beauty/day-spa/"
      hubLabel="Day Spa"
      sampleSize={daySpaAttribution.sampleSize}
      dataVintage={daySpaAttribution.dataVintage}
      faqs={faqs}
    >
      <DaySpaRevenuePerTreatmentRoomCalculator />
    </CalculatorPageShell>
  );
}
