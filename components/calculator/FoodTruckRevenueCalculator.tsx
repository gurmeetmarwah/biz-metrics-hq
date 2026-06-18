"use client";

import { useMemo, useState } from "react";
import { FoodTruckCalculatorFooter } from "@/components/calculator/FoodTruckCalculatorFooter";
import { BenchmarkSourceFootnote } from "@/components/shared/DataSourcesAttribution";
import { foodTruckDataLinks } from "@/lib/industries/food-truck-calculators-shared";
import { foodTruckAttribution } from "@/lib/data-sources/food-truck";
import {
  calculateRevenue,
  defaultInputs,
  faqs,
  foodTruckIndustryAverages,
  formatCurrency,
  formatNumber,
  relatedTools,
  scenarios,
} from "@/lib/industries/food-truck-revenue-calculator";

export function FoodTruckRevenueCalculator() {
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
                  <span className="text-sm font-medium text-ink-muted">Customers Per Day</span>
                  <input type="number" min={0} value={inputs.customersPerDay} onChange={(e) => update("customersPerDay", Number(e.target.value) || 0)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-ink-muted">Average Ticket ($)</span>
                  <input type="number" min={0} step={0.5} value={inputs.averageTicket} onChange={(e) => update("averageTicket", Number(e.target.value) || 0)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-ink-muted">Operating Days Per Year</span>
                  <input type="number" min={1} max={365} value={inputs.daysOpenPerYear} onChange={(e) => update("daysOpenPerYear", Number(e.target.value) || 268)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-ink-muted">Annual Event Revenue ($)</span>
                  <input type="number" min={0} step={500} value={inputs.eventRevenueAnnual} onChange={(e) => update("eventRevenueAnnual", Number(e.target.value) || 0)}
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
                <p className="text-xs text-ink-faint">Street Revenue</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.streetRevenue)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Daily Street Revenue</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.dailyRevenue)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Industry Median: {formatCurrency(foodTruckIndustryAverages.revenue)}</p>
                <p className="mt-1 text-sm text-ink-muted">Annual customers served: {formatNumber(result.customersPerYear, 0)}</p>
                <BenchmarkSourceFootnote
                  sampleSize={foodTruckAttribution.sampleSize}
                  dataVintage={foodTruckAttribution.dataVintage}
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
              const street = scenario.customersPerDay * scenario.averageTicket * inputs.daysOpenPerYear;
              const annual = street + inputs.eventRevenueAnnual;
              return (
                <li key={scenario.label} className="rounded-2xl border border-border bg-surface p-5">
                  <p className="font-semibold text-ink">{scenario.label}</p>
                  <p className="mt-2 text-sm text-ink-muted">{scenario.customersPerDay} customers × {formatCurrency(scenario.averageTicket)}</p>
                  <p className="mt-3 text-xl font-bold tabular-nums text-accent">{formatCurrency(annual)}/yr</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <FoodTruckCalculatorFooter calculatorId="revenue" relatedTools={relatedTools} dataLinks={foodTruckDataLinks} faqs={faqs} />
    </>
  );
}
