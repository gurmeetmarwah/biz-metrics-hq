import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { FoodTruckRevenueCalculator } from "@/components/calculator/FoodTruckRevenueCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/food-truck-revenue-calculator";
import { foodTruckAttribution } from "@/lib/data-sources/food-truck";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Street sales · event revenue"
      hubHref="/industries/food-beverage/food-truck/"
      hubLabel="Food Truck"
      sampleSize={foodTruckAttribution.sampleSize}
      dataVintage={foodTruckAttribution.dataVintage}
      faqs={faqs}
    >
      <FoodTruckRevenueCalculator />
    </CalculatorPageShell>
  );
}
