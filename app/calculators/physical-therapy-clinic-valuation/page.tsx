import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { PhysicalTherapyClinicValuationCalculator } from "@/components/calculator/PhysicalTherapyClinicValuationCalculator";
import { faqs, introContent, meta } from "@/lib/industries/physical-therapy-clinic-valuation-calculator";
import { physicalTherapyAttribution } from "@/lib/data-sources/physical-therapy";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="SDE multiples · clinic value"
      hubHref="/industries/healthcare/physical-therapy-clinic/"
      hubLabel="Physical Therapy Clinic"
      sampleSize={physicalTherapyAttribution.sampleSize}
      dataVintage={physicalTherapyAttribution.dataVintage}
      faqs={faqs}
    >
      <PhysicalTherapyClinicValuationCalculator />
    </CalculatorPageShell>
  );
}
