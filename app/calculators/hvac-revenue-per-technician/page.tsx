import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { HvacRevenuePerTechnicianCalculator } from "@/components/calculator/HvacRevenuePerTechnicianCalculator";
import { faqs, introContent, meta } from "@/lib/industries/hvac-revenue-per-technician-calculator";
import { hvacAttribution } from "@/lib/data-sources/hvac";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Technician productivity · revenue per tech"
      hubHref="/industries/hvac/"
      hubLabel="HVAC"
      sampleSize={hvacAttribution.sampleSize}
      dataVintage={hvacAttribution.dataVintage}
      faqs={faqs}
    >
      <HvacRevenuePerTechnicianCalculator />
    </CalculatorPageShell>
  );
}
