import type { ReportBlock, ReportSection } from "@/lib/industries/reports/types";

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <a
          key={i}
          href={linkMatch[2]}
          className="font-medium text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkMatch[1]}
        </a>
      );
    }
    return part;
  });
}

function ReportBlockView({ block }: { block: ReportBlock }) {
  if (block.type === "paragraph") {
    return (
      <p className="text-base leading-relaxed text-ink-muted">{renderInline(block.text)}</p>
    );
  }

  if (block.type === "stats") {
    return (
      <div className="overflow-hidden rounded-2xl border border-border bg-surface">
        <dl className="grid grid-cols-1 divide-y divide-border-subtle sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {block.items.map((item, i) => (
            <div
              key={item.label}
              className={`px-5 py-4 ${i >= 2 ? "sm:border-t sm:border-border-subtle" : ""}`}
            >
              <dt className="text-xs font-medium text-ink-faint">{item.label}</dt>
              <dd className="mt-1 text-lg font-bold tabular-nums text-ink">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    );
  }

  if (block.type === "table") {
    return (
      <div className="overflow-x-auto rounded-2xl border border-border bg-surface">
        <table className="w-full min-w-[480px] text-left text-sm">
          <thead>
            <tr className="border-b border-border-subtle bg-surface-muted/50">
              {block.headers.map((header) => (
                <th key={header} className="px-5 py-3.5 font-semibold text-ink">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, i) => (
              <tr
                key={i}
                className={i < block.rows.length - 1 ? "border-b border-border-subtle" : ""}
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-5 py-4 ${j === 0 ? "font-medium text-ink-muted" : "tabular-nums text-ink"}`}
                  >
                    {renderInline(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <ul className="space-y-2.5">
      {block.items.map((item) => (
        <li key={item} className="flex gap-3 text-base leading-relaxed text-ink-muted">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          <span>{renderInline(item)}</span>
        </li>
      ))}
    </ul>
  );
}

export function IndustryReportContent({ sections }: { sections: readonly ReportSection[] }) {
  return (
    <div className="space-y-16">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-24">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            {section.title}
          </h2>
          <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
          <div className="mt-8 space-y-6">
            {section.blocks.map((block, i) => (
              <ReportBlockView key={`${section.id}-${i}`} block={block} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
