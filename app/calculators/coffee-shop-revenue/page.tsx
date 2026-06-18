import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { CoffeeShopRevenueCalculator } from "@/components/calculator/CoffeeShopRevenueCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/coffee-shop-revenue-calculator";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell meta={meta} intro={introContent} badge="Daily volume · ticket size · annual projection" faqs={faqs}>
      <CoffeeShopRevenueCalculator />
    </CalculatorPageShell>
  );
}
