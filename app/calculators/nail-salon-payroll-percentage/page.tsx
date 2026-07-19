import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { NailSalonPayrollPercentageCalculator } from "@/components/calculator/NailSalonPayrollPercentageCalculator";
import { faqs, introContent, meta } from "@/lib/industries/nail-salon-payroll-percentage-calculator";
import { nailSalonAttribution } from "@/lib/data-sources/nail-salon";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Labor cost · payroll %"
      hubHref="/industries/beauty/nail-salon/"
      hubLabel="Nail Salon"
      sampleSize={nailSalonAttribution.sampleSize}
      dataVintage={nailSalonAttribution.dataVintage}
      faqs={faqs}
    >
      <NailSalonPayrollPercentageCalculator />
    </CalculatorPageShell>
  );
}
