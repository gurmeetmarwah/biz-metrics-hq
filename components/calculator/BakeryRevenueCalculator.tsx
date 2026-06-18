"use client";

import { useMemo, useState } from "react";
import { BakeryCalculatorFooter } from "@/components/calculator/BakeryCalculatorFooter";
import { BenchmarkSourceFootnote } from "@/components/shared/DataSourcesAttribution";
import { bakeryDataLinks } from "@/lib/industries/bakery-calculators-shared";
import { bakeryAttribution } from "@/lib/data-sources/bakery";
import {
  bakeryIndustryAverages,
  calculateRevenue,
  defaultInputs,
  faqs,
  formatCurrency,
  formatNumber,
  relatedTools,
  scenarios,
} from "@/lib/industries/bakery-revenue-calculator";

export function BakeryRevenueCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateRevenue(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Daily Volume</h2>
              <div className="mt-6 space-y-4">
                <label className="block">
                  <span className="text-sm font-medium text-ink-muted">Orders Per Day</span>
                  <input type="number" min={0} value={inputs.ordersPerDay} onChange={(e) => update("ordersPerDay", Number(e.target.value) || 0)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-ink-muted">Average Order ($)</span>
                  <input type="number" min={0} step={0.5} value={inputs.averageOrder} onChange={(e) => update("averageOrder", Number(e.target.value) || 0)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-ink-muted">Days Open Per Year</span>
                  <input type="number" min={1} max={365} value={inputs.daysOpenPerYear} onChange={(e) => update("daysOpenPerYear", Number(e.target.value) || 300)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-ink-muted">Custom Order Revenue (%)</span>
                  <input type="number" min={0} max={100} value={inputs.customOrderPct} onChange={(e) => update("customOrderPct", Number(e.target.value) || 0)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Annual Revenue</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">{formatCurrency(result.annualRevenue)}</p>
                <p className="mt-2 inline-flex rounded-full border border-accent/25 bg-accent-soft px-3 py-1 text-sm font-semibold text-accent">{result.tier}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Daily Revenue</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.dailyRevenue)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Monthly Revenue</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.monthlyRevenue)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Custom Order Revenue</p>
                <p className="mt-1 text-xl font-bold tabular-nums text-ink">{formatCurrency(result.customRevenue)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Retail Revenue</p>
                <p className="mt-1 text-xl font-bold tabular-nums text-ink">{formatCurrency(result.retailRevenue)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Industry Median: {formatCurrency(bakeryIndustryAverages.revenue)}</p>
                <p className="mt-1 text-sm text-ink-muted">Annual orders: {formatNumber(result.ordersPerYear, 0)}</p>
                <BenchmarkSourceFootnote
                  sampleSize={bakeryAttribution.sampleSize}
                  dataVintage={bakeryAttribution.dataVintage}
                  className="mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Daily Scenarios</h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {scenarios.map((scenario) => {
              const annual = scenario.ordersPerDay * scenario.averageOrder * inputs.daysOpenPerYear;
              return (
                <li key={scenario.label} className="rounded-2xl border border-border bg-surface p-5">
                  <p className="font-semibold text-ink">{scenario.label}</p>
                  <p className="mt-2 text-sm text-ink-muted">{scenario.ordersPerDay} orders × {formatCurrency(scenario.averageOrder)}</p>
                  <p className="mt-3 text-xl font-bold tabular-nums text-accent">{formatCurrency(annual)}/yr</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <BakeryCalculatorFooter calculatorId="revenue" relatedTools={relatedTools} dataLinks={bakeryDataLinks} faqs={faqs} />
    </>
  );
}
