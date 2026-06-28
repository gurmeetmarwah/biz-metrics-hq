/** Shared market anchors for CrossFit affiliate ranking reports (2025–2026). */
export const crossfitMarketAnchors = {
  functionalFitnessMarketSize: "$4.8B",
  usAffiliateSegment: "15,000+ global affiliates · ~5,500 U.S. boxes",
  avgMonthlyDues: "$185/mo",
  avgClassOccupancy: "72 – 88%",
  medianAnnualRevenue: "$950K",
  medianMrr: "$72K/mo",
  communityRetentionFocus:
    "Tribal community retention — coach accountability, class culture, and member milestones anchor 18–28 month lifespans",
  coachProductivityBenchmark: "$125K – $210K revenue per coach annually",
} as const;

export const crossfitReportSources = [
  "IBISWorld — Gym, Health & Fitness Clubs (NAICS 713940)",
  "BizMetricsHQ — CrossFit affiliate composite (95+ operators)",
  "Health & Fitness Association (HFA) — boutique fitness context",
  "CrossFit affiliate business-for-sale comps (2023–2026)",
] as const;
