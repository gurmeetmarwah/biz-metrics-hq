import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { IceCreamShopProfitMarginCalculator } from "@/components/calculator/IceCreamShopProfitMarginCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/ice-cream-shop-profit-margin-calculator";
import { iceCreamShopAttribution } from "@/lib/data-sources/ice-cream-shop";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Industry benchmarks · cost diagnostics"
      hubHref="/industries/ice-cream-shop/"
      hubLabel="Ice Cream Shop"
      sampleSize={iceCreamShopAttribution.sampleSize}
      dataVintage={iceCreamShopAttribution.dataVintage}
      faqs={faqs}
    >
      <IceCreamShopProfitMarginCalculator />
    </CalculatorPageShell>
  );
}
