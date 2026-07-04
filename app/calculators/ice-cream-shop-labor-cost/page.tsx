import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { IceCreamShopLaborCostCalculator } from "@/components/calculator/IceCreamShopLaborCostCalculator";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/industries/ice-cream-shop-labor-cost-calculator";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell meta={meta} intro={introContent} badge="Staffing model · labor benchmarks" faqs={faqs}>
      <IceCreamShopLaborCostCalculator />
    </CalculatorPageShell>
  );
}
