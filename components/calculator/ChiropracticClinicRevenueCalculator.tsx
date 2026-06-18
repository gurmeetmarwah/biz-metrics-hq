"use client";

import { useMemo, useState } from "react";
import { ChiropracticCalculatorFooter } from "@/components/calculator/ChiropracticCalculatorFooter";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { formatNumber, chiropracticDataLinks } from "@/lib/industries/chiropractic-calculators-shared";
import {
  calculateRevenue,
  defaultInputs,
  faqs,
  formatCurrency,
  productivityBenchmarks,
  relatedTools,
} from "@/lib/industries/chiropractic-clinic-revenue-calculator";

export function ChiropracticClinicRevenueCalculator() {
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
              <h2 className="font-display text-lg font-semibold text-ink">Productivity Inputs</h2>
              <div className="mt-6 space-y-4">
                <label htmlFor="chiropractors" className="block">
                  <span className="text-sm font-medium text-ink-muted">Full-Time Chiropractors</span>
                  <input
                    id="chiropractors"
                    type="number"
                    min={1}
                    max={20}
                    value={inputs.chiropractors}
                    onChange={(e) => update("chiropractors", Number(e.target.value) || 2)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
                  />
                </label>
                <label htmlFor="visits" className="block">
                  <span className="text-sm font-medium text-ink-muted">Visits Per Day (Per Chiropractor)</span>
                  <input
                    id="visits"
                    type="number"
                    min={8}
                    max={50}
                    value={inputs.visitsPerDay}
                    onChange={(e) => update("visitsPerDay", Number(e.target.value) || 24)}
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
                    onChange={(e) => update("workingDays", Number(e.target.value) || 245)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
                  />
                </label>
                <CurrencyInput
                  id="revenuePerVisit"
                  label="Revenue Per Visit"
                  value={inputs.revenuePerVisit}
                  onChange={(v) => update("revenuePerVisit", v)}
                />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2 text-center">
                <p className="text-sm text-ink-muted">Estimated Annual Revenue</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">
                  {formatCurrency(result.annualRevenue)}
                  <span className="text-lg text-ink-muted">/yr</span>
                </p>
                <p className="mt-2 text-sm text-ink-faint">
                  {formatCurrency(result.monthlyRevenue)}/mo · {formatNumber(result.annualVisits, 0)} visits/year
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Revenue Per Chiropractor</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">
                  {formatCurrency(result.revenuePerChiropractor)}/yr
                </p>
                <p className="mt-1 text-xs text-ink-faint">
                  {result.tier} vs benchmark · {formatCurrency(result.vsMedian)} vs median
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Daily Revenue Per Chiropractor</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">
                  {formatCurrency(result.dailyRevenuePerChiropractor)}/day
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-xs text-ink-faint">Daily Clinic Revenue</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">
                  {formatCurrency(result.dailyClinicRevenue)}/day
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Productivity Benchmarks</h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {productivityBenchmarks.map((row) => (
              <li key={row.metric} className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-sm text-ink-muted">{row.metric}</p>
                <p className="mt-1 text-lg font-bold tabular-nums text-accent">{row.range}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ChiropracticCalculatorFooter
        calculatorId="revenue"
        relatedTools={relatedTools}
        dataLinks={chiropracticDataLinks}
        faqs={faqs}
      />
    </>
  );
}
