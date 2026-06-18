"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PercentInput } from "@/components/ui/PercentInput";
import { DentalCalculatorFooter } from "@/components/calculator/DentalCalculatorFooter";
import { dentalDataLinks } from "@/lib/industries/dental-calculators-shared";
import {
  calculateAssociateComp,
  compBenchmarks,
  defaultInputs,
  faqs,
  formatCurrency,
  formatPercent,
  relatedTools,
} from "@/lib/industries/dental-practice-associate-compensation-calculator";

export function DentalPracticeAssociateCompensationCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateAssociateComp(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Compensation Terms</h2>
              <div className="mt-6 space-y-4">
                <CurrencyInput id="production" label="Collected Production (Annual)" value={inputs.collectedProduction} onChange={(v) => update("collectedProduction", v)} />
                <PercentInput id="compPct" label="Compensation %" value={inputs.compensationPct} onChange={(v) => update("compensationPct", v)} />
                <CurrencyInput id="base" label="Base Salary (Annual)" value={inputs.baseSalary} onChange={(v) => update("baseSalary", v)} />
                <label htmlFor="days" className="block">
                  <span className="text-sm font-medium text-ink-muted">Working Days Per Year</span>
                  <input id="days" type="number" min={100} max={260} value={inputs.workingDays} onChange={(e) => update("workingDays", Number(e.target.value) || 200)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <label htmlFor="hours" className="block">
                  <span className="text-sm font-medium text-ink-muted">Clinical Hours Per Day</span>
                  <input id="hours" type="number" min={4} max={12} value={inputs.clinicalHoursPerDay} onChange={(e) => update("clinicalHoursPerDay", Number(e.target.value) || 8)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2 text-center">
                <p className="text-sm text-ink-muted">Total Annual Compensation</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">{formatCurrency(result.totalComp)}</p>
                <p className="mt-2 text-sm text-ink-faint">{result.tier}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Production-Based Pay</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">{formatCurrency(result.productionComp)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Effective Rate</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatPercent(result.effectivePct)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Hourly Rate</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.hourlyRate)}/hr</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Daily Compensation</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.dailyComp)}/day</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Compensation Benchmarks</h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {compBenchmarks.map((row) => (
              <li key={row.model} className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-sm text-ink-muted">{row.model}</p>
                <p className="mt-1 text-lg font-bold tabular-nums text-accent">{row.range}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <DentalCalculatorFooter calculatorId="associate-compensation" relatedTools={relatedTools} dataLinks={dentalDataLinks} faqs={faqs} />
    </>
  );
}
