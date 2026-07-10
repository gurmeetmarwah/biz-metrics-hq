import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { HairSalonProfitMarginCalculator } from "@/components/calculator/HairSalonProfitMarginCalculator";
import { faqs, introContent, meta } from "@/lib/industries/hair-salon-profit-margin-calculator";
import { hairSalonAttribution } from "@/lib/data-sources/hair-salon";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Net margin · payroll"
      hubHref="/industries/beauty/hair-salon/"
      hubLabel="Hair Salon"
      sampleSize={hairSalonAttribution.sampleSize}
      dataVintage={hairSalonAttribution.dataVintage}
      faqs={faqs}
    >
      <HairSalonProfitMarginCalculator />
    </CalculatorPageShell>
  );
}
