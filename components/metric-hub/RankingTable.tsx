import Link from "next/link";

type RankingRow = {
  rank: number;
  industry: string;
  median: string;
  range?: string;
  href: string;
};

type RankingTableProps = {
  rows: readonly RankingRow[];
  valueLabel: string;
};

export function RankingTable({ rows, valueLabel }: RankingTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border-subtle bg-surface-muted/50">
            <th className="px-5 py-3.5 text-left font-semibold text-ink w-16">Rank</th>
            <th className="px-5 py-3.5 text-left font-semibold text-ink">Industry</th>
            <th className="px-5 py-3.5 text-right font-semibold text-ink">{valueLabel}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.industry} className={i < rows.length - 1 ? "border-b border-border-subtle" : ""}>
              <td className="px-5 py-4 tabular-nums text-ink-faint">{row.rank}</td>
              <td className="px-5 py-4">
                <Link href={row.href} className="font-medium text-ink hover:text-accent">
                  {row.industry}
                </Link>
                {row.range && (
                  <p className="mt-0.5 text-xs text-ink-faint">{row.range}</p>
                )}
              </td>
              <td className="px-5 py-4 text-right font-semibold tabular-nums text-ink">{row.median}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
