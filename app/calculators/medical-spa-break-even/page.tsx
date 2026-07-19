import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { MedicalSpaBreakEvenCalculator } from "@/components/calculator/MedicalSpaBreakEvenCalculator";
import { faqs, introContent, meta } from "@/lib/industries/medical-spa-break-even-calculator";
import { medicalSpaAttribution } from "@/lib/data-sources/medical-spa";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Break-even · fixed costs"
      hubHref="/industries/beauty/medical-spa/"
      hubLabel="Medical Spa"
      sampleSize={medicalSpaAttribution.sampleSize}
      dataVintage={medicalSpaAttribution.dataVintage}
      faqs={faqs}
    >
      <MedicalSpaBreakEvenCalculator />
    </CalculatorPageShell>
  );
}
