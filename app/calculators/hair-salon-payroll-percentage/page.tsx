import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { HairSalonPayrollPercentageCalculator } from "@/components/calculator/HairSalonPayrollPercentageCalculator";
import { faqs, introContent, meta } from "@/lib/industries/hair-salon-payroll-percentage-calculator";
import { hairSalonAttribution } from "@/lib/data-sources/hair-salon";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Payroll · labor cost"
      hubHref="/industries/beauty/hair-salon/"
      hubLabel="Hair Salon"
      sampleSize={hairSalonAttribution.sampleSize}
      dataVintage={hairSalonAttribution.dataVintage}
      faqs={faqs}
    >
      <HairSalonPayrollPercentageCalculator />
    </CalculatorPageShell>
  );
}
