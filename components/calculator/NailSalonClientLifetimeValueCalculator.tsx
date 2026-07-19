"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PercentInput } from "@/components/ui/PercentInput";
import { NailSalonCalculatorFooter } from "@/components/calculator/NailSalonCalculatorFooter";
import {
  calculateClv,
  defaultInputs,
  faqs,
  formatCurrency,
  formatPercent,
  industryBenchmarks,
  nailSalonDataLinks,
  relatedTools,
} from "@/lib/industries/nail-salon-client-lifetime-value-calculator";

export function NailSalonClientLifetimeValueCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateClv(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">CLV Inputs</h2>
              <div className="mt-6 space-y-4">
                <CurrencyInput id="ticket" label="Average Ticket" value={inputs.averageTicket} onChange={(v) => update("averageTicket", v)} />
                <label htmlFor="visits" className="block">
                  <span className="text-sm font-medium text-ink-muted">Visits per Year</span>
                  <input id="visits" type="number" min={1} value={inputs.visitsPerYear}
                    onChange={(e) => update("visitsPerYear", Number(e.target.value) || 1)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <label htmlFor="lifespan" className="block">
                  <span className="text-sm font-medium text-ink-muted">Client Lifespan (Years)</span>
                  <input id="lifespan" type="number" min={1} step={0.5} value={inputs.clientLifespanYears}
                    onChange={(e) => update("clientLifespanYears", Number(e.target.value) || 1)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <PercentInput id="margin" label="Gross Margin %" value={inputs.grossMarginPct} onChange={(v) => update("grossMarginPct", v)} />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Client Lifetime Value</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">{formatCurrency(result.lifetimeRevenue)}</p>
                <p className="mt-2 text-sm capitalize text-ink-muted">Status: {result.status}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Annual Value per Client</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.annualValuePerClient)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Monthly Value per Client</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">{formatCurrency(result.monthlyValuePerClient)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-xs text-ink-faint">Lifetime Gross Profit</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.lifetimeGrossProfit)}</p>
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
      <NailSalonCalculatorFooter calculatorId="client-lifetime-value" relatedTools={relatedTools} dataLinks={nailSalonDataLinks} faqs={faqs} />
    </>
  );
}
