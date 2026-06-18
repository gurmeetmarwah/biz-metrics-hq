"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { ElectricalCalculatorFooter } from "@/components/calculator/ElectricalCalculatorFooter";
import { electricalDataLinks } from "@/lib/industries/electrical-calculators-shared";
import {
  calculateRevenuePerElectrician,
  defaultInputs,
  faqs,
  formatCurrency,
  formatNumber,
  electricalIndustryAverages,
  productivityBenchmarks,
  relatedTools,
} from "@/lib/industries/electrical-revenue-per-electrician-calculator";

export function ElectricalRevenuePerElectricianCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateRevenuePerElectrician(inputs), [inputs]);
  const totalJobsPerYear = inputs.electricians * inputs.workingDays * inputs.jobsPerDay;
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Productivity Inputs</h2>
              <div className="mt-6 space-y-4">
                <CurrencyInput
                  id="revenue"
                  label="Annual Revenue"
                  value={inputs.annualRevenue}
                  onChange={(v) => update("annualRevenue", v)}
                />
                <label htmlFor="electricians" className="block">
                  <span className="text-sm font-medium text-ink-muted">Electricians</span>
                  <input
                    id="electricians"
                    type="number"
                    min={1}
                    max={50}
                    value={inputs.electricians}
                    onChange={(e) => update("electricians", Number(e.target.value) || 8)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
                  />
                </label>
                <label htmlFor="days" className="block">
                  <span className="text-sm font-medium text-ink-muted">Working Days Per Year</span>
                  <input
                    id="days"
                    type="number"
                    min={200}
                    max={280}
                    value={inputs.workingDays}
                    onChange={(e) => update("workingDays", Number(e.target.value) || 250)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
                  />
                </label>
                <label htmlFor="jobs" className="block">
                  <span className="text-sm font-medium text-ink-muted">Jobs Per Day (Per Electrician)</span>
                  <input
                    id="jobs"
                    type="number"
                    min={1}
                    max={12}
                    step={0.5}
                    value={inputs.jobsPerDay}
                    onChange={(e) => update("jobsPerDay", Number(e.target.value) || 4)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
                  />
                </label>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2 text-center">
                <p className="text-sm text-ink-muted">Revenue Per Electrician</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">
                  {formatCurrency(result.revenuePerElectrician)}
                  <span className="text-lg text-ink-muted">/yr</span>
                </p>
                <p className="mt-2 text-sm text-ink-faint">
                  {result.tier} vs benchmark · {formatCurrency(result.vsMedian)} vs median
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Daily Production Per Electrician</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">
                  {formatCurrency(result.dailyProduction)}/day
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Revenue Per Job</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">
                  {formatCurrency(result.revenuePerJob)}
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-xs text-ink-faint">Total Jobs Per Year</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">
                  {formatNumber(totalJobsPerYear, 0)}
                </p>
              </div>
              <div className="rounded-2xl border border-accent/25 bg-accent-soft/30 p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Industry Benchmark</p>
                <p className="mt-1 font-semibold text-ink">
                  {electricalIndustryAverages.revenuePerTechnicianRange}
                </p>
                <p className="mt-1 text-xs text-ink-faint">
                  Median {formatCurrency(electricalIndustryAverages.revenuePerTechnician)} · 340+ Electrical businesses
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Electrical Productivity Benchmarks</h2>
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

      <ElectricalCalculatorFooter relatedTools={relatedTools} dataLinks={electricalDataLinks} faqs={faqs} />
    </>
  );
}
