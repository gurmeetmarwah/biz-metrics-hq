import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { DentalPracticeAssociateCompensationCalculator } from "@/components/calculator/DentalPracticeAssociateCompensationCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/dental-practice-associate-compensation-calculator";
import { dentalAttribution } from "@/lib/data-sources/dental";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Associate pay · production model"
      hubHref="/industries/healthcare/dental-practice/"
      hubLabel="Dental Practice"
      sampleSize={dentalAttribution.sampleSize}
      dataVintage={dentalAttribution.dataVintage}
      faqs={faqs}
    >
      <DentalPracticeAssociateCompensationCalculator />
    </CalculatorPageShell>
  );
}
