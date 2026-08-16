import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { CoffeeShopFranchiseRoiCalculatorPage } from "@/components/calculator/CoffeeShopFranchiseRoiCalculatorPage";
import {
  faqs,
  introContent,
  meta,
} from "@/lib/franchise/food/coffee-shop-franchise-roi-page";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="ROI · cash-on-cash · brand presets"
      hubHref="/franchise/food/coffee-shop-franchise/"
      hubLabel="Coffee Shop Franchise"
      leadWithCalculator
      faqs={faqs}
    >
      <CoffeeShopFranchiseRoiCalculatorPage />
    </CalculatorPageShell>
  );
}
