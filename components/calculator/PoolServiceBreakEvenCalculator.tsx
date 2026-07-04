"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PercentInput } from "@/components/ui/PercentInput";
import { PoolServiceCalculatorFooter } from "@/components/calculator/PoolServiceCalculatorFooter";
import { poolServiceDataLinks } from "@/lib/industries/pool-service-calculators-shared";
import {
  calculateBreakEven,
  defaultInputs,
  faqs,
  formatCurrency,
  formatNumber,
  formatPercent,
  industryBenchmarks,
  relatedTools,
} from "@/lib/industries/pool-service-break-even-calculator";

export function PoolServiceBreakEvenCalculator() {
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
              <h2 className="font-display text-lg font-semibold text-ink">Monthly Costs</h2>
              <div className="mt-6 space-y-4">
                <CurrencyInput id="fixed" label="Monthly Fixed Costs" value={inputs.fixedCosts} onChange={(v) => update("fixedCosts", v)} />
                <CurrencyInput id="contract" label="Average Monthly Contract" value={inputs.averageMonthlyContract} onChange={(v) => update("averageMonthlyContract", v)} />
                <PercentInput id="labor" label="Labor %" value={inputs.laborPct} onChange={(v) => update("laborPct", v)} />
                <PercentInput id="chemicals" label="Chemicals %" value={inputs.chemicalsPct} onChange={(v) => update("chemicalsPct", v)} />
                <PercentInput id="other" label="Other Variable %" value={inputs.otherVariablePct} onChange={(v) => update("otherVariablePct", v)} />
                <CurrencyInput id="current" label="Current Monthly Revenue" value={inputs.currentRevenue} onChange={(v) => update("currentRevenue", v)} />
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
                <p className="text-sm text-ink-muted">Break-Even Monthly Revenue</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-accent">{formatCurrency(result.breakEvenRevenue)}</p>
                <p className="mt-4 text-sm text-ink-muted">Contracts Needed: {formatNumber(Math.ceil(result.contractsNeeded))}</p>
                <p className="mt-1 text-sm text-ink-muted">Contribution Margin: {formatPercent(result.contributionMarginPct)}</p>
                <p className="mt-1 text-sm text-ink-muted">Progress: {formatPercent(result.progressPct, 0)}</p>
                <p className="mt-4 inline-flex rounded-full border border-accent/25 bg-accent-soft px-4 py-1.5 text-sm font-semibold text-accent capitalize">{result.safetyStatus}</p>
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
      <PoolServiceCalculatorFooter relatedTools={relatedTools} dataLinks={poolServiceDataLinks} faqs={faqs} />
    </>
  );
}
