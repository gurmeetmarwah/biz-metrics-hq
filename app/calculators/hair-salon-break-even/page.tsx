import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { HairSalonBreakEvenCalculator } from "@/components/calculator/HairSalonBreakEvenCalculator";
import { faqs, introContent, meta } from "@/lib/industries/hair-salon-break-even-calculator";
import { hairSalonAttribution } from "@/lib/data-sources/hair-salon";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Break-even · fixed costs"
      hubHref="/industries/beauty/hair-salon/"
      hubLabel="Hair Salon"
      sampleSize={hairSalonAttribution.sampleSize}
      dataVintage={hairSalonAttribution.dataVintage}
      faqs={faqs}
    >
      <HairSalonBreakEvenCalculator />
    </CalculatorPageShell>
  );
}
