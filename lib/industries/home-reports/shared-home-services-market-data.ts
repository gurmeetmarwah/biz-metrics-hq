/** Shared market anchors for home services ranking reports (2025–2026). */
export const homeServicesMarketAnchors = {
  usHomeServicesMarketSize: "$657B",
  routeBasedSegment: "Pool, lawn, pest, HVAC, plumbing — recurring route and contract models",
  medianAnnualRevenue: "$950K",
  medianNetMargin: "22%",
  medianRecurringRevenuePct: "80%",
  medianMrr: "$58K/mo",
  medianStartupCost: "$95K",
  startupCostRange: "$65K – $165K",
  medianSdeMultiple: "3.6×",
  sdeMultipleRange: "3.0× – 4.5×",
  routeDensityBenchmark: "55 – 75 pools per technician per week in dense suburban routes",
  recurringRevenueFocus:
    "Monthly service contracts and autopay billing anchor 75–85% recurring revenue — route density and retention drive valuation premiums",
} as const;

export const homeServicesReportSources = [
  "IBISWorld — Swimming Pool Cleaning Services / Home Services (NAICS 561790)",
  "BizMetricsHQ — pool service operator composite (190+ companies)",
  "Business-for-sale listings — home services brokers (2023–2026)",
  "P.K. Data — U.S. swimming pool market context",
] as const;
