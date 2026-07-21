import { buildAllFranchiseRankings, type FranchiseRankingIndustryConfig } from "@/lib/franchise/beauty/build-franchise-rankings";

const sources = [
  "Franchise Disclosure Document (FDD) Item 5–7 ranges (gym / fitness club systems)",
  "BizMetricsHQ gym operator panel (directional)",
  "Public franchise directories and gym franchise development disclosures",
  "U.S. fitness industry benchmarks 2025–2026",
] as const;

const config: FranchiseRankingIndustryConfig = {
  industryKey: "gym",
  industryLabel: "Gym",
  industryLabelPlural: "Gyms",
  noun: "gym",
  guideHref: "/franchise/fitness/gym/",
  rankingsBaseHref: "/franchise/fitness/gym/rankings/",
  sources,
  anchors: {
    investmentRange: "$200K – $4M+",
    medianInvestment: "$550K",
    franchiseFee: "$25K – $60K",
    royaltyCombined: "5 – 9%",
    unitRevenue: "$400K – $3M+",
    medianRevenue: "$1.1M",
    netMarginAfterFees: "8 – 18%",
    ebitda: "12 – 22%",
    ownerIncomeSingle: "$80K – $200K",
    payback: "3 – 6 years",
  },
  calculators: [
    { label: "Gym Revenue Calculator", href: "/calculators/gym-revenue/" },
    { label: "Gym Member LTV Calculator", href: "/calculators/gym-member-lifetime-value/" },
    { label: "Gym Valuation Calculator", href: "/calculators/gym-valuation/" },
  ],
  compareHref: "/comparisons/gym-vs-crossfit/",
  keywords: {
    best: ["best gym franchises", "best gym franchise to buy", "top gym franchise opportunities"],
    "lowest-cost": ["lowest cost gym franchises", "cheapest gym franchise", "gym franchise under budget"],
    "highest-revenue": ["highest revenue gym franchise", "highest roi gym franchises", "how much does a gym franchise make"],
    "fastest-growing": ["fastest growing gym franchises", "gym franchise expansion 2026", "hot gym franchise opportunities"],
    "first-time": ["best gym franchise for first-time owners", "gym franchise for beginners", "easiest gym franchise to open"],
    "most-profitable": ["most profitable gym franchise", "highest roi gym franchise", "gym franchise profit margin"],
  },
  brands: [
    {
      name: "Anytime Fitness",
      investment: "$300K – $700K",
      fee: "$35K – $45K",
      royalty: "5% + ads",
      units: "National (4,000+)",
      revenue: "$500K – $1.5M",
      netMargin: "10 – 18%",
      growth: "High",
      firstTimerFit: "Excellent",
      notes: "Compact footprint, strong multi-unit playbook",
      costRank: 2,
      revenueRank: 2,
      growthRank: 2,
      firstTimerRank: 1,
      profitRank: 2,
      bestRank: 1,
      buyerFit: "24/7 multi-unit operators",
    },
    {
      name: "Planet Fitness",
      investment: "$1.5M – $4M+",
      fee: "Area/dev varies",
      royalty: "~7% + ads",
      units: "National",
      revenue: "$1.5M – $3.5M+",
      netMargin: "12 – 20%",
      growth: "High",
      firstTimerFit: "Good",
      notes: "Highest brand awareness and membership volume",
      costRank: 4,
      revenueRank: 1,
      growthRank: 1,
      firstTimerRank: 4,
      profitRank: 1,
      bestRank: 2,
      buyerFit: "High-volume low-price clubs",
    },
    {
      name: "Orangetheory Fitness",
      investment: "$500K – $1.2M",
      fee: "$60K",
      royalty: "8% + ads",
      units: "National",
      revenue: "$800K – $2M",
      netMargin: "10 – 16%",
      growth: "High",
      firstTimerFit: "Strong",
      notes: "Class-based membership model with high engagement",
      costRank: 3,
      revenueRank: 3,
      growthRank: 3,
      firstTimerRank: 2,
      profitRank: 3,
      bestRank: 3,
      buyerFit: "Boutique studio operators",
    },
    {
      name: "Snap Fitness",
      investment: "$200K – $500K",
      fee: "$25K – $40K",
      royalty: "5–6% + ads",
      units: "National",
      revenue: "$400K – $1.1M",
      netMargin: "9 – 16%",
      growth: "Moderate",
      firstTimerFit: "Excellent",
      notes: "Smaller box, lower total investment",
      costRank: 1,
      revenueRank: 4,
      growthRank: 4,
      firstTimerRank: 3,
      profitRank: 4,
      bestRank: 4,
      buyerFit: "Lower CapEx 24/7 gyms",
    },
  ],
};

const built = buildAllFranchiseRankings(config);

const titleOverrides: Record<string, { title: string; cardLabel: string; description: string }> = {
  "lowest-cost-gym-franchises-2026": {
    title: "Lowest Cost Gym Franchises 2026",
    cardLabel: "Lowest Cost Gym Franchises",
    description:
      "Lowest cost gym franchises in 2026: compare cheapest gym franchise startup costs, smaller-footprint 24/7 models, and total CapEx from $200K.",
  },
  "highest-revenue-gym-franchises-2026": {
    title: "Highest ROI Gym Franchises 2026",
    cardLabel: "Highest ROI Gym Franchises",
    description:
      "Highest ROI gym franchises in 2026: compare mature-unit revenue, membership volume, and after-royalty profitability across Anytime Fitness, Planet Fitness, Orangetheory, and Snap Fitness.",
  },
  "best-franchise-for-first-time-owners-2026": {
    title: "Best Gym Franchise for First-Time Owners 2026",
    cardLabel: "Best Gym Franchise for First-Time Owners",
    description:
      "Best gym franchise for first-time owners in 2026: training depth, turnkey membership systems, and lower-execution-risk 24/7 club formats.",
  },
  "most-profitable-gym-franchises-2026": {
    title: "Best Boutique Fitness Franchises 2026",
    cardLabel: "Best Boutique Fitness Franchises",
    description:
      "Best boutique fitness franchises in 2026: how Orangetheory-style class-based studio models compare on profitability and member economics against big-box gyms.",
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

export const gymFranchiseRankings = built.bySlug;
export const gymFranchiseRankingSlugs = built.slugs;

export const gymFranchiseRankingCards = built.slugs.map((slug) => {
  const { meta } = built.bySlug[slug];
  const override = titleOverrides[slug];
  return {
    label: override?.cardLabel ?? meta.title.replace(/\s+2026$/, ""),
    description: meta.subtitle,
    href: meta.href,
  };
});
