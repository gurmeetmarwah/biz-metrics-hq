import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { DentalPracticeStartupCostCalculator } from "@/components/calculator/DentalPracticeStartupCostCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/dental-practice-startup-cost-calculator";
import { dentalAttribution } from "@/lib/data-sources/dental";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Startup cost · investment"
      hubHref="/industries/healthcare/dental-practice/"
      hubLabel="Dental Practice"
      sampleSize={dentalAttribution.sampleSize}
      dataVintage={dentalAttribution.dataVintage}
      faqs={faqs}
    >
      <DentalPracticeStartupCostCalculator />
    </CalculatorPageShell>
  );
}
