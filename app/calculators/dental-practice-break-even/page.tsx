import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { DentalPracticeBreakEvenCalculator } from "@/components/calculator/DentalPracticeBreakEvenCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/dental-practice-break-even-calculator";
import { dentalAttribution } from "@/lib/data-sources/dental";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Break-even · production targets"
      hubHref="/industries/healthcare/dental-practice/"
      hubLabel="Dental Practice"
      sampleSize={dentalAttribution.sampleSize}
      dataVintage={dentalAttribution.dataVintage}
      faqs={faqs}
    >
      <DentalPracticeBreakEvenCalculator />
    </CalculatorPageShell>
  );
}
