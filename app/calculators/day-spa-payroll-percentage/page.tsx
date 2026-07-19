import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { DaySpaPayrollPercentageCalculator } from "@/components/calculator/DaySpaPayrollPercentageCalculator";
import { faqs, introContent, meta } from "@/lib/industries/day-spa-payroll-percentage-calculator";
import { daySpaAttribution } from "@/lib/data-sources/day-spa";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Payroll % · labor cost"
      hubHref="/industries/beauty/day-spa/"
      hubLabel="Day Spa"
      sampleSize={daySpaAttribution.sampleSize}
      dataVintage={daySpaAttribution.dataVintage}
      faqs={faqs}
    >
      <DaySpaPayrollPercentageCalculator />
    </CalculatorPageShell>
  );
}
