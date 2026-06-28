"use client";

import { useMemo, useState } from "react";
import { GymCalculatorFooter, GymNumberInput } from "@/components/calculator/GymCalculatorFooter";
import { gymDataLinks } from "@/lib/industries/gym-calculators-shared";
import {
  calculateChurnRate,
  churnBenchmarks,
  defaultInputs,
  faqs,
  formatNumber,
  formatPercent,
  gymIndustryAverages,
  relatedTools,
} from "@/lib/industries/gym-churn-rate-calculator";

export function GymChurnRateCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateChurnRate(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Membership Activity</h2>
              <p className="mt-1 text-sm text-ink-muted">Enter data for your measurement period.</p>
              <div className="mt-6 space-y-4">
                <GymNumberInput
                  id="start"
                  label="Members at Start of Period"
                  value={inputs.membersAtStart}
                  onChange={(v) => update("membersAtStart", v)}
                />
                <GymNumberInput
                  id="cancellations"
                  label="Total Cancellations"
                  value={inputs.cancellations}
                  onChange={(v) => update("cancellations", v)}
                />
                <GymNumberInput
                  id="signups"
                  label="New Sign-ups During Period"
                  value={inputs.newSignups}
                  onChange={(v) => update("newSignups", v)}
                />
                <GymNumberInput
                  id="months"
                  label="Period Length (Months)"
                  value={inputs.periodMonths}
                  onChange={(v) => update("periodMonths", Math.max(1, v))}
                  min={1}
                  max={24}
                />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2 text-center">
                <p className="text-sm text-ink-muted">Average Monthly Churn</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-salary">
                  {formatPercent(result.monthlyChurnPct, 2)}
                </p>
                <p className="mt-2 text-sm text-ink-faint">
                  {result.tier} · Implied annual retention {formatPercent(result.impliedAnnualRetention, 1)}
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Members at End</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">{formatNumber(result.membersAtEnd)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Net Member Change</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">
                  {result.netMemberChange >= 0 ? "+" : ""}
                  {formatNumber(result.netMemberChange)}
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Period Churn (Total)</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatPercent(result.periodChurnPct, 1)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Avg. Active Members</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatNumber(Math.round(result.avgMembers))}</p>
              </div>
              <div className="rounded-2xl border border-accent/25 bg-accent-soft/30 p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Industry Benchmark</p>
                <p className="mt-1 font-semibold text-ink">{gymIndustryAverages.annualRetentionPct}% annual retention (HFA)</p>
                <p className="mt-1 text-xs text-ink-faint">
                  {result.vsBenchmarkRetention >= 0 ? "+" : ""}
                  {result.vsBenchmarkRetention.toFixed(1)} pts vs HFA benchmark
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Churn Benchmarks</h2>
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
                {churnBenchmarks.map((row, i) => (
                  <tr key={row.metric} className={i < churnBenchmarks.length - 1 ? "border-b border-border-subtle" : ""}>
                    <td className="px-5 py-4 text-ink-muted">{row.metric}</td>
                    <td className="px-5 py-4 text-right font-semibold text-ink">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <GymCalculatorFooter relatedTools={relatedTools} dataLinks={gymDataLinks} faqs={faqs} />
    </>
  );
}
