import { buildAllFranchiseRankings, type FranchiseRankingIndustryConfig } from "@/lib/franchise/beauty/build-franchise-rankings";

const sources = [
  "CrossFit, Inc. affiliate agreement terms and annual dues disclosures (directional)",
  "Franchise Disclosure Document (FDD) Item 5–7 ranges (functional fitness / HIIT franchise systems)",
  "BizMetricsHQ functional fitness operator panel (directional)",
  "Public franchise directories and box/studio development disclosures",
  "U.S. fitness industry benchmarks 2025–2026",
] as const;

const config: FranchiseRankingIndustryConfig = {
  industryKey: "crossfit",
  industryLabel: "CrossFit",
  industryLabelPlural: "CrossFit Affiliates & Functional Fitness Franchises",
  noun: "crossfit",
  guideHref: "/franchise/fitness/crossfit/",
  rankingsBaseHref: "/franchise/fitness/crossfit/rankings/",
  sources,
  anchors: {
    investmentRange: "$100K – $450K+",
    medianInvestment: "$250K",
    franchiseFee: "$3K–$50K (affiliate vs franchise)",
    royaltyCombined: "Affiliate dues / 6–9%",
    unitRevenue: "$250K – $1.2M+",
    medianRevenue: "$520K",
    netMarginAfterFees: "10 – 20%",
    ebitda: "12 – 22%",
    ownerIncomeSingle: "$65K – $150K",
    payback: "2.5 – 5 years",
  },
  calculators: [
    { label: "CrossFit Gym Revenue Calculator", href: "/calculators/crossfit-gym-revenue/" },
    { label: "CrossFit Member Lifetime Value Calculator", href: "/calculators/crossfit-member-lifetime-value/" },
    { label: "CrossFit Valuation Calculator", href: "/calculators/crossfit-valuation/" },
  ],
  compareHref: "/comparisons/gym-vs-crossfit/",
  keywords: {
    best: ["best crossfit franchises", "best crossfit affiliate to buy", "top functional fitness franchise opportunities"],
    "lowest-cost": ["lowest cost crossfit franchises", "cheapest crossfit affiliate to open", "crossfit franchise under budget"],
    "highest-revenue": ["highest revenue crossfit franchise", "highest roi crossfit franchises", "how much does a crossfit gym make"],
    "fastest-growing": ["fastest growing crossfit franchises", "functional fitness franchise expansion 2026", "hot HIIT franchise opportunities"],
    "first-time": ["best crossfit franchise for first-time owners", "crossfit franchise for beginners", "easiest functional fitness franchise to open"],
    "most-profitable": ["most profitable crossfit franchise", "highest roi functional fitness franchise", "crossfit franchise profit margin"],
  },
  brands: [
    {
      name: "CrossFit Affiliate",
      investment: "$120K – $350K",
      fee: "$3K – $5K/yr (affiliate fee, not a franchise fee)",
      royalty: "Annual affiliate dues (no % royalty)",
      units: "Global (10,000+ affiliates)",
      revenue: "$300K – $1M",
      netMargin: "12 – 20%",
      growth: "High",
      firstTimerFit: "Strong",
      notes: "Community-driven box model; low-cost affiliate agreement instead of a classic franchise fee/royalty stack",
      costRank: 1,
      revenueRank: 3,
      growthRank: 2,
      firstTimerRank: 2,
      profitRank: 2,
      bestRank: 1,
      buyerFit: "Coach-owners building a community box",
    },
    {
      name: "F45 Training",
      investment: "$250K – $450K",
      fee: "$50K",
      royalty: "7 – 8% + ads",
      units: "National",
      revenue: "$500K – $1.2M",
      netMargin: "14 – 22%",
      growth: "High",
      firstTimerFit: "Good",
      notes: "Group HIIT franchise with app-driven programming and a national ad fund",
      costRank: 4,
      revenueRank: 1,
      growthRank: 1,
      firstTimerRank: 3,
      profitRank: 1,
      bestRank: 2,
      buyerFit: "High-volume boutique HIIT studio operators",
    },
    {
      name: "9Round",
      investment: "$100K – $250K",
      fee: "$25K – $40K",
      royalty: "6 – 8% + ads",
      units: "National",
      revenue: "$250K – $700K",
      netMargin: "10 – 18%",
      growth: "Moderate",
      firstTimerFit: "Excellent",
      notes: "30-minute kickboxing circuit format built for first-time franchisees",
      costRank: 2,
      revenueRank: 4,
      growthRank: 3,
      firstTimerRank: 1,
      profitRank: 3,
      bestRank: 3,
      buyerFit: "First-timers wanting a simple circuit format",
    },
    {
      name: "D1 Training",
      investment: "$200K – $400K",
      fee: "$40K – $55K",
      royalty: "6 – 8% + ads",
      units: "Expanding",
      revenue: "$400K – $1M",
      netMargin: "9 – 16%",
      growth: "Moderate",
      firstTimerFit: "Moderate",
      notes: "Athletic performance training brand targeting competitive youth and adult markets",
      costRank: 3,
      revenueRank: 2,
      growthRank: 4,
      firstTimerRank: 4,
      profitRank: 4,
      bestRank: 4,
      buyerFit: "Performance-training multi-unit operators",
    },
  ],
};

const built = buildAllFranchiseRankings(config);

const titleOverrides: Record<string, { title: string; cardLabel: string; description: string }> = {
  "lowest-cost-crossfit-franchises-2026": {
    title: "Lowest Cost CrossFit Franchises 2026",
    cardLabel: "Lowest Cost CrossFit Franchises",
    description:
      "Lowest cost CrossFit franchises in 2026: compare the CrossFit affiliate agreement against F45, 9Round, and D1 Training total startup investment from $100K.",
  },
  "highest-revenue-crossfit-franchises-2026": {
    title: "Highest ROI CrossFit Franchises 2026",
    cardLabel: "Highest ROI CrossFit Franchises",
    description:
      "Highest ROI CrossFit franchises in 2026: compare mature-unit revenue, member volume, and after-fee profitability across CrossFit Affiliate, F45 Training, 9Round, and D1 Training.",
  },
  "best-franchise-for-first-time-owners-2026": {
    title: "Best CrossFit Franchise for First-Time Owners 2026",
    cardLabel: "Best CrossFit Franchise for First-Time Owners",
    description:
      "Best CrossFit franchise for first-time owners in 2026: training depth, turnkey circuit systems, and lower-execution-risk functional fitness formats.",
  },
  "most-profitable-crossfit-franchises-2026": {
    title: "Best Functional Fitness Franchises 2026",
    cardLabel: "Best Functional Fitness Franchises",
    description:
      "Best functional fitness franchises in 2026: how CrossFit-style affiliate economics compare on profitability and member economics against F45, 9Round, and D1 Training.",
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

export const crossfitFranchiseRankings = built.bySlug;
export const crossfitFranchiseRankingSlugs = built.slugs;

export const crossfitFranchiseRankingCards = built.slugs.map((slug) => {
  const { meta } = built.bySlug[slug];
  const override = titleOverrides[slug];
  return {
    label: override?.cardLabel ?? meta.title.replace(/\s+2026$/, ""),
    description: meta.subtitle,
    href: meta.href,
  };
});
