/** Shared market anchors for U.S. nail salon industry reports (2025–2026). */
export const nailSalonMarketAnchors = {
  industryMarketSize: "$15+ billion",
  establishments: "56,000+ nail salons",
  medianAnnualRevenue: "$200K – $450K",
  medianNetMargin: "10 – 17%",
  topQuartileNetMargin: "17 – 22%",
  averageTicket: "$45",
  ownerCompensation: "$45K – $95K",
  startupCostRange: "$70K – $180K",
  medianStartupCost: "$110K",
  sdeMultipleRange: "1.6× – 2.6×",
  medianSdeMultiple: "2.1×",
  manicurePedicureShare: "55%",
  gelDipShare: "28%",
  acrylicExtensionsShare: "12%",
  nailArtAddonsShare: "5% (fastest growing)",
  rebookingRate: "50 – 68%",
  retailAttachTarget: "3 – 7% of gross revenue",
  payrollShare: "42 – 50% of revenue",
  stationUtilizationTarget: "65 – 82%",
  visitsPerClientYear: "12 – 20",
  projectedCagr: "3 – 5% annually (2026–2034)",
} as const;

export const nailSalonReportSources = [
  "IBISWorld — Nail Salons (NAICS 812113)",
  "U.S. Bureau of Labor Statistics — Manicurists & Pedicurists employment and wages",
  "Professional Beauty Association — nail salon market size and consumer spending",
  "BizMetricsHQ — nail salon operator composite (180+ salons)",
  "Business-for-sale listings — nail salon & spa brokers (2023–2026)",
] as const;
