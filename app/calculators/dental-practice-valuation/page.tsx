import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { DentalPracticeValuationCalculator } from "@/components/calculator/DentalPracticeValuationCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/dental-practice-valuation-calculator";
import { dentalAttribution } from "@/lib/data-sources/dental";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="SDE multiples · practice value"
      hubHref="/industries/healthcare/dental-practice/"
      hubLabel="Dental Practice"
      sampleSize={dentalAttribution.sampleSize}
      dataVintage={dentalAttribution.dataVintage}
      faqs={faqs}
    >
      <DentalPracticeValuationCalculator />
    </CalculatorPageShell>
  );
}
