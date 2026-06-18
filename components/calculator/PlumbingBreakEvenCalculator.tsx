"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PercentInput } from "@/components/ui/PercentInput";
import { PlumbingCalculatorFooter } from "@/components/calculator/PlumbingCalculatorFooter";
import { plumbingDataLinks } from "@/lib/industries/plumbing-calculators-shared";
import {
  calculateBreakEven,
  defaultInputs,
  faqs,
  formatCurrency,
  formatNumber,
  formatPercent,
  industryBenchmarks,
  relatedTools,
} from "@/lib/industries/plumbing-break-even-calculator";

export function PlumbingBreakEvenCalculator() {
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
              <div className="mt-6 space-y-4">
                <CurrencyInput id="fixed" label="Monthly Fixed Costs" value={inputs.fixedCosts} onChange={(v) => update("fixedCosts", v)} tooltip="Office, salaried staff, insurance, fleet leases, etc." />
                <CurrencyInput id="ticket" label="Average Job Ticket" value={inputs.averageJobTicket} onChange={(v) => update("averageJobTicket", v)} />
                <PercentInput id="materials" label="Materials Cost %" value={inputs.materialsPct} onChange={(v) => update("materialsPct", v)} />
                <PercentInput id="labor" label="Variable Labor %" value={inputs.variableLaborPct} onChange={(v) => update("variableLaborPct", v)} />
                <PercentInput id="other" label="Other Variable %" value={inputs.otherVariablePct} onChange={(v) => update("otherVariablePct", v)} />
                <label htmlFor="days" className="block">
                  <span className="text-sm font-medium text-ink-muted">Working Days Per Month</span>
                  <input id="days" type="number" min={15} max={26} value={inputs.workingDays} onChange={(e) => update("workingDays", Number(e.target.value) || 22)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <label htmlFor="techs" className="block">
                  <span className="text-sm font-medium text-ink-muted">Plumbers</span>
                  <input id="techs" type="number" min={1} max={50} value={inputs.technicians} onChange={(e) => update("technicians", Number(e.target.value) || 6)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <CurrencyInput id="current" label="Current Monthly Revenue" value={inputs.currentRevenue} onChange={(v) => update("currentRevenue", v)} />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Break-Even Revenue</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-ink">{formatCurrency(result.breakEvenRevenue)}<span className="text-lg text-ink-muted">/mo</span></p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Jobs Per Day (All Techs)</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">{formatNumber(result.dailyJobs, 1)}/day</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Jobs Per Tech Per Day</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-metric-revenue">{formatNumber(result.dailyJobsPerTech, 1)}/day</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Daily Revenue Needed</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.dailyRevenue)}/day</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Contribution Margin</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatPercent(result.contributionMarginPct, 0)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Progress to break-even</span>
                  <span className="font-semibold text-accent">{formatPercent(result.progressPct, 0)}</span>
                </div>
                <div className="mt-2 h-3 overflow-hidden rounded-full bg-surface-muted">
                  <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${result.progressPct}%` }} />
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Safety Score</p>
                <p className="mt-1 text-3xl font-bold tabular-nums text-accent">{result.safetyScore}/100</p>
                <p className="mt-2 text-sm capitalize text-ink-muted">Status: {result.safetyStatus.replace("-", " ")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Plumbing Benchmarks</h2>
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
                  <tr key={row.metric} className={i < industryBenchmarks.length - 1 ? "border-b border-border-subtle" : ""}>
                    <td className="px-5 py-4 text-ink-muted">{row.metric}</td>
                    <td className="px-5 py-4 text-right font-semibold text-ink">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <PlumbingCalculatorFooter relatedTools={relatedTools} dataLinks={plumbingDataLinks} faqs={faqs} />
    </>
  );
}
