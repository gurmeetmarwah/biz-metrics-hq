import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { MedicalSpaMarketingRoiCalculator } from "@/components/calculator/MedicalSpaMarketingRoiCalculator";
import { faqs, introContent, meta } from "@/lib/industries/medical-spa-marketing-roi-calculator";
import { medicalSpaAttribution } from "@/lib/data-sources/medical-spa";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Marketing ROI · acquisition"
      hubHref="/industries/beauty/medical-spa/"
      hubLabel="Medical Spa"
      sampleSize={medicalSpaAttribution.sampleSize}
      dataVintage={medicalSpaAttribution.dataVintage}
      faqs={faqs}
    >
      <MedicalSpaMarketingRoiCalculator />
    </CalculatorPageShell>
  );
}
