import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { FoodTruckStartupCostCalculator } from "@/components/calculator/FoodTruckStartupCostCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/food-truck-startup-cost-calculator";
import { foodTruckAttribution } from "@/lib/data-sources/food-truck";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Startup investment · opening budget"
      hubHref="/industries/food-beverage/food-truck/"
      hubLabel="Food Truck"
      sampleSize={foodTruckAttribution.sampleSize}
      dataVintage={foodTruckAttribution.dataVintage}
      faqs={faqs}
    >
      <FoodTruckStartupCostCalculator />
    </CalculatorPageShell>
  );
}
