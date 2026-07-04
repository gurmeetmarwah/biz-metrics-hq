"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PoolServiceCalculatorFooter } from "@/components/calculator/PoolServiceCalculatorFooter";
import { poolServiceDataLinks } from "@/lib/industries/pool-service-calculators-shared";
import {
  calculateMrr,
  defaultInputs,
  faqs,
  formatCurrency,
  formatPercent,
  mrrBenchmarks,
  poolServiceIndustryAverages,
  relatedTools,
} from "@/lib/industries/pool-service-monthly-recurring-revenue-calculator";

export function PoolServiceMrrCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateMrr(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Contract Inputs</h2>
              <div className="mt-6 space-y-4">
                <label htmlFor="accounts" className="block">
                  <span className="text-sm font-medium text-ink-muted">Residential Accounts</span>
                  <input id="accounts" type="number" min={0} value={inputs.residentialAccounts}
                    onChange={(e) => update("residentialAccounts", Number(e.target.value) || 0)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <CurrencyInput id="fee" label="Monthly Fee Per Account" value={inputs.monthlyFeePerAccount} onChange={(v) => update("monthlyFeePerAccount", v)} />
                <CurrencyInput id="commercial" label="Commercial Monthly Revenue" value={inputs.commercialMonthlyRevenue} onChange={(v) => update("commercialMonthlyRevenue", v)} />
                <CurrencyInput id="repair" label="Repair Monthly Revenue" value={inputs.repairMonthlyRevenue} onChange={(v) => update("repairMonthlyRevenue", v)} />
                <CurrencyInput id="seasonal" label="Seasonal Monthly Revenue" value={inputs.seasonalMonthlyRevenue} onChange={(v) => update("seasonalMonthlyRevenue", v)} />
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
                <p className="text-sm text-ink-muted">Monthly Recurring Revenue</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">{formatCurrency(result.recurringMrr)}</p>
                <p className="mt-4 text-sm text-ink-muted">Total MRR (incl. repair/seasonal): {formatCurrency(result.totalMrr)}</p>
                <p className="mt-2 text-sm text-ink-muted">Annual Revenue: {formatCurrency(result.annualRevenue)}</p>
                <p className="mt-4 inline-flex rounded-full border border-accent/25 bg-accent-soft px-4 py-1.5 text-sm font-semibold text-accent">{result.tier} Recurring Mix</p>
                <p className="mt-2 text-sm text-ink-muted">Recurring %: {formatPercent(result.recurringPct)} · Median benchmark: {formatCurrency(poolServiceIndustryAverages.monthlyRecurringRevenue)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">MRR Benchmarks</h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {mrrBenchmarks.map((row) => (
              <li key={row.metric} className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-sm text-ink-muted">{row.metric}</p>
                <p className="mt-1 font-bold text-ink">{row.range}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <PoolServiceCalculatorFooter relatedTools={relatedTools} dataLinks={poolServiceDataLinks} faqs={faqs} />
    </>
  );
}
