import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { PhysicalTherapyClinicRevenuePerPatientCalculator } from "@/components/calculator/PhysicalTherapyClinicRevenuePerPatientCalculator";
import { faqs, introContent, meta } from "@/lib/industries/physical-therapy-clinic-revenue-per-patient-calculator";
import { physicalTherapyAttribution } from "@/lib/data-sources/physical-therapy";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Patient LTV · revenue per patient"
      hubHref="/industries/healthcare/physical-therapy-clinic/"
      hubLabel="Physical Therapy Clinic"
      sampleSize={physicalTherapyAttribution.sampleSize}
      dataVintage={physicalTherapyAttribution.dataVintage}
      faqs={faqs}
    >
      <PhysicalTherapyClinicRevenuePerPatientCalculator />
    </CalculatorPageShell>
  );
}
