import { buildAllFranchiseRankings, type FranchiseRankingIndustryConfig } from "@/lib/franchise/beauty/build-franchise-rankings";

const sources = [
  "Franchise Disclosure Document (FDD) Item 5–7 ranges (yoga / boutique studio systems)",
  "BizMetricsHQ yoga studio operator panel (directional)",
  "Public franchise directories and yoga franchise development disclosures",
  "U.S. boutique fitness & wellness industry benchmarks 2025–2026",
] as const;

const config: FranchiseRankingIndustryConfig = {
  industryKey: "yoga",
  industryLabel: "Yoga",
  industryLabelPlural: "Yoga Studios",
  noun: "yoga",
  guideHref: "/franchise/fitness/yoga/",
  rankingsBaseHref: "/franchise/fitness/yoga/rankings/",
  sources,
  anchors: {
    investmentRange: "$150K – $550K",
    medianInvestment: "$320K",
    franchiseFee: "$30K – $60K",
    royaltyCombined: "6 – 9%",
    unitRevenue: "$300K – $1.2M+",
    medianRevenue: "$550K",
    netMarginAfterFees: "10 – 18%",
    ebitda: "13 – 20%",
    ownerIncomeSingle: "$60K – $140K",
    payback: "3 – 5 years",
  },
  calculators: [
    { label: "Yoga Studio Revenue Calculator", href: "/calculators/yoga-studio-revenue/" },
    { label: "Yoga Client Lifetime Value Calculator", href: "/calculators/yoga-client-lifetime-value/" },
    { label: "Yoga Studio Valuation Calculator", href: "/calculators/yoga-valuation/" },
  ],
  compareHref: "/comparisons/gym-vs-yoga-studio/",
  keywords: {
    best: [
      "top yoga franchises",
      "top yoga franchises 2026",
      "best yoga franchises",
      "best yoga franchise to buy",
      "top yoga franchise opportunities",
    ],
    "lowest-cost": ["lowest cost yoga franchises", "cheapest yoga franchise", "yoga franchise under budget"],
    "highest-revenue": ["highest revenue yoga franchise", "highest roi yoga franchises", "how much does a yoga franchise make"],
    "fastest-growing": ["fastest growing yoga franchises", "yoga franchise expansion 2026", "hot yoga franchise opportunities"],
    "first-time": ["best yoga franchise for first-time owners", "yoga franchise for beginners", "easiest yoga franchise to open"],
    "most-profitable": ["most profitable yoga franchise", "highest roi yoga franchise", "yoga franchise profit margin"],
  },
  brands: [
    {
      name: "YogaSix",
      investment: "$300K – $550K",
      fee: "$50K – $60K",
      royalty: "7% + ads",
      units: "National",
      revenue: "$500K – $1.2M",
      netMargin: "14 – 20%",
      growth: "Very High",
      firstTimerFit: "Strong",
      notes: "Largest boutique yoga franchise network with strong membership and retail systems",
      costRank: 3,
      revenueRank: 1,
      growthRank: 1,
      firstTimerRank: 2,
      profitRank: 1,
      bestRank: 1,
      buyerFit: "Boutique studio operators scaling multi-unit",
    },
    {
      name: "Hotworx",
      investment: "$180K – $400K",
      fee: "$40K – $50K",
      royalty: "7% + ads",
      units: "National (fast-growing)",
      revenue: "$350K – $900K",
      netMargin: "13 – 19%",
      growth: "High",
      firstTimerFit: "Excellent",
      notes: "Infrared sauna + virtual instructor-led workouts keep staffing costs low and margins high",
      costRank: 1,
      revenueRank: 3,
      growthRank: 2,
      firstTimerRank: 1,
      profitRank: 2,
      bestRank: 2,
      buyerFit: "Low-staff, high-margin 24/7 studio operators",
    },
    {
      name: "CorePower Yoga",
      investment: "$350K – $550K+",
      fee: "Program/varies",
      royalty: "varies",
      units: "National",
      revenue: "$550K – $1.2M",
      netMargin: "10 – 16%",
      growth: "Moderate",
      firstTimerFit: "Fair",
      notes: "Premium studio brand with strong teacher training pipeline and national footprint",
      costRank: 4,
      revenueRank: 2,
      growthRank: 3,
      firstTimerRank: 4,
      profitRank: 3,
      bestRank: 3,
      buyerFit: "Well-capitalized premium yoga studio operators",
    },
    {
      name: "Yoga Pod",
      investment: "$200K – $420K",
      fee: "$35K – $50K",
      royalty: "6–8% + ads",
      units: "Expanding",
      revenue: "$300K – $800K",
      netMargin: "8 – 14%",
      growth: "Moderate",
      firstTimerFit: "Good",
      notes: "Expanding boutique studio brand with flexible class formats and lower entry cost",
      costRank: 2,
      revenueRank: 4,
      growthRank: 4,
      firstTimerRank: 3,
      profitRank: 4,
      bestRank: 4,
      buyerFit: "Value-focused boutique yoga studio entrants",
    },
  ],
};

const built = buildAllFranchiseRankings(config);

const titleOverrides: Record<string, { title: string; cardLabel: string; description: string }> = {
  "best-yoga-franchises-2026": {
    title: "Top Yoga Franchises 2026",
    cardLabel: "Top Yoga Franchises",
    description:
      "Top yoga franchises in 2026 ranked: YogaSix, Hotworx, CorePower Yoga, and Yoga Pod compared on investment, fees, revenue, margins, and buyer fit.",
  },
  "lowest-cost-yoga-franchises-2026": {
    title: "Lowest Cost Yoga Franchises 2026",
    cardLabel: "Lowest Cost Yoga Franchises",
    description:
      "Lowest cost yoga franchises in 2026: compare cheapest yoga franchise startup costs, smaller-footprint studio models, and total CapEx from $150K.",
  },
  "highest-revenue-yoga-franchises-2026": {
    title: "Highest ROI Yoga Franchises 2026",
    cardLabel: "Highest ROI Yoga Franchises",
    description:
      "Highest ROI yoga franchises in 2026: compare mature-unit revenue, membership volume, and after-royalty profitability across YogaSix, Hotworx, CorePower Yoga, and Yoga Pod.",
  },
  "best-franchise-for-first-time-owners-2026": {
    title: "Best Yoga Franchise for First-Time Owners 2026",
    cardLabel: "Best Yoga Franchise for First-Time Owners",
    description:
      "Best yoga franchise for first-time owners in 2026: training depth, turnkey membership systems, and lower-execution-risk boutique studio formats.",
  },
  "most-profitable-yoga-franchises-2026": {
    title: "Best Boutique Yoga Franchises 2026",
    cardLabel: "Best Boutique Yoga Franchises",
    description:
      "Best boutique yoga franchises in 2026: how premium and infrared/virtual studio models compare on profitability and member economics.",
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

export const yogaFranchiseRankings = built.bySlug;
export const yogaFranchiseRankingSlugs = built.slugs;

export const yogaFranchiseRankingCards = built.slugs.map((slug) => {
  const { meta } = built.bySlug[slug];
  const override = titleOverrides[slug];
  return {
    label: override?.cardLabel ?? meta.title.replace(/\s+2026$/, ""),
    description: meta.subtitle,
    href: meta.href,
  };
});
