"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PercentInput } from "@/components/ui/PercentInput";
import { PestControlCalculatorFooter } from "@/components/calculator/PestControlCalculatorFooter";
import { pestControlDataLinks } from "@/lib/industries/pest-control-calculators-shared";
import {
  calculateCustomerLtv,
  defaultInputs,
  faqs,
  formatCurrency,
  formatPercent,
  ltvBenchmarks,
  pestControlIndustryAverages,
  relatedTools,
} from "@/lib/industries/pest-control-customer-lifetime-value-calculator";

export function PestControlCustomerLifetimeValueCalculator() {
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
              <p className="mt-1 text-sm text-ink-muted">Model lifetime value from contract and retention data.</p>
              <div className="mt-6 space-y-4">
                <CurrencyInput id="acv" label="Annual Contract Value" value={inputs.annualContractValue}
                  onChange={(v) => update("annualContractValue", v)} />
                <PercentInput id="retention" label="Retention Rate" value={inputs.retentionRatePct}
                  onChange={(v) => update("retentionRatePct", v)} />
                <CurrencyInput id="upsell" label="Annual Upsell Revenue" value={inputs.annualUpsellRevenue}
                  onChange={(v) => update("annualUpsellRevenue", v)} />
                <CurrencyInput id="cac" label="Customer Acquisition Cost" value={inputs.acquisitionCost}
                  onChange={(v) => update("acquisitionCost", v)} />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2 text-center">
                <p className="text-sm text-ink-muted">Customer Lifetime Value</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-valuation">
                  {formatCurrency(result.lifetimeValue)}
                </p>
                <p className="mt-2 text-sm text-ink-faint">
                  {result.tier} vs benchmark · {formatCurrency(result.vsBenchmark)} vs median
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Annual Customer Value</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">{formatCurrency(result.annualValue)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Avg. Customer Lifespan</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{result.avgLifespanYears.toFixed(1)} yrs</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Retention Rate</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatPercent(inputs.retentionRatePct, 0)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">LTV-to-CAC Ratio</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-metric-revenue">{result.ltvToCacRatio.toFixed(1)}x</p>
              </div>
              <div className="rounded-2xl border border-accent/25 bg-accent-soft/30 p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Industry Benchmark</p>
                <p className="mt-1 font-semibold text-ink">$1,500 – $4,000 median LTV</p>
                <p className="mt-1 text-xs text-ink-faint">Median {formatCurrency(pestControlIndustryAverages.customerLtv)} · 82–88% retention target</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">LTV Benchmarks</h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink">Metric</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink">Industry Range</th>
                </tr>
              </thead>
              <tbody>
                {ltvBenchmarks.map((row, i) => (
                  <tr key={row.metric} className={i < ltvBenchmarks.length - 1 ? "border-b border-border-subtle" : ""}>
                    <td className="px-5 py-4 text-ink-muted">{row.metric}</td>
                    <td className="px-5 py-4 text-right font-semibold text-ink">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <PestControlCalculatorFooter relatedTools={relatedTools} dataLinks={pestControlDataLinks} faqs={faqs} />
    </>
  );
}
