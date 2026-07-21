export const fitnessFranchiseCalculatorSlugs = [
  "roi",
  "startup-cost",
  "royalty-fee",
  "payback-period",
  "owner-salary",
  "cash-flow",
  "break-even",
  "ebitda",
  "valuation",
  "membership-revenue",
] as const;

export type FitnessFranchiseCalculatorSlug = (typeof fitnessFranchiseCalculatorSlugs)[number];

export const fitnessFranchiseVerticals = ["gym", "pilates", "yoga", "crossfit", "swim-school"] as const;
export type FitnessFranchiseVertical = (typeof fitnessFranchiseVerticals)[number];

export type FitnessFranchiseCalculatorKindMeta = {
  slug: FitnessFranchiseCalculatorSlug;
  shortLabel: string;
  cardLabel: (industry: string) => string;
  description: string;
  badge: string;
};

export const fitnessFranchiseCalculatorKinds: readonly FitnessFranchiseCalculatorKindMeta[] = [
  {
    slug: "roi",
    shortLabel: "ROI",
    cardLabel: (industry) => `${industry} Franchise ROI Calculator`,
    description: "Estimate cash-on-cash return after royalties, marketing fees, and operating costs.",
    badge: "ROI · cash-on-cash",
  },
  {
    slug: "startup-cost",
    shortLabel: "Startup Cost",
    cardLabel: (industry) => `${industry} Franchise Startup Cost Calculator`,
    description: "Model franchise fee, buildout, equipment, marketing launch, and working capital.",
    badge: "CapEx · Item 7 style",
  },
  {
    slug: "royalty-fee",
    shortLabel: "Royalty Fee",
    cardLabel: (industry) => `${industry} Franchise Royalty Fee Calculator`,
    description: "Calculate annual royalty and marketing fund cost at different revenue levels.",
    badge: "Royalties · ad fund",
  },
  {
    slug: "payback-period",
    shortLabel: "Payback Period",
    cardLabel: (industry) => `${industry} Franchise Payback Period Calculator`,
    description: "Estimate years to recover total investment from annual free cash flow.",
    badge: "Payback · years",
  },
  {
    slug: "owner-salary",
    shortLabel: "Owner Salary",
    cardLabel: (industry) => `${industry} Franchise Owner Salary Calculator`,
    description: "Model owner income from profit, salary add-backs, and multi-unit leverage.",
    badge: "Owner income · SDE",
  },
  {
    slug: "cash-flow",
    shortLabel: "Cash Flow",
    cardLabel: (industry) => `${industry} Franchise Cash Flow Calculator`,
    description: "Project annual operating cash flow after royalties, payroll, rent, and debt service.",
    badge: "Cash flow · annual",
  },
  {
    slug: "break-even",
    shortLabel: "Break-even",
    cardLabel: (industry) => `${industry} Franchise Break-even Calculator`,
    description: "Find the membership or revenue level needed to cover fixed costs and fees.",
    badge: "Break-even · members",
  },
  {
    slug: "ebitda",
    shortLabel: "EBITDA",
    cardLabel: (industry) => `${industry} Franchise EBITDA Calculator`,
    description: "Estimate EBITDA and margin after operating expenses and ongoing franchise fees.",
    badge: "EBITDA · margin",
  },
  {
    slug: "valuation",
    shortLabel: "Valuation",
    cardLabel: (industry) => `${industry} Franchise Valuation Calculator`,
    description: "Estimate unit transfer value using SDE multiples typical for fitness franchises.",
    badge: "Valuation · SDE",
  },
  {
    slug: "membership-revenue",
    shortLabel: "Membership Revenue",
    cardLabel: (industry) => `${industry} Franchise Membership Revenue Calculator`,
    description: "Model recurring membership dues, ancillary revenue, and total annual sales.",
    badge: "Membership · MRR",
  },
] as const;

export type FitnessFranchiseCalcAnchors = {
  industryLabel: string;
  guideHref: string;
  guideLabel: string;
  sampleSize: string;
  dataVintage: string;
  defaults: {
    investment: number;
    franchiseFee: number;
    royaltyPct: number;
    marketingPct: number;
    annualRevenue: number;
    ebitdaMarginPct: number;
    ownerSalary: number;
    members: number;
    avgMonthlyDues: number;
    ancillaryMonthly: number;
    fixedMonthlyCosts: number;
    variableCostPct: number;
    sdeMultiple: number;
  };
};

export const fitnessFranchiseCalcConfigs: Record<FitnessFranchiseVertical, FitnessFranchiseCalcAnchors> = {
  gym: {
    industryLabel: "Gym",
    guideHref: "/franchise/fitness/gym/",
    guideLabel: "Gym Franchise Guide",
    sampleSize: "leading U.S. gym franchise systems",
    dataVintage: "2025–2026",
    defaults: {
      investment: 550_000,
      franchiseFee: 40_000,
      royaltyPct: 6,
      marketingPct: 2,
      annualRevenue: 1_100_000,
      ebitdaMarginPct: 15,
      ownerSalary: 135_000,
      members: 1_200,
      avgMonthlyDues: 45,
      ancillaryMonthly: 8,
      fixedMonthlyCosts: 45_000,
      variableCostPct: 18,
      sdeMultiple: 3.4,
    },
  },
  pilates: {
    industryLabel: "Pilates",
    guideHref: "/franchise/fitness/pilates/",
    guideLabel: "Pilates Franchise Guide",
    sampleSize: "leading U.S. Pilates franchise studios",
    dataVintage: "2025–2026",
    defaults: {
      investment: 420_000,
      franchiseFee: 60_000,
      royaltyPct: 8,
      marketingPct: 2,
      annualRevenue: 750_000,
      ebitdaMarginPct: 16,
      ownerSalary: 110_000,
      members: 380,
      avgMonthlyDues: 149,
      ancillaryMonthly: 18,
      fixedMonthlyCosts: 32_000,
      variableCostPct: 22,
      sdeMultiple: 3.6,
    },
  },
  yoga: {
    industryLabel: "Yoga",
    guideHref: "/franchise/fitness/yoga/",
    guideLabel: "Yoga Franchise Guide",
    sampleSize: "leading U.S. yoga franchise studios",
    dataVintage: "2025–2026",
    defaults: {
      investment: 320_000,
      franchiseFee: 45_000,
      royaltyPct: 7,
      marketingPct: 2,
      annualRevenue: 550_000,
      ebitdaMarginPct: 15,
      ownerSalary: 95_000,
      members: 420,
      avgMonthlyDues: 99,
      ancillaryMonthly: 12,
      fixedMonthlyCosts: 24_000,
      variableCostPct: 20,
      sdeMultiple: 3.3,
    },
  },
  crossfit: {
    industryLabel: "CrossFit",
    guideHref: "/franchise/fitness/crossfit/",
    guideLabel: "CrossFit Franchise Guide",
    sampleSize: "CrossFit affiliates & functional fitness franchises",
    dataVintage: "2025–2026",
    defaults: {
      investment: 250_000,
      franchiseFee: 35_000,
      royaltyPct: 7,
      marketingPct: 2,
      annualRevenue: 520_000,
      ebitdaMarginPct: 16,
      ownerSalary: 100_000,
      members: 220,
      avgMonthlyDues: 159,
      ancillaryMonthly: 20,
      fixedMonthlyCosts: 22_000,
      variableCostPct: 18,
      sdeMultiple: 3.2,
    },
  },
  "swim-school": {
    industryLabel: "Swim School",
    guideHref: "/franchise/fitness/swim-school/",
    guideLabel: "Swim School Franchise Guide",
    sampleSize: "leading U.S. swim school franchise systems",
    dataVintage: "2025–2026",
    defaults: {
      investment: 450_000,
      franchiseFee: 50_000,
      royaltyPct: 8,
      marketingPct: 2,
      annualRevenue: 850_000,
      ebitdaMarginPct: 18,
      ownerSalary: 120_000,
      members: 350,
      avgMonthlyDues: 165,
      ancillaryMonthly: 15,
      fixedMonthlyCosts: 38_000,
      variableCostPct: 25,
      sdeMultiple: 3.8,
    },
  },
};

export type FitnessFranchiseCalcInputs = FitnessFranchiseCalcAnchors["defaults"] & {
  buildout: number;
  equipment: number;
  workingCapital: number;
  launchMarketing: number;
  otherStartup: number;
};

export function buildDefaultInputs(vertical: FitnessFranchiseVertical): FitnessFranchiseCalcInputs {
  const d = fitnessFranchiseCalcConfigs[vertical].defaults;
  const remaining = Math.max(0, d.investment - d.franchiseFee);
  return {
    ...d,
    buildout: Math.round(remaining * 0.4),
    equipment: Math.round(remaining * 0.28),
    workingCapital: Math.round(remaining * 0.18),
    launchMarketing: Math.round(remaining * 0.08),
    otherStartup: Math.round(remaining * 0.06),
  };
}

export function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Math.round(n));
}

export function formatPct(n: number) {
  return `${n.toFixed(1)}%`;
}

export function formatYears(n: number) {
  if (!Number.isFinite(n) || n <= 0) return "n/a";
  if (n > 40) return "40+ yrs";
  return `${n.toFixed(1)} yrs`;
}

export function calculateFitnessFranchise(slug: FitnessFranchiseCalculatorSlug, inputs: FitnessFranchiseCalcInputs) {
  const totalFeesPct = inputs.royaltyPct + inputs.marketingPct;
  const annualFees = inputs.annualRevenue * (totalFeesPct / 100);
  const ebitda = inputs.annualRevenue * (inputs.ebitdaMarginPct / 100);
  const ebitdaAfterFees = ebitda - annualFees;
  const ownerIncome = ebitdaAfterFees + inputs.ownerSalary * 0.35;
  const freeCashFlow = Math.max(0, ebitdaAfterFees - inputs.ownerSalary * 0.15);
  const totalStartup =
    inputs.franchiseFee +
    inputs.buildout +
    inputs.equipment +
    inputs.workingCapital +
    inputs.launchMarketing +
    inputs.otherStartup;
  const cashOnCash = totalStartup > 0 ? (freeCashFlow / totalStartup) * 100 : 0;
  const paybackYears = freeCashFlow > 0 ? totalStartup / freeCashFlow : Infinity;
  const membershipRevenue = inputs.members * inputs.avgMonthlyDues * 12;
  const ancillaryRevenue = inputs.members * inputs.ancillaryMonthly * 12;
  const totalMembershipDriven = membershipRevenue + ancillaryRevenue;
  const contributionMarginPct = Math.max(0, 100 - inputs.variableCostPct - totalFeesPct);
  const monthlyBreakEvenRevenue =
    contributionMarginPct > 0 ? (inputs.fixedMonthlyCosts * 100) / contributionMarginPct : Infinity;
  const annualBreakEvenRevenue = monthlyBreakEvenRevenue * 12;
  const breakEvenMembers =
    inputs.avgMonthlyDues > 0 ? monthlyBreakEvenRevenue / inputs.avgMonthlyDues : Infinity;
  const sde = Math.max(0, ebitdaAfterFees + inputs.ownerSalary);
  const valuation = sde * inputs.sdeMultiple;
  const debtService = totalStartup * 0.08;
  const cashFlowAfterDebt = freeCashFlow - debtService;

  switch (slug) {
    case "roi":
      return {
        headline: formatPct(cashOnCash),
        headlineLabel: "Cash-on-cash ROI",
        rows: [
          { label: "Total investment", value: formatCurrency(totalStartup) },
          { label: "Annual free cash flow", value: formatCurrency(freeCashFlow) },
          { label: "Royalties + marketing", value: formatCurrency(annualFees) },
          { label: "EBITDA after fees", value: formatCurrency(ebitdaAfterFees) },
        ],
      };
    case "startup-cost":
      return {
        headline: formatCurrency(totalStartup),
        headlineLabel: "Total startup investment",
        rows: [
          { label: "Franchise fee", value: formatCurrency(inputs.franchiseFee) },
          { label: "Leasehold / buildout", value: formatCurrency(inputs.buildout) },
          { label: "Equipment", value: formatCurrency(inputs.equipment) },
          { label: "Working capital", value: formatCurrency(inputs.workingCapital) },
          { label: "Launch marketing", value: formatCurrency(inputs.launchMarketing) },
          { label: "Other / contingency", value: formatCurrency(inputs.otherStartup) },
        ],
      };
    case "royalty-fee":
      return {
        headline: formatCurrency(annualFees),
        headlineLabel: "Annual royalty + marketing fees",
        rows: [
          { label: "Royalty rate", value: formatPct(inputs.royaltyPct) },
          { label: "Marketing fund", value: formatPct(inputs.marketingPct) },
          { label: "Combined fee stack", value: formatPct(totalFeesPct) },
          { label: "Fee as % of EBITDA", value: formatPct(ebitda > 0 ? (annualFees / ebitda) * 100 : 0) },
        ],
      };
    case "payback-period":
      return {
        headline: formatYears(paybackYears),
        headlineLabel: "Estimated payback period",
        rows: [
          { label: "Total investment", value: formatCurrency(totalStartup) },
          { label: "Annual free cash flow", value: formatCurrency(freeCashFlow) },
          { label: "Cash-on-cash ROI", value: formatPct(cashOnCash) },
          { label: "Revenue assumed", value: formatCurrency(inputs.annualRevenue) },
        ],
      };
    case "owner-salary":
      return {
        headline: formatCurrency(ownerIncome),
        headlineLabel: "Estimated owner income",
        rows: [
          { label: "EBITDA after fees", value: formatCurrency(ebitdaAfterFees) },
          { label: "Owner salary / draw input", value: formatCurrency(inputs.ownerSalary) },
          { label: "Blended owner benefit", value: formatCurrency(ownerIncome) },
          { label: "Owner benefit % of revenue", value: formatPct((ownerIncome / inputs.annualRevenue) * 100) },
        ],
      };
    case "cash-flow":
      return {
        headline: formatCurrency(cashFlowAfterDebt),
        headlineLabel: "Cash flow after debt service",
        rows: [
          { label: "EBITDA after fees", value: formatCurrency(ebitdaAfterFees) },
          { label: "Free cash flow", value: formatCurrency(freeCashFlow) },
          { label: "Est. debt service (8%)", value: formatCurrency(debtService) },
          { label: "Cash flow after debt", value: formatCurrency(cashFlowAfterDebt) },
        ],
      };
    case "break-even":
      return {
        headline: Number.isFinite(breakEvenMembers) ? Math.ceil(breakEvenMembers).toLocaleString() : "n/a",
        headlineLabel: "Members to break even (monthly)",
        rows: [
          { label: "Monthly fixed costs", value: formatCurrency(inputs.fixedMonthlyCosts) },
          { label: "Contribution margin", value: formatPct(contributionMarginPct) },
          { label: "Monthly break-even revenue", value: formatCurrency(monthlyBreakEvenRevenue) },
          { label: "Annual break-even revenue", value: formatCurrency(annualBreakEvenRevenue) },
        ],
      };
    case "ebitda":
      return {
        headline: formatCurrency(ebitdaAfterFees),
        headlineLabel: "EBITDA after franchise fees",
        rows: [
          { label: "Gross EBITDA (pre-fee)", value: formatCurrency(ebitda) },
          { label: "EBITDA margin input", value: formatPct(inputs.ebitdaMarginPct) },
          { label: "Royalties + marketing", value: formatCurrency(annualFees) },
          { label: "After-fee margin", value: formatPct((ebitdaAfterFees / inputs.annualRevenue) * 100) },
        ],
      };
    case "valuation":
      return {
        headline: formatCurrency(valuation),
        headlineLabel: "Estimated franchise unit value",
        rows: [
          { label: "Seller's discretionary earnings", value: formatCurrency(sde) },
          { label: "SDE multiple", value: `${inputs.sdeMultiple.toFixed(1)}×` },
          { label: "Valuation range (−15%)", value: formatCurrency(valuation * 0.85) },
          { label: "Valuation range (+15%)", value: formatCurrency(valuation * 1.15) },
        ],
      };
    case "membership-revenue":
      return {
        headline: formatCurrency(totalMembershipDriven),
        headlineLabel: "Annual membership-driven revenue",
        rows: [
          { label: "Membership dues revenue", value: formatCurrency(membershipRevenue) },
          { label: "Ancillary revenue", value: formatCurrency(ancillaryRevenue) },
          { label: "Active members", value: inputs.members.toLocaleString() },
          { label: "Avg monthly dues", value: formatCurrency(inputs.avgMonthlyDues) },
        ],
      };
  }
}

export function getCalculatorKind(slug: string) {
  return fitnessFranchiseCalculatorKinds.find((k) => k.slug === slug);
}

export function isFitnessFranchiseVertical(value: string): value is FitnessFranchiseVertical {
  return (fitnessFranchiseVerticals as readonly string[]).includes(value);
}

export function isFitnessFranchiseCalculatorSlug(value: string): value is FitnessFranchiseCalculatorSlug {
  return (fitnessFranchiseCalculatorSlugs as readonly string[]).includes(value);
}

export function buildFitnessFranchiseCalculatorCards(vertical: FitnessFranchiseVertical) {
  const config = fitnessFranchiseCalcConfigs[vertical];
  return fitnessFranchiseCalculatorKinds.map((kind) => ({
    label: kind.cardLabel(config.industryLabel),
    description: kind.description,
    href: `/franchise/fitness/${vertical}/calculators/${kind.slug}/`,
  }));
}

export function buildCalculatorPageMeta(vertical: FitnessFranchiseVertical, slug: FitnessFranchiseCalculatorSlug) {
  const config = fitnessFranchiseCalcConfigs[vertical];
  const kind = getCalculatorKind(slug)!;
  const title = kind.cardLabel(config.industryLabel);
  return {
    title: `${title} | BizMetricsHQ`,
    shortTitle: title,
    subtitle: kind.description,
    description: `${title}: ${kind.description} Built for buyers comparing ${config.industryLabel.toLowerCase()} franchise economics.`,
    badge: kind.badge,
  };
}

export function buildCalculatorFaqs(vertical: FitnessFranchiseVertical, slug: FitnessFranchiseCalculatorSlug) {
  const { industryLabel } = fitnessFranchiseCalcConfigs[vertical];
  const noun = industryLabel.toLowerCase();
  const common = [
    {
      question: `How accurate is this ${noun} franchise calculator?`,
      answer: `Results are directional planning estimates using typical ${noun} franchise fee stacks and operating ranges. Always rebuild the model with the current FDD Item 5–7 figures and local rent, payroll, and membership pricing.`,
    },
    {
      question: `Should I include royalties in every model?`,
      answer: `Yes. Royalties and marketing funds permanently reduce net cash flow versus an independent studio. Include the full ongoing fee stack in ROI, payback, EBITDA, and valuation scenarios.`,
    },
  ];

  const specific: Record<FitnessFranchiseCalculatorSlug, { question: string; answer: string }> = {
    roi: {
      question: `What is a good ROI for a ${noun} franchise?`,
      answer: `Many mature fitness franchise units target roughly 15–35% cash-on-cash once membership ramps stabilize, but Year-1 ROI is often much lower. Underwrite site-level ramp, royalties, and working capital before comparing brands.`,
    },
    "startup-cost": {
      question: `What drives ${noun} franchise startup cost the most?`,
      answer: `Leasehold improvements, equipment, and working capital usually dwarf the franchise fee. Pool builds, reformer fleets, and large-box gym equipment can move CapEx by hundreds of thousands of dollars.`,
    },
    "royalty-fee": {
      question: `How do royalty fees affect profitability?`,
      answer: `A 6–10% combined royalty and marketing stack can consume a third or more of EBITDA in thinner margin formats. Model fees as a variable cost against membership revenue, not a fixed line item.`,
    },
    "payback-period": {
      question: `What is a typical ${noun} franchise payback period?`,
      answer: `Many fitness franchises recover invested capital in roughly 3–6 years when membership ramp and labor stay on plan. Soft territories or overbuilt CapEx can push payback beyond that range.`,
    },
    "owner-salary": {
      question: `How much do ${noun} franchise owners make?`,
      answer: `Owner benefit combines salary/draw and residual profit after royalties. Mature single units often land in a six-figure range; multi-unit operators can exceed that when shared management leverage improves.`,
    },
    "cash-flow": {
      question: `What should I watch in ${noun} franchise cash flow?`,
      answer: `Watch seasonality, membership churn, rent escalators, and debt service. Strong EBITDA can still produce weak cash flow if CapEx financing and fee stacks are aggressive.`,
    },
    "break-even": {
      question: `How many members do I need to break even?`,
      answer: `Break-even membership depends on dues, fixed rent/payroll, and royalty load. Use local pricing and labor quotes — national averages can understate dense urban occupancy costs.`,
    },
    ebitda: {
      question: `What EBITDA margin is typical after royalties?`,
      answer: `Many mature fitness franchise units land near low-to-mid teens EBITDA after fees, with boutique or high-utilization concepts sometimes higher. Pre-fee margins look better but are not spendable cash.`,
    },
    valuation: {
      question: `How are ${noun} franchises valued?`,
      answer: `Buyers commonly use SDE or EBITDA multiples, with recurring membership quality supporting the multiple. Franchise affiliation can improve comps, but royalties and transfer fees affect net proceeds.`,
    },
    "membership-revenue": {
      question: `How important is membership revenue mix?`,
      answer: `Recurring dues usually drive valuation and cash-flow stability. Ancillary retail, private training, and lessons can lift average revenue per member but are often less predictable than dues.`,
    },
  };

  return [specific[slug], ...common];
}
