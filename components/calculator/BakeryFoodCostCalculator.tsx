"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { BakeryCalculatorFooter } from "@/components/calculator/BakeryCalculatorFooter";
import { BenchmarkSourceFootnote } from "@/components/shared/DataSourcesAttribution";
import { bakeryAttribution } from "@/lib/data-sources/bakery";
import {
  bakeryDataLinks,
  bakeryIndustryAverages,
  benchmarkBands,
  calculateFoodCost,
  defaultInputs,
  faqs,
  formatCurrency,
  formatPercent,
  relatedTools,
} from "@/lib/industries/bakery-food-cost-calculator";

export function BakeryFoodCostCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateFoodCost(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Monthly Food Sales</h2>
              <div className="mt-6 space-y-4">
                <CurrencyInput id="sales" label="Food Sales Revenue" value={inputs.foodSales} onChange={(v) => update("foodSales", v)} />
                <CurrencyInput id="ingredients" label="Ingredient Costs" value={inputs.ingredientCosts} onChange={(v) => update("ingredientCosts", v)} />
                <CurrencyInput id="packaging" label="Packaging Costs" value={inputs.packagingCosts} onChange={(v) => update("packagingCosts", v)} />
                <CurrencyInput id="waste" label="Waste & Spoilage" value={inputs.wasteCosts} onChange={(v) => update("wasteCosts", v)} />
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-2xl border border-border bg-surface-muted/30 p-6 sm:p-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-sm text-ink-muted">Food Cost %</p>
                    <p className="mt-1 text-3xl font-bold tabular-nums text-accent">{formatPercent(result.foodCostPct)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-ink-muted">Gross Margin</p>
                    <p className="mt-1 text-3xl font-bold tabular-nums text-ink">{formatPercent(result.grossMarginPct)}</p>
                  </div>
                </div>
                <div className="mt-6 rounded-xl border border-border bg-surface px-5 py-4">
                  <p className="text-sm text-ink-muted">Industry Target</p>
                  <p className="mt-1 font-semibold text-ink">{bakeryIndustryAverages.ingredientCostPct}% ingredients · 25–32% total food cost</p>
                  <BenchmarkSourceFootnote
                    sampleSize={bakeryAttribution.sampleSize}
                    dataVintage={bakeryAttribution.dataVintage}
                    className="mt-2"
                  />
                </div>
                <p className="mt-4 inline-flex rounded-full border border-accent/25 bg-accent-soft px-4 py-1.5 text-sm font-semibold text-accent">
                  {result.rating}
                </p>
                <p className="mt-4 text-sm text-ink-muted">
                  Each 1% reduction saves ~{formatCurrency(result.annualSavingsPerPoint)}/year at current volume.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Cost Breakdown</h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <ul className="mt-8 space-y-3 rounded-2xl border border-border bg-surface p-6">
            {result.breakdown.map((item) => (
              <li key={item.label} className="flex items-center justify-between text-sm">
                <span className="text-ink-muted">{item.label}</span>
                <span className="font-semibold tabular-nums text-ink">
                  {formatCurrency(item.amount)} ({formatPercent(item.pct, 0)})
                </span>
              </li>
            ))}
            <li className="flex items-center justify-between border-t border-border-subtle pt-3 text-sm">
              <span className="font-semibold text-ink">Total Food Cost</span>
              <span className="font-bold tabular-nums text-accent">
                {formatCurrency(result.totalFoodCosts)} ({formatPercent(result.foodCostPct, 0)})
              </span>
            </li>
          </ul>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {benchmarkBands.map((band) => {
              const active = result.rating === band.label;
              return (
                <li key={band.label} className={`rounded-2xl border p-5 ${active ? "border-accent bg-accent-soft/50" : "border-border bg-surface"}`}>
                  <p className="font-semibold text-ink">{band.label}</p>
                  <p className="mt-2 text-xl font-bold tabular-nums text-accent">{band.range}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <BakeryCalculatorFooter calculatorId="food-cost" relatedTools={relatedTools} dataLinks={bakeryDataLinks} faqs={faqs} />
    </>
  );
}
