import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { PhysicalTherapyClinicRevenuePerTherapistCalculator } from "@/components/calculator/PhysicalTherapyClinicRevenuePerTherapistCalculator";
import { faqs, introContent, meta } from "@/lib/industries/physical-therapy-clinic-revenue-per-therapist-calculator";
import { physicalTherapyAttribution } from "@/lib/data-sources/physical-therapy";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Therapist productivity · revenue per therapist"
      hubHref="/industries/healthcare/physical-therapy-clinic/"
      hubLabel="Physical Therapy Clinic"
      sampleSize={physicalTherapyAttribution.sampleSize}
      dataVintage={physicalTherapyAttribution.dataVintage}
      faqs={faqs}
    >
      <PhysicalTherapyClinicRevenuePerTherapistCalculator />
    </CalculatorPageShell>
  );
}
