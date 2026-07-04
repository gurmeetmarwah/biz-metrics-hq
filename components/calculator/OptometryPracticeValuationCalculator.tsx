"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PercentInput } from "@/components/ui/PercentInput";
import { OptometryCalculatorFooter } from "@/components/calculator/OptometryCalculatorFooter";
import {
  calculateValuation,
  defaultInputs,
  faqs,
  formatCurrency,
  formatMultiple,
  multipleRanges,
  optometryDataLinks,
  relatedTools,
} from "@/lib/industries/optometry-practice-valuation-calculator";

export function OptometryPracticeValuationCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateValuation(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Practice Financials</h2>
              <div className="mt-6 space-y-4">
                <CurrencyInput id="revenue" label="Annual Revenue" value={inputs.revenue} onChange={(v) => update("revenue", v)} />
                <CurrencyInput id="ebitda" label="EBITDA" value={inputs.ebitda} onChange={(v) => update("ebitda", v)} />
                <PercentInput id="optical" label="Optical Revenue %" value={inputs.opticalRevenuePct} onChange={(v) => update("opticalRevenuePct", v)} />
                <label htmlFor="multiple" className="block">
                  <span className="text-sm font-medium text-ink-muted">EBITDA Multiple</span>
                  <input id="multiple" type="number" min={1} max={10} step={0.05} value={inputs.ebitdaMultiple}
                    onChange={(e) => update("ebitdaMultiple", Number(e.target.value) || 5.2)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 text-center">
                <p className="text-sm text-ink-muted">Estimated Value</p>
                <p className="mt-2 text-4xl font-bold tabular-nums text-metric-valuation">{formatCurrency(result.recommendedValue)}</p>
                <p className="mt-3 text-sm text-ink-muted">Range: {formatCurrency(result.valueLow)} – {formatCurrency(result.valueHigh)}</p>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-border bg-surface p-4 text-center">
                  <p className="text-xs text-ink-faint">EBITDA Margin</p>
                  <p className="mt-1 font-bold tabular-nums text-ink">{result.ebitdaMargin.toFixed(1)}%</p>
                </div>
                <div className="rounded-xl border border-border bg-surface p-4 text-center">
                  <p className="text-xs text-ink-faint">Revenue-Based Value</p>
                  <p className="mt-1 font-bold tabular-nums text-ink">{formatCurrency(result.revenueValue)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Industry Multiples</h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {multipleRanges.map((row) => (
              <li key={row.label} className="rounded-2xl border border-border bg-surface p-5 text-center">
                <p className="text-sm text-ink-muted">{row.label}</p>
                <p className="mt-2 text-xl font-bold tabular-nums text-accent">{row.range}</p>
                {"median" in row && typeof row.median === "number" && row.median > 1 && (
                  <p className="mt-1 text-xs text-ink-faint">Median {formatMultiple(row.median)}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <OptometryCalculatorFooter calculatorId="valuation" relatedTools={relatedTools} dataLinks={optometryDataLinks} faqs={faqs} />
    </>
  );
}
