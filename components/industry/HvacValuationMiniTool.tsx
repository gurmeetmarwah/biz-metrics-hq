"use client";

import { useMemo, useState } from "react";

function formatCurrency(value: number): string {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

const SDE_MARGIN_PCT = 400000 / 2400000;
const REVENUE_MULTIPLE = 0.85;

export function HvacValuationMiniTool() {
  const [revenue, setRevenue] = useState("2400000");
  const [sde, setSde] = useState("400000");
  const [multiple, setMultiple] = useState("3.1");
  const [sdeManual, setSdeManual] = useState(false);

  const result = useMemo(() => {
    const revNum = parseFloat(revenue) || 0;
    const sdeNum = parseFloat(sde) || 0;
    const mult = parseFloat(multiple) || 3.1;
    return {
      sdeValue: sdeNum * mult,
      revenueValue: revNum * REVENUE_MULTIPLE,
      valueLow: sdeNum * 2.4,
      valueHigh: sdeNum * 3.8,
    };
  }, [revenue, sde, multiple]);

  const handleRevenueChange = (value: string) => {
    setRevenue(value);
    if (!sdeManual) {
      const rev = parseFloat(value) || 0;
      setSde(String(Math.round(rev * SDE_MARGIN_PCT)));
    }
  };

  const handleSdeChange = (value: string) => {
    setSde(value);
    setSdeManual(true);
  };

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <h3 className="font-display text-lg font-semibold text-ink">Estimated HVAC Business Value</h3>
      <p className="mt-2 text-sm text-ink-muted">
        Quick SDE-based valuation using industry multiples.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <label className="block">
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
            onChange={(e) => handleSdeChange(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
          />
          <p className="mt-1 text-xs text-ink-faint">
            {sdeManual ? "Manual override" : "Auto-estimated from revenue"}
          </p>
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink-muted">SDE Multiple</span>
          <input
            type="number"
            min={1}
            max={8}
            step={0.1}
            value={multiple}
            onChange={(e) => setMultiple(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
          />
        </label>
      </div>

      <div className="mt-8 rounded-xl border border-border bg-surface-muted/50 p-6 text-center">
        <p className="text-sm text-ink-muted">Estimated Value</p>
        <p className="mt-2 text-4xl font-bold tabular-nums text-metric-valuation">
          {formatCurrency(result.sdeValue)}
        </p>
        <p className="mt-3 text-sm text-ink-muted">
          Range: {formatCurrency(result.valueLow)} – {formatCurrency(result.valueHigh)}
        </p>
        <p className="mt-1 text-xs text-ink-faint">
          At {parseFloat(multiple).toFixed(1)}× SDE on {formatCurrency(parseFloat(sde) || 0)} SDE
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-border bg-surface px-4 py-3 text-center">
          <p className="text-xs text-ink-faint">SDE-Based Value</p>
          <p className="mt-1 font-bold tabular-nums text-ink">{formatCurrency(result.sdeValue)}</p>
        </div>
        <div className="rounded-xl border border-border bg-surface px-4 py-3 text-center">
          <p className="text-xs text-ink-faint">Revenue-Based Value</p>
          <p className="mt-1 font-bold tabular-nums text-ink">{formatCurrency(result.revenueValue)}</p>
        </div>
      </div>
    </div>
  );
}
