import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { BakeryFoodCostCalculator } from "@/components/calculator/BakeryFoodCostCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/bakery-food-cost-calculator";
import { bakeryAttribution } from "@/lib/data-sources/bakery";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Ingredient cost · packaging · waste benchmarks"
      hubHref="/industries/food-beverage/bakery/"
      hubLabel="Bakery"
      sampleSize={bakeryAttribution.sampleSize}
      dataVintage={bakeryAttribution.dataVintage}
      faqs={faqs}
    >
      <BakeryFoodCostCalculator />
    </CalculatorPageShell>
  );
}
