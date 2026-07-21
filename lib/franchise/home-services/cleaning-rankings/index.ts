import { buildAllFranchiseRankings, type FranchiseRankingIndustryConfig } from "@/lib/franchise/beauty/build-franchise-rankings";

const sources = [
  "Franchise Disclosure Document (FDD) Item 5–7 ranges (brand systems)",
  "BizMetricsHQ residential cleaning operator panel (directional)",
  "Public franchise directories and cleaning franchise development disclosures",
  "U.S. residential cleaning industry benchmarks 2025–2026",
] as const;

const config: FranchiseRankingIndustryConfig = {
  industryKey: "cleaning",
  industryLabel: "Cleaning",
  industryLabelPlural: "Cleaning Businesses",
  noun: "cleaning",
  guideHref: "/franchise/home-services/cleaning/",
  rankingsBaseHref: "/franchise/home-services/cleaning/rankings/",
  sources,
  anchors: {
    investmentRange: "$50K – $200K+",
    medianInvestment: "$110K",
    franchiseFee: "$15K – $35K",
    royaltyCombined: "5 – 9%",
    unitRevenue: "$250K – $1.2M+",
    medianRevenue: "$550K",
    netMarginAfterFees: "10 – 20%",
    ebitda: "12 – 22%",
    ownerIncomeSingle: "$60K – $130K",
    payback: "2 – 4 years",
  },
  calculators: [
    { label: "Cleaning Business Revenue per Cleaner Calculator", href: "/calculators/cleaning-business-revenue-per-cleaner/" },
    { label: "Cleaning Business Profit Margin Calculator", href: "/calculators/cleaning-business-profit-margin/" },
    { label: "Cleaning Business Valuation Calculator", href: "/calculators/cleaning-business-valuation/" },
  ],
  compareHref: "/industries/cleaning-business/",
  keywords: {
    best: ["best cleaning franchises", "best cleaning franchise to buy", "top cleaning franchise opportunities"],
    "lowest-cost": ["lowest investment cleaning franchise", "cheapest cleaning franchise", "cleaning franchise under 100k"],
    "highest-revenue": ["highest revenue cleaning franchise", "highest roi cleaning franchises", "how much does a cleaning franchise make"],
    "fastest-growing": ["fastest growing cleaning franchises", "cleaning franchise expansion 2026", "growing cleaning franchise networks"],
    "first-time": ["best cleaning franchise for veterans", "best cleaning franchise for first-time owners", "cleaning franchise for beginners"],
    "most-profitable": ["most profitable cleaning franchise", "best cleaning franchise for multi-unit operators", "cleaning franchise profit margin"],
  },
  brands: [
    {
      name: "Merry Maids",
      investment: "$70K – $150K",
      fee: "$25K – $35K",
      royalty: "5–7% + ads",
      units: "National",
      revenue: "$300K – $900K",
      netMargin: "12 – 20%",
      growth: "High",
      firstTimerFit: "Strong",
      notes: "Recurring residential cleaning brand with strong national recognition and franchisee support",
      costRank: 3,
      revenueRank: 1,
      growthRank: 2,
      firstTimerRank: 2,
      profitRank: 1,
      bestRank: 1,
      buyerFit: "Residential recurring service households",
    },
    {
      name: "Molly Maid",
      investment: "$65K – $140K",
      fee: "$20K – $30K",
      royalty: "5–7% + ads",
      units: "National",
      revenue: "$280K – $850K",
      netMargin: "11 – 19%",
      growth: "High",
      firstTimerFit: "Excellent",
      notes: "Neighborly systems brand well suited to first-time franchise owners",
      costRank: 2,
      revenueRank: 2,
      growthRank: 1,
      firstTimerRank: 1,
      profitRank: 2,
      bestRank: 2,
      buyerFit: "First-time franchise owners",
    },
    {
      name: "The Cleaning Authority",
      investment: "$80K – $175K",
      fee: "$25K – $35K",
      royalty: "5–7% + ads",
      units: "National",
      revenue: "$350K – $1.1M",
      netMargin: "10 – 18%",
      growth: "Moderate",
      firstTimerFit: "Good",
      notes: "Team-cleaning system combining structured processes with a residential service mix",
      costRank: 4,
      revenueRank: 3,
      growthRank: 3,
      firstTimerRank: 3,
      profitRank: 3,
      bestRank: 3,
      buyerFit: "Systems-driven residential operators",
    },
    {
      name: "MaidPro",
      investment: "$55K – $125K",
      fee: "$15K – $28K",
      royalty: "5–7% + ads",
      units: "National",
      revenue: "$250K – $750K",
      netMargin: "10 – 17%",
      growth: "Moderate",
      firstTimerFit: "Good",
      notes: "Lower investment entry point with a lean operating model",
      costRank: 1,
      revenueRank: 4,
      growthRank: 4,
      firstTimerRank: 4,
      profitRank: 4,
      bestRank: 4,
      buyerFit: "Budget-conscious first-time owners",
    },
  ],
};

const built = buildAllFranchiseRankings(config);

const titleOverrides: Record<string, { title: string; cardLabel: string; description: string }> = {
  "lowest-cost-cleaning-franchises-2026": {
    title: "Lowest Investment Cleaning Franchises 2026",
    cardLabel: "Lowest Investment Cleaning Franchises",
    description:
      "Lowest investment cleaning franchises in 2026: compare cheapest cleaning franchise startup costs, lean fleet requirements, and total CapEx under $100K–$175K bands.",
  },
  "highest-revenue-cleaning-franchises-2026": {
    title: "Highest ROI Cleaning Franchises 2026",
    cardLabel: "Highest ROI Cleaning Franchises",
    description:
      "Highest ROI cleaning franchises in 2026: compare payback, cash-on-cash return, and after-royalty profitability across Merry Maids, Molly Maid, The Cleaning Authority, and MaidPro.",
  },
  "best-franchise-for-first-time-owners-2026": {
    title: "Best Cleaning Franchise for Veterans 2026",
    cardLabel: "Best Cleaning Franchise for Veterans",
    description:
      "Best cleaning franchise for veterans in 2026: training depth, operations support, financing pathways, and systems that help military entrepreneurs enter residential cleaning.",
  },
  "most-profitable-cleaning-franchises-2026": {
    title: "Best Cleaning Franchise for Multi-Unit Operators 2026",
    cardLabel: "Best Cleaning Franchise for Multi-Unit Operators",
    description:
      "Best cleaning franchise for multi-unit operators in 2026: recurring-revenue economics, territory density, royalties vs. buying power, and multi-territory growth options.",
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

export const cleaningFranchiseRankings = built.bySlug;
export const cleaningFranchiseRankingSlugs = built.slugs;

export const cleaningFranchiseRankingCards = built.slugs.map((slug) => {
  const { meta } = built.bySlug[slug];
  const override = titleOverrides[slug];
  return {
    label: override?.cardLabel ?? meta.title.replace(/\s+2026$/, ""),
    description: meta.subtitle,
    href: meta.href,
  };
});
