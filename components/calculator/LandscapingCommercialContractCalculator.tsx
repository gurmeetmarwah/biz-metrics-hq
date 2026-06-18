"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { LandscapingCalculatorFooter } from "@/components/calculator/LandscapingCalculatorFooter";
import { landscapingDataLinks } from "@/lib/industries/landscaping-calculators-shared";
import {
  calculateCommercialContracts,
  contractBenchmarks,
  defaultInputs,
  faqs,
  formatCurrency,
  formatPercent,
  landscapingIndustryAverages,
  relatedTools,
} from "@/lib/industries/landscaping-commercial-contract-calculator";

export function LandscapingCommercialContractCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateCommercialContracts(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Contract Inputs</h2>
              <p className="mt-1 text-sm text-ink-muted">Model recurring revenue from your contract book.</p>
              <div className="mt-6 space-y-4">
                <label htmlFor="accounts" className="block">
                  <span className="text-sm font-medium text-ink-muted">Commercial Accounts</span>
                  <input id="accounts" type="number" min={0} max={200} value={inputs.commercialAccounts}
                    onChange={(e) => update("commercialAccounts", Number(e.target.value) || 0)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <CurrencyInput id="commercial" label="Monthly Revenue Per Account" value={inputs.monthlyRevenuePerAccount}
                  onChange={(v) => update("monthlyRevenuePerAccount", v)} />
                <CurrencyInput id="residential" label="Residential Monthly Revenue (Total)" value={inputs.residentialMonthlyRevenue}
                  onChange={(v) => update("residentialMonthlyRevenue", v)} />
                <CurrencyInput id="project" label="Project Monthly Revenue (Total)" value={inputs.projectMonthlyRevenue}
                  onChange={(v) => update("projectMonthlyRevenue", v)} />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2 text-center">
                <p className="text-sm text-ink-muted">Estimated Annual Revenue</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">
                  {formatCurrency(result.estimatedAnnualRevenue)}
                </p>
                <p className="mt-2 text-sm text-ink-faint">
                  {result.tier} recurring mix · {formatPercent(result.recurringPct, 0)} maintenance revenue
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Annual Commercial Revenue</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">{formatCurrency(result.annualCommercialRevenue)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Recurring Revenue %</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatPercent(result.recurringPct, 0)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Commercial Share of Revenue</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatPercent(result.commercialPct, 0)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Monthly Commercial Revenue</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.monthlyCommercialRevenue)}</p>
              </div>
              <div className="rounded-2xl border border-accent/25 bg-accent-soft/30 p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Industry Benchmark</p>
                <p className="mt-1 font-semibold text-ink">{landscapingIndustryAverages.maintenanceRevenuePct}% median maintenance revenue</p>
                <p className="mt-1 text-xs text-ink-faint">
                  {result.vsBenchmark >= 0 ? "+" : ""}{result.vsBenchmark.toFixed(0)} pts vs benchmark · 280+ Landscaping businesses
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Commercial Contract Benchmarks</h2>
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
                {contractBenchmarks.map((row, i) => (
                  <tr key={row.metric} className={i < contractBenchmarks.length - 1 ? "border-b border-border-subtle" : ""}>
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
