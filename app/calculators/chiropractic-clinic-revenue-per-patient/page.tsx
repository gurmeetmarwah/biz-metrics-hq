import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { ChiropracticClinicRevenuePerPatientCalculator } from "@/components/calculator/ChiropracticClinicRevenuePerPatientCalculator";
import { faqs, introContent, meta } from "@/lib/industries/chiropractic-clinic-revenue-per-patient-calculator";
import { chiropracticAttribution } from "@/lib/data-sources/chiropractic";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Patient LTV · revenue per patient"
      hubHref="/industries/healthcare/chiropractic-clinic/"
      hubLabel="Chiropractic Clinic"
      sampleSize={chiropracticAttribution.sampleSize}
      dataVintage={chiropracticAttribution.dataVintage}
      faqs={faqs}
    >
      <ChiropracticClinicRevenuePerPatientCalculator />
    </CalculatorPageShell>
  );
}
