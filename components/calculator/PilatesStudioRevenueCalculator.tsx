"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PilatesCalculatorFooter, PilatesNumberInput } from "@/components/calculator/PilatesCalculatorFooter";
import { pilatesDataLinks } from "@/lib/industries/pilates-calculators-shared";
import {
  calculatePilatesRevenue,
  defaultInputs,
  faqs,
  formatCurrency,
  formatPercent,
  pilatesIndustryAverages,
  relatedTools,
  revenueBenchmarks,
} from "@/lib/industries/pilates-studio-revenue-calculator";

export function PilatesStudioRevenueCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculatePilatesRevenue(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Revenue Inputs</h2>
              <p className="mt-1 text-sm text-ink-muted">Model revenue from clients and supplemental income.</p>
              <div className="mt-6 space-y-4">
                <PilatesNumberInput
                  id="clients"
                  label="Active Clients"
                  value={inputs.activeClients}
                  onChange={(v) => update("activeClients", v)}
                  max={2000}
                />
                <CurrencyInput
                  id="dues"
                  label="Average Monthly Membership Fee"
                  value={inputs.monthlyMembershipFee}
                  onChange={(v) => update("monthlyMembershipFee", v)}
                />
                <CurrencyInput
                  id="privates"
                  label="Private Sessions (Monthly Total)"
                  value={inputs.monthlyPrivateSessions}
                  onChange={(v) => update("monthlyPrivateSessions", v)}
                />
                <CurrencyInput
                  id="packages"
                  label="Class Packages (Monthly Total)"
                  value={inputs.monthlyClassPackages}
                  onChange={(v) => update("monthlyClassPackages", v)}
                />
                <CurrencyInput
                  id="retail"
                  label="Workshops & Retail (Monthly Total)"
                  value={inputs.monthlyWorkshopsRetail}
                  onChange={(v) => update("monthlyWorkshopsRetail", v)}
                />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2 text-center">
                <p className="text-sm text-ink-muted">Estimated Annual Revenue</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">
                  {formatCurrency(result.annualRevenue)}
                </p>
                <p className="mt-2 text-sm text-ink-faint">
                  {result.tier} vs benchmark · {formatPercent(result.membershipPct, 0)} from memberships
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Total MRR</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">{formatCurrency(result.totalMrr)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Membership MRR</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.membershipMrr)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Revenue Per Client</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.revenuePerClient)}/mo</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Ancillary MRR</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.ancillaryMrr)}</p>
              </div>
              <div className="rounded-2xl border border-accent/25 bg-accent-soft/30 p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Industry Benchmark</p>
                <p className="mt-1 font-semibold text-ink">Median ~{formatCurrency(pilatesIndustryAverages.revenue)} annual revenue</p>
                <p className="mt-1 text-xs text-ink-faint">
                  {result.vsBenchmarkRevenue >= 0 ? "+" : ""}
                  {formatCurrency(result.vsBenchmarkRevenue)} vs median · ~{formatCurrency(pilatesIndustryAverages.revenuePerClientMonthly)}/mo per client
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Revenue Benchmarks</h2>
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
                {revenueBenchmarks.map((row, i) => (
                  <tr key={row.metric} className={i < revenueBenchmarks.length - 1 ? "border-b border-border-subtle" : ""}>
                    <td className="px-5 py-4 text-ink-muted">{row.metric}</td>
                    <td className="px-5 py-4 text-right font-semibold text-ink">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <PilatesCalculatorFooter relatedTools={relatedTools} dataLinks={pilatesDataLinks} faqs={faqs} />
    </>
  );
}
