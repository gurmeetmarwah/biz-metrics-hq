import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";

export type RankingBrand = {
  name: string;
  investment: string;
  fee: string;
  royalty: string;
  units: string;
  revenue: string;
  netMargin: string;
  growth: string;
  firstTimerFit: string;
  notes: string;
  /** Relative CapEx score: 1 = lowest cost, higher = more expensive */
  costRank: number;
  /** Relative revenue score: 1 = highest revenue */
  revenueRank: number;
  /** Relative growth score: 1 = fastest growing */
  growthRank: number;
  /** Relative first-timer fit: 1 = best */
  firstTimerRank: number;
  /** Relative profitability: 1 = most profitable */
  profitRank: number;
  /** Relative overall best: 1 = best balanced */
  bestRank: number;
  buyerFit: string;
};

export type RankingKind =
  | "best"
  | "lowest-cost"
  | "highest-revenue"
  | "fastest-growing"
  | "first-time"
  | "most-profitable";

export type FranchiseRankingIndustryConfig = {
  industryKey: string;
  industryLabel: string;
  industryLabelPlural: string;
  noun: string; // e.g. "medical spa", "massage", "waxing"
  guideHref: string;
  rankingsBaseHref: string;
  sources: readonly string[];
  anchors: {
    investmentRange: string;
    medianInvestment: string;
    franchiseFee: string;
    royaltyCombined: string;
    unitRevenue: string;
    medianRevenue: string;
    netMarginAfterFees: string;
    ebitda: string;
    ownerIncomeSingle: string;
    payback: string;
  };
  brands: readonly RankingBrand[];
  calculators: readonly { label: string; href: string }[];
  compareHref?: string;
  keywords: Record<RankingKind, readonly string[]>;
};

export type FranchiseRankingReport = {
  meta: ReportMeta;
  sections: readonly ReportSection[];
};

const kindMeta: Record<
  RankingKind,
  {
    slugSuffix: string;
    titlePrefix: string;
    cardLabel: string;
    intentBlurb: string;
    tableIntro: string;
    criteriaTitle: string;
    criteria: readonly string[];
    playbookLead: string;
    faqs: (cfg: FranchiseRankingIndustryConfig, top: RankingBrand) => readonly string[];
  }
> = {
  best: {
    slugSuffix: "best-{noun}-franchises-2026",
    titlePrefix: "Best {Label} Franchises 2026",
    cardLabel: "Best {Label} Franchises",
    intentBlurb: "best {noun} franchises, best franchise for {noun}, best {noun} franchise to buy, top {noun} franchise opportunities 2026",
    tableIntro:
      "Rankings below score each brand on a **balanced franchise scorecard**: investment accessibility, brand recognition, mature-unit revenue, training/support, and multi-unit readiness. Figures are **directional planning ranges** — always verify the current FDD.",
    criteriaTitle: "3. How We Rank the Best {Label} Franchises",
    criteria: [
      "**Investment realism:** Total build (not just franchise fee) against category median CapEx.",
      "**Brand demand:** National awareness and booking/membership systems that shorten ramp vs. independents.",
      "**Economics after fees:** Net margin remaining after typical royalty + ad stacks.",
      "**Support quality:** Training, field ops, and marketing that reduce first-year execution risk.",
      "**Scale path:** Territory rights and ops systems for multi-unit owners.",
      "**Exit / transferability:** Brand affiliation that supports clearer resale comps.",
    ],
    playbookLead:
      "Before you decide *the best {noun} franchise for me*, run diligence on FDD Items 5–7 and 19 (if disclosed), franchisee validation calls, landlord TI estimates, and a break-even model that includes royalties.",
    faqs: (cfg, top) => [
      `**What is the best ${cfg.noun} franchise to buy in 2026?** For many buyer profiles, **${top.name}** leads balanced scorecards — verify territory availability and your operator model.`,
      `**Are ${cfg.noun} franchises a good investment?** Strong sites with disciplined labor can produce roughly **${cfg.anchors.payback} payback**, but royalties compress margin vs. independents.`,
      `**How much does the best ${cfg.noun} franchise cost?** Plan on roughly **${cfg.anchors.investmentRange}** total investment for major systems — see the [startup cost breakdown](${cfg.guideHref}#startup-costs).`,
    ],
  },
  "lowest-cost": {
    slugSuffix: "lowest-cost-{noun}-franchises-2026",
    titlePrefix: "Lowest Cost {Label} Franchises 2026",
    cardLabel: "Lowest Cost {Label} Franchises",
    intentBlurb: "lowest cost {noun} franchises, cheapest {noun} franchise, {noun} franchise under budget",
    tableIntro:
      "Ranked by **typical total investment band** (franchise fee + TI + equipment + working capital). The cheapest fee is not always the cheapest launch — rebuild Item 7 with local contractor quotes.",
    criteriaTitle: "3. What Drives {Label} Franchise Startup Cost",
    criteria: [
      "**Franchise fee:** Often 8–15% of total — rarely the bulk of cash needed.",
      "**Leasehold improvements / build-out:** Usually the largest CapEx line item.",
      "**Equipment & devices:** Category-specific gear (stations, tables, lasers, wax systems).",
      "**Working capital:** Cash to cover ramp payroll, rent, and royalties.",
      "**Opening marketing & tech:** Grand opening, POS, and booking stack.",
      "**Soft costs:** Training travel, deposits, licenses, and professional fees.",
    ],
    playbookLead:
      "Capital-constrained buyers should preserve liquidity above the FDD low estimate and negotiate landlord TI aggressively before signing a {noun} franchise agreement.",
    faqs: (cfg, top) => [
      `**What is the cheapest ${cfg.noun} franchise?** Among major brands, **${top.name}** often sits toward the lower end of national investment ranges.`,
      `**Can I open a ${cfg.noun} franchise for under the median?** Possible at FDD lows in select markets, but many real projects land near **${cfg.anchors.medianInvestment}** once TI and working capital are included.`,
      `**Is a cheaper franchise more profitable?** Not necessarily — lower CapEx helps **ROI and payback**, but weak sites still underperform.`,
    ],
  },
  "highest-revenue": {
    slugSuffix: "highest-revenue-{noun}-franchises-2026",
    titlePrefix: "Highest Revenue {Label} Franchises 2026",
    cardLabel: "Highest Revenue {Label} Franchises",
    intentBlurb: "highest revenue {noun} franchise, how much does a {noun} franchise make, franchise average sales",
    tableIntro:
      "Ranked by **typical mature-unit revenue potential**. Higher revenue ≠ higher owner income if royalties, rent, and labor consume the gain — pair with the profitability ranking.",
    criteriaTitle: "3. What Drives {Label} Franchise Revenue",
    criteria: [
      "**Visit / patient volume:** Brand traffic and memberships fill capacity faster than cold starts.",
      "**Average ticket / package size:** Mix of core and premium services.",
      "**Room or chair productivity:** Utilization is the swing factor.",
      "**Retail & membership attach:** Recurring packages lift effective annual sales.",
      "**Site class:** End-cap and A/B retail corridors still outperform most digital spend.",
      "**Hours & staffing coverage:** Extended hours help only if labor % stays controlled.",
    ],
    playbookLead:
      "When underwriting *how much a {noun} franchise makes*, ask for Item 19 / franchisee comps in markets like yours — national averages mislead.",
    faqs: (cfg, top) => [
      `**How much revenue does a ${cfg.noun} franchise make?** Mature units commonly generate **${cfg.anchors.unitRevenue}**; the panel mid-point is near **${cfg.anchors.medianRevenue}**.`,
      `**Which franchise has the highest sales per location?** **${top.name}** leads this revenue ranking for mature units — validate local comps.`,
      `**Does higher revenue mean a better franchise?** Only if rent, labor, and royalties leave healthy owner cash flow.`,
    ],
  },
  "fastest-growing": {
    slugSuffix: "fastest-growing-{noun}-franchises-2026",
    titlePrefix: "Fastest Growing {Label} Franchises 2026",
    cardLabel: "Fastest Growing {Label} Franchises",
    intentBlurb: "fastest growing {noun} franchises, {noun} franchise expansion 2026, hot {noun} franchise opportunities",
    tableIntro:
      "Ranked by **unit expansion momentum and development demand**. Growth helps recruitment and brand awareness — but can dilute field support if site quality slips.",
    criteriaTitle: "3. Signals of Healthy {Label} Franchise Growth",
    criteria: [
      "**Net unit growth:** Openings outpace closures over a trailing three-year window.",
      "**Franchisee validation:** Existing owners still recommending the system.",
      "**Field support capacity:** New units receive timely ops coaching.",
      "**Real estate discipline:** Site criteria stay strict under development pressure.",
      "**Tech & membership systems:** Platforms that scale with unit count.",
      "**Multi-unit pipeline:** Share of new awards going to proven operators.",
    ],
    playbookLead:
      "Buyers chasing *fastest growing {noun} franchises* should confirm exclusive territory maps early — growth brands may already be sold out in dense MSAs.",
    faqs: (cfg, top) => [
      `**Which ${cfg.noun} franchise is growing the fastest?** **${top.name}** leads this expansion ranking in 2026 among the brands we track.`,
      `**Is a fast-growing franchise riskier?** It can be — support dilution and weaker site approval are the main risks.`,
      `**Should first-time owners chase growth brands?** Only if training and field support scores are high.`,
    ],
  },
  "first-time": {
    slugSuffix: "best-franchise-for-first-time-owners-2026",
    titlePrefix: "Best {Label} Franchise for First-Time Owners 2026",
    cardLabel: "Best Franchise for First-time Owners",
    intentBlurb: "best {noun} franchise for first-time owners, {noun} franchise for beginners, easiest {noun} franchise",
    tableIntro:
      "Ranked by **training depth, turnkey systems, ramp support, and execution risk** for first-time franchisees — not by prestige alone.",
    criteriaTitle: "3. First-Time Franchisee Checklist ({Label})",
    criteria: [
      "**Complete owner + manager training** before grand opening.",
      "**Build a 90-day hiring plan** — staffing is the #1 ramp killer.",
      "**Underwrite royalties from day one** in your P&L.",
      "**Call 5+ recent franchisees** (not only multi-unit veterans).",
      "**Prefer owner-operate Year 1** unless the brand strongly supports absentee models.",
      "**Keep liquidity above the fee** for the 12–24 month ramp.",
    ],
    playbookLead:
      "If you are searching for the *best {noun} franchise for beginners*, prioritize playbooks and field support over maximum brand prestige.",
    faqs: (cfg, top) => [
      `**What is the best ${cfg.noun} franchise for a first-time franchisee?** Systems with the deepest training — **${top.name}** ranks #1 on this list for many buyer profiles.`,
      `**Can I buy a ${cfg.noun} franchise with no industry experience?** Often yes if you hire licensed talent and complete franchisor training — confirm FDD requirements.`,
      `**Should first-timers go multi-unit immediately?** Usually no — stabilize unit one for **12–18 months** first.`,
    ],
  },
  "most-profitable": {
    slugSuffix: "most-profitable-{noun}-franchises-2026",
    titlePrefix: "Most Profitable {Label} Franchises 2026",
    cardLabel: "Most Profitable {Label} Franchises",
    intentBlurb: "most profitable {noun} franchise, highest ROI {noun} franchise, {noun} franchise profit margin",
    tableIntro:
      "Ranked by **after-fee profitability and cash-flow quality** (net margin / EBITDA potential), not top-line alone. Local rent and labor can reorder any brand.",
    criteriaTitle: "3. What Makes a {Label} Franchise Profitable",
    criteria: [
      "**Labor discipline:** Keep payroll inside category benchmarks.",
      "**Royalty awareness:** Fee stacks must be offset by brand traffic and lower CAC.",
      "**Rent control:** Occupancy cost as a share of sales is a primary swing factor.",
      "**Utilization:** Empty rooms/chairs destroy ROI faster than royalty points.",
      "**Owner role:** Owner-operators often earn more total compensation on unit one.",
      "**Scale:** Shared management across multi-unit portfolios lifts margin.",
    ],
    playbookLead:
      "Queries like *most profitable {noun} franchise* and *highest ROI {noun} franchise* reduce to one question: what cash remains after royalties, labor, and rent?",
    faqs: (cfg, top) => [
      `**What is the most profitable ${cfg.noun} franchise?** On a balanced after-fee view, **${top.name}** frequently leads — verify local comps and Item 19 if available.`,
      `**What profit margin should I expect?** Plan for roughly **${cfg.anchors.netMarginAfterFees} net after royalties**; top operators exceed that with tight labor and rent.`,
      `**How much do ${cfg.noun} franchise owners make?** Single-unit ranges often near **${cfg.anchors.ownerIncomeSingle}**; multi-unit owners can earn substantially more.`,
    ],
  },
};

function sortBrands(brands: readonly RankingBrand[], kind: RankingKind): RankingBrand[] {
  const key =
    kind === "best"
      ? "bestRank"
      : kind === "lowest-cost"
        ? "costRank"
        : kind === "highest-revenue"
          ? "revenueRank"
          : kind === "fastest-growing"
            ? "growthRank"
            : kind === "first-time"
              ? "firstTimerRank"
              : "profitRank";
  return [...brands].sort((a, b) => a[key] - b[key]);
}

function fill(template: string, cfg: FranchiseRankingIndustryConfig) {
  return template
    .replaceAll("{Label}", cfg.industryLabel)
    .replaceAll("{label}", cfg.industryLabel.toLowerCase())
    .replaceAll("{noun}", cfg.noun)
    .replaceAll("{Noun}", cfg.noun.replace(/\b\w/g, (c) => c.toUpperCase()));
}

function slugFor(kind: RankingKind, cfg: FranchiseRankingIndustryConfig) {
  const nounSlug = cfg.noun.replace(/\s+/g, "-");
  return kindMeta[kind].slugSuffix.replace("{noun}", nounSlug);
}

function tableRows(kind: RankingKind, sorted: RankingBrand[]): readonly (readonly string[])[] {
  return sorted.map((b, i) => {
    const rank = String(i + 1);
    switch (kind) {
      case "best":
        return [rank, b.name, b.investment, b.revenue, b.buyerFit, b.notes];
      case "lowest-cost":
        return [rank, b.name, b.investment, b.fee, b.units, b.notes];
      case "highest-revenue":
        return [rank, b.name, b.revenue, b.investment, b.netMargin, b.notes];
      case "fastest-growing":
        return [rank, b.name, b.growth, b.units, b.investment, b.notes];
      case "first-time":
        return [rank, b.name, b.firstTimerFit, b.investment, b.notes, b.buyerFit];
      case "most-profitable":
        return [rank, b.name, b.netMargin, b.revenue, b.investment, b.notes];
    }
  });
}

function tableHeaders(kind: RankingKind): readonly string[] {
  switch (kind) {
    case "best":
      return ["Rank", "Franchise", "Total Investment", "Mature Unit Revenue", "Best Buyer Fit", "Why It Ranks"];
    case "lowest-cost":
      return ["Rank", "Franchise", "Total Investment", "Franchise Fee", "Units / Footprint", "Capital Notes"];
    case "highest-revenue":
      return ["Rank", "Franchise", "Mature Unit Revenue", "Investment", "Net Margin After Fees", "Revenue Notes"];
    case "fastest-growing":
      return ["Rank", "Franchise", "Growth Momentum", "Units / Footprint", "Investment", "Why It’s Expanding"];
    case "first-time":
      return ["Rank", "Franchise", "First-Timer Fit", "Investment", "Support Edge", "Buyer Fit"];
    case "most-profitable":
      return ["Rank", "Franchise", "Net Margin After Fees", "Mature Revenue", "Investment", "Profit Notes"];
  }
}

export function buildFranchiseRankingReport(
  cfg: FranchiseRankingIndustryConfig,
  kind: RankingKind,
): FranchiseRankingReport {
  const metaDef = kindMeta[kind];
  const sorted = sortBrands(cfg.brands, kind);
  const top = sorted[0];
  const slug = slugFor(kind, cfg);
  const href = `${cfg.rankingsBaseHref}${slug}/`;
  const title = fill(metaDef.titlePrefix, cfg);
  const keywords = cfg.keywords[kind];

  const siblingKinds = (Object.keys(kindMeta) as RankingKind[]).filter((k) => k !== kind);
  const relatedLinks = siblingKinds.slice(0, 2).map((k) => {
    const s = slugFor(k, cfg);
    const t = fill(kindMeta[k].titlePrefix, cfg);
    return `**Related:** [${t}](${cfg.rankingsBaseHref}${s}/)`;
  });

  const calcLinks = cfg.calculators.slice(0, 3).map((c) => `**Tool:** [${c.label}](${c.href})`);

  const meta: ReportMeta = {
    slug,
    title,
    subtitle: fill(
      kind === "best"
        ? `Top-ranked ${cfg.noun} franchise opportunities for buyers comparing investment, brand strength, unit economics, training, and multi-unit potential.`
        : kind === "lowest-cost"
          ? `Cheapest ${cfg.noun} franchise opportunities ranked by total startup investment — franchise fee, buildout, equipment, and working capital.`
          : kind === "highest-revenue"
            ? `Which ${cfg.noun} franchises generate the most sales per location — mature unit revenue ranges and volume drivers.`
            : kind === "fastest-growing"
              ? `${cfg.industryLabel} franchise brands expanding fastest by unit growth, territory demand, and multi-unit development momentum.`
              : kind === "first-time"
                ? `Best ${cfg.noun} franchises for beginners — training depth, turnkey systems, ramp support, and lower execution risk.`
                : `Highest ROI and net-margin ${cfg.noun} franchises after royalties — owner cash flow, EBITDA, and payback-focused rankings.`,
      cfg,
    ),
    description: `${title}: ${keywords.join(", ")}. Compare investment, royalties, revenue, and owner economics before you buy.`,
    published: "July 2026",
    dataVintage: "2025–2026",
    readTime: "8 min",
    href,
    sources: cfg.sources,
  };

  const sections: ReportSection[] = [
    {
      id: "executive-summary",
      title: `1. Executive Summary — ${title.replace(" 2026", "")}`,
      blocks: [
        {
          type: "stats",
          items: [
            { label: "Typical Total Investment", value: cfg.anchors.investmentRange },
            { label: "Median Unit Revenue", value: cfg.anchors.medianRevenue },
            { label: "Net Margin After Fees", value: cfg.anchors.netMarginAfterFees },
            { label: "Typical Payback", value: cfg.anchors.payback },
          ],
        },
        {
          type: "paragraph",
          text: `From a franchise financial analyst’s lens, this ranking helps buyers searching for **${keywords[0]}** shortlist systems using **risk-adjusted economics** — not marketing alone. Across ${cfg.industryLabelPlural.toLowerCase()}, plan on roughly **${cfg.anchors.investmentRange}** total investment, mature-unit revenue near **${cfg.anchors.unitRevenue}**, and net margins of **${cfg.anchors.netMarginAfterFees}** after a typical **${cfg.anchors.royaltyCombined}** royalty/ad stack. **${top.name}** leads this specific ranking; always re-underwrite the local site.`,
        },
        {
          type: "bullets",
          items: [
            `**Primary keyword intent answered:** *${fill(metaDef.intentBlurb, cfg)}*.`,
            `**Consultant thesis:** Rank brands on **unit economics after royalties**, utilization, and support quality.`,
            `**Buyer takeaway:** Shortlist 2–3 systems that match your **liquidity**, **operator model**, and **territory plan** before discovery fees.`,
          ],
        },
      ],
    },
    {
      id: "ranking-table",
      title: `2. ${title.replace(" 2026", "")} Ranked`,
      blocks: [
        { type: "paragraph", text: fill(metaDef.tableIntro, cfg) },
        {
          type: "table",
          headers: tableHeaders(kind),
          rows: tableRows(kind, sorted),
        },
        {
          type: "paragraph",
          text: `**How to use this ranking:** Start with **#1–#3**, then stress-test site criteria, royalties, and working capital in the [${cfg.industryLabel} franchise economics dashboard](${cfg.guideHref}#economics).`,
        },
      ],
    },
    {
      id: "criteria",
      title: fill(metaDef.criteriaTitle, cfg),
      blocks: [{ type: "bullets", items: metaDef.criteria.map((c) => fill(c, cfg)) }],
    },
    {
      id: "buyer-playbook",
      title: "4. Consultant Playbook",
      blocks: [
        { type: "paragraph", text: fill(metaDef.playbookLead, cfg) },
        {
          type: "bullets",
          items: [
            ...calcLinks,
            `**Compare brands:** [${cfg.industryLabel} franchise comparison](${cfg.guideHref}#compare-brands).`,
            ...(cfg.compareHref
              ? [`**Franchise vs independent path:** [Related comparison](${cfg.compareHref}).`]
              : []),
            ...relatedLinks,
            `**Guide home:** [${cfg.industryLabel} Franchise Guide](${cfg.guideHref}).`,
          ],
        },
      ],
    },
    {
      id: "faq",
      title: `5. FAQ — ${title.replace(" 2026", "")}`,
      blocks: [
        { type: "bullets", items: [...metaDef.faqs(cfg, top)] },
        {
          type: "paragraph",
          text: `Return to the [${cfg.industryLabel} Franchise Guide](${cfg.guideHref}) for the full brand matrix, economics dashboard, and calculators.`,
        },
      ],
    },
  ];

  return { meta, sections };
}

export function buildAllFranchiseRankings(cfg: FranchiseRankingIndustryConfig) {
  const kinds = Object.keys(kindMeta) as RankingKind[];
  const reports = kinds.map((kind) => buildFranchiseRankingReport(cfg, kind));
  const bySlug: Record<string, FranchiseRankingReport> = {};
  for (const report of reports) {
    bySlug[report.meta.slug] = report;
  }
  const cards = reports.map((r) => ({
    label: r.meta.title.replace(/\s+2026$/, ""),
    description: r.meta.subtitle,
    href: r.meta.href,
  }));
  return { bySlug, slugs: reports.map((r) => r.meta.slug), cards, reports };
}
