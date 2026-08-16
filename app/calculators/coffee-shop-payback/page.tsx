import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { CoffeeShopPaybackCalculator } from "@/components/calculator/CoffeeShopPaybackCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/franchise/food/coffee-shop-franchise-payback-calculator";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Payback · CapEx recovery · cash flow"
      hubHref="/franchise/food/coffee-shop-franchise/"
      hubLabel="Coffee Shop Franchise"
      leadWithCalculator
      faqs={faqs}
    >
      <CoffeeShopPaybackCalculator />
    </CalculatorPageShell>
  );
}
