"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PercentInput } from "@/components/ui/PercentInput";
import { NailSalonCalculatorFooter } from "@/components/calculator/NailSalonCalculatorFooter";
import {
  calculateAverageTicket,
  defaultInputs,
  faqs,
  formatCurrency,
  formatPercent,
  industryBenchmarks,
  nailSalonDataLinks,
  relatedTools,
} from "@/lib/industries/nail-salon-average-ticket-calculator";

export function NailSalonAverageTicketCalculator() {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateAverageTicket(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Menu Mix Inputs</h2>
              <div className="mt-6 space-y-4">
                <CurrencyInput id="mani" label="Basic Manicure Price" value={inputs.manicurePrice} onChange={(v) => update("manicurePrice", v)} />
                <PercentInput id="mani-share" label="Manicure Share %" value={inputs.manicureSharePct} onChange={(v) => update("manicureSharePct", v)} />
                <CurrencyInput id="gel" label="Gel / Dip Price" value={inputs.gelPrice} onChange={(v) => update("gelPrice", v)} />
                <PercentInput id="gel-share" label="Gel / Dip Share %" value={inputs.gelSharePct} onChange={(v) => update("gelSharePct", v)} />
                <CurrencyInput id="pedi" label="Pedicure Price" value={inputs.pedicurePrice} onChange={(v) => update("pedicurePrice", v)} />
                <PercentInput id="pedi-share" label="Pedicure Share %" value={inputs.pedicureSharePct} onChange={(v) => update("pedicureSharePct", v)} />
                <CurrencyInput id="addon" label="Nail Art / Extensions Price" value={inputs.addonPrice} onChange={(v) => update("addonPrice", v)} />
                <PercentInput id="addon-share" label="Add-on Share %" value={inputs.addonSharePct} onChange={(v) => update("addonSharePct", v)} />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Weighted Average Ticket</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-metric-revenue">{formatCurrency(result.weightedTicket)}</p>
                <p className="mt-2 text-sm capitalize text-ink-muted">Status: {result.status}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-xs text-ink-faint">Total Menu Share</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatPercent(result.totalShare, 0)}</p>
                {result.totalShare !== 100 && (
                  <p className="mt-2 text-sm text-ink-muted">Shares are normalized to 100% for the weighted average.</p>
                )}
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
      <NailSalonCalculatorFooter calculatorId="average-ticket" relatedTools={relatedTools} dataLinks={nailSalonDataLinks} faqs={faqs} />
    </>
  );
}
