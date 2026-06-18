import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { BakeryRevenueCalculator } from "@/components/calculator/BakeryRevenueCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/bakery-revenue-calculator";
import { bakeryAttribution } from "@/lib/data-sources/bakery";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Orders per day · average ticket · annual sales"
      hubHref="/industries/food-beverage/bakery/"
      hubLabel="Bakery"
      sampleSize={bakeryAttribution.sampleSize}
      dataVintage={bakeryAttribution.dataVintage}
      faqs={faqs}
    >
      <BakeryRevenueCalculator />
    </CalculatorPageShell>
  );
}
