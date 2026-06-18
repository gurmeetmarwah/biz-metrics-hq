import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { VeterinaryClinicBreakEvenCalculator } from "@/components/calculator/VeterinaryClinicBreakEvenCalculator";
import { faqs, introContent, meta } from "@/lib/industries/veterinary-clinic-break-even-calculator";
import { veterinaryAttribution } from "@/lib/data-sources/veterinary";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Break-even · revenue targets"
      hubHref="/industries/healthcare/veterinary-clinic/"
      hubLabel="Veterinary Clinic"
      sampleSize={veterinaryAttribution.sampleSize}
      dataVintage={veterinaryAttribution.dataVintage}
      faqs={faqs}
    >
      <VeterinaryClinicBreakEvenCalculator />
    </CalculatorPageShell>
  );
}
