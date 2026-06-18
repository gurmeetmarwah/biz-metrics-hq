import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { VeterinaryClinicRevenuePerClientCalculator } from "@/components/calculator/VeterinaryClinicRevenuePerClientCalculator";
import { faqs, introContent, meta } from "@/lib/industries/veterinary-clinic-revenue-per-client-calculator";
import { veterinaryAttribution } from "@/lib/data-sources/veterinary";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Client LTV · revenue per client"
      hubHref="/industries/healthcare/veterinary-clinic/"
      hubLabel="Veterinary Clinic"
      sampleSize={veterinaryAttribution.sampleSize}
      dataVintage={veterinaryAttribution.dataVintage}
      faqs={faqs}
    >
      <VeterinaryClinicRevenuePerClientCalculator />
    </CalculatorPageShell>
  );
}
