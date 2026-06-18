"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PestControlCalculatorFooter } from "@/components/calculator/PestControlCalculatorFooter";
import { pestControlDataLinks } from "@/lib/industries/pest-control-calculators-shared";
import {
  calculateRouteDensity,
  defaultInputs,
  faqs,
  formatCurrency,
  formatNumber,
  formatPercent,
  pestControlIndustryAverages,
  relatedTools,
  routeBenchmarks,
} from "@/lib/industries/pest-control-route-density-calculator";

export function PestControlRouteDensityCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateRouteDensity(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Route Inputs</h2>
              <p className="mt-1 text-sm text-ink-muted">Measure stops per technician and route throughput.</p>
              <div className="mt-6 space-y-4">
                <CurrencyInput id="revenue" label="Annual Revenue" value={inputs.annualRevenue} onChange={(v) => update("annualRevenue", v)} />
                <label htmlFor="techs" className="block">
                  <span className="text-sm font-medium text-ink-muted">Field Technicians</span>
                  <input id="techs" type="number" min={1} max={30} value={inputs.technicians}
                    onChange={(e) => update("technicians", Number(e.target.value) || 5)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <label htmlFor="stops" className="block">
                  <span className="text-sm font-medium text-ink-muted">Stops Per Technician Per Day</span>
                  <input id="stops" type="number" min={5} max={25} value={inputs.stopsPerTechPerDay}
                    onChange={(e) => update("stopsPerTechPerDay", Number(e.target.value) || 14)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <label htmlFor="days" className="block">
                  <span className="text-sm font-medium text-ink-muted">Working Days Per Year</span>
                  <input id="days" type="number" min={200} max={260} value={inputs.workingDays}
                    onChange={(e) => update("workingDays", Number(e.target.value) || 240)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <label htmlFor="utilization" className="block">
                  <span className="text-sm font-medium text-ink-muted">Route Utilization (%)</span>
                  <input id="utilization" type="number" min={30} max={100} value={inputs.routeUtilizationPct}
                    onChange={(e) => update("routeUtilizationPct", Number(e.target.value) || 82)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2 text-center">
                <p className="text-sm text-ink-muted">Revenue Per Technician</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">
                  {formatCurrency(result.revenuePerTech)}<span className="text-lg text-ink-muted">/yr</span>
                </p>
                <p className="mt-2 text-sm text-ink-faint">
                  {result.tier} vs benchmark · {formatCurrency(result.vsMedian)} vs median
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Revenue Per Stop</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">{formatCurrency(result.revenuePerStop)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Stops Per Technician / Year</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatNumber(result.stopsPerTechPerYear, 0)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Route Utilization</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatPercent(inputs.routeUtilizationPct, 0)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Potential Revenue Gain</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-metric-valuation">{formatCurrency(result.potentialRevenueGain)}</p>
                <p className="mt-1 text-xs text-ink-faint">At 85% target utilization</p>
              </div>
              <div className="rounded-2xl border border-accent/25 bg-accent-soft/30 p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Industry Benchmark</p>
                <p className="mt-1 font-semibold text-ink">{pestControlIndustryAverages.revenuePerTechnicianRange}</p>
                <p className="mt-1 text-xs text-ink-faint">Median {formatCurrency(pestControlIndustryAverages.revenuePerTechnician)} per technician</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Route Density Benchmarks</h2>
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
                {routeBenchmarks.map((row, i) => (
                  <tr key={row.metric} className={i < routeBenchmarks.length - 1 ? "border-b border-border-subtle" : ""}>
                    <td className="px-5 py-4 text-ink-muted">{row.metric}</td>
                    <td className="px-5 py-4 text-right font-semibold text-ink">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <PestControlCalculatorFooter relatedTools={relatedTools} dataLinks={pestControlDataLinks} faqs={faqs} />
    </>
  );
}
