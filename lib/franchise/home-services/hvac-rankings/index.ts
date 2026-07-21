import { buildAllFranchiseRankings, type FranchiseRankingIndustryConfig } from "@/lib/franchise/beauty/build-franchise-rankings";

const sources = [
  "Franchise Disclosure Document (FDD) Item 5–7 ranges (brand / dealer systems)",
  "BizMetricsHQ HVAC operator panel (directional)",
  "Public franchise directories and OEM dealer program disclosures",
  "U.S. HVAC industry benchmarks 2025–2026",
] as const;

const config: FranchiseRankingIndustryConfig = {
  industryKey: "hvac",
  industryLabel: "HVAC",
  industryLabelPlural: "HVAC Businesses",
  noun: "hvac",
  guideHref: "/franchise/home-services/hvac/",
  rankingsBaseHref: "/franchise/home-services/hvac/rankings/",
  sources,
  anchors: {
    investmentRange: "$125K – $500K+",
    medianInvestment: "$275K",
    franchiseFee: "$25K – $60K",
    royaltyCombined: "6 – 10%",
    unitRevenue: "$1.2M – $5M+",
    medianRevenue: "$2.4M",
    netMarginAfterFees: "8 – 16%",
    ebitda: "10 – 20%",
    ownerIncomeSingle: "$95K – $185K",
    payback: "3 – 5 years",
  },
  calculators: [
    { label: "HVAC Revenue per Technician Calculator", href: "/calculators/hvac-revenue-per-technician/" },
    { label: "HVAC Profit Margin Calculator", href: "/calculators/hvac-profit-margin/" },
    { label: "HVAC Valuation Calculator", href: "/calculators/hvac-valuation/" },
  ],
  compareHref: "/comparisons/hvac-vs-plumbing/",
  keywords: {
    best: ["best hvac franchises", "best hvac franchise to buy", "top hvac franchise opportunities"],
    "lowest-cost": ["lowest investment hvac franchise", "cheapest hvac franchise", "hvac franchise under 200k"],
    "highest-revenue": ["highest revenue hvac franchise", "highest roi hvac franchises", "how much does an hvac franchise make"],
    "fastest-growing": ["fastest growing hvac franchises", "hvac franchise expansion 2026", "growing hvac franchise networks"],
    "first-time": ["best hvac franchise for veterans", "best hvac franchise for first-time owners", "hvac franchise for beginners"],
    "most-profitable": ["best hvac franchise for existing contractors", "most profitable hvac franchise", "hvac contractor franchise conversion"],
  },
  brands: [
    {
      name: "One Hour Heating & Air Conditioning",
      investment: "$180K – $450K",
      fee: "$40K – $55K",
      royalty: "5–7% + ads",
      units: "National",
      revenue: "$1.8M – $5M+",
      netMargin: "9 – 16%",
      growth: "High",
      firstTimerFit: "Strong",
      notes: "Service-forward multi-truck model with strong scaling potential",
      costRank: 3,
      revenueRank: 1,
      growthRank: 1,
      firstTimerRank: 2,
      profitRank: 1,
      bestRank: 1,
      buyerFit: "Multi-unit residential service",
    },
    {
      name: "Aire Serv",
      investment: "$150K – $400K",
      fee: "$35K – $50K",
      royalty: "5–7% + ads",
      units: "National",
      revenue: "$1.4M – $4M",
      netMargin: "9 – 15%",
      growth: "High",
      firstTimerFit: "Excellent",
      notes: "Neighborly systems, training depth, first-timer friendly ops",
      costRank: 2,
      revenueRank: 2,
      growthRank: 2,
      firstTimerRank: 1,
      profitRank: 2,
      bestRank: 2,
      buyerFit: "First-time franchise owners",
    },
    {
      name: "Bryant Dealer Program",
      investment: "$125K – $350K+",
      fee: "Program / dealer fees",
      royalty: "Varies",
      units: "Dealer network",
      revenue: "$1.2M – $3.5M",
      netMargin: "10 – 16%",
      growth: "Moderate",
      firstTimerFit: "Good",
      notes: "OEM pathway suited to converting existing contractors",
      costRank: 1,
      revenueRank: 4,
      growthRank: 4,
      firstTimerRank: 4,
      profitRank: 3,
      bestRank: 3,
      buyerFit: "Existing HVAC contractors",
    },
    {
      name: "Lennox Premier Dealer",
      investment: "$125K – $375K+",
      fee: "Program / dealer fees",
      royalty: "Varies",
      units: "Dealer network",
      revenue: "$1.3M – $4M",
      netMargin: "10 – 16%",
      growth: "Moderate",
      firstTimerFit: "Good",
      notes: "Premium install brand equity for residential comfort systems",
      costRank: 4,
      revenueRank: 3,
      growthRank: 3,
      firstTimerRank: 3,
      profitRank: 4,
      bestRank: 4,
      buyerFit: "Install-focused contractors",
    },
  ],
};

const built = buildAllFranchiseRankings(config);

const titleOverrides: Record<string, { title: string; cardLabel: string; description: string }> = {
  "lowest-cost-hvac-franchises-2026": {
    title: "Lowest Investment HVAC Franchises 2026",
    cardLabel: "Lowest Investment HVAC Franchises",
    description:
      "Lowest investment HVAC franchises in 2026: compare cheapest HVAC franchise startup costs, dealer conversion paths, and total CapEx under $200K–$350K bands.",
  },
  "highest-revenue-hvac-franchises-2026": {
    title: "Highest ROI HVAC Franchises 2026",
    cardLabel: "Highest ROI HVAC Franchises",
    description:
      "Highest ROI HVAC franchises in 2026: compare payback, cash-on-cash return, and after-royalty profitability across One Hour, Aire Serv, and OEM dealer programs.",
  },
  "best-franchise-for-first-time-owners-2026": {
    title: "Best HVAC Franchise for Veterans 2026",
    cardLabel: "Best HVAC Franchise for Veterans",
    description:
      "Best HVAC franchise for veterans in 2026: training depth, operations support, financing pathways, and systems that help military entrepreneurs enter home services.",
  },
  "most-profitable-hvac-franchises-2026": {
    title: "Best HVAC Franchise for Existing Contractors 2026",
    cardLabel: "Best HVAC Franchise for Existing Contractors",
    description:
      "Best HVAC franchise for existing contractors in 2026: conversion economics, OEM dealer pathways, royalties vs. buying power, and multi-truck growth options.",
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

export const hvacFranchiseRankings = built.bySlug;
export const hvacFranchiseRankingSlugs = built.slugs;

export const hvacFranchiseRankingCards = built.slugs.map((slug) => {
  const { meta } = built.bySlug[slug];
  const override = titleOverrides[slug];
  return {
    label: override?.cardLabel ?? meta.title.replace(/\s+2026$/, ""),
    description: meta.subtitle,
    href: meta.href,
  };
});

