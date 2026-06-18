import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { FoodTruckBreakEvenCalculator } from "@/components/calculator/FoodTruckBreakEvenCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/food-truck-break-even-calculator";
import { foodTruckAttribution } from "@/lib/data-sources/food-truck";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Daily targets · safety score"
      hubHref="/industries/food-beverage/food-truck/"
      hubLabel="Food Truck"
      sampleSize={foodTruckAttribution.sampleSize}
      dataVintage={foodTruckAttribution.dataVintage}
      faqs={faqs}
    >
      <FoodTruckBreakEvenCalculator />
    </CalculatorPageShell>
  );
}
