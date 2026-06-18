"use client";

import { useState } from "react";

type Thresholds = {
  revenue: { low: number; median: number; high: number };
  margin: { low: number; median: number; high: number };
  ownerSalary: { low: number; median: number; high: number };
};

type BenchmarkToolProps = {
  thresholds: Thresholds;
};

type Rating = "Below Average" | "Average" | "Top Quartile";

function rate(value: number, t: { low: number; median: number; high: number }): Rating {
  if (value < t.low) return "Below Average";
  if (value >= t.high) return "Top Quartile";
  return "Average";
}

const ratingStyles: Record<Rating, string> = {
  "Below Average": "bg-metric-salary/10 text-metric-salary border-metric-salary/20",
  Average: "bg-accent-soft text-accent border-accent/20",
  "Top Quartile": "bg-metric-revenue/10 text-metric-revenue border-metric-revenue/20",
};

export function BenchmarkTool({ thresholds }: BenchmarkToolProps) {
  const [revenue, setRevenue] = useState("850000");
  const [salary, setSalary] = useState("92000");
  const [margin, setMargin] = useState("8");

  const rev = parseFloat(revenue) || 0;
  const sal = parseFloat(salary) || 0;
  const mar = parseFloat(margin) || 0;

  const results = [
    { label: "Revenue", rating: rate(rev, thresholds.revenue) },
    { label: "Owner Salary", rating: rate(sal, thresholds.ownerSalary) },
    { label: "Profit Margin", rating: rate(mar, thresholds.margin) },
  ];

  const overall =
    results.filter((r) => r.rating === "Top Quartile").length >= 2
      ? "Top Quartile"
      : results.filter((r) => r.rating === "Below Average").length >= 2
        ? "Below Average"
        : "Average";

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <h3 className="font-display text-lg font-semibold text-ink">
        Benchmark Yourself
      </h3>
      <p className="mt-2 text-sm text-ink-muted">
        Compare your restaurant against industry quartiles.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <label className="block">
          <span className="text-sm font-medium text-ink-muted">Annual Revenue ($)</span>
          <input
            type="number"
            value={revenue}
            onChange={(e) => setRevenue(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink-muted">Owner Salary ($)</span>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink-muted">Profit Margin (%)</span>
          <input
            type="number"
            step="0.1"
            value={margin}
            onChange={(e) => setMargin(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
          />
        </label>
      </div>

      <div className="mt-8 rounded-xl border border-border bg-surface-muted/50 p-5">
        <p className="text-sm font-medium text-ink-muted">Your overall rating</p>
        <p
          className={`mt-2 inline-flex rounded-full border px-4 py-1.5 text-lg font-bold ${ratingStyles[overall]}`}
        >
          {overall}
        </p>
        <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {results.map((r) => (
            <li
              key={r.label}
              className="flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-3 text-sm"
            >
              <span className="text-ink-muted">{r.label}</span>
              <span
                className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${ratingStyles[r.rating]}`}
              >
                {r.rating}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
