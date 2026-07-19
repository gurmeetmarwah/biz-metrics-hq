import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { MedicalSpaTreatmentRoomUtilizationCalculator } from "@/components/calculator/MedicalSpaTreatmentRoomUtilizationCalculator";
import { faqs, introContent, meta } from "@/lib/industries/medical-spa-treatment-room-utilization-calculator";
import { medicalSpaAttribution } from "@/lib/data-sources/medical-spa";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Utilization · room hours"
      hubHref="/industries/beauty/medical-spa/"
      hubLabel="Medical Spa"
      sampleSize={medicalSpaAttribution.sampleSize}
      dataVintage={medicalSpaAttribution.dataVintage}
      faqs={faqs}
    >
      <MedicalSpaTreatmentRoomUtilizationCalculator />
    </CalculatorPageShell>
  );
}
