import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { CoffeeShopLaborCostCalculator } from "@/components/calculator/CoffeeShopLaborCostCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/coffee-shop-labor-cost-calculator";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell meta={meta} intro={introContent} badge="Staffing model · labor benchmarks" faqs={faqs}>
      <CoffeeShopLaborCostCalculator />
    </CalculatorPageShell>
  );
}
