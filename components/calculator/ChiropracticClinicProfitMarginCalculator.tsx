"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { ChiropracticCalculatorFooter } from "@/components/calculator/ChiropracticCalculatorFooter";
import { chiropracticDataLinks } from "@/lib/industries/chiropractic-calculators-shared";
import {
  calculateProfitMargin,
  defaultInputs,
  expenseBenchmarks,
  faqs,
  formatCurrency,
  formatPercent,
  relatedTools,
} from "@/lib/industries/chiropractic-clinic-profit-margin-calculator";

export function ChiropracticClinicProfitMarginCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateProfitMargin(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Clinic Expenses</h2>
              <div className="mt-6 space-y-4">
                <CurrencyInput id="revenue" label="Annual Revenue" value={inputs.revenue} onChange={(v) => update("revenue", v)} />
                <CurrencyInput id="chiropractor" label="Chiropractor Payroll" value={inputs.chiropractorPayroll} onChange={(v) => update("chiropractorPayroll", v)} />
                <CurrencyInput id="admin" label="Admin Staff" value={inputs.admin} onChange={(v) => update("admin", v)} />
                <CurrencyInput id="marketing" label="Marketing" value={inputs.marketing} onChange={(v) => update("marketing", v)} />
                <CurrencyInput id="rent" label="Facility Rent" value={inputs.rent} onChange={(v) => update("rent", v)} />
                <CurrencyInput id="other" label="Other Overhead" value={inputs.otherOverhead} onChange={(v) => update("otherOverhead", v)} />
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 text-center">
                <p className="text-sm text-ink-muted">Net Profit Margin</p>
                <p className="mt-2 text-4xl font-bold tabular-nums text-metric-profit">{formatPercent(result.netProfitMarginPct)}</p>
                <p className="mt-3 text-sm text-ink-muted">Net Profit: {formatCurrency(result.netProfit)}</p>
                <p className="mt-2 text-xs capitalize text-ink-faint">
                  {result.vsMedian >= 0 ? "+" : ""}{formatPercent(result.vsMedian)} vs industry median - {result.status}
                </p>
              </div>
              <div className="mt-4 space-y-2">
                {result.expenseBreakdown.map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3">
                    <span className="text-sm text-ink-muted">{item.label}</span>
                    <span className="text-sm font-semibold tabular-nums text-ink">{formatPercent(item.pct)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Expense Benchmarks</h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {expenseBenchmarks.map((row) => (
              <li key={row.category} className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-sm text-ink-muted">{row.category}</p>
                <p className="mt-1 text-lg font-bold tabular-nums text-accent">{row.range}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ChiropracticCalculatorFooter calculatorId="profit-margin" relatedTools={relatedTools} dataLinks={chiropracticDataLinks} faqs={faqs} />
    </>
  );
}
