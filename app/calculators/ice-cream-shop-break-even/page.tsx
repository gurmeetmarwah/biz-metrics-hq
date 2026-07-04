import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { IceCreamShopBreakEvenCalculator } from "@/components/calculator/IceCreamShopBreakEvenCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/ice-cream-shop-break-even-calculator";
import { iceCreamShopAttribution } from "@/lib/data-sources/ice-cream-shop";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Daily customer targets · safety score"
      hubHref="/industries/ice-cream-shop/"
      hubLabel="Ice Cream Shop"
      sampleSize={iceCreamShopAttribution.sampleSize}
      dataVintage={iceCreamShopAttribution.dataVintage}
      faqs={faqs}
    >
      <IceCreamShopBreakEvenCalculator />
    </CalculatorPageShell>
  );
}
