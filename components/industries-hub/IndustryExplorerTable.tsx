"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { industryProfiles } from "@/lib/industries-hub";

type SortKey = "name" | "revenue" | "margin" | "salary" | "valuation";
type SortDir = "asc" | "desc";

const columns: { key: SortKey; label: string; align?: "right" }[] = [
  { key: "name", label: "Industry" },
  { key: "revenue", label: "Revenue", align: "right" },
  { key: "margin", label: "Margin", align: "right" },
  { key: "salary", label: "Salary", align: "right" },
  { key: "valuation", label: "Valuation", align: "right" },
];

export function IndustryExplorerTable() {
  const [sortKey, setSortKey] = useState<SortKey>("revenue");
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  const sorted = useMemo(() => {
    const sortField = `${sortKey}Sort` as keyof (typeof industryProfiles)[0];
    return [...industryProfiles]
      .filter((p) => p.live)
      .sort((a, b) => {
        if (sortKey === "name") {
          const cmp = a.name.localeCompare(b.name);
          return sortDir === "asc" ? cmp : -cmp;
        }
        const aVal = a[sortField] as number;
        const bVal = b[sortField] as number;
        return sortDir === "asc" ? aVal - bVal : bVal - aVal;
      });
  }, [sortKey, sortDir]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir(key === "name" ? "asc" : "desc");
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-muted/50">
              {columns.map((col) => (
                <th key={col.key} className={`px-4 py-3 sm:px-5 ${col.align === "right" ? "text-right" : ""}`}>
                  <button
                    type="button"
                    onClick={() => toggleSort(col.key)}
                    className="inline-flex items-center gap-1 font-semibold text-ink-muted hover:text-ink"
                  >
                    {col.label}
                    {sortKey === col.key && (
                      <span className="text-accent" aria-hidden="true">
                        {sortDir === "asc" ? "↑" : "↓"}
                      </span>
                    )}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border-subtle">
            {sorted.map((row) => (
              <tr key={row.slug} className="transition-colors hover:bg-surface-muted/30">
                <td className="px-4 py-3.5 sm:px-5">
                  <Link href={row.href} className="font-medium text-ink hover:text-accent">
                    {row.name}
                  </Link>
                  <span className="mt-0.5 block text-xs text-ink-faint">{row.category}</span>
                </td>
                <td className="px-4 py-3.5 text-right font-medium tabular-nums text-ink sm:px-5">
                  {row.revenue}
                </td>
                <td className="px-4 py-3.5 text-right font-medium tabular-nums text-metric-margin sm:px-5">
                  {row.margin}
                </td>
                <td className="px-4 py-3.5 text-right font-medium tabular-nums text-metric-salary sm:px-5">
                  {row.salary}
                </td>
                <td className="px-4 py-3.5 text-right font-medium tabular-nums text-metric-valuation sm:px-5">
                  {row.valuation}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
