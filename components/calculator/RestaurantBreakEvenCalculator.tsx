"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  breakEvenFaqs,
  calculateBreakEven,
  defaultBreakEvenInputs,
  formatCurrency,
  formatNumber,
  formatPercent,
  industryBenchmarks,
  industryComparison,
  relatedCalculators,
  simulateAovIncrease,
  simulateCustomerGap,
  simulateFoodCostReduction,
} from "@/lib/industries/restaurant-break-even-calculator";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PercentInput } from "@/components/ui/PercentInput";
import { IndustryFaq } from "@/components/industry/IndustryFaq";

const safetyStatusStyles = {
  below: {
    badge: "bg-metric-salary/10 text-metric-salary border-metric-salary/25",
    label: "Below Break-Even",
    icon: "!",
  },
  healthy: {
    badge: "bg-metric-revenue/10 text-metric-revenue border-metric-revenue/25",
    label: "Healthy Cushion",
    icon: "✓",
  },
  strong: {
    badge: "bg-metric-revenue/10 text-metric-revenue border-metric-revenue/25",
    label: "Strong Margin of Safety",
    icon: "✓",
  },
};

export function RestaurantBreakEvenCalculator() {
  const [inputs, setInputs] = useState(defaultBreakEvenInputs);
  const [whatIfAov, setWhatIfAov] = useState(
    defaultBreakEvenInputs.averageOrderValue + 3
  );
  const [whatIfFoodPct, setWhatIfFoodPct] = useState(
    defaultBreakEvenInputs.foodCostPct - 2
  );
  const [whatIfDailyCustomers, setWhatIfDailyCustomers] = useState(75);

  const result = useMemo(() => calculateBreakEven(inputs), [inputs]);

  const aovSimulation = useMemo(() => {
    const base = calculateBreakEven(inputs);
    const updated = simulateAovIncrease(inputs, whatIfAov);
    return { ...updated, oldDailyCustomers: base.dailyCustomers };
  }, [inputs, whatIfAov]);

  const foodCostSavings = useMemo(
    () => simulateFoodCostReduction(inputs, whatIfFoodPct),
    [inputs, whatIfFoodPct]
  );

  const customerGap = useMemo(
    () => simulateCustomerGap(inputs, whatIfDailyCustomers),
    [inputs, whatIfDailyCustomers]
  );

  const update = <K extends keyof typeof inputs>(
    key: K,
    value: (typeof inputs)[K]
  ) => setInputs((prev) => ({ ...prev, [key]: value }));

  const statusStyle = safetyStatusStyles[result.safetyStatus];

  return (
    <div className="flex flex-col">
      {/* Main calculator */}
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">
                Your Numbers
              </h2>
              <p className="mt-1 text-sm text-ink-muted">
                Monthly figures for your restaurant.
              </p>

              <div className="mt-6 space-y-4">
                <CurrencyInput
                  id="fixed-costs"
                  label="Monthly Fixed Costs"
                  value={inputs.fixedCosts}
                  onChange={(v) => update("fixedCosts", v)}
                  tooltip="Rent, salaries, insurance, software, etc."
                />
                <CurrencyInput
                  id="aov"
                  label="Average Order Value"
                  value={inputs.averageOrderValue}
                  onChange={(v) => update("averageOrderValue", v)}
                />
                <PercentInput
                  id="food-cost"
                  label="Food Cost %"
                  value={inputs.foodCostPct}
                  onChange={(v) => update("foodCostPct", v)}
                />
                <PercentInput
                  id="labor-cost"
                  label="Labor Cost %"
                  value={inputs.laborCostPct}
                  onChange={(v) => update("laborCostPct", v)}
                />
                <PercentInput
                  id="other-variable"
                  label="Other Variable Costs %"
                  value={inputs.otherVariablePct}
                  onChange={(v) => update("otherVariablePct", v)}
                />
                <label htmlFor="days-open" className="block">
                  <span className="text-sm font-medium text-ink-muted">
                    Days Open Per Month
                  </span>
                  <input
                    id="days-open"
                    type="number"
                    min={1}
                    max={31}
                    value={inputs.daysOpen}
                    onChange={(e) =>
                      update("daysOpen", Number(e.target.value) || 26)
                    }
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
                  />
                </label>
                <CurrencyInput
                  id="current-revenue"
                  label="Current Monthly Revenue"
                  value={inputs.currentRevenue}
                  onChange={(v) => update("currentRevenue", v)}
                  tooltip="Your actual revenue this month — used for progress and safety score."
                />
              </div>

              <button
                type="button"
                className="mt-6 w-full rounded-xl bg-accent py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover focus:outline-none focus:ring-4 focus:ring-accent/20"
              >
                Calculate Break Even
              </button>
            </div>

            <div className="flex-1">
              <h2 className="font-display text-lg font-semibold text-ink lg:sr-only">
                Results
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-gradient-to-br from-surface via-surface to-accent/5 p-5 sm:col-span-2 sm:p-6">
                  <p className="text-sm font-medium text-ink-muted">
                    Break-Even Revenue
                  </p>
                  <p className="mt-1 font-display text-4xl font-bold tabular-nums text-ink">
                    {formatCurrency(result.breakEvenRevenue)}
                    <span className="text-lg font-medium text-ink-muted">
                      /month
                    </span>
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-surface p-5">
                  <p className="text-xs text-ink-faint">Customers Needed</p>
                  <p className="mt-1 text-2xl font-bold tabular-nums text-ink">
                    {formatNumber(result.customersPerMonth, 0)}
                    <span className="text-sm font-medium text-ink-muted">
                      /month
                    </span>
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-surface p-5">
                  <p className="text-xs text-ink-faint">Daily Customers Needed</p>
                  <p className="mt-1 text-2xl font-bold tabular-nums text-accent">
                    {formatNumber(result.dailyCustomers, 0)}
                    <span className="text-sm font-medium text-ink-muted">
                      /day
                    </span>
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                  <p className="text-xs text-ink-faint">Daily Sales Needed</p>
                  <p className="mt-1 text-2xl font-bold tabular-nums text-metric-revenue">
                    {formatCurrency(result.dailySales)}
                    <span className="text-sm font-medium text-ink-muted">
                      /day
                    </span>
                  </p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-6 rounded-2xl border border-border bg-surface p-5 sm:p-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs text-ink-faint">Current Revenue</p>
                    <p className="text-lg font-bold tabular-nums text-ink">
                      {formatCurrency(inputs.currentRevenue)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-ink-faint">Break-Even Revenue</p>
                    <p className="text-lg font-bold tabular-nums text-ink">
                      {formatCurrency(result.breakEvenRevenue)}
                    </p>
                  </div>
                </div>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-surface-muted">
                  <div
                    className="h-full rounded-full bg-accent transition-all duration-500"
                    style={{ width: `${result.progressPct}%` }}
                  />
                </div>
                <p className="mt-2 text-right text-sm font-semibold tabular-nums text-accent">
                  {formatPercent(result.progressPct, 0)} of break-even
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Break-even gauge */}
      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Break-Even Gauge
          </h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

          <div className="mt-8 rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              <div>
                <p className="font-semibold text-metric-salary">Losing Money</p>
              </div>
              <div>
                <p className="font-semibold text-accent">Break Even</p>
              </div>
              <div>
                <p className="font-semibold text-metric-revenue">Profitable</p>
              </div>
            </div>
            <div className="relative mt-6 pb-12">
              <div className="flex h-4 overflow-hidden rounded-full">
                <div className="w-1/3 bg-metric-salary/40" />
                <div className="w-1/3 bg-accent/40" />
                <div className="w-1/3 bg-metric-revenue/40" />
              </div>
              <div
                className="absolute top-0 -translate-x-1/2"
                style={{ left: `${result.gaugePosition}%` }}
              >
                <div className="mt-1 flex flex-col items-center">
                  <div className="size-4 rounded-full border-2 border-surface bg-accent shadow-md" />
                  <span className="mt-2 whitespace-nowrap rounded-md bg-ink px-2.5 py-1 text-xs font-semibold text-white">
                    You are here
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost breakdown waterfall */}
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Cost Breakdown
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            How break-even revenue flows through your cost structure.
          </p>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6 text-center sm:p-8">
              <p className="text-sm text-ink-muted">Restaurant Revenue</p>
              <p className="mt-2 text-3xl font-bold tabular-nums text-ink">
                {formatCurrency(result.breakEvenRevenue)}
              </p>
              {result.waterfall.map((item) => (
                <div key={item.label}>
                  <p className="my-4 text-2xl text-ink-faint" aria-hidden="true">
                    ↓
                  </p>
                  <p className="text-sm text-ink-muted">{item.label}</p>
                  <p
                    className="mt-1 text-2xl font-bold tabular-nums"
                    style={{ color: item.color }}
                  >
                    {formatCurrency(item.amount)}
                  </p>
                  <p className="text-xs text-ink-faint">
                    {formatPercent(item.pct, 0)}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <p className="text-sm font-semibold text-ink-muted">
                Revenue allocation at break-even
              </p>
              <div className="mt-4 flex h-6 overflow-hidden rounded-full">
                {result.waterfall.map((item) => (
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
                {result.waterfall.map((item) => (
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
              <p className="mt-6 text-sm text-ink-muted">
                Contribution margin:{" "}
                <span className="font-semibold text-ink">
                  {formatPercent(result.contributionMarginPct)}
                </span>{" "}
                of revenue covers fixed costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily target dashboard */}
      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Daily Target Dashboard
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            The numbers your managers should track every shift.
          </p>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

          <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              {
                label: "Revenue Needed Daily",
                value: formatCurrency(result.dailySales),
              },
              {
                label: "Customers Needed Daily",
                value: formatNumber(result.dailyCustomers, 0),
              },
              {
                label: "Orders Per Hour",
                value: formatNumber(result.ordersPerHour, 0),
              },
              {
                label: "Average Ticket Required",
                value: formatCurrency(inputs.averageOrderValue),
              },
            ].map((item) => (
              <li
                key={item.label}
                className="rounded-2xl border border-border bg-surface p-5"
              >
                <p className="text-xs text-ink-faint">{item.label}</p>
                <p className="mt-2 text-2xl font-bold tabular-nums text-accent">
                  {item.value}
                </p>
              </li>
            ))}
          </ul>

          <label htmlFor="hours-open" className="mt-6 block max-w-xs">
            <span className="text-sm font-medium text-ink-muted">
              Operating Hours Per Day
            </span>
            <input
              id="hours-open"
              type="number"
              min={1}
              max={24}
              value={inputs.hoursOpenPerDay}
              onChange={(e) =>
                update("hoursOpenPerDay", Number(e.target.value) || 8)
              }
              className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
            />
          </label>
        </div>
      </section>

      {/* Benchmark comparison */}
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Typical Restaurant Benchmarks
          </h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink sm:px-6">
                    Metric
                  </th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink sm:px-6">
                    Average
                  </th>
                </tr>
              </thead>
              <tbody>
                {industryBenchmarks.map((row, i) => (
                  <tr
                    key={row.metric}
                    className={
                      i < industryBenchmarks.length - 1
                        ? "border-b border-border-subtle"
                        : ""
                    }
                  >
                    <td className="px-5 py-4 text-ink-muted sm:px-6">
                      {row.metric}
                    </td>
                    <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink sm:px-6">
                      {row.range}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 space-y-3">
            {result.benchmarkInsights.map((insight) => (
              <div
                key={insight}
                className="rounded-xl border border-accent/20 bg-accent-soft/50 px-5 py-4"
              >
                <p className="text-sm leading-relaxed text-ink-muted">
                  <span className="font-semibold text-ink">Result: </span>
                  {insight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What-if simulator */}
      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            What-If Scenario Tool
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            Model how small changes shift your break-even point.
          </p>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="font-semibold text-ink">Increase Average Order Value</p>
              <div className="mt-2 flex flex-wrap gap-4 text-sm text-ink-muted">
                <span>
                  Current:{" "}
                  <strong className="text-ink">
                    {formatCurrency(inputs.averageOrderValue)}
                  </strong>
                </span>
                <span>
                  New:{" "}
                  <strong className="text-ink">{formatCurrency(whatIfAov)}</strong>
                </span>
              </div>
              <input
                type="range"
                min={inputs.averageOrderValue + 1}
                max={inputs.averageOrderValue + 10}
                step={0.5}
                value={Math.max(whatIfAov, inputs.averageOrderValue + 1)}
                onChange={(e) => setWhatIfAov(Number(e.target.value))}
                className="mt-4 w-full accent-accent"
                aria-label="New average order value"
              />
              <p className="mt-4 text-sm text-ink-muted">
                Customers needed drops from{" "}
                <span className="font-bold text-ink">
                  {formatNumber(aovSimulation.oldDailyCustomers, 0)}/day
                </span>{" "}
                to{" "}
                <span className="font-bold text-metric-revenue">
                  {formatNumber(aovSimulation.newDailyCustomers, 0)}/day
                </span>
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="font-semibold text-ink">Reduce Food Cost</p>
              <div className="mt-2 flex flex-wrap gap-4 text-sm text-ink-muted">
                <span>
                  Current:{" "}
                  <strong className="text-ink">
                    {formatPercent(inputs.foodCostPct, 0)}
                  </strong>
                </span>
                <span>
                  New:{" "}
                  <strong className="text-ink">
                    {formatPercent(whatIfFoodPct, 0)}
                  </strong>
                </span>
              </div>
              <input
                type="range"
                min={Math.max(18, inputs.foodCostPct - 8)}
                max={inputs.foodCostPct}
                step={0.5}
                value={whatIfFoodPct}
                onChange={(e) => setWhatIfFoodPct(Number(e.target.value))}
                className="mt-4 w-full accent-accent"
                aria-label="New food cost percentage"
              />
              <p className="mt-4 text-sm text-ink-muted">
                Break-even revenue falls by{" "}
                <span className="font-bold text-metric-revenue">
                  {formatCurrency(foodCostSavings)}/month
                </span>
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="font-semibold text-ink">Increase Customer Volume</p>
              <div className="mt-2 flex flex-wrap gap-4 text-sm text-ink-muted">
                <span>
                  Current:{" "}
                  <strong className="text-ink">
                    {formatNumber(whatIfDailyCustomers, 0)}/day
                  </strong>
                </span>
                <span>
                  Required:{" "}
                  <strong className="text-ink">
                    {formatNumber(customerGap.required, 0)}/day
                  </strong>
                </span>
              </div>
              <input
                type="range"
                min={30}
                max={Math.ceil(result.dailyCustomers)}
                step={1}
                value={whatIfDailyCustomers}
                onChange={(e) =>
                  setWhatIfDailyCustomers(Number(e.target.value))
                }
                className="mt-4 w-full accent-accent"
                aria-label="Current daily customers"
              />
              <p className="mt-4 text-sm text-ink-muted">
                {customerGap.gap > 0 ? (
                  <>
                    Need{" "}
                    <span className="font-bold text-metric-salary">
                      {formatNumber(customerGap.gap, 0)} more customers per day
                    </span>{" "}
                    to break even.
                  </>
                ) : (
                  <span className="font-bold text-metric-revenue">
                    You are at or above your daily break-even target.
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety score */}
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Are You Safe?
          </h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

          <div className="mt-8 rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <p className="text-sm font-medium text-ink-muted">
              Restaurant Safety Score
            </p>
            <div className="mt-2 flex items-end gap-3">
              <p className="font-display text-5xl font-bold tabular-nums text-accent">
                {result.safetyScore}
              </p>
              <p className="pb-2 text-lg text-ink-muted">/ 100</p>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-surface-muted">
              <div
                className="h-full rounded-full bg-accent transition-all duration-500"
                style={{ width: `${result.safetyScore}%` }}
              />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-surface-muted/30 px-4 py-4">
                <p className="text-xs text-ink-faint">Current Revenue</p>
                <p className="mt-1 text-xl font-bold tabular-nums text-ink">
                  {formatCurrency(inputs.currentRevenue)}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface-muted/30 px-4 py-4">
                <p className="text-xs text-ink-faint">Break-Even Revenue</p>
                <p className="mt-1 text-xl font-bold tabular-nums text-ink">
                  {formatCurrency(result.breakEvenRevenue)}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold ${statusStyle.badge}`}
              >
                <span aria-hidden="true">{statusStyle.icon}</span>
                {statusStyle.label}
              </span>
              {result.cushionAmount !== 0 && (
                <span className="text-sm text-ink-muted">
                  {result.cushionAmount > 0
                    ? `${formatCurrency(result.cushionAmount)} above break-even`
                    : `${formatCurrency(Math.abs(result.cushionAmount))} below break-even`}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Industry comparison */}
      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Industry Comparison
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            Typical daily customer targets by concept.
          </p>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

          <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {industryComparison.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="card-interactive flex h-full flex-col rounded-2xl border border-border bg-surface p-5"
                >
                  <span className="font-semibold text-ink">{item.label}</span>
                  <span className="mt-2 text-2xl font-bold tabular-nums text-accent">
                    {item.dailyCustomers}
                  </span>
                  <span className="mt-1 text-xs text-ink-faint">
                    customers/day
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related calculators */}
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Related Tools
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
      <section className="bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <div className="mt-8">
            <IndustryFaq faqs={breakEvenFaqs} />
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
