import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { MedicalSpaProfitMarginCalculator } from "@/components/calculator/MedicalSpaProfitMarginCalculator";
import { faqs, introContent, meta } from "@/lib/industries/medical-spa-profit-margin-calculator";
import { medicalSpaAttribution } from "@/lib/data-sources/medical-spa";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Net margin · profitability"
      hubHref="/industries/beauty/medical-spa/"
      hubLabel="Medical Spa"
      sampleSize={medicalSpaAttribution.sampleSize}
      dataVintage={medicalSpaAttribution.dataVintage}
      faqs={faqs}
    >
      <MedicalSpaProfitMarginCalculator />
    </CalculatorPageShell>
  );
}
