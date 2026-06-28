"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PercentInput } from "@/components/ui/PercentInput";
import { YogaCalculatorFooter, YogaNumberInput } from "@/components/calculator/YogaCalculatorFooter";
import { yogaDataLinks } from "@/lib/industries/yoga-calculators-shared";
import {
  calculateMembershipRevenue,
  defaultInputs,
  faqs,
  formatCurrency,
  membershipBenchmarks,
  yogaIndustryAverages,
  relatedTools,
} from "@/lib/industries/yoga-membership-revenue-calculator";

export function YogaMembershipRevenueCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateMembershipRevenue(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Membership Inputs</h2>
              <p className="mt-1 text-sm text-ink-muted">Model MRR from active members and dues.</p>
              <div className="mt-6 space-y-4">
                <YogaNumberInput
                  id="members"
                  label="Active Members"
                  value={inputs.activeMembers}
                  onChange={(v) => update("activeMembers", v)}
                  max={2000}
                />
                <CurrencyInput
                  id="dues"
                  label="Average Monthly Dues"
                  value={inputs.monthlyDues}
                  onChange={(v) => update("monthlyDues", v)}
                />
                <PercentInput
                  id="autopay"
                  label="Autopay Members %"
                  value={inputs.autopayMemberPct}
                  onChange={(v) => update("autopayMemberPct", v)}
                />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2 text-center">
                <p className="text-sm text-ink-muted">Membership MRR</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">
                  {formatCurrency(result.membershipMrr)}
                </p>
                <p className="mt-2 text-sm text-ink-faint">
                  {result.tier} vs benchmark · {formatCurrency(result.annualMembershipRevenue)}/yr
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Autopay MRR</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">{formatCurrency(result.autopayMrr)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Implied Studio Revenue</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.impliedStudioRevenue)}</p>
              </div>
              <div className="rounded-2xl border border-accent/25 bg-accent-soft/30 p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Industry Benchmark</p>
                <p className="mt-1 font-semibold text-ink">Median ~{formatCurrency(yogaIndustryAverages.mrr)}/mo MRR</p>
                <p className="mt-1 text-xs text-ink-faint">
                  {result.vsBenchmarkMrr >= 0 ? "+" : ""}
                  {formatCurrency(result.vsBenchmarkMrr)} vs median · ~{yogaIndustryAverages.activeMembers} active members
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Membership Benchmarks</h2>
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
                {membershipBenchmarks.map((row, i) => (
                  <tr key={row.metric} className={i < membershipBenchmarks.length - 1 ? "border-b border-border-subtle" : ""}>
                    <td className="px-5 py-4 text-ink-muted">{row.metric}</td>
                    <td className="px-5 py-4 text-right font-semibold text-ink">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <YogaCalculatorFooter relatedTools={relatedTools} dataLinks={yogaDataLinks} faqs={faqs} />
    </>
  );
}
