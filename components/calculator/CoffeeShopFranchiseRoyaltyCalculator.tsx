"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PercentInput } from "@/components/ui/PercentInput";
import { CoffeeShopCalculatorFooter } from "@/components/calculator/CoffeeShopCalculatorFooter";
import {
  coffeeShopFranchiseBrandNames,
  coffeeShopFranchiseBrandPresets,
  coffeeShopFranchiseBrandSlugs,
  type CoffeeShopFranchiseBrandSlug,
} from "@/lib/franchise/food/coffee-shop-franchise";
import {
  calculateCoffeeFranchiseRoyalty,
  faqs,
  formatCurrency,
  formatPercent,
  franchiseDataLinks,
  relatedTools,
  type CoffeeFranchiseRoyaltyInputs,
} from "@/lib/franchise/food/coffee-shop-franchise-royalty-calculator";

type Props = {
  /** When false, renders only the interactive widget (for embedding on the guide). */
  showFooter?: boolean;
};

export function CoffeeShopFranchiseRoyaltyCalculator({ showFooter = true }: Props) {
  const [brand, setBrand] = useState<CoffeeShopFranchiseBrandSlug | "custom">("dunkin");
  const [inputs, setInputs] = useState<CoffeeFranchiseRoyaltyInputs>(() => {
    const preset = coffeeShopFranchiseBrandPresets.dunkin;
    return {
      annualRevenue: preset.monthlyRevenue * 12,
      royaltyPct: preset.royaltyPct,
      marketingPct: preset.marketingPct,
    };
  });
  const result = useMemo(() => calculateCoffeeFranchiseRoyalty(inputs), [inputs]);

  const update = <K extends keyof CoffeeFranchiseRoyaltyInputs>(
    key: K,
    value: CoffeeFranchiseRoyaltyInputs[K],
  ) => {
    setBrand("custom");
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  const onBrandChange = (value: string) => {
    if (value === "custom") {
      setBrand("custom");
      return;
    }
    const slug = value as CoffeeShopFranchiseBrandSlug;
    const preset = coffeeShopFranchiseBrandPresets[slug];
    setBrand(slug);
    setInputs({
      annualRevenue: preset.monthlyRevenue * 12,
      royaltyPct: preset.royaltyPct,
      marketingPct: preset.marketingPct,
    });
  };

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="mb-6 rounded-xl border border-accent/20 bg-accent-soft/40 px-4 py-3 text-sm text-ink-muted">
            Interactive calculator — adjust brand, revenue, and fees to see annual royalty impact update live.
          </div>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Fee Assumptions</h2>
              <div className="mt-6 space-y-4">
                <label htmlFor="cfr-brand" className="block">
                  <span className="text-sm font-medium text-ink-muted">Franchise brand</span>
                  <select
                    id="cfr-brand"
                    value={brand}
                    onChange={(e) => onBrandChange(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
                  >
                    {coffeeShopFranchiseBrandSlugs.map((slug) => (
                      <option key={slug} value={slug}>
                        {coffeeShopFranchiseBrandNames[slug]}
                      </option>
                    ))}
                    <option value="custom">Custom / other</option>
                  </select>
                </label>
                <CurrencyInput
                  id="cfr-revenue"
                  label="Annual revenue"
                  value={inputs.annualRevenue}
                  onChange={(v) => update("annualRevenue", v)}
                />
                <PercentInput
                  id="cfr-royalty"
                  label="Royalty fee"
                  value={inputs.royaltyPct}
                  onChange={(v) => update("royaltyPct", v)}
                  max={15}
                />
                <PercentInput
                  id="cfr-marketing"
                  label="Marketing fee"
                  value={inputs.marketingPct}
                  onChange={(v) => update("marketingPct", v)}
                  max={10}
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-2xl border border-border bg-surface-muted/30 p-6 sm:p-8">
                <p className="text-xs font-semibold tracking-wider text-accent uppercase">
                  Annual fee stack
                </p>
                <p className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                  {formatCurrency(result.totalAnnualFees)}
                </p>
                <p className="mt-1 text-sm text-ink-muted">
                  {formatPercent(result.totalFeePct)} of revenue · {formatCurrency(result.monthlyFees)}
                  /mo
                </p>
                <dl className="mt-8 space-y-3">
                  <div className="flex justify-between gap-4 border-b border-border-subtle pb-3">
                    <dt className="text-sm text-ink-muted">Annual royalty</dt>
                    <dd className="text-sm font-semibold tabular-nums text-ink">
                      {formatCurrency(result.annualRoyalty)}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-border-subtle pb-3">
                    <dt className="text-sm text-ink-muted">Annual marketing fund</dt>
                    <dd className="text-sm font-semibold tabular-nums text-ink">
                      {formatCurrency(result.annualMarketing)}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-sm text-ink-muted">5-year fee total</dt>
                    <dd className="text-sm font-semibold tabular-nums text-accent">
                      {formatCurrency(result.fiveYearFees)}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showFooter && (
        <CoffeeShopCalculatorFooter
          relatedTools={relatedTools}
          dataLinks={franchiseDataLinks}
          faqs={faqs}
        />
      )}
    </>
  );
}
