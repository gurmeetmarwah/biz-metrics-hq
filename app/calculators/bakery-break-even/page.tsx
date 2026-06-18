import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { BakeryBreakEvenCalculator } from "@/components/calculator/BakeryBreakEvenCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/bakery-break-even-calculator";
import { bakeryAttribution } from "@/lib/data-sources/bakery";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Daily order targets · safety score"
      hubHref="/industries/food-beverage/bakery/"
      hubLabel="Bakery"
      sampleSize={bakeryAttribution.sampleSize}
      dataVintage={bakeryAttribution.dataVintage}
      faqs={faqs}
    >
      <BakeryBreakEvenCalculator />
    </CalculatorPageShell>
  );
}
