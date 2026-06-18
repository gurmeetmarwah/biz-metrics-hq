import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { CoffeeShopValuationCalculator } from "@/components/calculator/CoffeeShopValuationCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/coffee-shop-valuation-calculator";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell meta={meta} intro={introContent} badge="SDE multiples · sale price estimates" faqs={faqs}>
      <CoffeeShopValuationCalculator />
    </CalculatorPageShell>
  );
}
