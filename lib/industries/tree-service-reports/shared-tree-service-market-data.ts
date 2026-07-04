/** Shared market anchors for tree service ranking reports (2025–2026). */
export const treeServiceMarketAnchors = {
  usHomeServicesMarketSize: "$657B",
  outdoorTradesSegment:
    "Tree service, landscaping, lawn care, pool, pest control, excavation, and HVAC — project and route-based outdoor models",
  medianAnnualRevenue: "$1.25M",
  medianNetMargin: "21%",
  medianAvgJob: "$1,150",
  medianStartupCost: "$245K",
  startupCostRange: "$150K – $400K",
  medianSdeMultiple: "3.7×",
  sdeMultipleRange: "2.5× – 4.2×",
  sampleSize: "165+ tree service companies",
  emergencyRevenuePct: "15 – 35%",
  commercialRevenuePct: "20 – 40%",
  equipmentInvestment: "$120K – $280K",
  equipmentFocus:
    "Bucket trucks, chippers, and stump grinders create high barriers to entry but enable 45–62% gross margins on removal work — equipment utilization above 75% separates profitable crews from break-even operators",
} as const;

export const treeServiceReportSources = [
  "IBISWorld — Tree Trimming Services (NAICS 561730)",
  "BizMetricsHQ — tree service operator composite (165+ companies)",
  "Business-for-sale listings — home services brokers (2023–2026)",
  "ISA and TCIA — arborist certification and equipment benchmarks",
] as const;
