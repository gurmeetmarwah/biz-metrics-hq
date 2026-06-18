"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { ElectricalCalculatorFooter } from "@/components/calculator/ElectricalCalculatorFooter";
import { electricalDataLinks } from "@/lib/industries/electrical-calculators-shared";
import {
  calculateLaborUtilization,
  defaultInputs,
  faqs,
  formatCurrency,
  formatPercent,
  electricalIndustryAverages,
  utilizationBenchmarks,
  relatedTools,
} from "@/lib/industries/electrical-labor-utilization-calculator";

export function ElectricalLaborUtilizationCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateLaborUtilization(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Labor Inputs</h2>
              <p className="mt-1 text-sm text-ink-muted">Per-electrician averages across your field team.</p>
              <div className="mt-6 space-y-4">
                <label htmlFor="electricians" className="block">
                  <span className="text-sm font-medium text-ink-muted">Field Electricians</span>
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
                <label htmlFor="paid" className="block">
                  <span className="text-sm font-medium text-ink-muted">Paid Hours Per Week</span>
                  <input
                    id="paid"
                    type="number"
                    min={20}
                    max={60}
                    step={0.5}
                    value={inputs.paidHoursPerWeek}
                    onChange={(e) => update("paidHoursPerWeek", Number(e.target.value) || 40)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
                  />
                </label>
                <label htmlFor="billable" className="block">
                  <span className="text-sm font-medium text-ink-muted">Billable Hours Per Week</span>
                  <input
                    id="billable"
                    type="number"
                    min={10}
                    max={60}
                    step={0.5}
                    value={inputs.billableHoursPerWeek}
                    onChange={(e) => update("billableHoursPerWeek", Number(e.target.value) || 28)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
                  />
                </label>
                <CurrencyInput
                  id="rate"
                  label="Average Bill Rate ($/hr)"
                  value={inputs.averageBillRate}
                  onChange={(v) => update("averageBillRate", v)}
                />
                <label htmlFor="weeks" className="block">
                  <span className="text-sm font-medium text-ink-muted">Working Weeks Per Year</span>
                  <input
                    id="weeks"
                    type="number"
                    min={40}
                    max={52}
                    value={inputs.workingWeeks}
                    onChange={(e) => update("workingWeeks", Number(e.target.value) || 50)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
                  />
                </label>
                <CurrencyInput
                  id="revenue"
                  label="Actual Annual Revenue"
                  value={inputs.actualAnnualRevenue}
                  onChange={(v) => update("actualAnnualRevenue", v)}
                />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2 text-center">
                <p className="text-sm text-ink-muted">Billable Utilization</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-accent">
                  {formatPercent(result.utilizationPct, 0)}
                </p>
                <p className="mt-2 text-sm text-ink-faint">
                  {result.tier} · {formatPercent(result.vsBenchmark, 0)} vs median benchmark
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Non-Billable Hours / Week</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-metric-salary">
                  {result.nonBillableHoursPerWeek.toFixed(1)} hrs
                </p>
                <p className="mt-1 text-xs text-ink-faint">{formatPercent(result.nonBillablePct, 0)} of paid time</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Implied Revenue / Electrician</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-metric-revenue">
                  {formatCurrency(result.impliedRevenuePerElectrician)}
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-xs text-ink-faint">Implied Annual Revenue (Team)</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">
                  {formatCurrency(result.impliedAnnualRevenue)}
                </p>
                <p className="mt-2 text-sm text-ink-muted">
                  vs actual {formatCurrency(inputs.actualAnnualRevenue)} (
                  {result.revenueGap >= 0 ? "+" : ""}
                  {formatCurrency(result.revenueGap)} gap)
                </p>
              </div>
              <div className="rounded-2xl border border-accent/25 bg-accent-soft/30 p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Upside at 70% Utilization</p>
                <p className="mt-1 text-xl font-bold tabular-nums text-accent">
                  +{formatCurrency(result.upsideAt70Pct)} potential revenue
                </p>
                <p className="mt-1 text-xs text-ink-faint">
                  Industry benchmark: {electricalIndustryAverages.laborUtilizationRange} billable utilization
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Labor Utilization Benchmarks</h2>
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
                {utilizationBenchmarks.map((row, i) => (
                  <tr key={row.metric} className={i < utilizationBenchmarks.length - 1 ? "border-b border-border-subtle" : ""}>
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
