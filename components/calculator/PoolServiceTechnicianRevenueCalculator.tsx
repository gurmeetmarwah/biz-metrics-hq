"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PoolServiceCalculatorFooter } from "@/components/calculator/PoolServiceCalculatorFooter";
import { poolServiceDataLinks } from "@/lib/industries/pool-service-calculators-shared";
import {
  calculateTechnicianRevenue,
  defaultInputs,
  faqs,
  formatCurrency,
  formatNumber,
  poolServiceIndustryAverages,
  productivityBenchmarks,
  relatedTools,
} from "@/lib/industries/pool-service-technician-revenue-calculator";

export function PoolServiceTechnicianRevenueCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateTechnicianRevenue(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Production Inputs</h2>
              <div className="mt-6 space-y-4">
                <CurrencyInput id="revenue" label="Annual Revenue" value={inputs.annualRevenue} onChange={(v) => update("annualRevenue", v)} />
                <label htmlFor="techs" className="block">
                  <span className="text-sm font-medium text-ink-muted">Field Technicians</span>
                  <input id="techs" type="number" min={1} value={inputs.technicians}
                    onChange={(e) => update("technicians", Number(e.target.value) || 1)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <label htmlFor="days" className="block">
                  <span className="text-sm font-medium text-ink-muted">Working Days Per Year</span>
                  <input id="days" type="number" min={1} value={inputs.workingDays}
                    onChange={(e) => update("workingDays", Number(e.target.value) || 1)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <label htmlFor="stops" className="block">
                  <span className="text-sm font-medium text-ink-muted">Stops Per Day</span>
                  <input id="stops" type="number" min={1} value={inputs.stopsPerDay}
                    onChange={(e) => update("stopsPerDay", Number(e.target.value) || 1)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
                <p className="text-sm text-ink-muted">Revenue Per Technician</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">{formatCurrency(result.revenuePerTechnician)}</p>
                <p className="mt-4 text-sm text-ink-muted">Daily Production: {formatCurrency(result.dailyProduction)}</p>
                <p className="mt-1 text-sm text-ink-muted">Revenue Per Stop: {formatCurrency(result.revenuePerStop)}</p>
                <p className="mt-1 text-sm text-ink-muted">Pools Per Week: {formatNumber(result.poolsPerWeek)}</p>
                <p className="mt-4 inline-flex rounded-full border border-accent/25 bg-accent-soft px-4 py-1.5 text-sm font-semibold text-accent">{result.tier} Productivity</p>
                <p className="mt-2 text-xs text-ink-faint">Industry median: {formatCurrency(poolServiceIndustryAverages.revenuePerTechnician)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Productivity Benchmarks</h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {productivityBenchmarks.map((row) => (
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
