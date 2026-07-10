import type { BeautyDecisionInputs, BeautyDualComparisonData } from "./beauty-comparison-types";
import { scoreBeautyChoice } from "./beauty-comparison-types";
import {
  hairSalonCalculators,
  hairSalonHubLabels,
  hairSalonLeftBreakEven,
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
  slug: "hair-salon-vs-medical-spa",
  title: "Hair Salon vs Medical Spa",
  subtitle:
    "Compare revenue, average ticket, profit margins, startup costs, owner pay, and valuation between a full-service hair salon and a high-ticket medical spa (med spa).",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...hairSalonHubLabels,
  right: "Medical Spa",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Average Ticket", winner: "Medical Spa" },
  { factor: "Lower Startup Cost", winner: "Hair Salon" },
  { factor: "Higher Net Margin", winner: "Medical Spa" },
  { factor: "Higher Revenue Ceiling", winner: "Medical Spa" },
  { factor: "Simpler Regulation", winner: "Hair Salon" },
  { factor: "Faster Break-Even", winner: "Hair Salon" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: hairSalonLeftKpis.annualRevenue, right: "$600K – $2.5M" },
  { metric: "Net Margin", left: hairSalonLeftKpis.netMargin, right: "15 – 30%" },
  { metric: "Owner Compensation", left: hairSalonLeftKpis.ownerComp, right: "$120K – $350K" },
  { metric: "Monthly Visits", left: hairSalonLeftKpis.monthlyVisits, right: "350 – 900" },
  { metric: "Average Ticket", left: hairSalonLeftKpis.revenuePerClient, right: "$250 – $600" },
  { metric: "Startup Cost", left: hairSalonLeftKpis.startup, right: "$300K – $800K" },
  { metric: "Valuation", left: hairSalonLeftKpis.valuation, right: "3.0× – 5.5× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Ticket Size", left: 4, right: 10, winner: "Medical Spa" },
  { label: "Capital Barrier", left: 8, right: 3, winner: "Hair Salon" },
  { label: "Margin Quality", left: 5, right: 9, winner: "Medical Spa" },
  { label: "Regulatory Simplicity", left: 9, right: 4, winner: "Hair Salon" },
] as const;

export const leftRevenueSources = hairSalonLeftRevenueSources;

export const rightRevenueSources = [
  "Injectables (Botox, fillers)",
  "Laser and IPL treatments",
  "Medical-grade facials",
  "Body contouring",
  "Memberships and packages",
  "Medical-grade skincare retail",
] as const;

export const revenueFunnel = {
  left: [...hairSalonLeftRevenueFunnel],
  right: ["Lead / Consult", "Treatment Plan", "Injectable / Laser", "Membership", "Rebooking"],
} as const;

export const clientFunnel = {
  left: [...hairSalonLeftClientFunnel],
  right: ["New Lead", "Consultation", "First Treatment", "Recurring Member"],
} as const;

export const serviceFunnel = {
  left: [...hairSalonLeftServiceFunnel],
  right: ["Treatment Room Capacity", "Booked Utilization", "Average Ticket", "Collected Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Average Ticket", left: "$45 – $85 service", right: "$250 – $600 treatment" },
  { driver: "Visit Frequency", left: "Every 6 – 10 weeks", right: "Every 3 – 4 months (injectables)" },
  { driver: "Retail / Membership", left: "8 – 12% retail", right: "25 – 45% membership + medical retail" },
  { driver: "Provider Requirement", left: "Cosmetologist license", right: "Medical director + RN/NP/PA" },
] as const;

export const clientEconomicsMetrics = [
  { metric: "Average Ticket", left: hairSalonLeftClientEconomics[0].value, right: "$250 – $600" },
  { metric: "Annual Visits Per Client", left: hairSalonLeftClientEconomics[1].value, right: "3 – 6" },
  { metric: "Estimated Lifetime Value", left: hairSalonLeftClientEconomics[2].value, right: "$4,000 – $15,000" },
  { metric: "Client Retention", left: hairSalonLeftClientEconomics[3].value, right: "55 – 72%" },
] as const;

export const serviceMetrics = [
  { metric: "Revenue Per Room/Chair", left: hairSalonLeftServiceMetrics[0].value, right: "$200K – $500K" },
  { metric: "Revenue Per Provider", left: hairSalonLeftServiceMetrics[1].value, right: "$300K – $700K" },
  { metric: "Room Utilization", left: hairSalonLeftServiceMetrics[2].value, right: "55 – 75%" },
] as const;

export const marginTiers = {
  left: hairSalonLeftMarginTiers,
  right: { weak: "10 – 14%", average: "18 – 24%", strong: "28 – 35%" },
} as const;

export const costStructureComparison = [
  { expense: "Payroll & Clinical Labor", left: hairSalonLeftCostStructure[0].value, right: "30 – 40%" },
  { expense: "Product / Consumables COGS", left: hairSalonLeftCostStructure[1].value, right: "15 – 25%" },
  { expense: "Rent", left: hairSalonLeftCostStructure[2].value, right: "8 – 14%" },
  { expense: "Other Overhead", left: hairSalonLeftCostStructure[3].value, right: "10 – 16%" },
] as const;

export const recurringHighlights = {
  left: hairSalonLeftRecurringHighlight,
  right: { title: "Membership + Medical Retail", value: "25–45% of revenue recurring" },
} as const;

export const recurringComparison = [
  { metric: "Rebooking Rate", left: hairSalonLeftRecurringComparison[0].value, right: "55 – 70%" },
  { metric: "Retail Attachment", left: hairSalonLeftRecurringComparison[1].value, right: "15 – 25%" },
  { metric: "Membership Adoption", left: hairSalonLeftRecurringComparison[2].value, right: "30 – 50%" },
] as const;

export const ownerIncomeComparison = [
  { model: "Owner-Operator Hair Salon", earnings: hairSalonLeftOwnerIncome[0].earnings, type: "left" },
  { model: "Established Hair Salon", earnings: hairSalonLeftOwnerIncome[1].earnings, type: "left" },
  { model: "Owner-Operator Med Spa", earnings: "$120K – $250K", type: "right" },
  { model: "Established Multi-Provider Med Spa", earnings: "$300K – $600K+", type: "right" },
] as const;

export const leftStartupItems = hairSalonLeftStartupItems;

export const rightStartupItems = [
  { item: "Buildout & Medical Rooms", percent: 32 },
  { item: "Devices & Lasers", percent: 34 },
  { item: "Inventory / Consumables", percent: 10 },
  { item: "Working Capital", percent: 14 },
] as const;

export const startupSideBySide = [
  { category: "Buildout", left: hairSalonLeftStartupSideBySide.buildout, right: "$100K – $250K" },
  { category: "Equipment / Devices", left: hairSalonLeftStartupSideBySide.equipment, right: "$150K – $400K" },
  { category: "Inventory / Consumables", left: hairSalonLeftStartupSideBySide.inventory, right: "$30K – $80K" },
  { category: "Total Launch Budget", left: hairSalonLeftStartupSideBySide.total, right: "$300K – $800K" },
] as const;

export const valuationComparison = [
  { metric: "SDE / EBITDA Multiple", left: hairSalonLeftValuation.sde, right: "3.0× – 5.5×" },
  { metric: "Revenue Multiple", left: hairSalonLeftValuation.revenue, right: "0.8× – 1.5×" },
  { metric: "Typical Value", left: "$180K – $420K", right: "$700K – $3.0M" },
] as const;

export const valuationExamples = {
  left: hairSalonLeftValuation.example,
  right: { revenue: "$1.2M", value: "$720K – $1.4M", note: "3.5–4.5× SDE on $250K" },
} as const;

export const valuationExampleTitle = "Typical Single-Location Exit Outcomes";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: hairSalonLeftBreakEven[0].value, right: "$55K – $110K" },
  { metric: "Treatments Per Day", left: hairSalonLeftBreakEven[1].value, right: "10 – 20" },
  { metric: "Months to Break-Even", left: hairSalonLeftBreakEven[2].value, right: "18 – 36 months" },
] as const;

export const scalingLadder = {
  left: [...hairSalonLeftScalingLadder],
  right: ["Single Injector", "Add Laser Devices", "Add Providers", "Multi-Location Med Spa"],
} as const;

export const scalingLeftTitle = "Hair Salon Growth Path";
export const scalingRightTitle = "Medical Spa Growth Path";

export const capitalEfficiency = {
  investment: "$400,000",
  left: {
    revenue: "$400K – $500K",
    profit: "$35K – $65K net profit",
    payback: "6 – 8 years",
  },
  right: {
    revenue: "$800K – $1.4M",
    profit: "$150K – $350K net profit",
    payback: "2 – 4 years",
  },
} as const;

export const chooseLeftTitle = "Choose a Hair Salon If";
export const chooseRightTitle = "Choose a Medical Spa If";

export const chooseLeft = [
  "You want lower startup cost and simpler regulation",
  "You prefer no medical director or clinical licensing requirements",
  "You value hands-on styling work and faster break-even",
  "You want high-frequency repeat visits",
  "You are comfortable with a lower revenue ceiling per location",
] as const;

export const chooseRight = [
  "You want much higher tickets and net margins",
  "You can partner with a medical director and hire RN/NP/PA injectors",
  "You are targeting a high revenue ceiling and premium valuation",
  "You can fund a larger device-heavy buildout",
  "You want strong membership and medical retail revenue",
] as const;

export const calculators = hairSalonCalculators;

export const relatedComparisons = [
  { label: "Hair Salon vs Day Spa", href: "/comparisons/hair-salon-vs-day-spa/" },
  { label: "Hair Salon vs Nail Salon", href: "/comparisons/hair-salon-vs-nail-salon/" },
  { label: "Hair Salon vs Barbershop", href: "/comparisons/hair-salon-vs-barbershop/" },
  { label: "Hair Salon vs Franchise Salon", href: "/comparisons/hair-salon-vs-franchise-salon/" },
  { label: "Hair Salon Hub", href: "/industries/beauty/hair-salon/" },
] as const;

export const faqs = [
  {
    question: "Is a hair salon or medical spa more profitable?",
    answer:
      "A medical spa is typically more profitable in absolute terms — net margins run 15–30% versus 8–15% for a hair salon, on much higher tickets ($250–$600). The trade-off is a far larger startup investment, medical oversight, and a longer ramp than a hair salon.",
  },
  {
    question: "Which is cheaper to open, a hair salon or a med spa?",
    answer:
      "A hair salon is dramatically cheaper to open ($80K–$250K) than a medical spa ($300K–$800K), which requires medical-grade devices, treatment rooms, and a medical director. The lower barrier makes a hair salon far faster to break even.",
  },
  {
    question: "Does a medical spa need a medical director?",
    answer:
      "Yes. In most U.S. states a medical spa must operate under a licensed medical director, with treatments delivered by RNs, NPs, or PAs. A hair salon only requires cosmetology licensing, which is why its regulatory burden is much lower.",
  },
  {
    question: "Which is worth more when you sell it?",
    answer:
      "Medical spas command higher multiples (3.0×–5.5× SDE) than hair salons (1.8×–3.0× SDE) because of recurring memberships, high tickets, and strong margins. A $1.2M med spa can sell for $720K–$1.4M, well above a comparable hair salon.",
  },
  {
    question: "Can a hair salon add med spa services?",
    answer:
      "Some salons add a med spa arm to capture high-ticket injectable and laser revenue, but it requires a medical director, clinical staff, device investment, and compliance infrastructure — effectively running a second, regulated business alongside the salon.",
  },
] as const;

export type DecisionInputs = BeautyDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreBeautyChoice(inputs, "Hair Salon", "Medical Spa", {
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
    "A hair salon is the better fit — lower startup cost, no medical oversight, faster break-even, and hands-on styling work with a broad client base.",
  right:
    "A medical spa aligns with your goals if you want much higher tickets and margins, can partner with a medical director, and are targeting a premium valuation.",
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
