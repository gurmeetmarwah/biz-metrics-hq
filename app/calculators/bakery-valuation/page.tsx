import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { BakeryValuationCalculator } from "@/components/calculator/BakeryValuationCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/bakery-valuation-calculator";
import { bakeryAttribution } from "@/lib/data-sources/bakery";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="SDE multiples · revenue valuation"
      hubHref="/industries/food-beverage/bakery/"
      hubLabel="Bakery"
      sampleSize={bakeryAttribution.sampleSize}
      dataVintage={bakeryAttribution.dataVintage}
      faqs={faqs}
    >
      <BakeryValuationCalculator />
    </CalculatorPageShell>
  );
}
