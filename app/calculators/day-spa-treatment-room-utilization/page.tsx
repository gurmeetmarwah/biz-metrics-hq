import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { DaySpaTreatmentRoomUtilizationCalculator } from "@/components/calculator/DaySpaTreatmentRoomUtilizationCalculator";
import { faqs, introContent, meta } from "@/lib/industries/day-spa-treatment-room-utilization-calculator";
import { daySpaAttribution } from "@/lib/data-sources/day-spa";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Room utilization · occupancy"
      hubHref="/industries/beauty/day-spa/"
      hubLabel="Day Spa"
      sampleSize={daySpaAttribution.sampleSize}
      dataVintage={daySpaAttribution.dataVintage}
      faqs={faqs}
    >
      <DaySpaTreatmentRoomUtilizationCalculator />
    </CalculatorPageShell>
  );
}
