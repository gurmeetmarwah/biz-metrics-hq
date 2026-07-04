"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PercentInput } from "@/components/ui/PercentInput";
import { PoolServiceCalculatorFooter } from "@/components/calculator/PoolServiceCalculatorFooter";
import { poolServiceDataLinks } from "@/lib/industries/pool-service-calculators-shared";
import {
  calculateCustomerLtv,
  defaultInputs,
  faqs,
  formatCurrency,
  formatPercent,
  ltvBenchmarks,
  relatedTools,
} from "@/lib/industries/pool-service-customer-lifetime-value-calculator";

export function PoolServiceCustomerLifetimeValueCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateCustomerLtv(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Customer Economics</h2>
              <div className="mt-6 space-y-4">
                <CurrencyInput id="contract" label="Monthly Contract Value" value={inputs.monthlyContractValue} onChange={(v) => update("monthlyContractValue", v)} />
                <PercentInput id="retention" label="Annual Retention Rate" value={inputs.retentionRatePct} onChange={(v) => update("retentionRatePct", v)} />
                <CurrencyInput id="upsell" label="Annual Upsell Revenue" value={inputs.annualUpsellRevenue} onChange={(v) => update("annualUpsellRevenue", v)} />
                <CurrencyInput id="cac" label="Customer Acquisition Cost" value={inputs.acquisitionCost} onChange={(v) => update("acquisitionCost", v)} />
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
                <p className="text-sm text-ink-muted">Customer Lifetime Value</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">{formatCurrency(result.lifetimeValue)}</p>
                <p className="mt-4 text-sm text-ink-muted">Avg Lifespan: {result.avgLifespanYears.toFixed(1)} years</p>
                <p className="mt-1 text-sm text-ink-muted">LTV:CAC Ratio: {result.ltvToCacRatio.toFixed(1)}:1</p>
                <p className="mt-4 inline-flex rounded-full border border-accent/25 bg-accent-soft px-4 py-1.5 text-sm font-semibold text-accent">{result.tier} LTV</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">LTV Benchmarks</h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {ltvBenchmarks.map((row) => (
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
