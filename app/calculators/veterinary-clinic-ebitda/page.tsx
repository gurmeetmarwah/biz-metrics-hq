import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { VeterinaryClinicEbitdaCalculator } from "@/components/calculator/VeterinaryClinicEbitdaCalculator";
import { faqs, introContent, meta } from "@/lib/industries/veterinary-clinic-ebitda-calculator";
import { veterinaryAttribution } from "@/lib/data-sources/veterinary";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="EBITDA margin · profitability"
      hubHref="/industries/healthcare/veterinary-clinic/"
      hubLabel="Veterinary Clinic"
      sampleSize={veterinaryAttribution.sampleSize}
      dataVintage={veterinaryAttribution.dataVintage}
      faqs={faqs}
    >
      <VeterinaryClinicEbitdaCalculator />
    </CalculatorPageShell>
  );
}
