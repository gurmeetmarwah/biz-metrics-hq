"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { NailSalonCalculatorFooter } from "@/components/calculator/NailSalonCalculatorFooter";
import {
  calculateUtilization,
  defaultInputs,
  faqs,
  formatCurrency,
  formatNumber,
  formatPercent,
  industryBenchmarks,
  nailSalonDataLinks,
  relatedTools,
} from "@/lib/industries/nail-salon-station-utilization-calculator";

export function NailSalonStationUtilizationCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateUtilization(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  const numberField = (id: string, label: string, key: keyof typeof inputs, min = 1) => (
    <label htmlFor={id} className="block">
      <span className="text-sm font-medium text-ink-muted">{label}</span>
      <input
        id={id}
        type="number"
        min={min}
        value={inputs[key]}
        onChange={(e) => update(key, (Number(e.target.value) || 0) as (typeof inputs)[typeof key])}
        className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
      />
    </label>
  );

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Utilization Inputs</h2>
              <div className="mt-6 space-y-4">
                {numberField("stations", "Number of Stations", "stations")}
                {numberField("available", "Available Hours / Station / Week", "availableHoursPerStationPerWeek")}
                {numberField("booked", "Booked Hours / Station / Week", "bookedHoursPerStationPerWeek", 0)}
                <CurrencyInput id="revhour" label="Revenue per Booked Hour" value={inputs.revenuePerBookedHour} onChange={(v) => update("revenuePerBookedHour", v)} />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Station Utilization</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">{formatPercent(result.utilization)}</p>
                <p className="mt-2 text-sm capitalize text-ink-muted">Status: {result.status}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Booked Station Hours / Week</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatNumber(result.bookedStationHours)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Idle Hours / Week</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">{formatNumber(result.idleHours)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Annual Revenue</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.annualRevenue)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Upside at 82% Utilization</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.annualRevenueUpside)}</p>
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
      <NailSalonCalculatorFooter calculatorId="station-utilization" relatedTools={relatedTools} dataLinks={nailSalonDataLinks} faqs={faqs} />
    </>
  );
}
