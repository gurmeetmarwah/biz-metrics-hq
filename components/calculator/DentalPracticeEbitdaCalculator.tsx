"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { DentalCalculatorFooter } from "@/components/calculator/DentalCalculatorFooter";
import { dentalDataLinks } from "@/lib/industries/dental-calculators-shared";
import {
  calculateEbitda,
  defaultInputs,
  expenseBenchmarks,
  faqs,
  formatCurrency,
  formatPercent,
  relatedTools,
} from "@/lib/industries/dental-practice-ebitda-calculator";

export function DentalPracticeEbitdaCalculator() {
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
              <h2 className="font-display text-lg font-semibold text-ink">Practice Expenses</h2>
              <div className="mt-6 space-y-4">
                <CurrencyInput id="collections" label="Annual Collections" value={inputs.collections} onChange={(v) => update("collections", v)} />
                <CurrencyInput id="clinical" label="Clinical Payroll" value={inputs.clinicalPayroll} onChange={(v) => update("clinicalPayroll", v)} />
                <CurrencyInput id="supplies" label="Dental Supplies" value={inputs.supplies} onChange={(v) => update("supplies", v)} />
                <CurrencyInput id="admin" label="Admin Payroll" value={inputs.adminPayroll} onChange={(v) => update("adminPayroll", v)} />
                <CurrencyInput id="facility" label="Facility & Rent" value={inputs.facilityRent} onChange={(v) => update("facilityRent", v)} />
                <CurrencyInput id="other" label="Other Overhead" value={inputs.otherOverhead} onChange={(v) => update("otherOverhead", v)} />
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 text-center">
                <p className="text-sm text-ink-muted">EBITDA Margin</p>
                <p className="mt-2 text-4xl font-bold tabular-nums text-metric-profit">{formatPercent(result.ebitdaMarginPct)}</p>
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
      <DentalCalculatorFooter calculatorId="ebitda" relatedTools={relatedTools} dataLinks={dentalDataLinks} faqs={faqs} />
    </>
  );
}
