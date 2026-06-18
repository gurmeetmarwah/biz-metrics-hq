import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { BakeryProfitMarginCalculator } from "@/components/calculator/BakeryProfitMarginCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/bakery-profit-margin-calculator";
import { bakeryAttribution } from "@/lib/data-sources/bakery";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Industry benchmarks · cost diagnostics"
      hubHref="/industries/food-beverage/bakery/"
      hubLabel="Bakery"
      sampleSize={bakeryAttribution.sampleSize}
      dataVintage={bakeryAttribution.dataVintage}
      faqs={faqs}
    >
      <BakeryProfitMarginCalculator />
    </CalculatorPageShell>
  );
}
