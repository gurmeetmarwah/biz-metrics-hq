import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { MedicalSpaPatientLifetimeValueCalculator } from "@/components/calculator/MedicalSpaPatientLifetimeValueCalculator";
import { faqs, introContent, meta } from "@/lib/industries/medical-spa-patient-lifetime-value-calculator";
import { medicalSpaAttribution } from "@/lib/data-sources/medical-spa";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Patient LTV · retention"
      hubHref="/industries/beauty/medical-spa/"
      hubLabel="Medical Spa"
      sampleSize={medicalSpaAttribution.sampleSize}
      dataVintage={medicalSpaAttribution.dataVintage}
      faqs={faqs}
    >
      <MedicalSpaPatientLifetimeValueCalculator />
    </CalculatorPageShell>
  );
}
