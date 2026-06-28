"use client";

import { useMemo, useState } from "react";
import { PercentInput } from "@/components/ui/PercentInput";
import { GymCalculatorFooter, GymNumberInput } from "@/components/calculator/GymCalculatorFooter";
import { gymDataLinks } from "@/lib/industries/gym-calculators-shared";
import {
  calculateMembershipGrowth,
  defaultInputs,
  faqs,
  formatNumber,
  formatPercent,
  growthBenchmarks,
  gymIndustryAverages,
  relatedTools,
} from "@/lib/industries/gym-membership-growth-calculator";

export function GymMembershipGrowthCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateMembershipGrowth(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Growth Assumptions</h2>
              <p className="mt-1 text-sm text-ink-muted">Project members over {inputs.months} months.</p>
              <div className="mt-6 space-y-4">
                <GymNumberInput
                  id="starting"
                  label="Starting Active Members"
                  value={inputs.startingMembers}
                  onChange={(v) => update("startingMembers", v)}
                />
                <GymNumberInput
                  id="new"
                  label="New Members Per Month"
                  value={inputs.newMembersPerMonth}
                  onChange={(v) => update("newMembersPerMonth", v)}
                />
                <PercentInput
                  id="churn"
                  label="Monthly Churn Rate"
                  value={inputs.monthlyChurnPct}
                  onChange={(v) => update("monthlyChurnPct", v)}
                />
                <GymNumberInput
                  id="months"
                  label="Projection Period (Months)"
                  value={inputs.months}
                  onChange={(v) => update("months", Math.min(24, Math.max(1, v)))}
                  min={1}
                  max={24}
                />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2 text-center">
                <p className="text-sm text-ink-muted">Ending Active Members</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">
                  {formatNumber(result.endingMembers)}
                </p>
                <p className="mt-2 text-sm text-ink-faint">
                  {result.tier} · {result.netGrowth >= 0 ? "+" : ""}
                  {formatNumber(result.netGrowth)} net over {inputs.months} months ({formatPercent(result.netGrowthPct, 1)})
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Avg. Net Growth / Month</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">
                  {result.avgNetPerMonth >= 0 ? "+" : ""}
                  {formatNumber(result.avgNetPerMonth, 1)}
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Implied Annual Retention</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">
                  {formatPercent(result.impliedAnnualRetention, 1)}
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Total Acquired</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatNumber(result.totalAcquired)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Total Churned</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatNumber(result.totalChurned)}</p>
              </div>
              <div className="rounded-2xl border border-accent/25 bg-accent-soft/30 p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Industry Benchmark</p>
                <p className="mt-1 font-semibold text-ink">{gymIndustryAverages.annualRetentionPct}% annual retention (HFA)</p>
                <p className="mt-1 text-xs text-ink-faint">Typical monthly churn: 3–5%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">{inputs.months}-Month Projection</h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-surface">
            <table className="w-full min-w-[36rem] text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink">Month</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink">Start</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink">Churned</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink">New</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink">End</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink">Net</th>
                </tr>
              </thead>
              <tbody>
                {result.projections.map((row, i) => (
                  <tr key={row.month} className={i < result.projections.length - 1 ? "border-b border-border-subtle" : ""}>
                    <td className="px-5 py-3.5 font-medium text-ink-muted">{row.month}</td>
                    <td className="px-5 py-3.5 text-right tabular-nums text-ink">{formatNumber(row.startingMembers)}</td>
                    <td className="px-5 py-3.5 text-right tabular-nums text-ink">{formatNumber(row.churned)}</td>
                    <td className="px-5 py-3.5 text-right tabular-nums text-ink">{formatNumber(row.newMembers)}</td>
                    <td className="px-5 py-3.5 text-right font-semibold tabular-nums text-ink">{formatNumber(row.endingMembers)}</td>
                    <td className="px-5 py-3.5 text-right tabular-nums text-accent">
                      {row.netChange >= 0 ? "+" : ""}
                      {formatNumber(row.netChange)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink">Metric</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink">Industry Range</th>
                </tr>
              </thead>
              <tbody>
                {growthBenchmarks.map((row, i) => (
                  <tr key={row.metric} className={i < growthBenchmarks.length - 1 ? "border-b border-border-subtle" : ""}>
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
