/** Shared market anchors for U.S. medical spa industry reports (2025–2026). */
export const medicalSpaMarketAnchors = {
  industryMarketSize: "$18+ billion",
  establishments: "11,000+ medical spas",
  medianAnnualRevenue: "$600K – $2.5M",
  medianNetMargin: "15 – 30%",
  medianEbitdaMargin: "18 – 28%",
  topQuartileNetMargin: "28 – 35%",
  averageTreatment: "$400",
  ownerCompensation: "$120K – $350K",
  startupCostRange: "$300K – $800K",
  medianStartupCost: "$500K",
  sdeMultipleRange: "3.0× – 5.5×",
  medianSdeMultiple: "4.0×",
  injectablesShare: "40 – 55%",
  laserShare: "20 – 30%",
  bodyContouringShare: "10 – 18%",
  membershipShare: "25 – 45%",
  rebookingRate: "55 – 72%",
  retailAttachTarget: "15 – 25% of gross revenue",
  payrollShare: "30 – 40% of revenue",
  roomUtilizationTarget: "55 – 75%",
  patientLtv: "$4K – $15K",
  marketingRoi: "3× – 6×",
  projectedCagr: "8 – 12% annually (2026–2034)",
} as const;

export const medicalSpaReportSources = [
  "American Med Spa Association (AmSpa) — industry size and operator surveys",
  "IBISWorld — Medical Spas (NAICS 621399)",
  "U.S. Bureau of Labor Statistics — healthcare practitioner employment and wages",
  "BizMetricsHQ — medical spa operator composite (120+ med spas)",
  "Business-for-sale listings — med spa & aesthetic brokers (2023–2026)",
] as const;
