"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PoolServiceCalculatorFooter } from "@/components/calculator/PoolServiceCalculatorFooter";
import { poolServiceDataLinks } from "@/lib/industries/pool-service-calculators-shared";
import {
  calculateRouteProfitability,
  defaultInputs,
  faqs,
  formatCurrency,
  formatPercent,
  routeBenchmarks,
  relatedTools,
} from "@/lib/industries/pool-service-route-profitability-calculator";

export function PoolServiceRouteProfitabilityCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateRouteProfitability(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Route Inputs</h2>
              <div className="mt-6 space-y-4">
                <label htmlFor="stops" className="block">
                  <span className="text-sm font-medium text-ink-muted">Stops Per Day</span>
                  <input id="stops" type="number" min={1} value={inputs.stopsPerDay}
                    onChange={(e) => update("stopsPerDay", Number(e.target.value) || 1)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <label htmlFor="days" className="block">
                  <span className="text-sm font-medium text-ink-muted">Working Days Per Month</span>
                  <input id="days" type="number" min={1} value={inputs.workingDays}
                    onChange={(e) => update("workingDays", Number(e.target.value) || 1)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <CurrencyInput id="ticket" label="Average Ticket Per Stop" value={inputs.averageTicket} onChange={(v) => update("averageTicket", v)} />
                <CurrencyInput id="labor" label="Labor Cost Per Stop" value={inputs.laborCostPerStop} onChange={(v) => update("laborCostPerStop", v)} />
                <CurrencyInput id="chem" label="Chemical Cost Per Stop" value={inputs.chemicalCostPerStop} onChange={(v) => update("chemicalCostPerStop", v)} />
                <CurrencyInput id="fleet" label="Fleet Cost Per Month" value={inputs.fleetCostPerMonth} onChange={(v) => update("fleetCostPerMonth", v)} />
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
                <p className="text-sm text-ink-muted">Monthly Route Revenue</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">{formatCurrency(result.monthlyRevenue)}</p>
                <p className="mt-4 text-sm text-ink-muted">Monthly Gross Profit: {formatCurrency(result.monthlyGrossProfit)}</p>
                <p className="mt-1 text-sm text-ink-muted">Gross Margin: {formatPercent(result.grossMarginPct)}</p>
                <p className="mt-1 text-sm text-ink-muted">Annual Gross Profit: {formatCurrency(result.annualGrossProfit)}</p>
                <p className="mt-4 inline-flex rounded-full border border-accent/25 bg-accent-soft px-4 py-1.5 text-sm font-semibold text-accent">{result.tier} Route</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Route Benchmarks</h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {routeBenchmarks.map((row) => (
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
