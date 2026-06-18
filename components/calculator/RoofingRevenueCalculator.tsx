"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { RoofingCalculatorFooter } from "@/components/calculator/RoofingCalculatorFooter";
import { roofingDataLinks } from "@/lib/industries/roofing-calculators-shared";
import {
  calculateRoofingRevenue,
  defaultInputs,
  faqs,
  formatCurrency,
  formatNumber,
  roofingIndustryAverages,
  revenueBenchmarks,
  relatedTools,
} from "@/lib/industries/roofing-revenue-calculator";

export function RoofingRevenueCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateRoofingRevenue(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Capacity Inputs</h2>
              <p className="mt-1 text-sm text-ink-muted">Estimate revenue from crew capacity and project mix.</p>
              <div className="mt-6 space-y-4">
                <label htmlFor="crews" className="block">
                  <span className="text-sm font-medium text-ink-muted">Install Crews</span>
                  <input
                    id="crews"
                    type="number"
                    min={1}
                    max={20}
                    value={inputs.installCrews}
                    onChange={(e) => update("installCrews", Number(e.target.value) || 4)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
                  />
                </label>
                <label htmlFor="installs" className="block">
                  <span className="text-sm font-medium text-ink-muted">Installs Per Crew Per Month</span>
                  <input
                    id="installs"
                    type="number"
                    min={1}
                    max={15}
                    step={0.5}
                    value={inputs.installsPerCrewPerMonth}
                    onChange={(e) => update("installsPerCrewPerMonth", Number(e.target.value) || 5)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
                  />
                </label>
                <CurrencyInput
                  id="ticket"
                  label="Average Install Ticket"
                  value={inputs.averageInstallTicket}
                  onChange={(v) => update("averageInstallTicket", v)}
                />
                <CurrencyInput
                  id="repair"
                  label="Monthly Repair Revenue (Total)"
                  value={inputs.monthlyRepairRevenue}
                  onChange={(v) => update("monthlyRepairRevenue", v)}
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
                <p className="text-xs text-ink-faint">Monthly Install Revenue</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">
                  {formatCurrency(result.monthlyInstallRevenue)}
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-xs text-ink-faint">Total Annual Installs</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">
                  {formatNumber(result.annualInstalls, 0)}
                </p>
              </div>
              <div className="rounded-2xl border border-accent/25 bg-accent-soft/30 p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Industry Benchmark</p>
                <p className="mt-1 font-semibold text-ink">
                  {roofingIndustryAverages.revenuePerCrewRange}
                </p>
                <p className="mt-1 text-xs text-ink-faint">
                  Median {formatCurrency(roofingIndustryAverages.revenue)} company revenue · 310+ Roofing businesses
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Roofing Revenue Benchmarks</h2>
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

      <RoofingCalculatorFooter relatedTools={relatedTools} dataLinks={roofingDataLinks} faqs={faqs} />
    </>
  );
}
