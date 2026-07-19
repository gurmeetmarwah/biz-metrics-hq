"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PercentInput } from "@/components/ui/PercentInput";
import { DaySpaCalculatorFooter } from "@/components/calculator/DaySpaCalculatorFooter";
import {
  calculateEbitda,
  defaultInputs,
  faqs,
  formatCurrency,
  formatPercent,
  industryBenchmarks,
  daySpaDataLinks,
  relatedTools,
} from "@/lib/industries/day-spa-ebitda-calculator";

export function DaySpaEbitdaCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateEbitda(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Expense Inputs</h2>
              <div className="mt-6 space-y-4">
                <CurrencyInput id="revenue" label="Annual Revenue" value={inputs.revenue} onChange={(v) => update("revenue", v)} />
                <PercentInput id="payroll" label="Payroll %" value={inputs.payrollPct} onChange={(v) => update("payrollPct", v)} />
                <PercentInput id="cogs" label="Product COGS %" value={inputs.productCogsPct} onChange={(v) => update("productCogsPct", v)} />
                <PercentInput id="rent" label="Rent %" value={inputs.rentPct} onChange={(v) => update("rentPct", v)} />
                <PercentInput id="marketing" label="Marketing %" value={inputs.marketingPct} onChange={(v) => update("marketingPct", v)} />
                <PercentInput id="overhead" label="Operating Overhead %" value={inputs.operatingOverheadPct} onChange={(v) => update("operatingOverheadPct", v)} />
                <PercentInput id="depreciation" label="Depreciation % (excluded from EBITDA)" value={inputs.depreciationPct} onChange={(v) => update("depreciationPct", v)} />
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 text-center">
                <p className="text-sm text-ink-muted">EBITDA Margin</p>
                <p className="mt-2 text-4xl font-bold tabular-nums text-metric-profit">{formatPercent(result.ebitdaMargin)}</p>
                <p className="mt-3 text-sm text-ink-muted">EBITDA: {formatCurrency(result.ebitda)}</p>
                <p className="mt-2 text-xs capitalize text-ink-faint">
                  {result.vsMedian >= 0 ? "+" : ""}{formatPercent(result.vsMedian)} vs industry median · {result.status}
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
              <div className="mt-4 rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Net Profit (after D&A)</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.netProfit)}</p>
                <p className="mt-1 text-sm text-ink-muted">Net margin: {formatPercent(result.netMargin)}</p>
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
      <DaySpaCalculatorFooter calculatorId="ebitda" relatedTools={relatedTools} dataLinks={daySpaDataLinks} faqs={faqs} />
    </>
  );
}
