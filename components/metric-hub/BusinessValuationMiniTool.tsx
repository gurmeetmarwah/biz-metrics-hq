"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

function formatCurrency(value: number): string {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

const DEFAULT_SDE_MARGIN = 0.17;
const DEFAULT_MULTIPLE = 3.0;

type BusinessValuationMiniToolProps = {
  calculatorHref: string;
};

export function BusinessValuationMiniTool({ calculatorHref }: BusinessValuationMiniToolProps) {
  const [revenue, setRevenue] = useState("1000000");
  const [sde, setSde] = useState("170000");
  const [multiple, setMultiple] = useState(String(DEFAULT_MULTIPLE));
  const [sdeManual, setSdeManual] = useState(false);

  const result = useMemo(() => {
    const sdeNum = parseFloat(sde) || 0;
    const mult = parseFloat(multiple) || DEFAULT_MULTIPLE;
    return {
      estimated: sdeNum * mult,
      low: sdeNum * (mult - 0.6),
      high: sdeNum * (mult + 0.6),
    };
  }, [sde, multiple]);

  const handleRevenueChange = (value: string) => {
    setRevenue(value);
    if (!sdeManual) {
      const rev = parseFloat(value) || 0;
      setSde(String(Math.round(rev * DEFAULT_SDE_MARGIN)));
    }
  };

  return (
    <div className="rounded-2xl border border-accent/25 bg-gradient-to-br from-accent-soft/40 to-surface p-6 sm:p-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Featured Tool</p>
          <h3 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
            Business Worth Calculator
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
            Quick SDE-based valuation using industry-standard multiples. Enter your numbers for an instant estimate.
          </p>
          <Link
            href={calculatorHref}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Open Full Valuation Calculator
            <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <label className="block sm:col-span-3">
              <span className="text-sm font-medium text-ink-muted">Annual Revenue ($)</span>
              <input
                type="number"
                value={revenue}
                onChange={(e) => handleRevenueChange(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-ink-muted">SDE ($)</span>
              <input
                type="number"
                value={sde}
                onChange={(e) => { setSde(e.target.value); setSdeManual(true); }}
                className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-sm font-medium text-ink-muted">SDE Multiple</span>
              <input
                type="number"
                min={1}
                max={6}
                step={0.1}
                value={multiple}
                onChange={(e) => setMultiple(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
              />
            </label>
          </div>
          <div className="mt-6 rounded-xl border border-border bg-surface-muted/30 p-5 text-center">
            <p className="text-sm text-ink-muted">Estimated Business Value</p>
            <p className="mt-1 text-3xl font-bold tabular-nums text-metric-valuation">
              {formatCurrency(result.estimated)}
            </p>
            <p className="mt-2 text-xs text-ink-faint">
              Range: {formatCurrency(Math.max(0, result.low))} – {formatCurrency(result.high)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
