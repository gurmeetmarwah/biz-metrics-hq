"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PercentInput } from "@/components/ui/PercentInput";
import { MedicalSpaCalculatorFooter } from "@/components/calculator/MedicalSpaCalculatorFooter";
import {
  calculateProfit,
  defaultInputs,
  faqs,
  formatCurrency,
  formatPercent,
  industryBenchmarks,
  medicalSpaDataLinks,
  relatedTools,
} from "@/lib/industries/medical-spa-profit-margin-calculator";

export function MedicalSpaProfitMarginCalculator() {
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
                <PercentInput id="payroll" label="Payroll %" value={inputs.payrollPct} onChange={(v) => update("payrollPct", v)} />
                <PercentInput id="cogs" label="Supplies COGS %" value={inputs.suppliesCogsPct} onChange={(v) => update("suppliesCogsPct", v)} />
                <PercentInput id="rent" label="Rent %" value={inputs.rentPct} onChange={(v) => update("rentPct", v)} />
                <PercentInput id="marketing" label="Marketing %" value={inputs.marketingPct} onChange={(v) => update("marketingPct", v)} />
                <PercentInput id="overhead" label="Other Overhead %" value={inputs.overheadPct} onChange={(v) => update("overheadPct", v)} />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Net Profit</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">{formatCurrency(result.netProfit)}</p>
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
                <p className="text-xs text-ink-faint">Payroll</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.payroll)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Total Costs</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.totalCosts)}</p>
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
      <MedicalSpaCalculatorFooter calculatorId="profit-margin" relatedTools={relatedTools} dataLinks={medicalSpaDataLinks} faqs={faqs} />
    </>
  );
}
