import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { OptometryPracticeStaffingCostCalculator } from "@/components/calculator/OptometryPracticeStaffingCostCalculator";
import { faqs, introContent, meta } from "@/lib/industries/optometry-practice-staffing-cost-calculator";
import { optometryPracticeAttribution } from "@/lib/data-sources/optometry-practice";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Payroll burden · revenue per OD"
      hubHref="/industries/optometry-practice/"
      hubLabel="Optometry Practice"
      sampleSize={optometryPracticeAttribution.sampleSize}
      dataVintage={optometryPracticeAttribution.dataVintage}
      faqs={faqs}
    >
      <OptometryPracticeStaffingCostCalculator />
    </CalculatorPageShell>
  );
}
