import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { DentalPracticeRevenuePerPatientCalculator } from "@/components/calculator/DentalPracticeRevenuePerPatientCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/dental-practice-revenue-per-patient-calculator";
import { dentalAttribution } from "@/lib/data-sources/dental";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Patient LTV · revenue per patient"
      hubHref="/industries/healthcare/dental-practice/"
      hubLabel="Dental Practice"
      sampleSize={dentalAttribution.sampleSize}
      dataVintage={dentalAttribution.dataVintage}
      faqs={faqs}
    >
      <DentalPracticeRevenuePerPatientCalculator />
    </CalculatorPageShell>
  );
}
