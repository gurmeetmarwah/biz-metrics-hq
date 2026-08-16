import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { CoffeeShopFranchiseRoyaltyCalculator } from "@/components/calculator/CoffeeShopFranchiseRoyaltyCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/franchise/food/coffee-shop-franchise-royalty-calculator";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Royalties · marketing fund · fee stack"
      hubHref="/franchise/food/coffee-shop-franchise/"
      hubLabel="Coffee Shop Franchise"
      leadWithCalculator
      faqs={faqs}
    >
      <CoffeeShopFranchiseRoyaltyCalculator />
    </CalculatorPageShell>
  );
}
