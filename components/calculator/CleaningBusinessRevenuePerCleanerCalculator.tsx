"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { CleaningBusinessCalculatorFooter } from "@/components/calculator/CleaningBusinessCalculatorFooter";
import { cleaningBusinessDataLinks } from "@/lib/industries/cleaning-business-calculators-shared";
import {
  calculateRevenuePerCleaner,
  defaultInputs,
  faqs,
  formatCurrency,
  formatNumber,
  formatPercent,
  cleaningBusinessIndustryAverages,
  productivityBenchmarks,
  relatedTools,
} from "@/lib/industries/cleaning-business-revenue-per-cleaner-calculator";

export function CleaningBusinessRevenuePerCleanerCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateRevenuePerCleaner(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Productivity Inputs</h2>
              <p className="mt-1 text-sm text-ink-muted">Measure revenue per cleaner and crew throughput.</p>
              <div className="mt-6 space-y-4">
                <CurrencyInput id="revenue" label="Annual Revenue" value={inputs.annualRevenue} onChange={(v) => update("annualRevenue", v)} />
                <label htmlFor="cleaners" className="block">
                  <span className="text-sm font-medium text-ink-muted">Field Cleaners</span>
                  <input id="cleaners" type="number" min={1} max={50} value={inputs.cleaners}
                    onChange={(e) => update("cleaners", Number(e.target.value) || 6)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <label htmlFor="jobs" className="block">
                  <span className="text-sm font-medium text-ink-muted">Jobs Per Crew Per Day</span>
                  <input id="jobs" type="number" min={2} max={15} value={inputs.jobsPerCrewPerDay}
                    onChange={(e) => update("jobsPerCrewPerDay", Number(e.target.value) || 6)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <label htmlFor="days" className="block">
                  <span className="text-sm font-medium text-ink-muted">Working Days Per Year</span>
                  <input id="days" type="number" min={200} max={260} value={inputs.workingDays}
                    onChange={(e) => update("workingDays", Number(e.target.value) || 250)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <label htmlFor="utilization" className="block">
                  <span className="text-sm font-medium text-ink-muted">Labor Utilization (%)</span>
                  <input id="utilization" type="number" min={30} max={100} value={inputs.laborUtilizationPct}
                    onChange={(e) => update("laborUtilizationPct", Number(e.target.value) || 72)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2 text-center">
                <p className="text-sm text-ink-muted">Revenue Per Cleaner</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">
                  {formatCurrency(result.revenuePerCleaner)}<span className="text-lg text-ink-muted">/yr</span>
                </p>
                <p className="mt-2 text-sm text-ink-faint">
                  {result.tier} vs benchmark · {formatCurrency(result.vsMedian)} vs median
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Revenue Per Job</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">{formatCurrency(result.revenuePerJob)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Jobs Per Cleaner / Year</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatNumber(result.jobsPerCleanerPerYear, 0)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Labor Utilization</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatPercent(inputs.laborUtilizationPct, 0)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Potential Revenue Gain</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-metric-valuation">{formatCurrency(result.potentialRevenueGain)}</p>
                <p className="mt-1 text-xs text-ink-faint">At 75% target utilization</p>
              </div>
              <div className="rounded-2xl border border-accent/25 bg-accent-soft/30 p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Industry Benchmark</p>
                <p className="mt-1 font-semibold text-ink">{cleaningBusinessIndustryAverages.revenuePerCleanerRange}</p>
                <p className="mt-1 text-xs text-ink-faint">Median {formatCurrency(cleaningBusinessIndustryAverages.revenuePerCleaner)} per cleaner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Productivity Benchmarks</h2>
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
                {productivityBenchmarks.map((row, i) => (
                  <tr key={row.metric} className={i < productivityBenchmarks.length - 1 ? "border-b border-border-subtle" : ""}>
                    <td className="px-5 py-4 text-ink-muted">{row.metric}</td>
                    <td className="px-5 py-4 text-right font-semibold text-ink">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CleaningBusinessCalculatorFooter relatedTools={relatedTools} dataLinks={cleaningBusinessDataLinks} faqs={faqs} />
    </>
  );
}
