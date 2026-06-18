"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PercentInput } from "@/components/ui/PercentInput";
import { DentalCalculatorFooter } from "@/components/calculator/DentalCalculatorFooter";
import { dentalDataLinks } from "@/lib/industries/dental-calculators-shared";
import {
  calculateBreakEven,
  defaultInputs,
  faqs,
  formatCurrency,
  formatNumber,
  formatPercent,
  industryBenchmarks,
  relatedTools,
} from "@/lib/industries/dental-practice-break-even-calculator";

export function DentalPracticeBreakEvenCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateBreakEven(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Your Numbers</h2>
              <div className="mt-6 space-y-4">
                <CurrencyInput id="fixed" label="Monthly Fixed Costs" value={inputs.fixedCosts} onChange={(v) => update("fixedCosts", v)} tooltip="Admin payroll, rent, insurance, marketing base" />
                <PercentInput id="clinical" label="Clinical Payroll %" value={inputs.clinicalPayrollPct} onChange={(v) => update("clinicalPayrollPct", v)} />
                <PercentInput id="supplies" label="Supplies %" value={inputs.suppliesPct} onChange={(v) => update("suppliesPct", v)} />
                <PercentInput id="other" label="Other Variable %" value={inputs.otherVariablePct} onChange={(v) => update("otherVariablePct", v)} />
                <label htmlFor="days" className="block">
                  <span className="text-sm font-medium text-ink-muted">Working Days Per Month</span>
                  <input id="days" type="number" min={1} max={31} value={inputs.workingDays} onChange={(e) => update("workingDays", Number(e.target.value) || 20)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <CurrencyInput id="current" label="Current Monthly Collections" value={inputs.currentCollections} onChange={(v) => update("currentCollections", v)} />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Break-Even Collections</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-ink">{formatCurrency(result.breakEvenRevenue)}<span className="text-lg text-ink-muted">/mo</span></p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Daily Production Needed</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">{formatCurrency(result.dailyProduction)}/day</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Contribution Margin</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-metric-profit">{formatPercent(result.contributionMarginPct)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Progress to break-even</span>
                  <span className="font-semibold text-accent">{formatPercent(result.progressPct, 0)}</span>
                </div>
                <div className="mt-2 h-3 overflow-hidden rounded-full bg-surface-muted">
                  <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${result.progressPct}%` }} />
                </div>
                <p className="mt-2 text-sm capitalize text-ink-muted">Status: {result.status} break-even</p>
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
                <p className="mt-1 text-lg font-bold tabular-nums text-accent">{row.range}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <DentalCalculatorFooter calculatorId="break-even" relatedTools={relatedTools} dataLinks={dentalDataLinks} faqs={faqs} />
    </>
  );
}
