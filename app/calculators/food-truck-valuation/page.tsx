import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { FoodTruckValuationCalculator } from "@/components/calculator/FoodTruckValuationCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/food-truck-valuation-calculator";
import { foodTruckAttribution } from "@/lib/data-sources/food-truck";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="SDE multiples · business value"
      hubHref="/industries/food-beverage/food-truck/"
      hubLabel="Food Truck"
      sampleSize={foodTruckAttribution.sampleSize}
      dataVintage={foodTruckAttribution.dataVintage}
      faqs={faqs}
    >
      <FoodTruckValuationCalculator />
    </CalculatorPageShell>
  );
}
