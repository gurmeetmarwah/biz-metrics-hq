import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { ChiropracticClinicRevenueCalculator } from "@/components/calculator/ChiropracticClinicRevenueCalculator";
import { faqs, introContent, meta } from "@/lib/industries/chiropractic-clinic-revenue-calculator";
import { chiropracticAttribution } from "@/lib/data-sources/chiropractic";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Provider productivity · revenue per chiropractor"
      hubHref="/industries/healthcare/chiropractic-clinic/"
      hubLabel="Chiropractic Clinic"
      sampleSize={chiropracticAttribution.sampleSize}
      dataVintage={chiropracticAttribution.dataVintage}
      faqs={faqs}
    >
      <ChiropracticClinicRevenueCalculator />
    </CalculatorPageShell>
  );
}
