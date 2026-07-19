import type { BeautyDecisionInputs, BeautyDualComparisonData } from "./beauty-comparison-types";
import { scoreBeautyChoice } from "./beauty-comparison-types";
import {
  daySpaCalculators,
  daySpaHubLabels,
  daySpaLeftBreakEven,
  daySpaLeftClientEconomics,
  daySpaLeftClientFunnel,
  daySpaLeftCostStructure,
  daySpaLeftKpis,
  daySpaLeftMarginTiers,
  daySpaLeftOwnerIncome,
  daySpaLeftRecurringComparison,
  daySpaLeftRecurringHighlight,
  daySpaLeftRevenueFunnel,
  daySpaLeftRevenueSources,
  daySpaLeftScalingLadder,
  daySpaLeftServiceFunnel,
  daySpaLeftServiceMetrics,
  daySpaLeftStartupItems,
  daySpaLeftStartupSideBySide,
  daySpaLeftValuation,
  daySpaRelatedComparisons,
} from "./day-spa-comparison-shared";

export const comparisonMeta = {
  slug: "day-spa-vs-massage-spa",
  title: "Day Spa vs Massage Spa",
  subtitle:
    "Compare revenue, average ticket, profit margins, startup costs, owner pay, and valuation between a full-service day spa and a massage-focused spa business.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...daySpaHubLabels,
  right: "Massage Spa",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Average Ticket", winner: "Day Spa" },
  { factor: "Lower Startup Cost", winner: "Massage Spa" },
  { factor: "Higher Net Margin", winner: "Massage Spa" },
  { factor: "Higher Revenue Ceiling", winner: "Day Spa" },
  { factor: "Broader Service Menu", winner: "Day Spa" },
  { factor: "Faster Break-Even", winner: "Massage Spa" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: daySpaLeftKpis.annualRevenue, right: "$250K – $700K" },
  { metric: "Net Margin", left: daySpaLeftKpis.netMargin, right: "12 – 20%" },
  { metric: "Owner Compensation", left: daySpaLeftKpis.ownerComp, right: "$55K – $120K" },
  { metric: "Monthly Visits", left: daySpaLeftKpis.monthlyVisits, right: "500 – 1,100" },
  { metric: "Average Ticket", left: daySpaLeftKpis.revenuePerClient, right: "$80 – $150" },
  { metric: "Startup Cost", left: daySpaLeftKpis.startup, right: "$80K – $250K" },
  { metric: "Valuation", left: daySpaLeftKpis.valuation, right: "1.8× – 3.0× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Ticket Size", left: 8, right: 5, winner: "Day Spa" },
  { label: "Capital Barrier", left: 5, right: 8, winner: "Massage Spa" },
  { label: "Margin Quality", left: 6, right: 7, winner: "Massage Spa" },
  { label: "Service Breadth", left: 9, right: 4, winner: "Day Spa" },
] as const;

export const leftRevenueSources = daySpaLeftRevenueSources;

export const rightRevenueSources = [
  "Swedish and deep tissue massage",
  "Sports and therapeutic massage",
  "Hot stone and specialty massage",
  "Couples massage packages",
  "Membership and package plans",
  "Wellness add-ons (aromatherapy, CBD)",
] as const;

export const revenueFunnel = {
  left: [...daySpaLeftRevenueFunnel],
  right: ["New Client", "Massage Booking", "Package / Membership", "Add-On Upsell", "Rebooking"],
} as const;

export const clientFunnel = {
  left: [...daySpaLeftClientFunnel],
  right: ["New Client", "First Massage", "Package Purchase", "Monthly Member"],
} as const;

export const serviceFunnel = {
  left: [...daySpaLeftServiceFunnel],
  right: ["Treatment Room Capacity", "Booked Utilization", "Average Ticket", "Collected Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Average Ticket", left: "$120 – $250 treatment", right: "$80 – $150 massage" },
  { driver: "Visit Frequency", left: "Monthly membership cadence", right: "Bi-weekly to monthly massage cadence" },
  { driver: "Revenue Mix", left: "Massage + facials + body + retail", right: "Massage-only with package upsells" },
  { driver: "Provider Requirement", left: "Massage therapists + estheticians", right: "Licensed massage therapists (LMT)" },
] as const;

export const clientEconomicsMetrics = [
  { metric: "Average Ticket", left: daySpaLeftClientEconomics[0].value, right: "$80 – $150" },
  { metric: "Annual Visits Per Client", left: daySpaLeftClientEconomics[1].value, right: "8 – 16" },
  { metric: "Estimated Lifetime Value", left: daySpaLeftClientEconomics[2].value, right: "$1,800 – $4,500" },
  { metric: "Client Retention", left: daySpaLeftClientEconomics[3].value, right: "55 – 72%" },
] as const;

export const serviceMetrics = [
  { metric: "Revenue Per Treatment Room", left: daySpaLeftServiceMetrics[0].value, right: "$70K – $140K" },
  { metric: "Revenue Per Therapist", left: daySpaLeftServiceMetrics[1].value, right: "$90K – $160K" },
  { metric: "Room Utilization", left: daySpaLeftServiceMetrics[2].value, right: "62 – 80%" },
] as const;

export const marginTiers = {
  left: daySpaLeftMarginTiers,
  right: { weak: "8 – 11%", average: "13 – 17%", strong: "19 – 22%" },
} as const;

export const costStructureComparison = [
  { expense: "Payroll & Therapist Labor", left: daySpaLeftCostStructure[0].value, right: "44 – 52%" },
  { expense: "Product / Consumables COGS", left: daySpaLeftCostStructure[1].value, right: "5 – 10%" },
  { expense: "Rent", left: daySpaLeftCostStructure[2].value, right: "10 – 15%" },
  { expense: "Other Overhead", left: daySpaLeftCostStructure[3].value, right: "12 – 18%" },
] as const;

export const recurringHighlights = {
  left: daySpaLeftRecurringHighlight,
  right: { title: "Massage Packages + Memberships", value: "25–40% of revenue from packages & memberships" },
} as const;

export const recurringComparison = [
  { metric: "Rebooking Rate", left: daySpaLeftRecurringComparison[0].value, right: "55 – 70%" },
  { metric: "Retail Attachment", left: daySpaLeftRecurringComparison[1].value, right: "3 – 8%" },
  { metric: "Membership Adoption", left: daySpaLeftRecurringComparison[2].value, right: "20 – 35%" },
] as const;

export const ownerIncomeComparison = [
  { model: "Owner-Operator Day Spa", earnings: daySpaLeftOwnerIncome[0].earnings, type: "left" },
  { model: "Established Multi-Room Day Spa", earnings: daySpaLeftOwnerIncome[1].earnings, type: "left" },
  { model: "Owner-Therapist Massage Spa", earnings: "$55K – $95K", type: "right" },
  { model: "Established Multi-Room Massage Spa", earnings: "$100K – $160K", type: "right" },
] as const;

export const leftStartupItems = daySpaLeftStartupItems;

export const rightStartupItems = [
  { item: "Buildout & Treatment Rooms", percent: 38 },
  { item: "Massage Tables & Equipment", percent: 28 },
  { item: "Linens & Supplies", percent: 6 },
  { item: "Working Capital", percent: 16 },
] as const;

export const startupSideBySide = [
  { category: "Buildout", left: daySpaLeftStartupSideBySide.buildout, right: "$40K – $100K" },
  { category: "Equipment", left: daySpaLeftStartupSideBySide.equipment, right: "$20K – $55K" },
  { category: "Inventory / Supplies", left: daySpaLeftStartupSideBySide.inventory, right: "$5K – $15K" },
  { category: "Total Launch Budget", left: daySpaLeftStartupSideBySide.total, right: "$80K – $250K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: daySpaLeftValuation.sde, right: "1.8× – 3.0×" },
  { metric: "Revenue Multiple", left: daySpaLeftValuation.revenue, right: "0.35× – 0.65×" },
  { metric: "Typical Value", left: "$300K – $900K", right: "$180K – $500K" },
] as const;

export const valuationExamples = {
  left: daySpaLeftValuation.example,
  right: { revenue: "$450K", value: "$160K – $280K", note: "2.2–2.8× SDE on $75K" },
} as const;

export const valuationExampleTitle = "Typical Single-Location Exit Outcomes";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: daySpaLeftBreakEven[0].value, right: "$22K – $40K" },
  { metric: "Treatments Per Day", left: daySpaLeftBreakEven[1].value, right: "12 – 22" },
  { metric: "Months to Break-Even", left: daySpaLeftBreakEven[2].value, right: "12 – 24 months" },
] as const;

export const scalingLadder = {
  left: [...daySpaLeftScalingLadder],
  right: ["Solo / Duo Massage Studio", "Multi-Room Massage Spa", "Add Memberships", "Second Location"],
} as const;

export const scalingLeftTitle = "Day Spa Growth Path";
export const scalingRightTitle = "Massage Spa Growth Path";

export const capitalEfficiency = {
  investment: "$300,000",
  left: {
    revenue: "$450K – $750K",
    profit: "$55K – $120K net profit",
    payback: "3 – 5 years",
  },
  right: {
    revenue: "$300K – $500K",
    profit: "$40K – $85K net profit",
    payback: "2 – 4 years",
  },
} as const;

export const chooseLeftTitle = "Choose a Day Spa If";
export const chooseRightTitle = "Choose a Massage Spa If";

export const chooseLeft = [
  "You want a broader service menu — massage, facials, body treatments, and waxing",
  "You are targeting higher average tickets and a higher revenue ceiling",
  "You want strong membership and retail skincare revenue",
  "You plan to build a premium wellness brand with multiple treatment lines",
  "You can fund a larger buildout with esthetician and massage staffing",
] as const;

export const chooseRight = [
  "You want lower startup cost and faster break-even",
  "You prefer a focused massage-only model with simpler operations",
  "You value high visit frequency over premium multi-service tickets",
  "You want to start smaller with fewer provider types and licenses",
  "You plan to scale through massage packages and membership plans",
] as const;

export const calculators = daySpaCalculators;

export const relatedComparisons = daySpaRelatedComparisons;

export const faqs = [
  {
    question: "Is a day spa or massage spa more profitable?",
    answer:
      "Day spas typically earn higher absolute profit because of a broader menu and higher tickets ($120–$250 vs $80–$150). Massage spas often run slightly higher net margins (12–20% vs 10–18%) with lower overhead, but day spas scale to a higher revenue ceiling.",
  },
  {
    question: "Which is cheaper to open?",
    answer:
      "A massage spa is significantly cheaper to launch ($80K–$250K) than a full day spa ($150K–$500K), which requires facial equipment, esthetician rooms, retail inventory, and a broader buildout beyond massage tables.",
  },
  {
    question: "What is the difference in services?",
    answer:
      "Day spas offer massage, facials, body treatments, waxing, and retail skincare. Massage spas focus almost exclusively on massage therapy — Swedish, deep tissue, sports, hot stone — with package and membership upsells.",
  },
  {
    question: "Which is worth more when you sell?",
    answer:
      "Day spas command slightly higher multiples (2.0×–3.5× SDE) than massage spas (1.8×–3.0× SDE) because of broader revenue streams, retail attachment, and higher total revenue. Both benefit from membership bases and therapist retention.",
  },
  {
    question: "Can a massage spa expand into a day spa?",
    answer:
      "Yes. Many massage spas add facial rooms, waxing, and retail skincare to become full day spas, but it requires esthetician licensing, additional buildout, product inventory, and marketing to a broader client base.",
  },
] as const;

export type DecisionInputs = BeautyDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreBeautyChoice(inputs, "Day Spa", "Massage Spa", {
    ownerHandsOn: 1,
    ownerManager: 2,
    budgetLow: 2,
    budgetMedium: 1,
    budgetHigh: 1,
    revenueModerate: 1,
    revenueHigh: 1,
    revenueVeryHigh: 2,
    growthLifestyle: 1,
    growthExpand: 1,
    growthMulti: 2,
  });
}

export const decisionToolCopy = {
  left:
    "A day spa is the better fit if you want a broader service menu, higher average tickets, and strong membership plus retail revenue across massage, facials, and body treatments.",
  right:
    "A massage spa aligns with your goals if you want lower startup cost, faster break-even, and a focused massage-only model with simpler operations.",
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
