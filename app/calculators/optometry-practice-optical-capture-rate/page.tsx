import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { OptometryPracticeOpticalCaptureRateCalculator } from "@/components/calculator/OptometryPracticeOpticalCaptureRateCalculator";
import { faqs, introContent, meta } from "@/lib/industries/optometry-practice-optical-capture-rate-calculator";
import { optometryPracticeAttribution } from "@/lib/data-sources/optometry-practice";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Dispensary conversion · revenue uplift"
      hubHref="/industries/optometry-practice/"
      hubLabel="Optometry Practice"
      sampleSize={optometryPracticeAttribution.sampleSize}
      dataVintage={optometryPracticeAttribution.dataVintage}
      faqs={faqs}
    >
      <OptometryPracticeOpticalCaptureRateCalculator />
    </CalculatorPageShell>
  );
}
