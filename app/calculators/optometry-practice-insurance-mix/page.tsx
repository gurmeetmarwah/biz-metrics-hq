import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { OptometryPracticeInsuranceMixCalculator } from "@/components/calculator/OptometryPracticeInsuranceMixCalculator";
import { faqs, introContent, meta } from "@/lib/industries/optometry-practice-insurance-mix-calculator";
import { optometryPracticeAttribution } from "@/lib/data-sources/optometry-practice";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Payer mix · blended margin"
      hubHref="/industries/optometry-practice/"
      hubLabel="Optometry Practice"
      sampleSize={optometryPracticeAttribution.sampleSize}
      dataVintage={optometryPracticeAttribution.dataVintage}
      faqs={faqs}
    >
      <OptometryPracticeInsuranceMixCalculator />
    </CalculatorPageShell>
  );
}
