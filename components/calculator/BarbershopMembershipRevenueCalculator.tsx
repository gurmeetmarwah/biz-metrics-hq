"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { BarbershopCalculatorFooter } from "@/components/calculator/BarbershopCalculatorFooter";
import {
  calculateMembershipRevenue,
  defaultInputs,
  faqs,
  formatCurrency,
  industryBenchmarks,
  barbershopDataLinks,
  barbershopIndustryAverages,
  relatedTools,
} from "@/lib/industries/barbershop-membership-revenue-calculator";

export function BarbershopMembershipRevenueCalculator() {
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
              <div className="mt-6 space-y-4">
                <label htmlFor="members" className="block">
                  <span className="text-sm font-medium text-ink-muted">Active Members</span>
                  <input id="members" type="number" min={0} value={inputs.activeMembers}
                    onChange={(e) => update("activeMembers", Number(e.target.value) || 0)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <CurrencyInput id="fee" label="Monthly Membership Fee" value={inputs.monthlyFee} onChange={(v) => update("monthlyFee", v)} />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2 text-center">
                <p className="text-sm text-ink-muted">Membership MRR</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">{formatCurrency(result.membershipMrr)}</p>
                <p className="mt-2 text-sm text-ink-faint">
                  {result.tier} vs benchmark · {formatCurrency(result.annualMembershipRevenue)}/yr
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Annual Membership Revenue</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">{formatCurrency(result.annualMembershipRevenue)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Revenue per Member</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.revenuePerMember)}</p>
              </div>
              <div className="rounded-2xl border border-accent/25 bg-accent-soft/30 p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Industry Benchmark</p>
                <p className="mt-1 font-semibold text-ink">Median ~{formatCurrency(barbershopIndustryAverages.membershipMrr)}/mo MRR</p>
                <p className="mt-1 text-xs text-ink-faint">
                  {result.vsBenchmarkMrr >= 0 ? "+" : ""}
                  {formatCurrency(result.vsBenchmarkMrr)} vs median
                </p>
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
      <BarbershopCalculatorFooter calculatorId="membership-revenue" relatedTools={relatedTools} dataLinks={barbershopDataLinks} faqs={faqs} />
    </>
  );
}
