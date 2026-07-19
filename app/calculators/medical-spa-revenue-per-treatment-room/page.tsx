import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { MedicalSpaRevenuePerTreatmentRoomCalculator } from "@/components/calculator/MedicalSpaRevenuePerTreatmentRoomCalculator";
import { faqs, introContent, meta } from "@/lib/industries/medical-spa-revenue-per-treatment-room-calculator";
import { medicalSpaAttribution } from "@/lib/data-sources/medical-spa";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Revenue · per treatment room"
      hubHref="/industries/beauty/medical-spa/"
      hubLabel="Medical Spa"
      sampleSize={medicalSpaAttribution.sampleSize}
      dataVintage={medicalSpaAttribution.dataVintage}
      faqs={faqs}
    >
      <MedicalSpaRevenuePerTreatmentRoomCalculator />
    </CalculatorPageShell>
  );
}
