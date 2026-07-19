import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { NailSalonRevenuePerTechnicianCalculator } from "@/components/calculator/NailSalonRevenuePerTechnicianCalculator";
import { faqs, introContent, meta } from "@/lib/industries/nail-salon-revenue-per-technician-calculator";
import { nailSalonAttribution } from "@/lib/data-sources/nail-salon";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Productivity · per technician"
      hubHref="/industries/beauty/nail-salon/"
      hubLabel="Nail Salon"
      sampleSize={nailSalonAttribution.sampleSize}
      dataVintage={nailSalonAttribution.dataVintage}
      faqs={faqs}
    >
      <NailSalonRevenuePerTechnicianCalculator />
    </CalculatorPageShell>
  );
}
