import { buildAllFranchiseRankings, type FranchiseRankingIndustryConfig } from "@/lib/franchise/beauty/build-franchise-rankings";

const sources = [
  "Franchise Disclosure Document (FDD) Item 5–7 ranges (brand systems)",
  "BizMetricsHQ pest control operator panel (directional)",
  "NPMA — National Pest Management Association industry benchmarks",
  "Public franchise directories and disclosure documents",
  "U.S. pest control industry benchmarks 2025–2026",
] as const;

const config: FranchiseRankingIndustryConfig = {
  industryKey: "pest-control",
  industryLabel: "Pest Control",
  industryLabelPlural: "Pest Control Businesses",
  noun: "pest-control",
  guideHref: "/franchise/home-services/pest-control/",
  rankingsBaseHref: "/franchise/home-services/pest-control/rankings/",
  sources,
  anchors: {
    investmentRange: "$75K – $300K+",
    medianInvestment: "$160K",
    franchiseFee: "$20K – $45K",
    royaltyCombined: "6 – 10%",
    unitRevenue: "$400K – $2M+",
    medianRevenue: "$950K",
    netMarginAfterFees: "12 – 22%",
    ebitda: "14 – 24%",
    ownerIncomeSingle: "$75K – $175K",
    payback: "2.5 – 4.5 years",
  },
  calculators: [
    { label: "Pest Control Route Density Calculator", href: "/calculators/pest-control-route-density/" },
    { label: "Pest Control Profit Margin Calculator", href: "/calculators/pest-control-profit-margin/" },
    { label: "Pest Control Valuation Calculator", href: "/calculators/pest-control-valuation/" },
  ],
  compareHref: "/industries/pest-control/",
  keywords: {
    best: ["best pest control franchises", "best pest control franchise to buy", "top pest control franchise opportunities"],
    "lowest-cost": ["lowest investment pest control franchise", "cheapest pest control franchise", "pest control franchise under 150k"],
    "highest-revenue": ["highest revenue pest control franchise", "highest roi pest control franchises", "how much does a pest control franchise make"],
    "fastest-growing": ["fastest growing pest control franchises", "pest control franchise expansion 2026", "growing pest control franchise networks"],
    "first-time": ["best pest control franchise for veterans", "best pest control franchise for first-time owners", "pest control franchise for beginners"],
    "most-profitable": ["best pest control franchise for existing operators", "most profitable pest control franchise", "pest control operator franchise conversion"],
  },
  brands: [
    {
      name: "Orkin",
      investment: "$150K – $300K+",
      fee: "Program / franchise fees vary",
      royalty: "Varies",
      units: "National",
      revenue: "$800K – $2M+",
      netMargin: "13 – 22%",
      growth: "Moderate",
      firstTimerFit: "Good",
      notes: "Brand recognition and recurring route density drive strong mature-unit economics",
      costRank: 4,
      revenueRank: 1,
      growthRank: 2,
      firstTimerRank: 3,
      profitRank: 1,
      bestRank: 1,
      buyerFit: "Brand + recurring routes",
    },
    {
      name: "Terminix",
      investment: "$140K – $280K",
      fee: "Program / franchise fees vary",
      royalty: "Varies",
      units: "National",
      revenue: "$700K – $1.8M",
      netMargin: "12 – 20%",
      growth: "Moderate",
      firstTimerFit: "Good",
      notes: "National brand density supports lead flow and route stacking",
      costRank: 3,
      revenueRank: 2,
      growthRank: 3,
      firstTimerRank: 4,
      profitRank: 2,
      bestRank: 2,
      buyerFit: "National brand density",
    },
    {
      name: "Aptive Environmental",
      investment: "$100K – $220K",
      fee: "$30K – $45K",
      royalty: "5–8% + ads",
      units: "Fast-growing",
      revenue: "$500K – $1.5M",
      netMargin: "13 – 21%",
      growth: "High",
      firstTimerFit: "Excellent",
      notes: "Sales-led growth engine and turnkey systems suit first-timers chasing growth",
      costRank: 2,
      revenueRank: 3,
      growthRank: 1,
      firstTimerRank: 1,
      profitRank: 3,
      bestRank: 3,
      buyerFit: "First-timers / growth",
    },
    {
      name: "Mosquito Joe",
      investment: "$80K – $175K",
      fee: "$25K – $40K",
      royalty: "6–8% + ads",
      units: "National",
      revenue: "$400K – $1.2M",
      netMargin: "12 – 20%",
      growth: "Moderate",
      firstTimerFit: "Good",
      notes: "Seasonal mosquito specialty keeps CapEx and fleet requirements lower",
      costRank: 1,
      revenueRank: 4,
      growthRank: 4,
      firstTimerRank: 2,
      profitRank: 4,
      bestRank: 4,
      buyerFit: "Seasonal mosquito specialty / lower CapEx",
    },
  ],
};

const built = buildAllFranchiseRankings(config);

const titleOverrides: Record<string, { title: string; cardLabel: string; description: string }> = {
  "lowest-cost-pest-control-franchises-2026": {
    title: "Lowest Investment Pest Control Franchises 2026",
    cardLabel: "Lowest Investment Pest Control Franchises",
    description:
      "Lowest investment pest control franchises in 2026: compare cheapest pest control franchise startup costs, vehicle/equipment CapEx, and total launch budgets under $150K–$250K bands.",
  },
  "highest-revenue-pest-control-franchises-2026": {
    title: "Highest ROI Pest Control Franchises 2026",
    cardLabel: "Highest ROI Pest Control Franchises",
    description:
      "Highest ROI pest control franchises in 2026: compare payback, cash-on-cash return, and after-royalty profitability across Orkin, Terminix, Aptive, and Mosquito Joe.",
  },
  "best-franchise-for-first-time-owners-2026": {
    title: "Best Pest Control Franchise for Veterans 2026",
    cardLabel: "Best Pest Control Franchise for Veterans",
    description:
      "Best pest control franchise for veterans in 2026: training depth, route-building support, financing pathways, and systems that help military entrepreneurs enter pest control.",
  },
  "most-profitable-pest-control-franchises-2026": {
    title: "Best Pest Control Franchise for Existing Operators 2026",
    cardLabel: "Best Pest Control Franchise for Existing Operators",
    description:
      "Best pest control franchise for existing operators in 2026: conversion economics, recurring route density, royalties vs. buying power, and multi-territory growth options.",
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

export const pestControlFranchiseRankings = built.bySlug;
export const pestControlFranchiseRankingSlugs = built.slugs;

export const pestControlFranchiseRankingCards = built.slugs.map((slug) => {
  const { meta } = built.bySlug[slug];
  const override = titleOverrides[slug];
  return {
    label: override?.cardLabel ?? meta.title.replace(/\s+2026$/, ""),
    description: meta.subtitle,
    href: meta.href,
  };
});
