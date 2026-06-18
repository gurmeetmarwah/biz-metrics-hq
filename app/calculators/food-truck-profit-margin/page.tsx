import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { FoodTruckProfitMarginCalculator } from "@/components/calculator/FoodTruckProfitMarginCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/food-truck-profit-margin-calculator";
import { foodTruckAttribution } from "@/lib/data-sources/food-truck";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Industry benchmarks · cost diagnostics"
      hubHref="/industries/food-beverage/food-truck/"
      hubLabel="Food Truck"
      sampleSize={foodTruckAttribution.sampleSize}
      dataVintage={foodTruckAttribution.dataVintage}
      faqs={faqs}
    >
      <FoodTruckProfitMarginCalculator />
    </CalculatorPageShell>
  );
}
