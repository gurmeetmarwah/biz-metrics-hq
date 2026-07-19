import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { NailSalonValuationCalculator } from "@/components/calculator/NailSalonValuationCalculator";
import { faqs, introContent, meta } from "@/lib/industries/nail-salon-valuation-calculator";
import { nailSalonAttribution } from "@/lib/data-sources/nail-salon";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Valuation · SDE multiple"
      hubHref="/industries/beauty/nail-salon/"
      hubLabel="Nail Salon"
      sampleSize={nailSalonAttribution.sampleSize}
      dataVintage={nailSalonAttribution.dataVintage}
      faqs={faqs}
    >
      <NailSalonValuationCalculator />
    </CalculatorPageShell>
  );
}
