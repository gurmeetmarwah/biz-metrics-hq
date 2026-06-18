type Row = { metric: string; value: string };

type QuickSummaryTableProps = {
  title: string;
  rows: readonly Row[];
  footnote?: string;
};

export function QuickSummaryTable({
  title,
  rows,
  footnote = "Ranges reflect 25th–75th percentile across 680+ U.S. independent restaurants.",
}: QuickSummaryTableProps) {
  return (
    <section className="border-b border-border/60 bg-surface-muted/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
          {title}
        </h2>
        <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border-subtle bg-surface-muted/50">
                <th scope="col" className="px-5 py-3.5 font-semibold text-ink sm:px-6">
                  Metric
                </th>
                <th scope="col" className="px-5 py-3.5 font-semibold text-ink sm:px-6">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.metric}
                  className={i < rows.length - 1 ? "border-b border-border-subtle" : ""}
                >
                  <td className="px-5 py-4 font-medium text-ink-muted sm:px-6">
                    {row.metric}
                  </td>
                  <td className="px-5 py-4 font-semibold tabular-nums text-ink sm:px-6">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-ink-faint">
          {footnote}{" "}
          <a href="/methodology/" className="text-accent hover:underline">
            See methodology
          </a>
        </p>
      </div>
    </section>
  );
}
