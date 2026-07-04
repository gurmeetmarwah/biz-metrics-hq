import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { OptometryPracticeProfitCalculator } from "@/components/calculator/OptometryPracticeProfitCalculator";
import { faqs, introContent, meta } from "@/lib/industries/optometry-practice-profit-calculator";
import { optometryPracticeAttribution } from "@/lib/data-sources/optometry-practice";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Net margin · optical COGS"
      hubHref="/industries/optometry-practice/"
      hubLabel="Optometry Practice"
      sampleSize={optometryPracticeAttribution.sampleSize}
      dataVintage={optometryPracticeAttribution.dataVintage}
      faqs={faqs}
    >
      <OptometryPracticeProfitCalculator />
    </CalculatorPageShell>
  );
}
