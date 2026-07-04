"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PercentInput } from "@/components/ui/PercentInput";
import { OptometryCalculatorFooter } from "@/components/calculator/OptometryCalculatorFooter";
import { optometryDataLinks } from "@/lib/industries/optometry-calculators-shared";
import {
  calculateOpticalCapture,
  defaultInputs,
  faqs,
  formatCurrency,
  formatPercent,
  industryBenchmarks,
  relatedTools,
} from "@/lib/industries/optometry-practice-optical-capture-rate-calculator";

export function OptometryPracticeOpticalCaptureRateCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateOpticalCapture(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Dispensary Metrics</h2>
              <div className="mt-6 space-y-4">
                <label htmlFor="exams" className="block">
                  <span className="text-sm font-medium text-ink-muted">Monthly Exams</span>
                  <input id="exams" type="number" min={1} value={inputs.monthlyExams}
                    onChange={(e) => update("monthlyExams", Number(e.target.value) || 1)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <PercentInput id="capture" label="Current Capture Rate %" value={inputs.captureRatePct} onChange={(v) => update("captureRatePct", v)} />
                <CurrencyInput id="ticket" label="Average Optical Ticket" value={inputs.averageOpticalTicket} onChange={(v) => update("averageOpticalTicket", v)} />
                <PercentInput id="target" label="Target Capture Rate %" value={inputs.targetCaptureRatePct} onChange={(v) => update("targetCaptureRatePct", v)} />
                <PercentInput id="margin" label="Optical Gross Margin %" value={inputs.opticalGrossMarginPct} onChange={(v) => update("opticalGrossMarginPct", v)} />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Annual Optical Revenue</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">{formatCurrency(result.annualOpticalRevenue)}</p>
                <p className="mt-2 text-sm capitalize text-ink-muted">Capture status: {result.status}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Revenue Uplift (Annual)</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">{formatCurrency(result.revenueUplift)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Margin Uplift (Annual)</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-metric-profit">{formatCurrency(result.marginUplift)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Monthly Purchases</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{result.currentPurchases.toFixed(0)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Target Purchases</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{result.targetPurchases.toFixed(0)}</p>
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
      <OptometryCalculatorFooter calculatorId="optical-capture-rate" relatedTools={relatedTools} dataLinks={optometryDataLinks} faqs={faqs} />
    </>
  );
}
