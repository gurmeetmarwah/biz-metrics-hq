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
  slug: "day-spa-vs-facial-studio",
  title: "Day Spa vs Facial Studio",
  subtitle:
    "Compare revenue, average ticket, profit margins, startup costs, owner pay, and valuation between a full-service day spa and a facial and skincare-focused studio.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...daySpaHubLabels,
  right: "Facial Studio",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Average Ticket", winner: "Day Spa" },
  { factor: "Lower Startup Cost", winner: "Facial Studio" },
  { factor: "Higher Net Margin", winner: "Facial Studio" },
  { factor: "Higher Revenue Ceiling", winner: "Day Spa" },
  { factor: "Broader Service Menu", winner: "Day Spa" },
  { factor: "Faster Break-Even", winner: "Facial Studio" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: daySpaLeftKpis.annualRevenue, right: "$200K – $600K" },
  { metric: "Net Margin", left: daySpaLeftKpis.netMargin, right: "15 – 25%" },
  { metric: "Owner Compensation", left: daySpaLeftKpis.ownerComp, right: "$50K – $110K" },
  { metric: "Monthly Visits", left: daySpaLeftKpis.monthlyVisits, right: "350 – 800" },
  { metric: "Average Ticket", left: daySpaLeftKpis.revenuePerClient, right: "$100 – $200" },
  { metric: "Startup Cost", left: daySpaLeftKpis.startup, right: "$100K – $300K" },
  { metric: "Valuation", left: daySpaLeftKpis.valuation, right: "1.8× – 3.0× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Ticket Size", left: 7, right: 6, winner: "Day Spa" },
  { label: "Capital Barrier", left: 5, right: 7, winner: "Facial Studio" },
  { label: "Margin Quality", left: 5, right: 8, winner: "Facial Studio" },
  { label: "Service Breadth", left: 9, right: 4, winner: "Day Spa" },
] as const;

export const leftRevenueSources = daySpaLeftRevenueSources;

export const rightRevenueSources = [
  "Custom and medical-grade facials",
  "Chemical peels and microdermabrasion",
  "LED and light therapy treatments",
  "Skincare consultations",
  "Membership and facial series",
  "Professional skincare retail",
] as const;

export const revenueFunnel = {
  left: [...daySpaLeftRevenueFunnel],
  right: ["New Client", "Skin Consultation", "Facial Treatment", "Product Retail", "Rebooking"],
} as const;

export const clientFunnel = {
  left: [...daySpaLeftClientFunnel],
  right: ["New Client", "Skin Analysis", "Treatment Series", "Skincare Member"],
} as const;

export const serviceFunnel = {
  left: [...daySpaLeftServiceFunnel],
  right: ["Treatment Room Capacity", "Booked Utilization", "Average Ticket", "Collected Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Average Ticket", left: "$120 – $250 treatment", right: "$100 – $200 facial" },
  { driver: "Visit Frequency", left: "Monthly membership cadence", right: "Every 4 – 6 weeks (skincare cadence)" },
  { driver: "Revenue Mix", left: "Massage + facials + body + retail", right: "Facials + peels + skincare retail" },
  { driver: "Provider Requirement", left: "Massage therapists + estheticians", right: "Licensed estheticians (LE)" },
] as const;

export const clientEconomicsMetrics = [
  { metric: "Average Ticket", left: daySpaLeftClientEconomics[0].value, right: "$100 – $200" },
  { metric: "Annual Visits Per Client", left: daySpaLeftClientEconomics[1].value, right: "6 – 10" },
  { metric: "Estimated Lifetime Value", left: daySpaLeftClientEconomics[2].value, right: "$2,000 – $5,500" },
  { metric: "Client Retention", left: daySpaLeftClientEconomics[3].value, right: "58 – 78%" },
] as const;

export const serviceMetrics = [
  { metric: "Revenue Per Treatment Room", left: daySpaLeftServiceMetrics[0].value, right: "$80K – $160K" },
  { metric: "Revenue Per Esthetician", left: daySpaLeftServiceMetrics[1].value, right: "$100K – $180K" },
  { metric: "Room Utilization", left: daySpaLeftServiceMetrics[2].value, right: "58 – 75%" },
] as const;

export const marginTiers = {
  left: daySpaLeftMarginTiers,
  right: { weak: "10 – 14%", average: "16 – 20%", strong: "22 – 28%" },
} as const;

export const costStructureComparison = [
  { expense: "Payroll & Therapist Labor", left: daySpaLeftCostStructure[0].value, right: "38 – 46%" },
  { expense: "Product / Consumables COGS", left: daySpaLeftCostStructure[1].value, right: "12 – 20%" },
  { expense: "Rent", left: daySpaLeftCostStructure[2].value, right: "10 – 14%" },
  { expense: "Other Overhead", left: daySpaLeftCostStructure[3].value, right: "12 – 18%" },
] as const;

export const recurringHighlights = {
  left: daySpaLeftRecurringHighlight,
  right: { title: "Facial Series + Skincare Retail", value: "30–50% of revenue from series & retail" },
} as const;

export const recurringComparison = [
  { metric: "Rebooking Rate", left: daySpaLeftRecurringComparison[0].value, right: "55 – 72%" },
  { metric: "Retail Attachment", left: daySpaLeftRecurringComparison[1].value, right: "20 – 35%" },
  { metric: "Membership Adoption", left: daySpaLeftRecurringComparison[2].value, right: "25 – 40%" },
] as const;

export const ownerIncomeComparison = [
  { model: "Owner-Operator Day Spa", earnings: daySpaLeftOwnerIncome[0].earnings, type: "left" },
  { model: "Established Multi-Room Day Spa", earnings: daySpaLeftOwnerIncome[1].earnings, type: "left" },
  { model: "Owner-Esthetician Facial Studio", earnings: "$50K – $90K", type: "right" },
  { model: "Established Multi-Room Facial Studio", earnings: "$95K – $150K", type: "right" },
] as const;

export const leftStartupItems = daySpaLeftStartupItems;

export const rightStartupItems = [
  { item: "Buildout & Treatment Rooms", percent: 36 },
  { item: "Facial Equipment & Devices", percent: 24 },
  { item: "Skincare Product Inventory", percent: 14 },
  { item: "Working Capital", percent: 14 },
] as const;

export const startupSideBySide = [
  { category: "Buildout", left: daySpaLeftStartupSideBySide.buildout, right: "$45K – $110K" },
  { category: "Equipment", left: daySpaLeftStartupSideBySide.equipment, right: "$25K – $70K" },
  { category: "Inventory / Supplies", left: daySpaLeftStartupSideBySide.inventory, right: "$20K – $50K" },
  { category: "Total Launch Budget", left: daySpaLeftStartupSideBySide.total, right: "$100K – $300K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: daySpaLeftValuation.sde, right: "1.8× – 3.0×" },
  { metric: "Revenue Multiple", left: daySpaLeftValuation.revenue, right: "0.4× – 0.75×" },
  { metric: "Typical Value", left: "$300K – $900K", right: "$150K – $450K" },
] as const;

export const valuationExamples = {
  left: daySpaLeftValuation.example,
  right: { revenue: "$380K", value: "$140K – $240K", note: "2.2–2.8× SDE on $68K" },
} as const;

export const valuationExampleTitle = "Typical Single-Location Exit Outcomes";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: daySpaLeftBreakEven[0].value, right: "$20K – $38K" },
  { metric: "Treatments Per Day", left: daySpaLeftBreakEven[1].value, right: "8 – 16" },
  { metric: "Months to Break-Even", left: daySpaLeftBreakEven[2].value, right: "12 – 22 months" },
] as const;

export const scalingLadder = {
  left: [...daySpaLeftScalingLadder],
  right: ["Solo Esthetician Studio", "Multi-Room Facial Studio", "Add Peels & Devices", "Second Location"],
} as const;

export const scalingLeftTitle = "Day Spa Growth Path";
export const scalingRightTitle = "Facial Studio Growth Path";

export const capitalEfficiency = {
  investment: "$250,000",
  left: {
    revenue: "$450K – $750K",
    profit: "$55K – $120K net profit",
    payback: "3 – 5 years",
  },
  right: {
    revenue: "$280K – $450K",
    profit: "$45K – $95K net profit",
    payback: "2 – 4 years",
  },
} as const;

export const chooseLeftTitle = "Choose a Day Spa If";
export const chooseRightTitle = "Choose a Facial Studio If";

export const chooseLeft = [
  "You want a broader service menu — massage, facials, body treatments, and waxing",
  "You are targeting a higher revenue ceiling per location",
  "You want to serve couples, gift buyers, and full wellness experiences",
  "You plan to build through massage volume and multi-service memberships",
  "You can fund a larger buildout with massage and esthetician staffing",
] as const;

export const chooseRight = [
  "You want lower startup cost and faster break-even",
  "You prefer a focused skincare and facial treatment model",
  "You value higher net margins through retail skincare attachment",
  "You want to specialize as a skincare expert with fewer provider types",
  "You plan to scale through facial series, memberships, and product retail",
] as const;

export const calculators = daySpaCalculators;

export const relatedComparisons = daySpaRelatedComparisons;

export const faqs = [
  {
    question: "Is a day spa or facial studio more profitable?",
    answer:
      "Facial studios often run higher net margins (15–25% vs 10–18%) with strong skincare retail attachment. Day spas earn higher absolute profit because of a broader menu and higher total revenue, but facial studios can be more capital-efficient per square foot.",
  },
  {
    question: "Which is cheaper to open?",
    answer:
      "A facial studio is cheaper to launch ($100K–$300K) than a full day spa ($150K–$500K), which requires massage rooms, multiple provider types, and a broader equipment footprint beyond facial beds and skincare devices.",
  },
  {
    question: "What is the difference in services?",
    answer:
      "Day spas offer massage, facials, body treatments, waxing, and retail skincare. Facial studios focus exclusively on skincare — custom facials, peels, LED therapy, and professional product retail — without massage or body services.",
  },
  {
    question: "Which is worth more when you sell?",
    answer:
      "Day spas command slightly higher multiples (2.0×–3.5× SDE) and total values because of broader revenue streams and higher total revenue. Facial studios sell at 1.8×–3.0× SDE but can be attractive for buyers seeking a focused skincare brand.",
  },
  {
    question: "Can a facial studio expand into a day spa?",
    answer:
      "Yes. Many facial studios add massage rooms and body treatments to become full day spas, but it requires massage therapist hiring, additional buildout, and marketing to a broader wellness client base.",
  },
] as const;

export type DecisionInputs = BeautyDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreBeautyChoice(inputs, "Day Spa", "Facial Studio", {
    ownerHandsOn: 1,
    ownerManager: 2,
    budgetLow: 2,
    budgetMedium: 1,
    budgetHigh: 1,
    revenueModerate: 1,
    revenueHigh: 2,
    revenueVeryHigh: 2,
    growthLifestyle: 1,
    growthExpand: 1,
    growthMulti: 2,
  });
}

export const decisionToolCopy = {
  left:
    "A day spa is the better fit if you want a broader service menu, higher revenue ceiling, and full wellness experiences across massage, facials, and body treatments.",
  right:
    "A facial studio aligns with your goals if you want lower startup cost, higher margins, and a focused skincare model with strong product retail attachment.",
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
