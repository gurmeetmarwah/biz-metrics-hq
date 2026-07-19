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
  slug: "day-spa-vs-wellness-clinic",
  title: "Day Spa vs Wellness Clinic",
  subtitle:
    "Compare revenue, profit margins, owner pay, startup costs, and valuation between a treatment-focused day spa and a wellness clinic offering IV therapy, chiropractic, and massage services.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...daySpaHubLabels,
  right: "Wellness Clinic",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Average Ticket", winner: "Day Spa" },
  { factor: "Lower Startup Cost", winner: "Wellness Clinic" },
  { factor: "Higher Net Margin", winner: "Wellness Clinic" },
  { factor: "Higher Revenue Ceiling", winner: "Wellness Clinic" },
  { factor: "Broader Service Menu", winner: "Wellness Clinic" },
  { factor: "Faster Break-Even", winner: "Wellness Clinic" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: daySpaLeftKpis.annualRevenue, right: "$400K – $1.5M" },
  { metric: "Net Margin", left: daySpaLeftKpis.netMargin, right: "12 – 22%" },
  { metric: "Owner Compensation", left: daySpaLeftKpis.ownerComp, right: "$80K – $180K" },
  { metric: "Monthly Visits", left: daySpaLeftKpis.monthlyVisits, right: "500 – 1,200" },
  { metric: "Average Ticket", left: daySpaLeftKpis.revenuePerClient, right: "$80 – $250" },
  { metric: "Startup Cost", left: daySpaLeftKpis.startup, right: "$150K – $450K" },
  { metric: "Valuation", left: daySpaLeftKpis.valuation, right: "2.5× – 4.0× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Ticket Size", left: 7, right: 5, winner: "Day Spa" },
  { label: "Capital Barrier", left: 5, right: 7, winner: "Wellness Clinic" },
  { label: "Margin Quality", left: 5, right: 7, winner: "Wellness Clinic" },
  { label: "Service Breadth", left: 6, right: 9, winner: "Wellness Clinic" },
] as const;

export const leftRevenueSources = daySpaLeftRevenueSources;

export const rightRevenueSources = [
  "IV vitamin therapy",
  "Chiropractic adjustments",
  "Massage and bodywork",
  "Functional medicine consults",
  "Weight loss programs",
  "Supplements and retail",
] as const;

export const revenueFunnel = {
  left: [...daySpaLeftRevenueFunnel],
  right: ["New Client", "Wellness Assessment", "Treatment Package", "Membership", "Rebooking"],
} as const;

export const clientFunnel = {
  left: [...daySpaLeftClientFunnel],
  right: ["New Client", "Initial Visit", "Treatment Plan", "Wellness Member"],
} as const;

export const serviceFunnel = {
  left: [...daySpaLeftServiceFunnel],
  right: ["Room / Bay Capacity", "Booked Utilization", "Average Ticket", "Collected Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Average Ticket", left: "$120 – $250 treatment", right: "$80 – $250 visit" },
  { driver: "Visit Frequency", left: "Monthly membership cadence", right: "Weekly to monthly cadence" },
  { driver: "Revenue Mix", left: "Massage + facials + body + retail", right: "IV + chiropractic + massage mix" },
  { driver: "Provider Requirement", left: "Licensed estheticians & massage therapists", right: "Chiropractor, RN, LMT licenses" },
] as const;

export const clientEconomicsMetrics = [
  { metric: "Average Ticket", left: daySpaLeftClientEconomics[0].value, right: "$80 – $250" },
  { metric: "Annual Visits Per Client", left: daySpaLeftClientEconomics[1].value, right: "8 – 20" },
  { metric: "Estimated Lifetime Value", left: daySpaLeftClientEconomics[2].value, right: "$1,500 – $5,000" },
  { metric: "Client Retention", left: daySpaLeftClientEconomics[3].value, right: "50 – 70%" },
] as const;

export const serviceMetrics = [
  { metric: "Revenue Per Treatment Room", left: daySpaLeftServiceMetrics[0].value, right: "$80K – $200K" },
  { metric: "Revenue Per Provider", left: daySpaLeftServiceMetrics[1].value, right: "$120K – $280K" },
  { metric: "Room Utilization", left: daySpaLeftServiceMetrics[2].value, right: "55 – 72%" },
] as const;

export const marginTiers = {
  left: daySpaLeftMarginTiers,
  right: { weak: "8 – 12%", average: "14 – 18%", strong: "20 – 22%" },
} as const;

export const costStructureComparison = [
  { expense: "Payroll & Therapist Labor", left: daySpaLeftCostStructure[0].value, right: "38 – 48%" },
  { expense: "Product / Consumables COGS", left: daySpaLeftCostStructure[1].value, right: "10 – 18%" },
  { expense: "Rent", left: daySpaLeftCostStructure[2].value, right: "10 – 15%" },
  { expense: "Other Overhead", left: daySpaLeftCostStructure[3].value, right: "12 – 18%" },
] as const;

export const recurringHighlights = {
  left: daySpaLeftRecurringHighlight,
  right: { title: "Membership + IV Packages", value: "20–35% of revenue from memberships & packages" },
} as const;

export const recurringComparison = [
  { metric: "Rebooking Rate", left: daySpaLeftRecurringComparison[0].value, right: "45 – 60%" },
  { metric: "Retail Attachment", left: daySpaLeftRecurringComparison[1].value, right: "10 – 20%" },
  { metric: "Membership Adoption", left: daySpaLeftRecurringComparison[2].value, right: "20 – 35%" },
] as const;

export const ownerIncomeComparison = [
  { model: "Owner-Operator Day Spa", earnings: daySpaLeftOwnerIncome[0].earnings, type: "left" },
  { model: "Established Multi-Room Day Spa", earnings: daySpaLeftOwnerIncome[1].earnings, type: "left" },
  { model: "Owner-Operator Wellness Clinic", earnings: "$80K – $140K", type: "right" },
  { model: "Established Multi-Service Wellness Clinic", earnings: "$150K – $220K", type: "right" },
] as const;

export const leftStartupItems = daySpaLeftStartupItems;

export const rightStartupItems = [
  { item: "Buildout & Treatment Bays", percent: 35 },
  { item: "IV & Therapy Equipment", percent: 22 },
  { item: "Inventory & Supplements", percent: 10 },
  { item: "Working Capital", percent: 18 },
] as const;

export const startupSideBySide = [
  { category: "Buildout", left: daySpaLeftStartupSideBySide.buildout, right: "$60K – $180K" },
  { category: "Equipment", left: daySpaLeftStartupSideBySide.equipment, right: "$40K – $120K" },
  { category: "Inventory / Supplies", left: daySpaLeftStartupSideBySide.inventory, right: "$15K – $50K" },
  { category: "Total Launch Budget", left: daySpaLeftStartupSideBySide.total, right: "$150K – $450K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: daySpaLeftValuation.sde, right: "2.5× – 4.0×" },
  { metric: "Revenue Multiple", left: daySpaLeftValuation.revenue, right: "0.4× – 0.8×" },
  { metric: "Typical Value", left: "$300K – $900K", right: "$250K – $800K" },
] as const;

export const valuationExamples = {
  left: daySpaLeftValuation.example,
  right: { revenue: "$800K", value: "$280K – $480K", note: "3.0–3.5× SDE on $110K" },
} as const;

export const valuationExampleTitle = "Typical Single-Location Exit Outcomes";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: daySpaLeftBreakEven[0].value, right: "$30K – $55K" },
  { metric: "Treatments Per Day", left: daySpaLeftBreakEven[1].value, right: "20 – 40" },
  { metric: "Months to Break-Even", left: daySpaLeftBreakEven[2].value, right: "12 – 24 months" },
] as const;

export const scalingLadder = {
  left: [...daySpaLeftScalingLadder],
  right: ["Single-Service Clinic", "Add IV + Chiropractic", "Membership Model", "Second Location"],
} as const;

export const scalingLeftTitle = "Day Spa Growth Path";
export const scalingRightTitle = "Wellness Clinic Growth Path";

export const capitalEfficiency = {
  investment: "$300,000",
  left: {
    revenue: "$450K – $750K",
    profit: "$55K – $120K net profit",
    payback: "3 – 5 years",
  },
  right: {
    revenue: "$450K – $800K",
    profit: "$55K – $140K net profit",
    payback: "2 – 4 years",
  },
} as const;

export const chooseLeftTitle = "Choose a Day Spa If";
export const chooseRightTitle = "Choose a Wellness Clinic If";

export const chooseLeft = [
  "You want a premium relaxation and skincare experience without clinical licensing",
  "You prefer massage, facials, and body treatments over IV and chiropractic",
  "You value strong retail skincare and membership-driven spa revenue",
  "You want a wellness brand focused on self-care and stress relief",
  "You plan to build through treatment packages and esthetician services",
] as const;

export const chooseRight = [
  "You want a broader clinical wellness menu (IV, chiropractic, functional medicine)",
  "You prefer higher visit frequency and health-oriented client relationships",
  "You can hire or partner with chiropractors, RNs, and licensed clinicians",
  "You want faster break-even with comparable startup investment",
  "You plan to build through IV packages, memberships, and supplement retail",
] as const;

export const calculators = daySpaCalculators;

export const relatedComparisons = daySpaRelatedComparisons;

export const faqs = [
  {
    question: "Is a day spa or wellness clinic more profitable?",
    answer:
      "Wellness clinics often run slightly higher net margins (12–22% vs 10–18%) with a broader clinical menu. Day spas earn competitive profit on higher treatment tickets ($120–$250), but wellness clinics can scale revenue through IV therapy, chiropractic, and high-frequency visits.",
  },
  {
    question: "Which is cheaper to open?",
    answer:
      "Startup costs are comparable — day spas run $150K–$500K and wellness clinics $150K–$450K. Wellness clinics invest in IV bays and clinical equipment; day spas invest in treatment rooms, facial equipment, and retail skincare inventory.",
  },
  {
    question: "What is the difference in services?",
    answer:
      "Day spas focus on massage, facials, body treatments, waxing, and retail skincare in a relaxation setting. Wellness clinics blend IV vitamin therapy, chiropractic, massage, functional medicine, and supplements with a health-oriented service menu.",
  },
  {
    question: "Which is worth more when you sell?",
    answer:
      "Wellness clinics command slightly higher multiples (2.5×–4.0× SDE) than day spas (2.0×–3.5× SDE) because of clinical revenue and broader service lines. Both benefit from membership revenue and recurring client bases.",
  },
  {
    question: "Can a day spa add wellness clinic services?",
    answer:
      "Some day spas add IV therapy or chiropractic, but it requires clinical licensing, RN or DC staff, compliance infrastructure, and a shift from relaxation-focused to health-oriented marketing.",
  },
] as const;

export type DecisionInputs = BeautyDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreBeautyChoice(inputs, "Day Spa", "Wellness Clinic", {
    ownerHandsOn: 1,
    ownerManager: 2,
    budgetLow: 1,
    budgetMedium: 1,
    budgetHigh: 2,
    revenueModerate: 1,
    revenueHigh: 2,
    revenueVeryHigh: 2,
    growthLifestyle: 1,
    growthExpand: 2,
    growthMulti: 2,
  });
}

export const decisionToolCopy = {
  left:
    "A day spa is the better fit if you want a premium relaxation and skincare experience focused on massage, facials, and membership-driven spa revenue.",
  right:
    "A wellness clinic aligns with your goals if you want a broader clinical menu — IV therapy, chiropractic, and functional medicine — with higher visit frequency.",
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
