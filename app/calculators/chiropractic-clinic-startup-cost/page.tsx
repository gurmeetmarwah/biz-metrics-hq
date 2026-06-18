import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { ChiropracticClinicStartupCostCalculator } from "@/components/calculator/ChiropracticClinicStartupCostCalculator";
import { faqs, introContent, meta } from "@/lib/industries/chiropractic-clinic-startup-cost-calculator";
import { chiropracticAttribution } from "@/lib/data-sources/chiropractic";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Startup cost · investment"
      hubHref="/industries/healthcare/chiropractic-clinic/"
      hubLabel="Chiropractic Clinic"
      sampleSize={chiropracticAttribution.sampleSize}
      dataVintage={chiropracticAttribution.dataVintage}
      faqs={faqs}
    >
      <ChiropracticClinicStartupCostCalculator />
    </CalculatorPageShell>
  );
}
