"use client";

import { useMemo, useState } from "react";
import { IceCreamShopCalculatorFooter } from "@/components/calculator/IceCreamShopCalculatorFooter";
import { BenchmarkSourceFootnote } from "@/components/shared/DataSourcesAttribution";
import { iceCreamShopDataLinks } from "@/lib/industries/ice-cream-shop-calculators-shared";
import { iceCreamShopAttribution } from "@/lib/data-sources/ice-cream-shop";
import {
  calculateAverageTicket,
  defaultInputs,
  faqs,
  formatCurrency,
  formatNumber,
  formatPercent,
  relatedTools,
} from "@/lib/industries/ice-cream-shop-average-ticket-calculator";

export function IceCreamShopAverageTicketCalculator() {
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
              <h2 className="font-display text-lg font-semibold text-ink">Volume & Menu Mix</h2>
              <div className="mt-6 space-y-4">
                <label className="block">
                  <span className="text-sm font-medium text-ink-muted">Daily Customers</span>
                  <input type="number" min={0} value={inputs.dailyCustomers} onChange={(e) => update("dailyCustomers", Number(e.target.value) || 0)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-ink-muted">Days Open Per Year</span>
                  <input type="number" min={1} max={365} value={inputs.daysOpen} onChange={(e) => update("daysOpen", Number(e.target.value) || 305)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-ink-muted">Base Scoop Mix (%)</span>
                  <input type="number" min={0} max={100} value={inputs.baseScoopPct} onChange={(e) => update("baseScoopPct", Number(e.target.value) || 0)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-ink-muted">Base Scoop Price ($)</span>
                  <input type="number" min={0} step={0.25} value={inputs.baseScoopPrice} onChange={(e) => update("baseScoopPrice", Number(e.target.value) || 0)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-ink-muted">Milkshake Mix (%) / Price ($)</span>
                  <div className="mt-1.5 grid grid-cols-2 gap-2">
                    <input type="number" min={0} max={100} value={inputs.milkshakePct} onChange={(e) => update("milkshakePct", Number(e.target.value) || 0)}
                      className="rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                    <input type="number" min={0} step={0.25} value={inputs.milkshakePrice} onChange={(e) => update("milkshakePrice", Number(e.target.value) || 0)}
                      className="rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                  </div>
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-ink-muted">Sundae Mix (%) / Price ($)</span>
                  <div className="mt-1.5 grid grid-cols-2 gap-2">
                    <input type="number" min={0} max={100} value={inputs.sundaePct} onChange={(e) => update("sundaePct", Number(e.target.value) || 0)}
                      className="rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                    <input type="number" min={0} step={0.25} value={inputs.sundaePrice} onChange={(e) => update("sundaePrice", Number(e.target.value) || 0)}
                      className="rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                  </div>
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-ink-muted">Cake Mix (%) / Price ($)</span>
                  <div className="mt-1.5 grid grid-cols-2 gap-2">
                    <input type="number" min={0} max={100} value={inputs.cakePct} onChange={(e) => update("cakePct", Number(e.target.value) || 0)}
                      className="rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                    <input type="number" min={0} step={0.25} value={inputs.cakePrice} onChange={(e) => update("cakePrice", Number(e.target.value) || 0)}
                      className="rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10" />
                  </div>
                </label>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Blended Average Ticket</p>
                <p className="mt-1 text-4xl font-bold tabular-nums text-accent">{formatCurrency(result.blendedTicket)}</p>
                <p className="mt-2 text-sm text-ink-muted">+{formatPercent(result.ticketLiftPct, 0)} vs base scoops only</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Daily Revenue</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-metric-revenue">{formatCurrency(result.dailyRevenue)}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-xs text-ink-faint">Annual Revenue</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{formatCurrency(result.annualRevenue)}</p>
              </div>
              <div className="rounded-2xl border border-accent/25 bg-accent-soft/20 p-5 sm:col-span-2">
                <p className="text-sm text-ink-muted">Upsell Revenue Lift (vs scoops only)</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-accent">+{formatCurrency(result.upsellLift)}/yr</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-border/60 bg-surface-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="font-display text-xl font-semibold text-ink">Menu Mix Breakdown</h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink">Category</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink">Mix</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-ink">Price</th>
                </tr>
              </thead>
              <tbody>
                {result.mix.map((row, i) => (
                  <tr key={row.label} className={i < result.mix.length - 1 ? "border-b border-border-subtle" : ""}>
                    <td className="px-5 py-4 text-ink-muted">{row.label}</td>
                    <td className="px-5 py-4 text-right font-semibold text-ink">{formatNumber(row.pct, 0)}%</td>
                    <td className="px-5 py-4 text-right font-semibold text-ink">{formatCurrency(row.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <BenchmarkSourceFootnote sampleSize={iceCreamShopAttribution.sampleSize} dataVintage={iceCreamShopAttribution.dataVintage} className="mt-4" />
        </div>
      </section>
      <IceCreamShopCalculatorFooter calculatorId="average-ticket" relatedTools={relatedTools} dataLinks={iceCreamShopDataLinks} faqs={faqs} />
    </>
  );
}
