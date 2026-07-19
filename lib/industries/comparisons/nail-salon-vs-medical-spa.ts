import type { BeautyDecisionInputs, BeautyDualComparisonData } from "./beauty-comparison-types";
import { scoreBeautyChoice } from "./beauty-comparison-types";
import {
  nailSalonCalculators,
  nailSalonHubLabels,
  nailSalonLeftBreakEven,
  nailSalonLeftClientEconomics,
  nailSalonLeftClientFunnel,
  nailSalonLeftCostStructure,
  nailSalonLeftKpis,
  nailSalonLeftMarginTiers,
  nailSalonLeftOwnerIncome,
  nailSalonLeftRecurringComparison,
  nailSalonLeftRecurringHighlight,
  nailSalonLeftRevenueFunnel,
  nailSalonLeftRevenueSources,
  nailSalonLeftScalingLadder,
  nailSalonLeftServiceFunnel,
  nailSalonLeftServiceMetrics,
  nailSalonLeftStartupItems,
  nailSalonLeftStartupSideBySide,
  nailSalonLeftValuation,
  nailSalonRelatedComparisons,
} from "./nail-salon-comparison-shared";

export const comparisonMeta = {
  slug: "nail-salon-vs-medical-spa",
  title: "Nail Salon vs Medical Spa",
  subtitle:
    "Compare revenue, average ticket, profit margins, startup costs, owner pay, and valuation between a high-volume nail salon and a high-ticket medical spa (med spa).",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...nailSalonHubLabels,
  right: "Medical Spa",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Average Ticket", winner: "Medical Spa" },
  { factor: "Lower Startup Cost", winner: "Nail Salon" },
  { factor: "Higher Net Margin", winner: "Medical Spa" },
  { factor: "Higher Revenue Ceiling", winner: "Medical Spa" },
  { factor: "Simpler Regulation", winner: "Nail Salon" },
  { factor: "Faster Break-Even", winner: "Nail Salon" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: nailSalonLeftKpis.annualRevenue, right: "$600K – $2.5M" },
  { metric: "Net Margin", left: nailSalonLeftKpis.netMargin, right: "15 – 30%" },
  { metric: "Owner Compensation", left: nailSalonLeftKpis.ownerComp, right: "$120K – $350K" },
  { metric: "Monthly Visits", left: nailSalonLeftKpis.monthlyVisits, right: "350 – 900" },
  { metric: "Average Ticket", left: "$30 – $60", right: "$250 – $600" },
  { metric: "Startup Cost", left: nailSalonLeftKpis.startup, right: "$300K – $800K" },
  { metric: "Valuation", left: nailSalonLeftKpis.valuation, right: "3.0× – 5.5× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Ticket Size", left: 4, right: 10, winner: "Medical Spa" },
  { label: "Capital Barrier", left: 8, right: 3, winner: "Nail Salon" },
  { label: "Margin Quality", left: 5, right: 9, winner: "Medical Spa" },
  { label: "Regulatory Simplicity", left: 9, right: 4, winner: "Nail Salon" },
] as const;

export const leftRevenueSources = nailSalonLeftRevenueSources;

export const rightRevenueSources = [
  "Injectables (Botox, fillers)",
  "Laser and IPL treatments",
  "Medical-grade facials",
  "Body contouring",
  "Memberships and packages",
  "Medical-grade skincare retail",
] as const;

export const revenueFunnel = {
  left: [...nailSalonLeftRevenueFunnel],
  right: ["Lead / Consult", "Treatment Plan", "Injectable / Laser", "Membership", "Rebooking"],
} as const;

export const clientFunnel = {
  left: [...nailSalonLeftClientFunnel],
  right: ["New Lead", "Consultation", "First Treatment", "Recurring Member"],
} as const;

export const serviceFunnel = {
  left: [...nailSalonLeftServiceFunnel],
  right: ["Treatment Room Capacity", "Booked Utilization", "Average Ticket", "Collected Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Average Ticket", left: "$30 – $60 service", right: "$250 – $600 treatment" },
  { driver: "Visit Frequency", left: "Every 2 – 4 weeks", right: "Every 3 – 4 months (injectables)" },
  { driver: "Retail / Membership", left: "3 – 7% retail", right: "25 – 45% membership + medical retail" },
  { driver: "Provider Requirement", left: "Nail technician license", right: "Medical director + RN/NP/PA" },
] as const;

export const clientEconomicsMetrics = [
  { metric: "Average Ticket", left: nailSalonLeftClientEconomics[0].value, right: "$250 – $600" },
  { metric: "Annual Visits Per Client", left: nailSalonLeftClientEconomics[1].value, right: "3 – 6" },
  { metric: "Estimated Lifetime Value", left: nailSalonLeftClientEconomics[2].value, right: "$4,000 – $15,000" },
  { metric: "Client Retention", left: nailSalonLeftClientEconomics[3].value, right: "55 – 72%" },
] as const;

export const serviceMetrics = [
  { metric: "Revenue Per Station/Room", left: nailSalonLeftServiceMetrics[0].value, right: "$200K – $500K" },
  { metric: "Revenue Per Provider", left: nailSalonLeftServiceMetrics[1].value, right: "$300K – $700K" },
  { metric: "Room Utilization", left: nailSalonLeftServiceMetrics[2].value, right: "55 – 75%" },
] as const;

export const marginTiers = {
  left: nailSalonLeftMarginTiers,
  right: { weak: "10 – 14%", average: "18 – 24%", strong: "28 – 35%" },
} as const;

export const costStructureComparison = [
  { expense: "Payroll & Clinical Labor", left: nailSalonLeftCostStructure[0].value, right: "30 – 40%" },
  { expense: "Product / Consumables COGS", left: nailSalonLeftCostStructure[1].value, right: "15 – 25%" },
  { expense: "Rent", left: nailSalonLeftCostStructure[2].value, right: "8 – 14%" },
  { expense: "Other Overhead", left: nailSalonLeftCostStructure[3].value, right: "10 – 16%" },
] as const;

export const recurringHighlights = {
  left: nailSalonLeftRecurringHighlight,
  right: { title: "Membership + Medical Retail", value: "25–45% of revenue recurring" },
} as const;

export const recurringComparison = [
  { metric: "Rebooking Rate", left: nailSalonLeftRecurringComparison[0].value, right: "55 – 70%" },
  { metric: "Retail Attachment", left: nailSalonLeftRecurringComparison[1].value, right: "15 – 25%" },
  { metric: "Membership Adoption", left: nailSalonLeftRecurringComparison[2].value, right: "30 – 50%" },
] as const;

export const ownerIncomeComparison = [
  { model: "Owner-Operator Nail Salon", earnings: nailSalonLeftOwnerIncome[0].earnings, type: "left" },
  { model: "Multi-Station Nail Salon", earnings: nailSalonLeftOwnerIncome[1].earnings, type: "left" },
  { model: "Owner-Operator Med Spa", earnings: "$120K – $250K", type: "right" },
  { model: "Established Multi-Provider Med Spa", earnings: "$300K – $600K+", type: "right" },
] as const;

export const leftStartupItems = nailSalonLeftStartupItems;

export const rightStartupItems = [
  { item: "Buildout & Medical Rooms", percent: 32 },
  { item: "Devices & Lasers", percent: 34 },
  { item: "Inventory / Consumables", percent: 10 },
  { item: "Working Capital", percent: 14 },
] as const;

export const startupSideBySide = [
  { category: "Buildout", left: nailSalonLeftStartupSideBySide.buildout, right: "$100K – $250K" },
  { category: "Equipment / Devices", left: nailSalonLeftStartupSideBySide.equipment, right: "$150K – $400K" },
  { category: "Inventory / Consumables", left: nailSalonLeftStartupSideBySide.inventory, right: "$30K – $80K" },
  { category: "Total Launch Budget", left: nailSalonLeftStartupSideBySide.total, right: "$300K – $800K" },
] as const;

export const valuationComparison = [
  { metric: "SDE / EBITDA Multiple", left: nailSalonLeftValuation.sde, right: "3.0× – 5.5×" },
  { metric: "Revenue Multiple", left: nailSalonLeftValuation.revenue, right: "0.8× – 1.5×" },
  { metric: "Typical Value", left: "$120K – $320K", right: "$700K – $3.0M" },
] as const;

export const valuationExamples = {
  left: nailSalonLeftValuation.example,
  right: { revenue: "$1.2M", value: "$720K – $1.4M", note: "3.5–4.5× SDE on $250K" },
} as const;

export const valuationExampleTitle = "Typical Single-Location Exit Outcomes";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: nailSalonLeftBreakEven[0].value, right: "$55K – $110K" },
  { metric: "Treatments Per Day", left: nailSalonLeftBreakEven[1].value, right: "10 – 20" },
  { metric: "Months to Break-Even", left: nailSalonLeftBreakEven[2].value, right: "18 – 36 months" },
] as const;

export const scalingLadder = {
  left: [...nailSalonLeftScalingLadder],
  right: ["Single Injector", "Add Laser Devices", "Add Providers", "Multi-Location Med Spa"],
} as const;

export const scalingLeftTitle = "Nail Salon Growth Path";
export const scalingRightTitle = "Medical Spa Growth Path";

export const capitalEfficiency = {
  investment: "$350,000",
  left: {
    revenue: "$240K – $400K",
    profit: "$28K – $60K net profit",
    payback: "2 – 4 years",
  },
  right: {
    revenue: "$800K – $1.4M",
    profit: "$150K – $350K net profit",
    payback: "2 – 4 years",
  },
} as const;

export const chooseLeftTitle = "Choose a Nail Salon If";
export const chooseRightTitle = "Choose a Medical Spa If";

export const chooseLeft = [
  "You want lower startup cost and simpler regulation",
  "You prefer no medical director or clinical licensing requirements",
  "You value high-frequency repeat visits every 2–4 weeks",
  "You want faster break-even with a focused service menu",
  "You are comfortable with a lower revenue ceiling per location",
] as const;

export const chooseRight = [
  "You want much higher tickets and net margins",
  "You can partner with a medical director and hire RN/NP/PA injectors",
  "You are targeting a high revenue ceiling and premium valuation",
  "You can fund a larger device-heavy buildout",
  "You want strong membership and medical retail revenue",
] as const;

export const calculators = nailSalonCalculators;

export const relatedComparisons = nailSalonRelatedComparisons;

export const faqs = [
  {
    question: "Is a nail salon or medical spa more profitable?",
    answer:
      "A medical spa is typically more profitable in absolute terms — net margins run 15–30% versus 10–17% for a nail salon, on much higher tickets ($250–$600). The trade-off is a far larger startup investment, medical oversight, and a longer ramp than a nail salon.",
  },
  {
    question: "Which is cheaper to open, a nail salon or a med spa?",
    answer:
      "A nail salon is dramatically cheaper to open ($70K–$180K) than a medical spa ($300K–$800K), which requires medical-grade devices, treatment rooms, and a medical director. The lower barrier makes a nail salon far faster to break even.",
  },
  {
    question: "Does a medical spa need a medical director?",
    answer:
      "Yes. In most U.S. states a medical spa must operate under a licensed medical director, with treatments delivered by RNs, NPs, or PAs. A nail salon only requires nail technician licensing, which is why its regulatory burden is much lower.",
  },
  {
    question: "Which is worth more when you sell it?",
    answer:
      "Medical spas command higher multiples (3.0×–5.5× SDE) than nail salons (1.6×–2.6× SDE) because of recurring memberships, high tickets, and strong margins. A $1.2M med spa can sell for $720K–$1.4M, well above a comparable nail salon.",
  },
  {
    question: "Can a nail salon add med spa services?",
    answer:
      "Some nail salons add a med spa arm to capture high-ticket injectable and laser revenue, but it requires a medical director, clinical staff, device investment, and compliance infrastructure — effectively running a second, regulated business alongside the salon.",
  },
] as const;

export type DecisionInputs = BeautyDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreBeautyChoice(inputs, "Nail Salon", "Medical Spa", {
    ownerHandsOn: 3,
    ownerManager: 2,
    budgetLow: 3,
    budgetMedium: 1,
    budgetHigh: 3,
    revenueModerate: 3,
    revenueHigh: 1,
    revenueVeryHigh: 3,
    growthLifestyle: 2,
    growthExpand: 1,
    growthMulti: 3,
  });
}

export const decisionToolCopy = {
  left:
    "A nail salon aligns with your goals if you want lower startup cost, no medical oversight, faster break-even, and high-frequency repeat visits with a focused service menu.",
  right:
    "A medical spa is the better fit if you want much higher tickets and margins, can partner with a medical director, and are targeting a premium valuation.",
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
