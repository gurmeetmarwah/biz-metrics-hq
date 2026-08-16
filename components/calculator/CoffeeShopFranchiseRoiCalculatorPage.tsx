"use client";

import { CoffeeShopFranchiseRoiCalculator } from "@/components/franchise/CoffeeShopFranchiseRoiCalculator";
import { CoffeeShopCalculatorFooter } from "@/components/calculator/CoffeeShopCalculatorFooter";
import {
  faqs,
  franchiseDataLinks,
  relatedTools,
} from "@/lib/franchise/food/coffee-shop-franchise-roi-page";

export function CoffeeShopFranchiseRoiCalculatorPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <CoffeeShopFranchiseRoiCalculator />
        </div>
      </section>
      <CoffeeShopCalculatorFooter
        relatedTools={relatedTools}
        dataLinks={franchiseDataLinks}
        faqs={faqs}
      />
    </>
  );
}
