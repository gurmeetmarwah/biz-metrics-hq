import type { BenchmarkMetric } from "@/lib/benchmarks";

type BenchmarkRangeProps = {
  metric: BenchmarkMetric;
};

export function BenchmarkRange({ metric }: BenchmarkRangeProps) {
  return (
    <div className="flex min-h-[5.75rem] flex-col py-3.5">
      <div className="flex items-start justify-between gap-4">
        <dt className="shrink-0 text-sm text-ink-muted">{metric.label}</dt>
        <dd className="text-right">
          <span className="block text-sm font-semibold tracking-tight text-ink tabular-nums">
            {metric.range}
          </span>
          <span className="mt-0.5 block text-xs text-ink-faint">
            median {metric.median}
          </span>
        </dd>
      </div>
      <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-ink-faint">
        {metric.definition}
      </p>
    </div>
  );
}
