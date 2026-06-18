import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { ChiropracticClinicProfitMarginCalculator } from "@/components/calculator/ChiropracticClinicProfitMarginCalculator";
import { faqs, introContent, meta } from "@/lib/industries/chiropractic-clinic-profit-margin-calculator";
import { chiropracticAttribution } from "@/lib/data-sources/chiropractic";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Profit margin · profitability"
      hubHref="/industries/healthcare/chiropractic-clinic/"
      hubLabel="Chiropractic Clinic"
      sampleSize={chiropracticAttribution.sampleSize}
      dataVintage={chiropracticAttribution.dataVintage}
      faqs={faqs}
    >
      <ChiropracticClinicProfitMarginCalculator />
    </CalculatorPageShell>
  );
}
