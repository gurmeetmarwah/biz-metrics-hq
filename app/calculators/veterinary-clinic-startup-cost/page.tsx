import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { VeterinaryClinicStartupCostCalculator } from "@/components/calculator/VeterinaryClinicStartupCostCalculator";
import { faqs, introContent, meta } from "@/lib/industries/veterinary-clinic-startup-cost-calculator";
import { veterinaryAttribution } from "@/lib/data-sources/veterinary";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Startup cost · investment"
      hubHref="/industries/healthcare/veterinary-clinic/"
      hubLabel="Veterinary Clinic"
      sampleSize={veterinaryAttribution.sampleSize}
      dataVintage={veterinaryAttribution.dataVintage}
      faqs={faqs}
    >
      <VeterinaryClinicStartupCostCalculator />
    </CalculatorPageShell>
  );
}
