import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { FoodTruckFoodCostCalculator } from "@/components/calculator/FoodTruckFoodCostCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/food-truck-food-cost-calculator";
import { foodTruckAttribution } from "@/lib/data-sources/food-truck";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="COGS benchmarks · cost control"
      hubHref="/industries/food-beverage/food-truck/"
      hubLabel="Food Truck"
      sampleSize={foodTruckAttribution.sampleSize}
      dataVintage={foodTruckAttribution.dataVintage}
      faqs={faqs}
    >
      <FoodTruckFoodCostCalculator />
    </CalculatorPageShell>
  );
}
