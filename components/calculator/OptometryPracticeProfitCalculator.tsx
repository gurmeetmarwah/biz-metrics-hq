"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PercentInput } from "@/components/ui/PercentInput";
import { OptometryCalculatorFooter } from "@/components/calculator/OptometryCalculatorFooter";
import {
  calculateProfit,
  defaultInputs,
  faqs,
  formatCurrency,
  formatPercent,
  industryBenchmarks,
  optometryDataLinks,
  relatedTools,
} from "@/lib/industries/optometry-practice-profit-calculator";

export function OptometryPracticeProfitCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateProfit(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">P&L Inputs</h2>
              <div className="mt-6 space-y-4">
                <CurrencyInput id="revenue" label="Annual Revenue" value={inputs.revenue} onChange={(v) => update("revenue", v)} />
                <PercentInput id="exam" label="Exam Revenue %" value={inputs.examRevenuePct} onChange={(v) => update("examRevenuePct", v)} />
                <PercentInput id="opticalCogs" label="Optical COGS %" value={inputs.opticalCogsPct} onChange={(v) => update("opticalCogsPct", v)} />
                <PercentInput id="contactCogs" label="Contact Lens COGS %" value={inputs.contactLensCogsPct} onChange={(v) => update("contactLensCogsPct", v)} />
                <PercentInput id="payroll" label="Payroll %" value={inputs.payrollPct} onChange={(v) => update("payrollPct", v)} />
                <PercentInput id="overhead" label="Overhead %" value={inputs.overheadPct} onChange={(v) => update("overheadPct", v)} />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Net Profit</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-profit">{formatCurrency(result.netProfit)}</p>
                <p className="mt-2 text-sm capitalize text-ink-muted">Margin status: {result.status}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Net Margin</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">{formatPercent(result.netMargin)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Gross Margin</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatPercent(result.grossMargin)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Total COGS</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.totalCogs)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Payroll</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.payroll)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Industry Benchmarks</h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {industryBenchmarks.map((row) => (
              <li key={row.metric} className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-sm text-ink-muted">{row.metric}</p>
                <p className="mt-1 font-bold text-ink">{row.range}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <OptometryCalculatorFooter calculatorId="profit" relatedTools={relatedTools} dataLinks={optometryDataLinks} faqs={faqs} />
    </>
  );
}
