import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { CoffeeShopStartupCostCalculator } from "@/components/calculator/CoffeeShopStartupCostCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/coffee-shop-startup-cost-calculator";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell meta={meta} intro={introContent} badge="Equipment · buildout · working capital" faqs={faqs}>
      <CoffeeShopStartupCostCalculator />
    </CalculatorPageShell>
  );
}
