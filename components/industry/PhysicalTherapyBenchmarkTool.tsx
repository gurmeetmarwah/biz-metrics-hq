"use client";

import { useState } from "react";
import { BenchmarkSourceFootnote } from "@/components/shared/DataSourcesAttribution";
import { physicalTherapyAttribution } from "@/lib/data-sources/physical-therapy";

type Thresholds = {
  revenue: { low: number; median: number; high: number };
  ebitdaMargin: { low: number; median: number; high: number };
  patientCount: { low: number; median: number; high: number };
  therapists: { low: number; median: number; high: number };
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

export function PhysicalTherapyBenchmarkTool({ thresholds }: { thresholds: Thresholds }) {
  const [revenue, setRevenue] = useState("850000");
  const [margin, setMargin] = useState("23");
  const [patients, setPatients] = useState("1400");
  const [therapists, setTherapists] = useState("3");

  const rev = parseFloat(revenue) || 0;
  const mar = parseFloat(margin) || 0;
  const pts = parseFloat(patients) || 0;
  const ptCount = parseFloat(therapists) || 0;

  const results = [
    { label: "Revenue", rating: rate(rev, thresholds.revenue) },
    { label: "EBITDA Margin", rating: rate(mar, thresholds.ebitdaMargin) },
    { label: "Active Patients", rating: rate(pts, thresholds.patientCount) },
    { label: "Therapists", rating: rate(ptCount, thresholds.therapists) },
  ];

  const overall =
    results.filter((r) => r.rating === "Top Quartile").length >= 2
      ? "Top Quartile"
      : results.filter((r) => r.rating === "Bottom Quartile").length >= 2
        ? "Bottom Quartile"
        : "Average";

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <h3 className="font-display text-lg font-semibold text-ink">Benchmark Your Clinic</h3>
      <p className="mt-2 text-sm text-ink-muted">
        Compare your physical therapy clinic against industry quartiles.
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
          <span className="text-sm font-medium text-ink-muted">EBITDA Margin (%)</span>
          <input
            type="number"
            step="0.1"
            value={margin}
            onChange={(e) => setMargin(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink-muted">Active Patients</span>
          <input
            type="number"
            value={patients}
            onChange={(e) => setPatients(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm tabular-nums text-ink focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink-muted">Therapists</span>
          <input
            type="number"
            value={therapists}
            onChange={(e) => setTherapists(e.target.value)}
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
        sampleSize={physicalTherapyAttribution.sampleSize}
        dataVintage={physicalTherapyAttribution.dataVintage}
        className="mt-4"
      />
    </div>
  );
}
