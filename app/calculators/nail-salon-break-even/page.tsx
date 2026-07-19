import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { NailSalonBreakEvenCalculator } from "@/components/calculator/NailSalonBreakEvenCalculator";
import { faqs, introContent, meta } from "@/lib/industries/nail-salon-break-even-calculator";
import { nailSalonAttribution } from "@/lib/data-sources/nail-salon";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Break-even · fixed costs"
      hubHref="/industries/beauty/nail-salon/"
      hubLabel="Nail Salon"
      sampleSize={nailSalonAttribution.sampleSize}
      dataVintage={nailSalonAttribution.dataVintage}
      faqs={faqs}
    >
      <NailSalonBreakEvenCalculator />
    </CalculatorPageShell>
  );
}
