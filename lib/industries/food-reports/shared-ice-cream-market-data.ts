/** Shared market anchors for ice cream shop food-format ranking reports (2025–2026). */
export const iceCreamMarketAnchors = {
  medianAnnualRevenue: "$720K",
  medianNetMargin: "17%",
  grossMarginRange: "55 – 68%",
  startupCostRange: "$110K – $320K",
  medianStartupCost: "$185K",
  peakSeasonRevenueShare: "38 – 45% of annual (summer)",
  offSeasonRevenueShare: "55 – 65% of annual",
  peakMonth: "July (14 – 18% of annual)",
  slowestMonth: "January (4 – 7% of annual)",
  averageTicket: "$8.40",
  sdeMultipleRange: "2.0× – 3.5×",
  medianSdeMultiple: "2.8×",
} as const;

export const iceCreamReportSources = [
  "IBISWorld — Ice Cream & Frozen Dessert Manufacturing / Snack Bars (NAICS 722515)",
  "BizMetricsHQ — ice cream shop operator composite (175+ shops)",
  "Business-for-sale listings — food & beverage brokers (2023–2026)",
  "Franchise disclosure documents — Cold Stone, Baskin-Robbins, regional concepts",
] as const;
