import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { OptometryPracticeRevenuePerPatientCalculator } from "@/components/calculator/OptometryPracticeRevenuePerPatientCalculator";
import { faqs, introContent, meta } from "@/lib/industries/optometry-practice-revenue-per-patient-calculator";
import { optometryPracticeAttribution } from "@/lib/data-sources/optometry-practice";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Patient value · optical attach"
      hubHref="/industries/optometry-practice/"
      hubLabel="Optometry Practice"
      sampleSize={optometryPracticeAttribution.sampleSize}
      dataVintage={optometryPracticeAttribution.dataVintage}
      faqs={faqs}
    >
      <OptometryPracticeRevenuePerPatientCalculator />
    </CalculatorPageShell>
  );
}
