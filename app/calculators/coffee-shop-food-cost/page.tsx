import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { CoffeeShopFoodCostCalculator } from "@/components/calculator/CoffeeShopFoodCostCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/coffee-shop-food-cost-calculator";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Ingredient cost · dairy · waste benchmarks"
      leadWithCalculator
      faqs={faqs}
    >
      <CoffeeShopFoodCostCalculator />
    </CalculatorPageShell>
  );
}
