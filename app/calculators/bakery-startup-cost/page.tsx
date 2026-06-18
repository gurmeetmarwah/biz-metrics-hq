import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { BakeryStartupCostCalculator } from "@/components/calculator/BakeryStartupCostCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/bakery-startup-cost-calculator";
import { bakeryAttribution } from "@/lib/data-sources/bakery";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Equipment · buildout · working capital"
      hubHref="/industries/food-beverage/bakery/"
      hubLabel="Bakery"
      sampleSize={bakeryAttribution.sampleSize}
      dataVintage={bakeryAttribution.dataVintage}
      faqs={faqs}
    >
      <BakeryStartupCostCalculator />
    </CalculatorPageShell>
  );
}
