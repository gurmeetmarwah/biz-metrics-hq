import { buildAllFranchiseRankings, type FranchiseRankingIndustryConfig } from "@/lib/franchise/beauty/build-franchise-rankings";

const sources = [
  "Franchise Disclosure Document (FDD) Item 5–7 ranges (swim school / aquatics learning systems)",
  "BizMetricsHQ swim school operator panel (directional)",
  "Public franchise directories and swim school franchise development disclosures",
  "U.S. aquatics and learn-to-swim industry benchmarks 2025–2026",
] as const;

const config: FranchiseRankingIndustryConfig = {
  industryKey: "swim-school",
  industryLabel: "Swim School",
  industryLabelPlural: "Swim Schools",
  noun: "swim-school",
  guideHref: "/franchise/fitness/swim-school/",
  rankingsBaseHref: "/franchise/fitness/swim-school/rankings/",
  sources,
  anchors: {
    investmentRange: "$200K – $1.2M+",
    medianInvestment: "$450K",
    franchiseFee: "$40K – $70K",
    royaltyCombined: "6 – 10%",
    unitRevenue: "$400K – $2M+",
    medianRevenue: "$850K",
    netMarginAfterFees: "12 – 22%",
    ebitda: "15 – 25%",
    ownerIncomeSingle: "$80K – $180K",
    payback: "3 – 5 years",
  },
  calculators: [
    { label: "Gym Revenue Calculator", href: "/calculators/gym-revenue/" },
    { label: "Gym Member LTV Calculator", href: "/calculators/gym-member-lifetime-value/" },
    { label: "Gym Valuation Calculator", href: "/calculators/gym-valuation/" },
  ],
  compareHref: "/comparisons/martial-arts-school-vs-swim-school/",
  keywords: {
    best: ["best swim school franchises", "best swim school franchise to buy", "top swim school franchise opportunities"],
    "lowest-cost": ["lowest cost swim school franchises", "cheapest swim school franchise", "swim school franchise under budget"],
    "highest-revenue": ["highest revenue swim school franchise", "highest roi swim school franchises", "how much does a swim school franchise make"],
    "fastest-growing": ["fastest growing swim school franchises", "swim school franchise expansion 2026", "hot swim school franchise opportunities"],
    "first-time": ["best swim school franchise for first-time owners", "swim school franchise for beginners", "easiest swim school franchise to open"],
    "most-profitable": ["most profitable swim school franchise", "highest roi swim school franchise", "swim school franchise profit margin"],
  },
  brands: [
    {
      name: "British Swim School",
      investment: "$200K – $500K",
      fee: "$50K",
      royalty: "8% + ads",
      units: "National",
      revenue: "$500K – $1.5M",
      netMargin: "14 – 22%",
      growth: "High",
      firstTimerFit: "Excellent",
      notes: "Host-pool model at hotels and gyms keeps CapEx and build-out low",
      costRank: 1,
      revenueRank: 2,
      growthRank: 1,
      firstTimerRank: 1,
      profitRank: 1,
      bestRank: 1,
      buyerFit: "Capital-efficient operators using host pools",
    },
    {
      name: "Goldfish Swim School",
      investment: "$1M – $1.5M+",
      fee: "$50K – $70K",
      royalty: "9 – 10% + ads",
      units: "National",
      revenue: "$1M – $2.5M+",
      netMargin: "16 – 24%",
      growth: "High",
      firstTimerFit: "Good",
      notes: "Owned indoor pool facility drives premium pricing and highest revenue ceiling",
      costRank: 4,
      revenueRank: 1,
      growthRank: 2,
      firstTimerRank: 4,
      profitRank: 2,
      bestRank: 2,
      buyerFit: "Well-capitalized owners of standalone aquatic centers",
    },
    {
      name: "Aqua-Tots Swim Schools",
      investment: "$400K – $900K",
      fee: "$45K – $60K",
      royalty: "7 – 9% + ads",
      units: "National",
      revenue: "$600K – $1.8M",
      netMargin: "13 – 21%",
      growth: "Moderate",
      firstTimerFit: "Strong",
      notes: "Mid-size owned or leased pool footprint with a proven curriculum system",
      costRank: 3,
      revenueRank: 3,
      growthRank: 3,
      firstTimerRank: 3,
      profitRank: 3,
      bestRank: 3,
      buyerFit: "Owners targeting a mid-market indoor facility",
    },
    {
      name: "SafeSplash Swim Schools",
      investment: "$250K – $600K",
      fee: "$40K – $55K",
      royalty: "6 – 8% + ads",
      units: "Expanding",
      revenue: "$400K – $1.2M",
      netMargin: "12 – 20%",
      growth: "Moderate",
      firstTimerFit: "Good",
      notes: "SwimLabs technology-driven instruction supports a leaner entry footprint",
      costRank: 2,
      revenueRank: 4,
      growthRank: 4,
      firstTimerRank: 2,
      profitRank: 4,
      bestRank: 4,
      buyerFit: "Growth-stage operators entering emerging territories",
    },
  ],
};

const built = buildAllFranchiseRankings(config);

const titleOverrides: Record<string, { title: string; cardLabel: string; description: string }> = {
  "lowest-cost-swim-school-franchises-2026": {
    title: "Lowest Cost Swim School Franchises 2026",
    cardLabel: "Lowest Cost Swim School Franchises",
    description:
      "Lowest cost swim school franchises in 2026: compare cheapest swim school franchise startup costs, host-pool versus owned-pool models, and total CapEx from $200K.",
  },
  "highest-revenue-swim-school-franchises-2026": {
    title: "Highest ROI Swim School Franchises 2026",
    cardLabel: "Highest ROI Swim School Franchises",
    description:
      "Highest ROI swim school franchises in 2026: compare mature-unit revenue, lesson volume, and after-royalty profitability across British Swim School, Goldfish, Aqua-Tots, and SafeSplash / SwimLabs.",
  },
  "best-franchise-for-first-time-owners-2026": {
    title: "Best Swim School Franchise for First-Time Owners 2026",
    cardLabel: "Best Swim School Franchise for First-Time Owners",
    description:
      "Best swim school franchise for first-time owners in 2026: training depth, turnkey lesson-booking systems, and lower-execution-risk host-pool formats.",
  },
  "most-profitable-swim-school-franchises-2026": {
    title: "Best Year-Round Swim School Franchises 2026",
    cardLabel: "Best Year-Round Swim School Franchises",
    description:
      "Best year-round swim school franchises in 2026: how indoor, climate-controlled pool models compare on profitability and lesson-retention economics against seasonal outdoor operators.",
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

export const swimSchoolFranchiseRankings = built.bySlug;
export const swimSchoolFranchiseRankingSlugs = built.slugs;

export const swimSchoolFranchiseRankingCards = built.slugs.map((slug) => {
  const { meta } = built.bySlug[slug];
  const override = titleOverrides[slug];
  return {
    label: override?.cardLabel ?? meta.title.replace(/\s+2026$/, ""),
    description: meta.subtitle,
    href: meta.href,
  };
});
