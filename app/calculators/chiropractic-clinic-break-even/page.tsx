import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { ChiropracticClinicBreakEvenCalculator } from "@/components/calculator/ChiropracticClinicBreakEvenCalculator";
import { faqs, introContent, meta } from "@/lib/industries/chiropractic-clinic-break-even-calculator";
import { chiropracticAttribution } from "@/lib/data-sources/chiropractic";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Break-even · revenue targets"
      hubHref="/industries/healthcare/chiropractic-clinic/"
      hubLabel="Chiropractic Clinic"
      sampleSize={chiropracticAttribution.sampleSize}
      dataVintage={chiropracticAttribution.dataVintage}
      faqs={faqs}
    >
      <ChiropracticClinicBreakEvenCalculator />
    </CalculatorPageShell>
  );
}
