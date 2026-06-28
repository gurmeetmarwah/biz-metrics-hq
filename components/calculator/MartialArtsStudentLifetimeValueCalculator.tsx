"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PercentInput } from "@/components/ui/PercentInput";
import { MartialArtsCalculatorFooter } from "@/components/calculator/MartialArtsCalculatorFooter";
import { martialArtsDataLinks } from "@/lib/industries/martial-arts-calculators-shared";
import {
  calculateStudentLtv,
  defaultInputs,
  faqs,
  formatCurrency,
  formatPercent,
  ltvBenchmarks,
  martialArtsIndustryAverages,
  relatedTools,
} from "@/lib/industries/martial-arts-student-lifetime-value-calculator";

export function MartialArtsStudentLifetimeValueCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateStudentLtv(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Student Economics</h2>
              <p className="mt-1 text-sm text-ink-muted">Model LTV from revenue per student and churn.</p>
              <div className="mt-6 space-y-4">
                <CurrencyInput
                  id="rps"
                  label="Monthly Revenue Per Student"
                  value={inputs.monthlyRevenuePerStudent}
                  onChange={(v) => update("monthlyRevenuePerStudent", v)}
                />
                <PercentInput
                  id="churn"
                  label="Monthly Churn Rate"
                  value={inputs.monthlyChurnPct}
                  onChange={(v) => update("monthlyChurnPct", v)}
                />
                <CurrencyInput
                  id="cac"
                  label="Customer Acquisition Cost"
                  value={inputs.acquisitionCost}
                  onChange={(v) => update("acquisitionCost", v)}
                />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2 text-center">
                <p className="text-sm text-ink-muted">Student Lifetime Value</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-valuation">
                  {formatCurrency(result.lifetimeValue)}
                </p>
                <p className="mt-2 text-sm text-ink-faint">
                  {result.tier} vs benchmark · {formatCurrency(result.vsBenchmark)} vs ~{formatCurrency(martialArtsIndustryAverages.studentLtv)} median
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Avg. Student Lifespan</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">{result.avgLifespanMonths.toFixed(1)} mo</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Implied Annual Retention</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatPercent(result.annualRetentionPct, 1)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">LTV-to-CAC Ratio</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-metric-revenue">{result.ltvToCacRatio.toFixed(1)}x</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">CAC Payback Health</p>
                <p className="mt-1 text-2xl font-bold text-ink">{result.cacTier}</p>
              </div>
              <div className="rounded-2xl border border-accent/25 bg-accent-soft/30 p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Industry Benchmark</p>
                <p className="mt-1 font-semibold text-ink">$3,800 – $6,200 typical LTV · 3:1+ LTV:CAC target</p>
                <p className="mt-1 text-xs text-ink-faint">~{formatCurrency(martialArtsIndustryAverages.revenuePerStudentMonthly)}/mo revenue per student</p>
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

      <MartialArtsCalculatorFooter relatedTools={relatedTools} dataLinks={martialArtsDataLinks} faqs={faqs} />
    </>
  );
}
