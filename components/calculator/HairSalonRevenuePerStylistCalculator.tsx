"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { HairSalonCalculatorFooter } from "@/components/calculator/HairSalonCalculatorFooter";
import {
  calculateRevenuePerStylist,
  defaultInputs,
  faqs,
  formatCurrency,
  hairSalonDataLinks,
  industryBenchmarks,
  relatedTools,
} from "@/lib/industries/hair-salon-revenue-per-stylist-calculator";

export function HairSalonRevenuePerStylistCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateRevenuePerStylist(inputs), [inputs]);
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
                <CurrencyInput id="revenue" label="Annual Service Revenue" value={inputs.annualServiceRevenue} onChange={(v) => update("annualServiceRevenue", v)} />
                <label htmlFor="stylists" className="block">
                  <span className="text-sm font-medium text-ink-muted">Number of Stylists</span>
                  <input id="stylists" type="number" min={1} value={inputs.numberOfStylists}
                    onChange={(e) => update("numberOfStylists", Number(e.target.value) || 1)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Revenue per Stylist</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">{formatCurrency(result.perStylist)}</p>
                <p className="mt-2 text-sm capitalize text-ink-muted">Productivity: {result.status}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Monthly per Stylist</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.monthlyPerStylist)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Weekly per Stylist</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">{formatCurrency(result.weeklyPerStylist)}</p>
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
      <HairSalonCalculatorFooter calculatorId="revenue-per-stylist" relatedTools={relatedTools} dataLinks={hairSalonDataLinks} faqs={faqs} />
    </>
  );
}
