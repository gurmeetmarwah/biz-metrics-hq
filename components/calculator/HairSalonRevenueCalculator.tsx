"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PercentInput } from "@/components/ui/PercentInput";
import { HairSalonCalculatorFooter } from "@/components/calculator/HairSalonCalculatorFooter";
import {
  calculateRevenue,
  defaultInputs,
  faqs,
  formatCurrency,
  formatNumber,
  hairSalonDataLinks,
  industryBenchmarks,
  relatedTools,
} from "@/lib/industries/hair-salon-revenue-calculator";

export function HairSalonRevenueCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateRevenue(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  const numberField = (id: string, label: string, key: keyof typeof inputs, min = 1) => (
    <label htmlFor={id} className="block">
      <span className="text-sm font-medium text-ink-muted">{label}</span>
      <input
        id={id}
        type="number"
        min={min}
        value={inputs[key]}
        onChange={(e) => update(key, (Number(e.target.value) || 0) as (typeof inputs)[typeof key])}
        className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
      />
    </label>
  );

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Revenue Inputs</h2>
              <div className="mt-6 space-y-4">
                {numberField("stylists", "Number of Stylists", "stylists")}
                {numberField("appts", "Appointments per Stylist / Day", "appointmentsPerStylistPerDay")}
                {numberField("days", "Days Open per Week", "daysOpenPerWeek")}
                <CurrencyInput id="ticket" label="Average Ticket" value={inputs.averageTicket} onChange={(v) => update("averageTicket", v)} />
                <PercentInput id="retail" label="Retail Attachment %" value={inputs.retailAttachmentPct} onChange={(v) => update("retailAttachmentPct", v)} />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Total Annual Revenue</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">{formatCurrency(result.totalRevenue)}</p>
                <p className="mt-2 text-sm text-ink-muted">Monthly revenue: {formatCurrency(result.monthlyRevenue)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Service Revenue</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.serviceRevenue)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Retail Revenue</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">{formatCurrency(result.retailRevenue)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Revenue per Stylist</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.revenuePerStylist)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Annual Appointments</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatNumber(result.annualAppointments)}</p>
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
      <HairSalonCalculatorFooter calculatorId="revenue" relatedTools={relatedTools} dataLinks={hairSalonDataLinks} faqs={faqs} />
    </>
  );
}
