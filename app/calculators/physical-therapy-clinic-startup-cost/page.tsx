import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { PhysicalTherapyClinicStartupCostCalculator } from "@/components/calculator/PhysicalTherapyClinicStartupCostCalculator";
import { faqs, introContent, meta } from "@/lib/industries/physical-therapy-clinic-startup-cost-calculator";
import { physicalTherapyAttribution } from "@/lib/data-sources/physical-therapy";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Startup cost · investment"
      hubHref="/industries/healthcare/physical-therapy-clinic/"
      hubLabel="Physical Therapy Clinic"
      sampleSize={physicalTherapyAttribution.sampleSize}
      dataVintage={physicalTherapyAttribution.dataVintage}
      faqs={faqs}
    >
      <PhysicalTherapyClinicStartupCostCalculator />
    </CalculatorPageShell>
  );
}
