import Link from "next/link";
import type { CalculationEntry, IndustryAttribution } from "@/lib/data-sources/types";

type DataSourcesAttributionProps = {
  attribution: IndustryAttribution;
  calculations?: readonly CalculationEntry[];
  showMacroSources?: boolean;
  compact?: boolean;
};

export function DataSourcesAttribution({
  attribution,
  calculations,
  showMacroSources = false,
  compact = false,
}: DataSourcesAttributionProps) {
  const calcItems = calculations ?? attribution.calculations;

  return (
    <aside
      className={`rounded-2xl border border-border bg-surface-muted/40 ${compact ? "p-5" : "p-6 sm:p-8"}`}
      aria-label="Data sources and methodology"
    >
      <p className="text-xs font-semibold tracking-wider text-accent uppercase">
        Data Sources &amp; Methodology
      </p>
      <h2 className={`mt-2 font-display font-semibold text-ink ${compact ? "text-base" : "text-lg"}`}>
        How we calculate {attribution.industry.toLowerCase()} benchmarks
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
        Published in line with Google E-E-A-T guidelines: we disclose sample size, data vintage,
        primary sources, calculation formulas, and known limitations on every benchmark and calculator.
      </p>

      <dl className="mt-5 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-ink-faint">Sample size</dt>
          <dd className="font-medium text-ink">{attribution.sampleSize}</dd>
        </div>
        <div>
          <dt className="text-ink-faint">Data vintage</dt>
          <dd className="font-medium text-ink">{attribution.dataVintage}</dd>
        </div>
        <div>
          <dt className="text-ink-faint">Geography</dt>
          <dd className="font-medium text-ink">{attribution.geography}</dd>
        </div>
        <div>
          <dt className="text-ink-faint">Last updated</dt>
          <dd className="font-medium text-ink">{attribution.lastUpdated}</dd>
        </div>
        {attribution.naics && (
          <div className="sm:col-span-2">
            <dt className="text-ink-faint">NAICS codes</dt>
            <dd className="font-medium text-ink">{attribution.naics}</dd>
          </div>
        )}
      </dl>

      <div className="mt-6">
        <h3 className="text-sm font-semibold text-ink">Operator benchmark sources</h3>
        <ul className="mt-3 space-y-3">
          {attribution.operatorBenchmarkSources.map((source) => (
            <li key={source.name} className="text-sm">
              <span className="font-medium text-ink">{source.name}</span>
              <span className="text-ink-muted"> — {source.detail}</span>
            </li>
          ))}
        </ul>
      </div>

      {showMacroSources && attribution.macroSources && attribution.macroSources.length > 0 && (
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-ink">Industry &amp; macro data sources</h3>
          <ul className="mt-3 space-y-3">
            {attribution.macroSources.map((source) => (
              <li key={source.name} className="text-sm">
                <span className="font-medium text-ink">{source.name}</span>
                <span className="text-ink-muted"> — {source.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {calcItems.length > 0 && (
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-ink">
            {calcItems.length === 1 ? "Calculation formula" : "Calculation formulas"}
          </h3>
          <ul className="mt-3 space-y-4">
            {calcItems.map((calc) => (
              <li key={calc.label} className="rounded-xl border border-border bg-surface px-4 py-3 text-sm">
                <p className="font-medium text-ink">{calc.label}</p>
                <p className="mt-1 font-mono text-xs text-ink-muted">{calc.formula}</p>
                {calc.note && <p className="mt-2 text-ink-muted">{calc.note}</p>}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6">
        <h3 className="text-sm font-semibold text-ink">Limitations</h3>
        <ul className="mt-3 space-y-2">
          {attribution.limitations.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm text-ink-muted">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-ink-faint" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 text-sm text-ink-muted">
        Full methodology:{" "}
        <Link href="/methodology/" className="font-medium text-accent hover:underline">
          How BizMetricsHQ calculates benchmarks →
        </Link>
      </p>
    </aside>
  );
}

export function BenchmarkSourceFootnote({
  sampleSize,
  dataVintage,
  className = "",
}: {
  sampleSize: string;
  dataVintage: string;
  className?: string;
}) {
  return (
    <p className={`text-xs text-ink-faint ${className}`}>
      Source: BizMetricsHQ {sampleSize} ({dataVintage}).{" "}
      <Link href="/methodology/" className="text-accent hover:underline">
        Methodology
      </Link>
    </p>
  );
}
