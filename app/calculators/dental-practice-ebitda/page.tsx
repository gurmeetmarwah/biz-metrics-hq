import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { DentalPracticeEbitdaCalculator } from "@/components/calculator/DentalPracticeEbitdaCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/dental-practice-ebitda-calculator";
import { dentalAttribution } from "@/lib/data-sources/dental";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="EBITDA margin · profitability"
      hubHref="/industries/healthcare/dental-practice/"
      hubLabel="Dental Practice"
      sampleSize={dentalAttribution.sampleSize}
      dataVintage={dentalAttribution.dataVintage}
      faqs={faqs}
    >
      <DentalPracticeEbitdaCalculator />
    </CalculatorPageShell>
  );
}
