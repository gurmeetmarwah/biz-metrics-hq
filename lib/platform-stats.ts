import { countLiveIndustries, countTotalIndustries } from "@/lib/industry-directory";
import { liveBenchmarks } from "@/lib/metric-hubs/industry-benchmarks";

const CORE_METRICS = 4;

/** Client-safe platform counts (excludes sitemap page total). */
export function buildBasePlatformStats() {
  return {
    industries: countLiveIndustries(),
    industriesTotal: countTotalIndustries(),
    benchmarks: liveBenchmarks.length * CORE_METRICS,
    coreMetrics: CORE_METRICS,
  } as const;
}

export function buildPlatformQuickStats(stats: {
  industries: number;
  benchmarks: number;
  dataPages: number;
  coreMetrics: number;
}) {
  return [
    { value: String(stats.industries), label: "Industries" },
    { value: String(stats.benchmarks), label: "Benchmarks" },
    { value: String(stats.dataPages), label: "Data Pages" },
    { value: `${stats.coreMetrics} Core`, label: "Metrics" },
  ] as const;
}
