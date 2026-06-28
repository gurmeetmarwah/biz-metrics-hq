"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PercentInput } from "@/components/ui/PercentInput";
import {
  CrossFitCalculatorFooter,
  CrossFitNumberInput,
} from "@/components/calculator/CrossFitCalculatorFooter";
import { crossfitDataLinks } from "@/lib/industries/crossfit-calculators-shared";
import {
  calculateBreakEven,
  defaultInputs,
  faqs,
  formatCurrency,
  formatNumber,
  formatPercent,
  industryBenchmarks,
  relatedTools,
  crossfitIndustryAverages,
} from "@/lib/industries/crossfit-break-even-calculator";

export function CrossFitBreakEvenCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateBreakEven(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Your Numbers</h2>
              <p className="mt-1 text-sm text-ink-muted">Model monthly break-even from fixed costs and member economics.</p>
              <div className="mt-6 space-y-4">
                <CurrencyInput
                  id="fixed"
                  label="Monthly Fixed Costs"
                  value={inputs.monthlyFixedCosts}
                  onChange={(v) => update("monthlyFixedCosts", v)}
                  tooltip="Rent, insurance, affiliate fees, salaried staff"
                />
                <CurrencyInput
                  id="rpm"
                  label="Revenue Per Member"
                  value={inputs.revenuePerMember}
                  onChange={(v) => update("revenuePerMember", v)}
                />
                <PercentInput
                  id="coach"
                  label="Coach Payroll %"
                  value={inputs.coachPayrollPct}
                  onChange={(v) => update("coachPayrollPct", v)}
                />
                <PercentInput
                  id="other"
                  label="Other Variable Costs %"
                  value={inputs.otherVariablePct}
                  onChange={(v) => update("otherVariablePct", v)}
                />
                <CrossFitNumberInput
                  id="current-members"
                  label="Current Active Members"
                  value={inputs.currentMembers}
                  onChange={(v) => update("currentMembers", v)}
                  max={2000}
                />
                <CurrencyInput
                  id="current-revenue"
                  label="Current Monthly Revenue"
                  value={inputs.currentMonthlyRevenue}
                  onChange={(v) => update("currentMonthlyRevenue", v)}
                />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Break-Even Revenue</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-ink">
                  {formatCurrency(result.breakEvenRevenue)}
                  <span className="text-lg text-ink-muted">/mo</span>
                </p>
                <p className="mt-2 text-sm text-ink-faint">{result.tier} vs benchmark</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Members Needed</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">
                  {formatNumber(result.breakEvenMembers, 0)}
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Contribution Margin</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">
                  {formatPercent(result.contributionMarginPct, 0)}
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Members To Goal</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">
                  {formatNumber(result.membersToGoal, 0)}
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Revenue Gap</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-metric-revenue">
                  {formatCurrency(result.revenueGap)}
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Progress to break-even</span>
                  <span className="font-semibold text-accent">{formatPercent(result.progressPct, 0)}</span>
                </div>
                <div className="mt-2 h-3 overflow-hidden rounded-full bg-surface-muted">
                  <div
                    className="h-full rounded-full bg-accent transition-all"
                    style={{ width: `${result.progressPct}%` }}
                  />
                </div>
              </div>
              <div className="rounded-2xl border border-accent/25 bg-accent-soft/30 p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Industry Benchmark</p>
                <p className="mt-1 font-semibold text-ink">
                  ~{crossfitIndustryAverages.breakEvenMembers} members to break even
                </p>
                <p className="mt-1 text-xs text-ink-faint">
                  {result.vsBenchmarkMembers >= 0 ? "+" : ""}
                  {result.vsBenchmarkMembers} vs median member target
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">CrossFit Benchmarks</h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink">Metric</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink">Average</th>
                </tr>
              </thead>
              <tbody>
                {industryBenchmarks.map((row, i) => (
                  <tr
                    key={row.metric}
                    className={i < industryBenchmarks.length - 1 ? "border-b border-border-subtle" : ""}
                  >
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
