import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { IceCreamShopFoodCostCalculator } from "@/components/calculator/IceCreamShopFoodCostCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/ice-cream-shop-food-cost-calculator";
import { iceCreamShopAttribution } from "@/lib/data-sources/ice-cream-shop";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Ingredient cost · packaging · waste benchmarks"
      hubHref="/industries/ice-cream-shop/"
      hubLabel="Ice Cream Shop"
      sampleSize={iceCreamShopAttribution.sampleSize}
      dataVintage={iceCreamShopAttribution.dataVintage}
      faqs={faqs}
    >
      <IceCreamShopFoodCostCalculator />
    </CalculatorPageShell>
  );
}
