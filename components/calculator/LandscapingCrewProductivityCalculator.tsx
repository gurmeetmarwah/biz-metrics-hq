"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { LandscapingCalculatorFooter } from "@/components/calculator/LandscapingCalculatorFooter";
import { landscapingDataLinks } from "@/lib/industries/landscaping-calculators-shared";
import {
  calculateCrewProductivity,
  defaultInputs,
  faqs,
  formatCurrency,
  formatNumber,
  formatPercent,
  landscapingIndustryAverages,
  productivityBenchmarks,
  relatedTools,
} from "@/lib/industries/landscaping-crew-productivity-calculator";

export function LandscapingCrewProductivityCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateCrewProductivity(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Crew Inputs</h2>
              <p className="mt-1 text-sm text-ink-muted">Measure route throughput and revenue per crew.</p>
              <div className="mt-6 space-y-4">
                <CurrencyInput id="revenue" label="Annual Revenue" value={inputs.annualRevenue} onChange={(v) => update("annualRevenue", v)} />
                <label htmlFor="crews" className="block">
                  <span className="text-sm font-medium text-ink-muted">Field Crews</span>
                  <input id="crews" type="number" min={1} max={20} value={inputs.fieldCrews}
                    onChange={(e) => update("fieldCrews", Number(e.target.value) || 4)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <label htmlFor="properties" className="block">
                  <span className="text-sm font-medium text-ink-muted">Properties Per Crew Per Week</span>
                  <input id="properties" type="number" min={10} max={80} value={inputs.propertiesPerCrewPerWeek}
                    onChange={(e) => update("propertiesPerCrewPerWeek", Number(e.target.value) || 45)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <label htmlFor="weeks" className="block">
                  <span className="text-sm font-medium text-ink-muted">Working Weeks Per Year</span>
                  <input id="weeks" type="number" min={30} max={52} value={inputs.workingWeeks}
                    onChange={(e) => update("workingWeeks", Number(e.target.value) || 40)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <label htmlFor="utilization" className="block">
                  <span className="text-sm font-medium text-ink-muted">Crew Utilization (%)</span>
                  <input id="utilization" type="number" min={30} max={100} value={inputs.crewUtilizationPct}
                    onChange={(e) => update("crewUtilizationPct", Number(e.target.value) || 78)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2 text-center">
                <p className="text-sm text-ink-muted">Revenue Per Crew</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">
                  {formatCurrency(result.revenuePerCrew)}<span className="text-lg text-ink-muted">/yr</span>
                </p>
                <p className="mt-2 text-sm text-ink-faint">
                  {result.tier} vs benchmark · {formatCurrency(result.vsMedian)} vs median
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Revenue Per Visit</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">{formatCurrency(result.revenuePerVisit)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Visits Per Crew / Year</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatNumber(result.visitsPerCrewPerYear, 0)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Crew Utilization</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatPercent(inputs.crewUtilizationPct, 0)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Potential Revenue Gain</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-metric-valuation">{formatCurrency(result.potentialRevenueGain)}</p>
                <p className="mt-1 text-xs text-ink-faint">At 85% target utilization</p>
              </div>
              <div className="rounded-2xl border border-accent/25 bg-accent-soft/30 p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Industry Benchmark</p>
                <p className="mt-1 font-semibold text-ink">{landscapingIndustryAverages.revenuePerCrewRange}</p>
                <p className="mt-1 text-xs text-ink-faint">Median {formatCurrency(landscapingIndustryAverages.revenuePerCrew)} per crew</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Crew Productivity Benchmarks</h2>
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

      <LandscapingCalculatorFooter relatedTools={relatedTools} dataLinks={landscapingDataLinks} faqs={faqs} />
    </>
  );
}
