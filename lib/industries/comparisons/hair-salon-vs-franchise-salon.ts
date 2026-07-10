import type { BeautyDecisionInputs, BeautyDualComparisonData } from "./beauty-comparison-types";
import { scoreBeautyChoice } from "./beauty-comparison-types";
import {
  hairSalonCalculators,
  hairSalonHubLabels,
  hairSalonLeftBreakEven,
  hairSalonLeftCapitalEfficiency,
  hairSalonLeftClientEconomics,
  hairSalonLeftClientFunnel,
  hairSalonLeftCostStructure,
  hairSalonLeftKpis,
  hairSalonLeftMarginTiers,
  hairSalonLeftOwnerIncome,
  hairSalonLeftRecurringComparison,
  hairSalonLeftRecurringHighlight,
  hairSalonLeftRevenueFunnel,
  hairSalonLeftRevenueSources,
  hairSalonLeftScalingLadder,
  hairSalonLeftServiceFunnel,
  hairSalonLeftServiceMetrics,
  hairSalonLeftStartupItems,
  hairSalonLeftStartupSideBySide,
  hairSalonLeftValuation,
} from "./hair-salon-comparison-shared";

export const comparisonMeta = {
  slug: "hair-salon-vs-franchise-salon",
  title: "Independent Hair Salon vs Franchise Salon",
  subtitle:
    "Compare revenue, profit margins, royalties, startup costs, owner pay, and valuation between an independent hair salon and a franchise salon such as a national quick-cut brand.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...hairSalonHubLabels,
  left: "Independent Hair Salon",
  right: "Franchise Salon",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Net Margin", winner: "Independent Hair Salon" },
  { factor: "Faster Client Ramp", winner: "Franchise Salon" },
  { factor: "Lower Total Startup Cost", winner: "Independent Hair Salon" },
  { factor: "Brand Recognition", winner: "Franchise Salon" },
  { factor: "Creative & Pricing Freedom", winner: "Independent Hair Salon" },
  { factor: "Operational Support", winner: "Franchise Salon" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: hairSalonLeftKpis.annualRevenue, right: "$300K – $700K" },
  { metric: "Net Margin (after royalties)", left: hairSalonLeftKpis.netMargin, right: "6 – 12%" },
  { metric: "Owner Compensation", left: hairSalonLeftKpis.ownerComp, right: "$45K – $110K" },
  { metric: "Royalty + Ad Fees", left: "None", right: "6 – 12% of revenue" },
  { metric: "Average Ticket", left: hairSalonLeftKpis.revenuePerClient, right: "$22 – $45" },
  { metric: "Startup Cost", left: hairSalonLeftKpis.startup, right: "$150K – $400K" },
  { metric: "Valuation", left: hairSalonLeftKpis.valuation, right: "2.0× – 3.0× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Margin After Fees", left: 8, right: 5, winner: "Independent Hair Salon" },
  { label: "Ramp Speed", left: 5, right: 8, winner: "Franchise Salon" },
  { label: "Capital Barrier", left: 8, right: 6, winner: "Independent Hair Salon" },
  { label: "Owner Freedom", left: 9, right: 4, winner: "Independent Hair Salon" },
] as const;

export const leftRevenueSources = hairSalonLeftRevenueSources;

export const rightRevenueSources = [
  "Haircuts and quick services",
  "Add-on services (per brand menu)",
  "Retail product sales (brand lines)",
  "Memberships / wait-list app volume",
  "National brand marketing traffic",
  "Standardized upsell menu",
] as const;

export const revenueFunnel = {
  left: [...hairSalonLeftRevenueFunnel],
  right: ["Brand Traffic", "App / Walk-in Booking", "Standard Service", "Retail Upsell", "Rebooking"],
} as const;

export const clientFunnel = {
  left: [...hairSalonLeftClientFunnel],
  right: ["Brand-Driven Lead", "First Visit", "Repeat Cadence", "Loyal Repeat Client"],
} as const;

export const serviceFunnel = {
  left: [...hairSalonLeftServiceFunnel],
  right: ["Chair Capacity", "Booked Utilization", "Average Ticket", "Collected Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Average Ticket", left: "$45 – $85 service", right: "$22 – $45 standardized" },
  { driver: "Client Acquisition", left: "Self-marketed & word of mouth", right: "National brand + app traffic" },
  { driver: "Fees", left: "No royalties", right: "6 – 12% royalty + ad fund" },
  { driver: "Operating Systems", left: "Owner-built", right: "Turnkey franchise playbook" },
] as const;

export const clientEconomicsMetrics = [
  { metric: "Average Ticket", left: hairSalonLeftClientEconomics[0].value, right: "$22 – $45" },
  { metric: "Annual Visits Per Client", left: hairSalonLeftClientEconomics[1].value, right: "8 – 14" },
  { metric: "Estimated Lifetime Value", left: hairSalonLeftClientEconomics[2].value, right: "$1,200 – $3,000" },
  { metric: "Client Retention", left: hairSalonLeftClientEconomics[3].value, right: "55 – 70%" },
] as const;

export const serviceMetrics = [
  { metric: "Revenue Per Chair", left: hairSalonLeftServiceMetrics[0].value, right: "$45K – $85K" },
  { metric: "Revenue Per Stylist", left: hairSalonLeftServiceMetrics[1].value, right: "$55K – $100K" },
  { metric: "Chair Utilization", left: hairSalonLeftServiceMetrics[2].value, right: "70 – 85%" },
] as const;

export const marginTiers = {
  left: hairSalonLeftMarginTiers,
  right: { weak: "4 – 6%", average: "7 – 10%", strong: "11 – 14%" },
} as const;

export const costStructureComparison = [
  { expense: "Payroll & Commissions", left: hairSalonLeftCostStructure[0].value, right: "42 – 48%" },
  { expense: "Royalty + Ad Fund", left: "None", right: "6 – 12%" },
  { expense: "Rent", left: hairSalonLeftCostStructure[2].value, right: "10 – 15%" },
  { expense: "Product & Overhead", left: "22 – 32%", right: "20 – 28%" },
] as const;

export const recurringHighlights = {
  left: hairSalonLeftRecurringHighlight,
  right: { title: "Brand-Driven Repeat Traffic", value: "App wait-list & standardized rebooking" },
} as const;

export const recurringComparison = [
  { metric: "Rebooking Rate", left: hairSalonLeftRecurringComparison[0].value, right: "50 – 65%" },
  { metric: "Retail Attachment", left: hairSalonLeftRecurringComparison[1].value, right: "6 – 10%" },
  { metric: "Membership / App Adoption", left: hairSalonLeftRecurringComparison[2].value, right: "20 – 40%" },
] as const;

export const ownerIncomeComparison = [
  { model: "Owner-Operator Independent Salon", earnings: hairSalonLeftOwnerIncome[0].earnings, type: "left" },
  { model: "Established Independent Salon", earnings: hairSalonLeftOwnerIncome[1].earnings, type: "left" },
  { model: "Single-Unit Franchisee", earnings: "$45K – $110K", type: "right" },
  { model: "Multi-Unit Franchisee", earnings: "$150K – $350K", type: "right" },
] as const;

export const leftStartupItems = hairSalonLeftStartupItems;

export const rightStartupItems = [
  { item: "Franchise Fee", percent: 18 },
  { item: "Buildout", percent: 34 },
  { item: "Equipment & Signage", percent: 24 },
  { item: "Working Capital", percent: 14 },
] as const;

export const startupSideBySide = [
  { category: "Franchise / License Fee", left: "None", right: "$25K – $50K" },
  { category: "Buildout", left: hairSalonLeftStartupSideBySide.buildout, right: "$60K – $180K" },
  { category: "Equipment & Signage", left: hairSalonLeftStartupSideBySide.equipment, right: "$40K – $90K" },
  { category: "Total Launch Budget", left: hairSalonLeftStartupSideBySide.total, right: "$150K – $400K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: hairSalonLeftValuation.sde, right: "2.0× – 3.0×" },
  { metric: "Revenue Multiple", left: hairSalonLeftValuation.revenue, right: "0.4× – 0.7×" },
  { metric: "Resale Demand", left: "Local buyer pool", right: "Brand-backed buyer network" },
] as const;

export const valuationExamples = {
  left: hairSalonLeftValuation.example,
  right: { revenue: "$500K", value: "$140K – $230K", note: "2.2–2.8× SDE on $70K after royalties" },
} as const;

export const valuationExampleTitle = "Typical Single-Unit Exit Outcomes";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: hairSalonLeftBreakEven[0].value, right: "$28K – $45K" },
  { metric: "Visits Per Day", left: hairSalonLeftBreakEven[1].value, right: "35 – 60" },
  { metric: "Months to Break-Even", left: hairSalonLeftBreakEven[2].value, right: "12 – 24 months" },
] as const;

export const scalingLadder = {
  left: [...hairSalonLeftScalingLadder],
  right: ["First Franchise Unit", "Build Client Base", "Second Unit", "Multi-Unit Territory"],
} as const;

export const scalingLeftTitle = "Independent Salon Growth Path";
export const scalingRightTitle = "Franchise Salon Growth Path";

export const capitalEfficiency = {
  investment: "$200,000",
  left: hairSalonLeftCapitalEfficiency,
  right: {
    revenue: "$350K – $550K",
    profit: "$25K – $55K net after royalties",
    payback: "3 – 5 years",
  },
} as const;

export const chooseLeftTitle = "Choose an Independent Hair Salon If";
export const chooseRightTitle = "Choose a Franchise Salon If";

export const chooseLeft = [
  "You want full creative, pricing, and branding freedom",
  "You want to keep 100% of revenue with no royalties",
  "You prefer lower total startup cost",
  "You want higher net margins on higher-ticket services",
  "You are confident building your own client base and systems",
] as const;

export const chooseRight = [
  "You want a proven brand and turnkey operating playbook",
  "You value faster client ramp from national marketing",
  "You prefer training, systems, and vendor support",
  "You plan to scale into multiple units in a territory",
  "You are comfortable paying royalties for lower execution risk",
] as const;

export const calculators = hairSalonCalculators;

export const relatedComparisons = [
  { label: "Hair Salon vs Barbershop", href: "/comparisons/hair-salon-vs-barbershop/" },
  { label: "Hair Salon vs Mobile Salon", href: "/comparisons/hair-salon-vs-mobile-salon/" },
  { label: "Hair Salon vs Nail Salon", href: "/comparisons/hair-salon-vs-nail-salon/" },
  { label: "Hair Salon vs Day Spa", href: "/comparisons/hair-salon-vs-day-spa/" },
  { label: "Hair Salon Hub", href: "/industries/beauty/hair-salon/" },
] as const;

export const faqs = [
  {
    question: "Is an independent hair salon or a franchise salon more profitable?",
    answer:
      "Independent hair salons usually keep higher net margins (8–15%) because they pay no royalties, while franchise salons net 6–12% after 6–12% royalty and ad fees. Franchises trade some margin for faster client ramp and proven systems, so profitability depends on how much you value support versus keeping all revenue.",
  },
  {
    question: "How much do franchise salon royalties cost?",
    answer:
      "Most salon franchises charge a combined 6–12% of gross revenue in royalty plus advertising-fund fees, on top of a $25K–$50K upfront franchise fee. An independent hair salon avoids these fees entirely, which is the main margin advantage.",
  },
  {
    question: "Which is cheaper to open?",
    answer:
      "An independent hair salon ($80K–$250K) is generally cheaper to open than a franchise ($150K–$400K) once you include the franchise fee and brand-standard buildout. The franchise premium buys brand recognition and a documented launch process.",
  },
  {
    question: "Which ramps up faster?",
    answer:
      "Franchise salons typically ramp faster thanks to national brand awareness, app-based booking traffic, and marketing muscle. Independent salons rely on the owner's reputation and local marketing, which takes longer but avoids ongoing fees.",
  },
  {
    question: "Which is easier to sell?",
    answer:
      "Both trade around 2.0×–3.0× SDE, but franchise units can tap a brand-backed buyer network, while independents rely on a local buyer pool. Strong staff retention and clean books drive value in either model.",
  },
] as const;

export type DecisionInputs = BeautyDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreBeautyChoice(inputs, "Independent Hair Salon", "Franchise Salon", {
    ownerHandsOn: 2,
    ownerManager: 2,
    budgetLow: 2,
    budgetMedium: 1,
    budgetHigh: 2,
    revenueModerate: 2,
    revenueHigh: 1,
    revenueVeryHigh: 2,
    growthLifestyle: 2,
    growthExpand: 1,
    growthMulti: 3,
  });
}

export const decisionToolCopy = {
  left:
    "An independent hair salon is the better fit — full creative and pricing freedom, no royalties, lower startup cost, and higher net margins on your own client base.",
  right:
    "A franchise salon aligns with your goals if you want a proven brand, turnkey systems, faster client ramp, and a clear path to scaling multiple units.",
} as const;

export const beautyDualComparisonData: BeautyDualComparisonData = {
  comparisonMeta,
  comparisonLabels,
  decisionSnapshot,
  kpiComparison,
  winnerScorecard,
  leftRevenueSources,
  rightRevenueSources,
  revenueFunnel,
  revenueDrivers,
  clientFunnel,
  clientEconomicsMetrics,
  serviceFunnel,
  serviceMetrics,
  marginTiers,
  costStructureComparison,
  recurringHighlights,
  recurringComparison,
  ownerIncomeComparison,
  leftStartupItems,
  rightStartupItems,
  startupSideBySide,
  valuationComparison,
  valuationExamples,
  valuationExampleTitle,
  breakEvenComparison,
  scalingLadder,
  scalingLeftTitle,
  scalingRightTitle,
  capitalEfficiency,
  chooseLeft,
  chooseRight,
  chooseLeftTitle,
  chooseRightTitle,
  calculators,
  relatedComparisons,
  faqs,
};
