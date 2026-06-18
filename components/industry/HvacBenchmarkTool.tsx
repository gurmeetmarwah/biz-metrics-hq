"use client";

import { useState } from "react";
import { BenchmarkSourceFootnote } from "@/components/shared/DataSourcesAttribution";
import { hvacAttribution } from "@/lib/data-sources/hvac";

type Thresholds = {
  revenue: { low: number; median: number; high: number };
  profitMargin: { low: number; median: number; high: number };
  technicians: { low: number; median: number; high: number };
  maintenancePct: { low: number; median: number; high: number };
};

type Rating = "Bottom Quartile" | "Average" | "Top Quartile";

function rate(value: number, t: { low: number; median: number; high: number }): Rating {
  if (value < t.low) return "Bottom Quartile";
  if (value >= t.high) return "Top Quartile";
  return "Average";
}

const ratingStyles: Record<Rating, string> = {
  "Bottom Quartile": "bg-metric-salary/10 text-metric-salary border-metric-salary/20",
  Average: "bg-accent-soft text-accent border-accent/20",
  "Top Quartile": "bg-metric-revenue/10 text-metric-revenue border-metric-revenue/20",
};

export function HvacBenchmarkTool({ thresholds }: { thresholds: Thresholds }) {
  const [revenue, setRevenue] = useState("2400000");
  const [margin, setMargin] = useState("12");
  const [technicians, setTechnicians] = useState("8");
  const [maintenance, setMaintenance] = useState("35");

  const rev = parseFloat(revenue) || 0;
  const mar = parseFloat(margin) || 0;
  const techs = parseFloat(technicians) || 0;
  const maint = parseFloat(maintenance) || 0;

  const results = [
    { label: "Revenue", rating: rate(rev, thresholds.revenue) },
    { label: "Net Margin", rating: rate(mar, thresholds.profitMargin) },
    { label: "Technicians", rating: rate(techs, thresholds.technicians) },
    { label: "Maintenance %", rating: rate(maint, thresholds.maintenancePct) },
  ];

  const overall =
    results.filter((r) => r.rating === "Top Quartile").length >= 2
      ? "Top Quartile"
      : results.filter((r) => r.rating === "Bottom Quartile").length >= 2
        ? "Bottom Quartile"
        : "Average";

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <h3 className="font-display text-lg font-semibold text-ink">Benchmark Your HVAC Business</h3>
      <p className="mt-2 text-sm text-ink-muted">
        Compare your company against industry quartiles.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
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
          <span className="text-sm font-medium text-ink-muted">Net Profit Margin (%)</span>
          <input
            type="number"
            step="0.1"
            value={margin}
            onChange={(e) => setMargin(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink-muted">Field Technicians</span>
          <input
            type="number"
            value={technicians}
            onChange={(e) => setTechnicians(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink-muted">Maintenance Revenue (%)</span>
          <input
            type="number"
            value={maintenance}
            onChange={(e) => setMaintenance(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
          />
        </label>
      </div>

      <div className="mt-8 rounded-xl border border-border bg-surface-muted/50 p-5 sm:p-6">
        <div className="flex flex-col gap-3 border-b border-border-subtle pb-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-ink-muted">Your overall rating</p>
          <span
            className={`inline-flex w-fit items-center rounded-full border px-4 py-2 text-base font-bold whitespace-nowrap ${ratingStyles[overall]}`}
          >
            {overall}
          </span>
        </div>
        <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {results.map((r) => (
            <li
              key={r.label}
              className="flex flex-col gap-2 rounded-lg border border-border bg-surface px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="text-sm font-medium text-ink">{r.label}</span>
              <span
                className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-semibold whitespace-nowrap ${ratingStyles[r.rating]}`}
              >
                {r.rating}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <BenchmarkSourceFootnote
        sampleSize={hvacAttribution.sampleSize}
        dataVintage={hvacAttribution.dataVintage}
        className="mt-4"
      />
    </div>
  );
}
