"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  benchmarkBands,
  calculateFoodCost,
  calculateMenuItem,
  defaultFoodCostInputs,
  defaultMenuItem,
  foodCostFaqs,
  formatCurrency,
  formatPercent,
  industryComparison,
  industryTargets,
  relatedCalculators,
  restaurantTypeOptions,
  simulateFoodCostReduction,
  simulateWasteReduction,
  type TimePeriod,
} from "@/lib/industries/restaurant-food-cost-calculator";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { IndustryFaq } from "@/components/industry/IndustryFaq";

const ratingStyles = {
  Poor: "bg-metric-salary/10 text-metric-salary border-metric-salary/25",
  Average: "bg-accent-soft text-accent border-accent/25",
  Strong: "bg-metric-revenue/10 text-metric-revenue border-metric-revenue/25",
};

const menuBadgeStyles = {
  "Healthy Margin": "bg-metric-revenue/10 text-metric-revenue",
  Average: "bg-accent-soft text-accent",
  "Low Margin Item": "bg-metric-salary/10 text-metric-salary",
};

export function RestaurantFoodCostCalculator() {
  const [inputs, setInputs] = useState(defaultFoodCostInputs);
  const [menuPrice, setMenuPrice] = useState(defaultMenuItem.price);
  const [menuCost, setMenuCost] = useState(defaultMenuItem.ingredientCost);
  const [costReduction, setCostReduction] = useState(1);
  const [wasteReduction, setWasteReduction] = useState(5);

  const result = useMemo(() => calculateFoodCost(inputs), [inputs]);
  const menuResult = useMemo(
    () => calculateMenuItem(menuPrice, menuCost),
    [menuPrice, menuCost]
  );

  const profitFromCostCut = simulateFoodCostReduction(
    result.annualFoodSales,
    costReduction
  );
  const profitFromWasteCut = simulateWasteReduction(
    result.annualFoodSales,
    result.breakdown[2]?.pct ?? 0,
    wasteReduction
  );

  const gaugePosition = Math.min(100, Math.max(0, result.foodCostPct));

  const update = <K extends keyof typeof inputs>(
    key: K,
    value: (typeof inputs)[K]
  ) => setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="flex flex-col">
      {/* Calculator */}
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="order-1 flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">
                Your Food Costs
              </h2>
              <p className="mt-1 text-sm text-ink-muted">
                Enter figures for your selected time period.
              </p>

              <div className="mt-6 space-y-4">
                <CurrencyInput
                  id="food-sales"
                  label="Food Sales Revenue"
                  value={inputs.foodSales}
                  onChange={(v) => update("foodSales", v)}
                />
                <CurrencyInput
                  id="ingredients"
                  label="Ingredient Costs"
                  value={inputs.ingredientCosts}
                  onChange={(v) => update("ingredientCosts", v)}
                />
                <CurrencyInput
                  id="beverage"
                  label="Beverage Costs"
                  value={inputs.beverageCosts}
                  onChange={(v) => update("beverageCosts", v)}
                />
                <CurrencyInput
                  id="waste"
                  label="Waste & Spoilage (optional)"
                  value={inputs.wasteCosts}
                  onChange={(v) => update("wasteCosts", v)}
                />

                <fieldset>
                  <legend className="text-sm font-medium text-ink-muted">
                    Time Period
                  </legend>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {(
                      [
                        ["weekly", "Weekly"],
                        ["monthly", "Monthly"],
                        ["quarterly", "Quarterly"],
                      ] as const
                    ).map(([value, label]) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => update("period", value as TimePeriod)}
                        className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors ${
                          inputs.period === value
                            ? "border-accent bg-accent-soft text-accent"
                            : "border-border text-ink-muted hover:bg-surface-muted"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <label htmlFor="restaurant-type" className="block">
                  <span className="text-sm font-medium text-ink-muted">
                    Restaurant Type (for benchmark)
                  </span>
                  <select
                    id="restaurant-type"
                    value={inputs.restaurantType}
                    onChange={(e) => update("restaurantType", e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
                  >
                    {restaurantTypeOptions.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <button
                type="button"
                className="mt-6 w-full rounded-xl bg-accent py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover focus:outline-none focus:ring-4 focus:ring-accent/20"
              >
                Calculate Food Cost
              </button>
            </div>

            <div className="order-2 flex-1">
              <div className="rounded-2xl border border-border bg-gradient-to-br from-surface via-surface to-metric-revenue/5 p-6 sm:p-8">
                <p className="text-sm font-medium text-ink-muted">Food Cost %</p>
                <p className="mt-2 font-display text-5xl font-bold tabular-nums text-ink">
                  {formatPercent(result.foodCostPct)}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border bg-surface px-4 py-4">
                    <p className="text-xs text-ink-faint">Total Food Costs</p>
                    <p className="mt-1 text-lg font-bold tabular-nums text-ink">
                      {formatCurrency(result.totalFoodCosts)}
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-surface px-4 py-4">
                    <p className="text-xs text-ink-faint">Gross Profit</p>
                    <p className="mt-1 text-lg font-bold tabular-nums text-metric-revenue">
                      {formatCurrency(result.grossProfit)}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <span
                    className={`inline-flex rounded-full border px-4 py-1.5 text-sm font-semibold ${ratingStyles[result.rating]}`}
                  >
                    {result.rating}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benchmark gauge */}
      <section className="order-3 border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Food Cost Benchmark
          </h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

          <div className="mt-8 rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              {benchmarkBands.map((band) => (
                <div key={band.label}>
                  <p className="font-semibold text-ink">{band.label}</p>
                  <p className="mt-0.5 text-xs text-ink-faint">{band.range}</p>
                </div>
              ))}
            </div>
            <div className="relative mt-6 pb-10">
              <div className="flex h-4 overflow-hidden rounded-full">
                <div className="w-1/3 bg-metric-salary/40" />
                <div className="w-1/3 bg-accent/40" />
                <div className="w-1/3 bg-metric-revenue/40" />
              </div>
              <div
                className="absolute top-0 -translate-x-1/2"
                style={{ left: `${Math.min(95, gaugePosition)}%` }}
              >
                <div className="mt-1 flex flex-col items-center">
                  <div className="size-4 rounded-full border-2 border-surface bg-accent shadow-md" />
                  <span className="mt-2 whitespace-nowrap rounded-md bg-ink px-2.5 py-1 text-xs font-semibold text-white">
                    Your Restaurant · {formatPercent(result.foodCostPct)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry comparison */}
      <section className="order-4 border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Industry Comparison
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            Typical food cost ranges by restaurant concept.
          </p>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">
                    Restaurant Type
                  </th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">
                    Typical Food Cost
                  </th>
                </tr>
              </thead>
              <tbody>
                {industryComparison.map((row, i) => (
                  <tr
                    key={row.type}
                    className={
                      i < industryComparison.length - 1
                        ? "border-b border-border-subtle"
                        : ""
                    }
                  >
                    <td className="px-5 py-4 text-ink-muted sm:px-6">{row.type}</td>
                    <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink sm:px-6">
                      {row.range}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-xl border border-metric-revenue/20 bg-metric-revenue/5 px-5 py-4">
            <p className="text-sm leading-relaxed text-ink-muted">
              <span className="font-semibold text-ink">Result: </span>
              {result.comparisonMessage}
            </p>
          </div>
        </div>
      </section>

      {/* Cost breakdown */}
      <section className="order-5 border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Cost Breakdown
          </h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 text-center">
              <p className="text-sm text-ink-muted">Revenue</p>
              <p className="mt-2 text-3xl font-bold tabular-nums text-ink">
                {formatCurrency(inputs.foodSales)}
              </p>
              <p className="my-4 text-2xl text-ink-faint" aria-hidden="true">
                ↓
              </p>
              <p className="text-sm text-ink-muted">Food Cost</p>
              <p className="mt-2 text-3xl font-bold tabular-nums text-metric-salary">
                {formatPercent(result.foodCostPct, 0)}
              </p>
              <p className="my-4 text-2xl text-ink-faint" aria-hidden="true">
                ↓
              </p>
              <p className="text-sm text-ink-muted">Gross Profit</p>
              <p className="mt-2 text-3xl font-bold tabular-nums text-metric-revenue">
                {formatPercent(result.grossMarginPct, 0)}
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <p className="text-sm font-semibold text-ink-muted">Cost split</p>
              <div className="mt-4 flex h-5 overflow-hidden rounded-full">
                {result.breakdown.map((item) => (
                  <div
                    key={item.label}
                    style={{
                      width: `${Math.max(0, item.pct)}%`,
                      background: item.color,
                    }}
                    title={`${item.label}: ${formatPercent(item.pct, 0)}`}
                  />
                ))}
              </div>
              <ul className="mt-6 space-y-3">
                {result.breakdown.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center justify-between text-sm"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="size-2.5 rounded-sm"
                        style={{ background: item.color }}
                        aria-hidden="true"
                      />
                      <span className="text-ink-muted">{item.label}</span>
                    </div>
                    <span className="font-semibold tabular-nums text-ink">
                      {formatCurrency(item.amount)} ({formatPercent(item.pct, 0)})
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Menu item analyzer */}
      <section className="order-6 border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Menu Item Analyzer
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            Check if individual menu items hit your target food cost %.
          </p>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

          <div className="mt-8 rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <p className="font-display font-semibold text-ink">
              Example: {defaultMenuItem.name}
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-ink-muted">
                  Menu Price ($)
                </span>
                <input
                  type="number"
                  step="0.01"
                  value={menuPrice}
                  onChange={(e) => setMenuPrice(Number(e.target.value) || 0)}
                  className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-ink-muted">
                  Ingredient Cost ($)
                </span>
                <input
                  type="number"
                  step="0.01"
                  value={menuCost}
                  onChange={(e) => setMenuCost(Number(e.target.value) || 0)}
                  className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
                />
              </label>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div>
                <p className="text-sm text-ink-muted">Menu Food Cost</p>
                <p className="mt-1 text-3xl font-bold tabular-nums text-ink">
                  {formatPercent(menuResult.foodCostPct)}
                </p>
              </div>
              <span
                className={`rounded-full px-4 py-1.5 text-sm font-semibold ${menuBadgeStyles[menuResult.rating]}`}
              >
                {menuResult.rating}
              </span>
              <div className="text-sm text-ink-muted">
                Gross profit per item:{" "}
                <span className="font-semibold text-ink">
                  {formatCurrency(menuResult.grossProfit)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Improvement simulator */}
      <section className="order-7 border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Improvement Simulator
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            Model how small operational improvements flow to annual profit.
          </p>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="text-sm text-ink-muted">
                Current food cost:{" "}
                <span className="font-bold text-ink">
                  {formatPercent(result.foodCostPct)}
                </span>
              </p>
              <label htmlFor="cost-cut" className="mt-4 block font-semibold text-ink">
                Reduce Food Cost By {costReduction}%
              </label>
              <input
                id="cost-cut"
                type="range"
                min={0.5}
                max={5}
                step={0.5}
                value={costReduction}
                onChange={(e) => setCostReduction(Number(e.target.value))}
                className="mt-3 w-full accent-accent"
              />
              <p className="mt-4 text-sm text-ink-muted">
                Annual profit increase:{" "}
                <span className="text-lg font-bold text-metric-revenue">
                  {formatCurrency(profitFromCostCut)}
                </span>
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <label htmlFor="waste-cut" className="block font-semibold text-ink">
                Reduce Waste By {wasteReduction}%
              </label>
              <input
                id="waste-cut"
                type="range"
                min={1}
                max={20}
                step={1}
                value={wasteReduction}
                onChange={(e) => setWasteReduction(Number(e.target.value))}
                className="mt-3 w-full accent-accent"
              />
              <p className="mt-4 text-sm text-ink-muted">
                Annual profit increase:{" "}
                <span className="text-lg font-bold text-metric-revenue">
                  {formatCurrency(profitFromWasteCut)}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Health check */}
      <section className="order-8 border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Food Cost Health Check
          </h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

          <div className="mt-8 rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <div className="flex items-end gap-3">
              <p className="font-display text-5xl font-bold tabular-nums text-accent">
                {result.overallScore}
              </p>
              <p className="pb-2 text-lg text-ink-muted">/ 100</p>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-surface-muted">
              <div
                className="h-full rounded-full bg-accent transition-all duration-500"
                style={{ width: `${result.overallScore}%` }}
              />
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { name: "Food Cost %", ...result.healthScores.foodCost },
                { name: "Waste", ...result.healthScores.waste },
                { name: "Pricing", ...result.healthScores.pricing },
              ].map((cat) => (
                <li
                  key={cat.name}
                  className="rounded-xl border border-border bg-surface-muted/30 px-4 py-4"
                >
                  <p className="text-sm font-medium text-ink-muted">{cat.name}</p>
                  <p className="mt-1 font-semibold text-ink">{cat.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Industry targets */}
      <section className="order-9 border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Common Industry Targets
          </h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

          <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {industryTargets.map((target) => (
              <li key={target.label}>
                <Link
                  href={target.href}
                  className="card-interactive flex h-full flex-col rounded-2xl border border-border bg-surface p-5"
                >
                  <span className="font-semibold text-ink">{target.label}</span>
                  <span className="mt-2 text-2xl font-bold tabular-nums text-accent">
                    {target.range}
                  </span>
                  <span className="mt-2 text-xs text-ink-faint">Target food cost</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related calculators */}
      <section className="order-10 border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Related Calculators
          </h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {relatedCalculators.map((calc) => (
              <li key={calc.label}>
                <Link
                  href={calc.href}
                  className="card-interactive group flex flex-col rounded-2xl border border-border bg-surface p-5 sm:p-6"
                >
                  <span className="font-semibold text-ink group-hover:text-accent">
                    {calc.label}
                  </span>
                  <span className="mt-1 text-sm text-ink-muted">
                    {calc.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="order-11 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <div className="mt-8">
            <IndustryFaq faqs={foodCostFaqs} />
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            <Link href="/methodology/" className="text-accent hover:underline">
              How we calculate restaurant benchmarks →
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
