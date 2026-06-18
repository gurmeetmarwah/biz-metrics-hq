type DataTableProps = {
  title: string;
  columns: [string, string];
  rows: readonly { label: string; value: string }[];
};

export function DataTable({ title, columns, rows }: DataTableProps) {
  return (
    <div>
      <h3 className="font-display text-base font-semibold text-ink sm:text-lg">
        {title}
      </h3>
      <div className="mt-4 overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border-subtle bg-surface-muted/50">
              <th scope="col" className="px-4 py-3 text-left font-semibold text-ink">
                {columns[0]}
              </th>
              <th scope="col" className="px-4 py-3 text-right font-semibold text-ink">
                {columns[1]}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.label}
                className={i < rows.length - 1 ? "border-b border-border-subtle" : ""}
              >
                <td className="px-4 py-3 text-ink-muted">{row.label}</td>
                <td className="px-4 py-3 text-right font-semibold tabular-nums text-ink">
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
