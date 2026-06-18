import Link from "next/link";

type FlowItem = {
  label: string;
  percent: number;
  href: string;
  color: string;
};

export function CostStructureFlow({ items }: { items: readonly FlowItem[] }) {
  return (
    <div className="mx-auto max-w-md">
      <ul className="space-y-0">
        {items.map((item, i) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="group block rounded-xl border border-transparent px-4 py-3 transition-colors hover:border-border hover:bg-surface-muted/50"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span
                    className="size-3 rounded-sm"
                    style={{ background: item.color }}
                    aria-hidden="true"
                  />
                  <span className="font-semibold text-ink group-hover:text-accent">
                    {item.label}
                  </span>
                </div>
                <span className="tabular-nums text-sm font-semibold text-ink-muted">
                  {item.label === "Revenue" ? "100%" : `${item.percent}%`}
                </span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface-muted">
                <div
                  className="h-full rounded-full transition-all group-hover:opacity-100"
                  style={{
                    width: `${item.percent}%`,
                    background: item.color,
                    opacity: 0.75,
                  }}
                />
              </div>
            </Link>
            {i < items.length - 1 && (
              <div className="flex justify-center py-1 text-ink-faint" aria-hidden="true">
                ↓
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
