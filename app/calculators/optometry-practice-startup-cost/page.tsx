import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { OptometryPracticeStartupCostCalculator } from "@/components/calculator/OptometryPracticeStartupCostCalculator";
import { faqs, introContent, meta } from "@/lib/industries/optometry-practice-startup-cost-calculator";
import { optometryPracticeAttribution } from "@/lib/data-sources/optometry-practice";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Buildout · equipment · optical inventory"
      hubHref="/industries/optometry-practice/"
      hubLabel="Optometry Practice"
      sampleSize={optometryPracticeAttribution.sampleSize}
      dataVintage={optometryPracticeAttribution.dataVintage}
      faqs={faqs}
    >
      <OptometryPracticeStartupCostCalculator />
    </CalculatorPageShell>
  );
}
