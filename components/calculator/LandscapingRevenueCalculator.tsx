"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { LandscapingCalculatorFooter } from "@/components/calculator/LandscapingCalculatorFooter";
import { landscapingDataLinks } from "@/lib/industries/landscaping-calculators-shared";
import {
  calculateLandscapingRevenue,
  defaultInputs,
  faqs,
  formatCurrency,
  landscapingIndustryAverages,
  revenueBenchmarks,
  relatedTools,
} from "@/lib/industries/landscaping-revenue-calculator";

export function LandscapingRevenueCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateLandscapingRevenue(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Capacity Inputs</h2>
              <p className="mt-1 text-sm text-ink-muted">Estimate revenue from crew routes and project work.</p>
              <div className="mt-6 space-y-4">
                <label htmlFor="crews" className="block">
                  <span className="text-sm font-medium text-ink-muted">Field Crews</span>
                  <input
                    id="crews"
                    type="number"
                    min={1}
                    max={20}
                    value={inputs.fieldCrews}
                    onChange={(e) => update("fieldCrews", Number(e.target.value) || 4)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
                  />
                </label>
                <CurrencyInput
                  id="weekly"
                  label="Weekly Revenue Per Crew"
                  value={inputs.weeklyRevenuePerCrew}
                  onChange={(v) => update("weeklyRevenuePerCrew", v)}
                />
                <label htmlFor="weeks" className="block">
                  <span className="text-sm font-medium text-ink-muted">Working Weeks Per Year</span>
                  <input
                    id="weeks"
                    type="number"
                    min={30}
                    max={52}
                    value={inputs.workingWeeks}
                    onChange={(e) => update("workingWeeks", Number(e.target.value) || 40)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
                  />
                </label>
                <CurrencyInput
                  id="project"
                  label="Monthly Project Revenue (Total)"
                  value={inputs.monthlyProjectRevenue}
                  onChange={(v) => update("monthlyProjectRevenue", v)}
                />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2 text-center">
                <p className="text-sm text-ink-muted">Estimated Annual Revenue</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">
                  {formatCurrency(result.estimatedAnnualRevenue)}
                </p>
                <p className="mt-2 text-sm text-ink-faint">
                  {result.tier} vs benchmark · {formatCurrency(result.vsMedian)} vs median
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Revenue Per Crew</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">
                  {formatCurrency(result.revenuePerCrew)}/yr
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Maintenance Revenue %</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">
                  {result.maintenancePct.toFixed(0)}%
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Annual Route Revenue</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">
                  {formatCurrency(result.annualRouteRevenue)}
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Annual Project Revenue</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">
                  {formatCurrency(result.annualProjectRevenue)}
                </p>
              </div>
              <div className="rounded-2xl border border-accent/25 bg-accent-soft/30 p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Industry Benchmark</p>
                <p className="mt-1 font-semibold text-ink">{landscapingIndustryAverages.revenuePerCrewRange}</p>
                <p className="mt-1 text-xs text-ink-faint">
                  Median {formatCurrency(landscapingIndustryAverages.revenue)} company revenue · 280+ Landscaping businesses
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Landscaping Revenue Benchmarks</h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink">Metric</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink">Industry Range</th>
                </tr>
              </thead>
              <tbody>
                {revenueBenchmarks.map((row, i) => (
                  <tr key={row.metric} className={i < revenueBenchmarks.length - 1 ? "border-b border-border-subtle" : ""}>
                    <td className="px-5 py-4 text-ink-muted">{row.metric}</td>
                    <td className="px-5 py-4 text-right font-semibold text-ink">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <LandscapingCalculatorFooter relatedTools={relatedTools} dataLinks={landscapingDataLinks} faqs={faqs} />
    </>
  );
}
