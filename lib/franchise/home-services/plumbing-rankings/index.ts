import { buildAllFranchiseRankings, type FranchiseRankingIndustryConfig } from "@/lib/franchise/beauty/build-franchise-rankings";

const sources = [
  "Franchise Disclosure Document (FDD) Item 5–7 ranges (brand / licensed systems)",
  "BizMetricsHQ plumbing operator panel (directional)",
  "Public franchise directories and licensed program disclosures",
  "U.S. plumbing industry benchmarks 2025–2026",
] as const;

const config: FranchiseRankingIndustryConfig = {
  industryKey: "plumbing",
  industryLabel: "Plumbing",
  industryLabelPlural: "Plumbing Businesses",
  noun: "plumbing",
  guideHref: "/franchise/home-services/plumbing/",
  rankingsBaseHref: "/franchise/home-services/plumbing/rankings/",
  sources,
  anchors: {
    investmentRange: "$100K – $400K+",
    medianInvestment: "$220K",
    franchiseFee: "$25K – $50K",
    royaltyCombined: "6 – 10%",
    unitRevenue: "$900K – $3.5M+",
    medianRevenue: "$1.8M",
    netMarginAfterFees: "8 – 15%",
    ebitda: "10 – 18%",
    ownerIncomeSingle: "$85K – $160K",
    payback: "3 – 5 years",
  },
  calculators: [
    { label: "Plumbing Revenue per Technician Calculator", href: "/calculators/plumbing-revenue-per-technician/" },
    { label: "Plumbing Profit Margin Calculator", href: "/calculators/plumbing-profit-margin/" },
    { label: "Plumbing Valuation Calculator", href: "/calculators/plumbing-valuation/" },
  ],
  compareHref: "/comparisons/plumbing-vs-hvac/",
  keywords: {
    best: ["best plumbing franchises", "best plumbing franchise to buy", "top plumbing franchise opportunities"],
    "lowest-cost": ["lowest investment plumbing franchise", "cheapest plumbing franchise", "plumbing franchise under 200k"],
    "highest-revenue": ["highest revenue plumbing franchise", "highest roi plumbing franchises", "how much does a plumbing franchise make"],
    "fastest-growing": ["fastest growing plumbing franchises", "plumbing franchise expansion 2026", "growing plumbing franchise networks"],
    "first-time": ["best plumbing franchise for veterans", "best plumbing franchise for first-time owners", "plumbing franchise for beginners"],
    "most-profitable": ["best plumbing franchise for existing contractors", "most profitable plumbing franchise", "plumbing contractor franchise conversion"],
  },
  brands: [
    {
      name: "Mr. Rooter",
      investment: "$150K – $350K",
      fee: "$35K – $48K",
      royalty: "5–7% + ads",
      units: "National",
      revenue: "$1.2M – $3.5M",
      netMargin: "9 – 15%",
      growth: "High",
      firstTimerFit: "Strong",
      notes: "Service-forward multi-truck model with strong drain and plumbing repair mix",
      costRank: 3,
      revenueRank: 1,
      growthRank: 1,
      firstTimerRank: 2,
      profitRank: 1,
      bestRank: 1,
      buyerFit: "Multi-truck residential plumbing service",
    },
    {
      name: "Benjamin Franklin Plumbing",
      investment: "$140K – $320K",
      fee: "$33K – $45K",
      royalty: "5–7% + ads",
      units: "National",
      revenue: "$1.1M – $3M",
      netMargin: "9 – 15%",
      growth: "High",
      firstTimerFit: "Excellent",
      notes: "Neighborly systems, training depth, first-timer friendly operations",
      costRank: 2,
      revenueRank: 2,
      growthRank: 2,
      firstTimerRank: 1,
      profitRank: 2,
      bestRank: 2,
      buyerFit: "First-time franchise owners",
    },
    {
      name: "Roto-Rooter",
      investment: "$125K – $300K+",
      fee: "Program / franchise varies",
      royalty: "Varies",
      units: "National / licensed",
      revenue: "$1M – $3.2M",
      netMargin: "8 – 14%",
      growth: "Moderate",
      firstTimerFit: "Good",
      notes: "Strongest brand recognition with drain-cleaning specialty and licensing options",
      costRank: 1,
      revenueRank: 3,
      growthRank: 3,
      firstTimerRank: 3,
      profitRank: 3,
      bestRank: 3,
      buyerFit: "Brand recognition and drain specialty",
    },
    {
      name: "Rooter-Man",
      investment: "$110K – $280K",
      fee: "$25K – $40K",
      royalty: "5–7% + ads",
      units: "Expanding",
      revenue: "$900K – $2.5M",
      netMargin: "8 – 14%",
      growth: "Moderate",
      firstTimerFit: "Good",
      notes: "Lower CapEx entry point for smaller-market operators",
      costRank: 4,
      revenueRank: 4,
      growthRank: 4,
      firstTimerRank: 4,
      profitRank: 4,
      bestRank: 4,
      buyerFit: "Lower CapEx operators",
    },
  ],
};

const built = buildAllFranchiseRankings(config);

const titleOverrides: Record<string, { title: string; cardLabel: string; description: string }> = {
  "lowest-cost-plumbing-franchises-2026": {
    title: "Lowest Investment Plumbing Franchises 2026",
    cardLabel: "Lowest Investment Plumbing Franchises",
    description:
      "Lowest investment plumbing franchises in 2026: compare cheapest plumbing franchise startup costs, licensed conversion paths, and total CapEx under $200K–$350K bands.",
  },
  "highest-revenue-plumbing-franchises-2026": {
    title: "Highest ROI Plumbing Franchises 2026",
    cardLabel: "Highest ROI Plumbing Franchises",
    description:
      "Highest ROI plumbing franchises in 2026: compare payback, cash-on-cash return, and after-royalty profitability across Mr. Rooter, Benjamin Franklin Plumbing, and licensed programs.",
  },
  "best-franchise-for-first-time-owners-2026": {
    title: "Best Plumbing Franchise for Veterans 2026",
    cardLabel: "Best Plumbing Franchise for Veterans",
    description:
      "Best plumbing franchise for veterans in 2026: training depth, operations support, financing pathways, and systems that help military entrepreneurs enter home services.",
  },
  "most-profitable-plumbing-franchises-2026": {
    title: "Best Plumbing Franchise for Existing Contractors 2026",
    cardLabel: "Best Plumbing Franchise for Existing Contractors",
    description:
      "Best plumbing franchise for existing contractors in 2026: conversion economics, licensed program pathways, royalties vs. buying power, and multi-truck growth options.",
  },
};

for (const [slug, override] of Object.entries(titleOverrides)) {
  const report = built.bySlug[slug];
  if (!report) continue;
  report.meta = {
    ...report.meta,
    title: override.title,
    description: override.description,
  };
}

export const plumbingFranchiseRankings = built.bySlug;
export const plumbingFranchiseRankingSlugs = built.slugs;

export const plumbingFranchiseRankingCards = built.slugs.map((slug) => {
  const { meta } = built.bySlug[slug];
  const override = titleOverrides[slug];
  return {
    label: override?.cardLabel ?? meta.title.replace(/\s+2026$/, ""),
    description: meta.subtitle,
    href: meta.href,
  };
});
