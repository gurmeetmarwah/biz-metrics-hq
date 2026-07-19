import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { MedicalSpaRevenueCalculator } from "@/components/calculator/MedicalSpaRevenueCalculator";
import { faqs, introContent, meta } from "@/lib/industries/medical-spa-revenue-calculator";
import { medicalSpaAttribution } from "@/lib/data-sources/medical-spa";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Revenue · treatment volume"
      hubHref="/industries/beauty/medical-spa/"
      hubLabel="Medical Spa"
      sampleSize={medicalSpaAttribution.sampleSize}
      dataVintage={medicalSpaAttribution.dataVintage}
      faqs={faqs}
    >
      <MedicalSpaRevenueCalculator />
    </CalculatorPageShell>
  );
}
