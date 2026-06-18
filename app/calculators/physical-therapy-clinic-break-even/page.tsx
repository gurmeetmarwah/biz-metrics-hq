import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { PhysicalTherapyClinicBreakEvenCalculator } from "@/components/calculator/PhysicalTherapyClinicBreakEvenCalculator";
import { faqs, introContent, meta } from "@/lib/industries/physical-therapy-clinic-break-even-calculator";
import { physicalTherapyAttribution } from "@/lib/data-sources/physical-therapy";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Break-even · revenue targets"
      hubHref="/industries/healthcare/physical-therapy-clinic/"
      hubLabel="Physical Therapy Clinic"
      sampleSize={physicalTherapyAttribution.sampleSize}
      dataVintage={physicalTherapyAttribution.dataVintage}
      faqs={faqs}
    >
      <PhysicalTherapyClinicBreakEvenCalculator />
    </CalculatorPageShell>
  );
}
