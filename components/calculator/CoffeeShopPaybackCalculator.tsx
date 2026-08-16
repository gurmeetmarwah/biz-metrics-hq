"use client";

import { useMemo, useState } from "react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { CoffeeShopCalculatorFooter } from "@/components/calculator/CoffeeShopCalculatorFooter";
import {
  calculateCoffeeShopPayback,
  defaultInputs,
  faqs,
  formatCurrency,
  franchiseDataLinks,
  relatedTools,
} from "@/lib/franchise/food/coffee-shop-franchise-payback-calculator";

function formatYears(years: number | null): string {
  if (years == null || !Number.isFinite(years)) return "—";
  if (years < 1) return `${Math.round(years * 12)} months`;
  return `${years.toFixed(1)} years`;
}

type Props = {
  showFooter?: boolean;
};

export function CoffeeShopPaybackCalculator({ showFooter = true }: Props) {
  const [inputs, setInputs] = useState(defaultInputs);
  const result = useMemo(() => calculateCoffeeShopPayback(inputs), [inputs]);
  const update = <K extends keyof typeof inputs>(key: K, value: (typeof inputs)[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="mb-6 rounded-xl border border-accent/20 bg-accent-soft/40 px-4 py-3 text-sm text-ink-muted">
            Interactive calculator — change investment and cash flow to update payback years live.
          </div>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1 lg:max-w-md">
              <h2 className="font-display text-lg font-semibold text-ink">Payback Assumptions</h2>
              <div className="mt-6 space-y-4">
                <CurrencyInput
                  id="csp-investment"
                  label="Total investment"
                  value={inputs.totalInvestment}
                  onChange={(v) => update("totalInvestment", v)}
                />
                <CurrencyInput
                  id="csp-cashflow"
                  label="Annual operating cash flow"
                  value={inputs.annualCashFlow}
                  onChange={(v) => update("annualCashFlow", v)}
                />
                <CurrencyInput
                  id="csp-debt"
                  label="Annual debt service"
                  value={inputs.annualDebtService}
                  onChange={(v) => update("annualDebtService", v)}
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-2xl border border-border bg-surface-muted/30 p-6 sm:p-8">
                <p className="text-xs font-semibold tracking-wider text-accent uppercase">
                  Payback period
                </p>
                <p className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                  {formatYears(result.paybackYears)}
                </p>
                <p className="mt-1 text-sm text-ink-muted">
                  Free cash flow {formatCurrency(result.freeCashFlow)}/yr · rating: {result.rating}
                </p>
                <dl className="mt-8 space-y-3">
                  <div className="flex justify-between gap-4 border-b border-border-subtle pb-3">
                    <dt className="text-sm text-ink-muted">Payback (months)</dt>
                    <dd className="text-sm font-semibold tabular-nums text-ink">
                      {result.paybackMonths != null ? `~${Math.round(result.paybackMonths)}` : "—"}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-border-subtle pb-3">
                    <dt className="text-sm text-ink-muted">5-year cumulative cash flow</dt>
                    <dd className="text-sm font-semibold tabular-nums text-ink">
                      {formatCurrency(result.fiveYearCumulative)}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-sm text-ink-muted">5-year surplus vs CapEx</dt>
                    <dd
                      className="text-sm font-semibold tabular-nums"
                      style={{
                        color: result.fiveYearSurplus >= 0 ? "var(--metric-margin)" : undefined,
                      }}
                    >
                      {formatCurrency(result.fiveYearSurplus)}
                    </dd>
                  </div>
                </dl>
                <p className="mt-6 text-xs text-ink-faint">
                  Fast &lt; 3.5 yrs · Typical 3.5–5.5 yrs · Slow &gt; 5.5 yrs (directional coffee franchise
                  bands).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showFooter && (
        <CoffeeShopCalculatorFooter
          relatedTools={relatedTools}
          dataLinks={franchiseDataLinks}
          faqs={faqs}
        />
      )}
    </>
  );
}
