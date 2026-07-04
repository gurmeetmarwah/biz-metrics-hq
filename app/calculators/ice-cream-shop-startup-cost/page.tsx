import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { IceCreamShopStartupCostCalculator } from "@/components/calculator/IceCreamShopStartupCostCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/ice-cream-shop-startup-cost-calculator";
import { iceCreamShopAttribution } from "@/lib/data-sources/ice-cream-shop";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Equipment · buildout · working capital"
      hubHref="/industries/ice-cream-shop/"
      hubLabel="Ice Cream Shop"
      sampleSize={iceCreamShopAttribution.sampleSize}
      dataVintage={iceCreamShopAttribution.dataVintage}
      faqs={faqs}
    >
      <IceCreamShopStartupCostCalculator />
    </CalculatorPageShell>
  );
}
