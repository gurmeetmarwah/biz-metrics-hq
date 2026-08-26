import { buildAllFranchiseRankings, type FranchiseRankingIndustryConfig } from "@/lib/franchise/beauty/build-franchise-rankings";

const sources = [
  "Franchise Disclosure Document (FDD) Item 5–7 ranges (Pilates / boutique reformer studio systems)",
  "BizMetricsHQ Pilates studio operator panel (directional)",
  "Public franchise directories and Pilates franchise development disclosures",
  "U.S. boutique fitness industry benchmarks 2025–2026",
] as const;

const config: FranchiseRankingIndustryConfig = {
  industryKey: "pilates",
  industryLabel: "Pilates",
  industryLabelPlural: "Pilates Studios",
  noun: "pilates",
  guideHref: "/franchise/fitness/pilates/",
  rankingsBaseHref: "/franchise/fitness/pilates/rankings/",
  sources,
  anchors: {
    investmentRange: "$250K – $700K",
    medianInvestment: "$420K",
    franchiseFee: "$50K – $70K",
    royaltyCombined: "7 – 10%",
    unitRevenue: "$400K – $1.4M+",
    medianRevenue: "$750K",
    netMarginAfterFees: "10 – 18%",
    ebitda: "14 – 22%",
    ownerIncomeSingle: "$70K – $160K",
    payback: "3 – 5 years",
  },
  calculators: [
    { label: "Pilates Studio Revenue Calculator", href: "/calculators/pilates-studio-revenue/" },
    { label: "Pilates Client Lifetime Value Calculator", href: "/calculators/pilates-client-lifetime-value/" },
    { label: "Pilates Valuation Calculator", href: "/calculators/pilates-valuation/" },
  ],
  compareHref: "/comparisons/gym-vs-pilates-studio/",
  keywords: {
    best: [
      "best pilates franchises",
      "best pilates franchises 2026",
      "best franchise for pilates",
      "best pilates franchise to buy",
      "best pilates franchise 2026",
      "top pilates franchise opportunities",
    ],
    "lowest-cost": [
      "lowest cost pilates franchises",
      "cheapest pilates franchise",
      "pilates franchise under budget",
      "cheapest franchise for pilates",
    ],
    "highest-revenue": [
      "highest revenue pilates franchise",
      "highest roi pilates franchises",
      "how much does a pilates franchise make",
    ],
    "fastest-growing": [
      "fastest growing pilates franchises",
      "pilates franchise expansion 2026",
      "hot pilates franchise opportunities",
    ],
    "first-time": [
      "best pilates franchise for first-time owners",
      "best franchise for pilates beginners",
      "pilates franchise for beginners",
      "easiest pilates franchise to open",
    ],
    "most-profitable": [
      "most profitable pilates franchise",
      "highest roi pilates franchise",
      "pilates franchise profit margin",
    ],
  },
  brands: [
    {
      name: "Club Pilates",
      investment: "$350K – $650K",
      fee: "$60K",
      royalty: "8% + ads",
      units: "National",
      revenue: "$600K – $1.4M",
      netMargin: "12 – 18%",
      growth: "High",
      firstTimerFit: "Strong",
      notes: "Largest reformer studio network, proven multi-unit playbook",
      costRank: 3,
      revenueRank: 1,
      growthRank: 1,
      firstTimerRank: 2,
      profitRank: 1,
      bestRank: 1,
      buyerFit: "Reformer boutique multi-unit operators",
    },
    {
      name: "Solidcore",
      investment: "$400K – $700K",
      fee: "$60K+",
      royalty: "9% + ads",
      units: "National",
      revenue: "$700K – $1.5M",
      netMargin: "11 – 17%",
      growth: "High",
      firstTimerFit: "Good",
      notes: "Megaformer intensity format with premium class pricing",
      costRank: 4,
      revenueRank: 2,
      growthRank: 2,
      firstTimerRank: 4,
      profitRank: 2,
      bestRank: 2,
      buyerFit: "High-intensity megaformer studio operators",
    },
    {
      name: "Kinrgy",
      investment: "$280K – $550K",
      fee: "$45K – $60K",
      royalty: "7–8% + ads",
      units: "Expanding",
      revenue: "$450K – $1M",
      netMargin: "10 – 16%",
      growth: "Moderate",
      firstTimerFit: "Excellent",
      notes: "Fusion format welcoming first-time studio owners",
      costRank: 2,
      revenueRank: 3,
      growthRank: 3,
      firstTimerRank: 1,
      profitRank: 3,
      bestRank: 3,
      buyerFit: "First-timers seeking a fusion studio format",
    },
    {
      name: "BodyBar Pilates",
      investment: "$250K – $480K",
      fee: "$40K – $55K",
      royalty: "6–8% + ads",
      units: "Expanding",
      revenue: "$400K – $900K",
      netMargin: "10 – 15%",
      growth: "Moderate",
      firstTimerFit: "Strong",
      notes: "Lower CapEx entry point into boutique Pilates ownership",
      costRank: 1,
      revenueRank: 4,
      growthRank: 4,
      firstTimerRank: 3,
      profitRank: 4,
      bestRank: 4,
      buyerFit: "Capital-conscious boutique studio buyers",
    },
  ],
};

const built = buildAllFranchiseRankings(config);

const titleOverrides: Record<string, { title: string; cardLabel: string; description: string }> = {
  "best-pilates-franchises-2026": {
    title: "Best Pilates Franchises 2026: Top Brands Ranked",
    cardLabel: "Best Pilates Franchises",
    description:
      "Best Pilates franchises in 2026 — ranked Club Pilates, Solidcore, Kinrgy, and BodyBar on investment, fees, revenue, profit margins, and multi-unit fit. Compare costs and ROI before you buy.",
  },
  "lowest-cost-pilates-franchises-2026": {
    title: "Lowest Cost Pilates Franchises 2026",
    cardLabel: "Lowest Cost Pilates Franchises",
    description:
      "Lowest cost Pilates franchises in 2026: compare cheapest Pilates franchise startup costs, smaller-footprint reformer studio models, and total CapEx from $250K.",
  },
  "highest-revenue-pilates-franchises-2026": {
    title: "Highest ROI Pilates Franchises 2026",
    cardLabel: "Highest ROI Pilates Franchises",
    description:
      "Highest ROI Pilates franchises in 2026: compare mature-unit revenue, class volume, and after-royalty profitability across Club Pilates, Solidcore, Kinrgy, and BodyBar Pilates.",
  },
  "best-franchise-for-first-time-owners-2026": {
    title: "Best Pilates Franchise for First-Time Owners 2026",
    cardLabel: "Best Pilates Franchise for First-Time Owners",
    description:
      "Best Pilates franchise for first-time owners in 2026: training depth, turnkey studio systems, and lower-execution-risk boutique reformer formats.",
  },
  "most-profitable-pilates-franchises-2026": {
    title: "Best Boutique Pilates Franchises 2026",
    cardLabel: "Best Boutique Pilates Franchises",
    description:
      "Best boutique Pilates franchises in 2026: how reformer and megaformer studio models compare on profitability and client economics against big-box gyms.",
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

export const pilatesFranchiseRankings = built.bySlug;
export const pilatesFranchiseRankingSlugs = built.slugs;

export const pilatesFranchiseRankingCards = built.slugs.map((slug) => {
  const { meta } = built.bySlug[slug];
  const override = titleOverrides[slug];
  return {
    label: override?.cardLabel ?? meta.title.replace(/\s+2026$/, ""),
    description: meta.subtitle,
    href: meta.href,
  };
});
