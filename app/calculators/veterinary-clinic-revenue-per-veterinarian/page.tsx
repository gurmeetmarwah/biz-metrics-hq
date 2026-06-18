import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { VeterinaryClinicRevenuePerVeterinarianCalculator } from "@/components/calculator/VeterinaryClinicRevenuePerVeterinarianCalculator";
import { faqs, introContent, meta } from "@/lib/industries/veterinary-clinic-revenue-per-veterinarian-calculator";
import { veterinaryAttribution } from "@/lib/data-sources/veterinary";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="DVM productivity · revenue per vet"
      hubHref="/industries/healthcare/veterinary-clinic/"
      hubLabel="Veterinary Clinic"
      sampleSize={veterinaryAttribution.sampleSize}
      dataVintage={veterinaryAttribution.dataVintage}
      faqs={faqs}
    >
      <VeterinaryClinicRevenuePerVeterinarianCalculator />
    </CalculatorPageShell>
  );
}
