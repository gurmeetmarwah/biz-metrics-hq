import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { NailSalonStationUtilizationCalculator } from "@/components/calculator/NailSalonStationUtilizationCalculator";
import { faqs, introContent, meta } from "@/lib/industries/nail-salon-station-utilization-calculator";
import { nailSalonAttribution } from "@/lib/data-sources/nail-salon";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Capacity · station occupancy"
      hubHref="/industries/beauty/nail-salon/"
      hubLabel="Nail Salon"
      sampleSize={nailSalonAttribution.sampleSize}
      dataVintage={nailSalonAttribution.dataVintage}
      faqs={faqs}
    >
      <NailSalonStationUtilizationCalculator />
    </CalculatorPageShell>
  );
}
