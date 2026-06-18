import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { CoffeeShopProfitMarginCalculator } from "@/components/calculator/CoffeeShopProfitMarginCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/coffee-shop-profit-margin-calculator";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell meta={meta} intro={introContent} badge="Industry benchmarks · cost diagnostics" faqs={faqs}>
      <CoffeeShopProfitMarginCalculator />
    </CalculatorPageShell>
  );
}
