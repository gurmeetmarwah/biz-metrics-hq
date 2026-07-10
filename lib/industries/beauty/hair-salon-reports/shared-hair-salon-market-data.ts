/** Shared market anchors for U.S. hair salon and beauty industry reports (2025–2026). */
export const hairSalonMarketAnchors = {
  industryMarketSize: "$60+ billion",
  establishments: "800,000+ salons & barbershops",
  medianAnnualRevenue: "$250K – $500K",
  medianNetMargin: "8 – 15%",
  topQuartileNetMargin: "16 – 22%",
  averageTicket: "$65",
  ownerCompensation: "$40K – $85K",
  startupCostRange: "$80K – $250K",
  medianStartupCost: "$120K",
  sdeMultipleRange: "1.8× – 3.0×",
  medianSdeMultiple: "2.3×",
  haircutStylingShare: "62%",
  hairColorShare: "23%",
  extensionsTreatmentsShare: "15% (fastest growing)",
  rebookingRate: "45 – 60%",
  retailAttachTarget: "10 – 15% of gross revenue",
  payrollShare: "45 – 50% of revenue",
  chairUtilizationTarget: "65 – 80%",
  projectedCagr: "3 – 5% annually (2026–2034)",
} as const;

export const hairSalonReportSources = [
  "IBISWorld — Hair & Nail Salons (NAICS 812112)",
  "U.S. Bureau of Labor Statistics — Hairdressers & Cosmetologists employment and wages",
  "Professional Beauty Association — market size and consumer spending",
  "BizMetricsHQ — hair salon operator composite (210+ salons)",
  "Business-for-sale listings — salon & spa brokers (2023–2026)",
] as const;
