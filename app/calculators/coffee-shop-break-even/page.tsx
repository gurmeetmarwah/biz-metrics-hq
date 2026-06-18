import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { CoffeeShopBreakEvenCalculator } from "@/components/calculator/CoffeeShopBreakEvenCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/coffee-shop-break-even-calculator";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell meta={meta} intro={introContent} badge="Daily customer targets · safety score" faqs={faqs}>
      <CoffeeShopBreakEvenCalculator />
    </CalculatorPageShell>
  );
}
