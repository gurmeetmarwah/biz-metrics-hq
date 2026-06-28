"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { CrossFitCalculatorFooter, CrossFitNumberInput } from "@/components/calculator/CrossFitCalculatorFooter";
import { formatPercent, crossfitDataLinks } from "@/lib/industries/crossfit-calculators-shared";
import {
  calculateCoachProductivity,
  defaultInputs,
  faqs,
  formatCurrency,
  crossfitIndustryAverages,
  productivityBenchmarks,
  relatedTools,
} from "@/lib/industries/crossfit-coach-productivity-calculator";

export function CrossFitCoachProductivityCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateCoachProductivity(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Coach Schedule</h2>
              <p className="mt-1 text-sm text-ink-muted">Model revenue per coach from classes and personal training.</p>
              <div className="mt-6 space-y-4">
                <CrossFitNumberInput
                  id="coachs"
                  label="Coach Count"
                  value={inputs.coachCount}
                  onChange={(v) => update("coachCount", v)}
                  max={50}
                />
                <CrossFitNumberInput
                  id="classes"
                  label="Group Classes Per Coach / Week"
                  value={inputs.classesPerCoachPerWeek}
                  onChange={(v) => update("classesPerCoachPerWeek", v)}
                  max={40}
                />
                <CrossFitNumberInput
                  id="ptSessions"
                  label="PT Sessions Per Coach / Week"
                  value={inputs.ptSessionsPerCoachPerWeek}
                  onChange={(v) => update("ptSessionsPerCoachPerWeek", v)}
                  max={40}
                />
                <CurrencyInput
                  id="group-rev"
                  label="Avg Group Class Revenue"
                  value={inputs.avgGroupClassRevenue}
                  onChange={(v) => update("avgGroupClassRevenue", v)}
                />
                <CurrencyInput
                  id="private-rev"
                  label="Avg PT Session Revenue"
                  value={inputs.avgPtSessionRevenue}
                  onChange={(v) => update("avgPtSessionRevenue", v)}
                />
                <CrossFitNumberInput
                  id="hours"
                  label="Coaching Hours Per Week"
                  value={inputs.coachingHoursPerWeek}
                  onChange={(v) => update("coachingHoursPerWeek", v)}
                  max={50}
                />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2 text-center">
                <p className="text-sm text-ink-muted">Annual Revenue Per Coach</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">
                  {formatCurrency(result.annualRevenuePerCoach)}
                </p>
                <p className="mt-2 text-sm text-ink-faint">
                  {result.tier} vs benchmark · {formatCurrency(result.totalAnnualRevenue)} total box revenue
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Weekly Revenue / Coach</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">{formatCurrency(result.weeklyRevenuePerCoach)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Revenue Per Coaching Hour</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.revenuePerCoachingHour)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Utilization</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatPercent(result.utilizationPct, 0)}</p>
              </div>
              <div className="rounded-2xl border border-accent/25 bg-accent-soft/30 p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Industry Benchmark</p>
                <p className="mt-1 font-semibold text-ink">$95K – $165K revenue per coach annually</p>
                <p className="mt-1 text-xs text-ink-faint">
                  {result.vsBenchmark >= 0 ? "+" : ""}
                  {formatCurrency(result.vsBenchmark)} vs ~{formatCurrency(crossfitIndustryAverages.revenuePerCoachAnnual)} median
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Productivity Benchmarks</h2>
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
                {productivityBenchmarks.map((row, i) => (
                  <tr key={row.metric} className={i < productivityBenchmarks.length - 1 ? "border-b border-border-subtle" : ""}>
                    <td className="px-5 py-4 text-ink-muted">{row.metric}</td>
                    <td className="px-5 py-4 text-right font-semibold text-ink">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CrossFitCalculatorFooter relatedTools={relatedTools} dataLinks={crossfitDataLinks} faqs={faqs} />
    </>
  );
}
