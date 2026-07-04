import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { IceCreamShopValuationCalculator } from "@/components/calculator/IceCreamShopValuationCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/ice-cream-shop-valuation-calculator";
import { iceCreamShopAttribution } from "@/lib/data-sources/ice-cream-shop";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="SDE multiples · revenue valuation"
      hubHref="/industries/ice-cream-shop/"
      hubLabel="Ice Cream Shop"
      sampleSize={iceCreamShopAttribution.sampleSize}
      dataVintage={iceCreamShopAttribution.dataVintage}
      faqs={faqs}
    >
      <IceCreamShopValuationCalculator />
    </CalculatorPageShell>
  );
}
