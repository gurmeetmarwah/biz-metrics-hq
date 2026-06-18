import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { PhysicalTherapyClinicEbitdaCalculator } from "@/components/calculator/PhysicalTherapyClinicEbitdaCalculator";
import { faqs, introContent, meta } from "@/lib/industries/physical-therapy-clinic-ebitda-calculator";
import { physicalTherapyAttribution } from "@/lib/data-sources/physical-therapy";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="EBITDA margin · profitability"
      hubHref="/industries/healthcare/physical-therapy-clinic/"
      hubLabel="Physical Therapy Clinic"
      sampleSize={physicalTherapyAttribution.sampleSize}
      dataVintage={physicalTherapyAttribution.dataVintage}
      faqs={faqs}
    >
      <PhysicalTherapyClinicEbitdaCalculator />
    </CalculatorPageShell>
  );
}
