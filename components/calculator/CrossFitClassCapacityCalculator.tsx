"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PercentInput } from "@/components/ui/PercentInput";
import { CrossFitCalculatorFooter, CrossFitNumberInput } from "@/components/calculator/CrossFitCalculatorFooter";
import { crossfitDataLinks } from "@/lib/industries/crossfit-calculators-shared";
import {
  calculateClassCapacity,
  capacityBenchmarks,
  defaultInputs,
  faqs,
  formatCurrency,
  formatPercent,
  relatedTools,
  crossfitIndustryAverages,
} from "@/lib/industries/crossfit-class-capacity-calculator";

export function CrossFitClassCapacityCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateClassCapacity(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Schedule & Capacity</h2>
              <p className="mt-1 text-sm text-ink-muted">Model class revenue from fill rate and box capacity.</p>
              <div className="mt-6 space-y-4">
                <CrossFitNumberInput
                  id="classes"
                  label="Classes Per Day"
                  value={inputs.classesPerDay}
                  onChange={(v) => update("classesPerDay", v)}
                  max={200}
                />
                <CrossFitNumberInput
                  id="capacity"
                  label="Average Class Capacity"
                  value={inputs.avgClassCapacity}
                  onChange={(v) => update("avgClassCapacity", v)}
                  max={50}
                />
                <PercentInput
                  id="occupancy"
                  label="Average Occupancy"
                  value={inputs.avgOccupancyPct}
                  onChange={(v) => update("avgOccupancyPct", v)}
                />
                <CurrencyInput
                  id="price"
                  label="Revenue Per Athlete Per Class"
                  value={inputs.revenuePerAthletePerClass}
                  onChange={(v) => update("revenuePerAthletePerClass", v)}
                />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2 text-center">
                <p className="text-sm text-ink-muted">Monthly Class Revenue</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">
                  {formatCurrency(result.monthlyClassRevenue)}
                </p>
                <p className="mt-2 text-sm text-ink-faint">
                  {result.tier} vs benchmark · {formatCurrency(result.annualClassRevenue)}/yr
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Revenue Per Class</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">{formatCurrency(result.revenuePerClass)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Filled Spots / Day</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{Math.round(result.filledSpotsPerDay)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Daily Class Revenue</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.dailyClassRevenue)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Occupancy</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatPercent(inputs.avgOccupancyPct, 0)}</p>
              </div>
              <div className="rounded-2xl border border-accent/25 bg-accent-soft/30 p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Industry Benchmark</p>
                <p className="mt-1 font-semibold text-ink">
                  ~{formatCurrency(crossfitIndustryAverages.revenuePerClass)}/class · {crossfitIndustryAverages.avgOccupancyPct}% avg occupancy
                </p>
                <p className="mt-1 text-xs text-ink-faint">
                  {result.vsBenchmarkPerClass >= 0 ? "+" : ""}
                  {formatCurrency(result.vsBenchmarkPerClass)} vs median per class
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Capacity Benchmarks</h2>
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
                {capacityBenchmarks.map((row, i) => (
                  <tr key={row.metric} className={i < capacityBenchmarks.length - 1 ? "border-b border-border-subtle" : ""}>
                    <td className="px-5 py-4 text-ink-muted">{row.metric}</td>
                    <td className="px-5 py-4 text-right font-semibold text-ink">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CrossFitCalculatorFooter relatedTools={relatedTools} dataLinks={crossfitDataLinks} faqs={faqs} />
    </>
  );
}
