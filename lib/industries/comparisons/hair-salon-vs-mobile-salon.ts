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
  slug: "hair-salon-vs-mobile-salon",
  title: "Hair Salon vs Mobile Salon",
  subtitle:
    "Compare revenue, profit margins, startup costs, owner pay, and valuation between a fixed-location hair salon and a low-overhead mobile salon serving clients on location.",
  dataVintage: "2025–2026",
} as const;

export const comparisonLabels = {
  ...hairSalonHubLabels,
  right: "Mobile Salon",
} as const;

export const decisionSnapshot = [
  { factor: "Higher Revenue Ceiling", winner: "Hair Salon" },
  { factor: "Lower Startup Cost", winner: "Mobile Salon" },
  { factor: "Higher Net Margin", winner: "Mobile Salon" },
  { factor: "Easier Team Scaling", winner: "Hair Salon" },
  { factor: "Schedule Flexibility", winner: "Mobile Salon" },
  { factor: "Retail Revenue", winner: "Hair Salon" },
] as const;

export const kpiComparison = [
  { metric: "Annual Revenue", left: hairSalonLeftKpis.annualRevenue, right: "$60K – $180K" },
  { metric: "Net Margin", left: hairSalonLeftKpis.netMargin, right: "25 – 45%" },
  { metric: "Owner Compensation", left: hairSalonLeftKpis.ownerComp, right: "$40K – $90K" },
  { metric: "Monthly Visits", left: hairSalonLeftKpis.monthlyVisits, right: "80 – 200" },
  { metric: "Average Ticket", left: hairSalonLeftKpis.revenuePerClient, right: "$55 – $120 (incl. travel)" },
  { metric: "Startup Cost", left: hairSalonLeftKpis.startup, right: "$5K – $40K" },
  { metric: "Valuation", left: hairSalonLeftKpis.valuation, right: "0.5× – 1.5× SDE" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Ceiling", left: 8, right: 4, winner: "Hair Salon" },
  { label: "Capital Barrier", left: 5, right: 10, winner: "Mobile Salon" },
  { label: "Margin per Job", left: 6, right: 9, winner: "Mobile Salon" },
  { label: "Scalability", left: 8, right: 4, winner: "Hair Salon" },
] as const;

export const leftRevenueSources = hairSalonLeftRevenueSources;

export const rightRevenueSources = [
  "On-location haircuts and styling",
  "Bridal and event hair",
  "Color and treatments (travel)",
  "Senior / homebound services",
  "Travel and convenience fees",
  "Limited retail product sales",
] as const;

export const revenueFunnel = {
  left: [...hairSalonLeftRevenueFunnel],
  right: ["Booking Request", "Travel to Client", "Service + Travel Fee", "Rebooking"],
} as const;

export const clientFunnel = {
  left: [...hairSalonLeftClientFunnel],
  right: ["Referral / Online Booking", "First On-Site Service", "Standing Appointment", "Loyal Client"],
} as const;

export const serviceFunnel = {
  left: [...hairSalonLeftServiceFunnel],
  right: ["Daily Appointment Slots", "Travel + Service Time", "Average Ticket", "Collected Revenue"],
} as const;

export const revenueDrivers = [
  { driver: "Average Ticket", left: "$45 – $85 service", right: "$55 – $120 incl. travel fee" },
  { driver: "Daily Capacity", left: "Multiple chairs, high volume", right: "4 – 7 jobs (travel-limited)" },
  { driver: "Overhead", left: "Rent + staff", right: "Minimal — no fixed location" },
  { driver: "Retail Mix", left: "8 – 12% of revenue", right: "0 – 4% of revenue" },
] as const;

export const clientEconomicsMetrics = [
  { metric: "Average Ticket", left: hairSalonLeftClientEconomics[0].value, right: "$55 – $120" },
  { metric: "Annual Visits Per Client", left: hairSalonLeftClientEconomics[1].value, right: "4 – 8" },
  { metric: "Estimated Lifetime Value", left: hairSalonLeftClientEconomics[2].value, right: "$1,000 – $3,000" },
  { metric: "Client Retention", left: hairSalonLeftClientEconomics[3].value, right: "65 – 85%" },
] as const;

export const serviceMetrics = [
  { metric: "Revenue Per Chair / Provider", left: hairSalonLeftServiceMetrics[0].value, right: "$60K – $180K" },
  { metric: "Revenue Per Stylist", left: hairSalonLeftServiceMetrics[1].value, right: "$60K – $180K" },
  { metric: "Booked Utilization", left: hairSalonLeftServiceMetrics[2].value, right: "50 – 70% (travel loss)" },
] as const;

export const marginTiers = {
  left: hairSalonLeftMarginTiers,
  right: { weak: "18 – 24%", average: "28 – 38%", strong: "40 – 50%" },
} as const;

export const costStructureComparison = [
  { expense: "Labor (owner / few staff)", left: hairSalonLeftCostStructure[0].value, right: "0 – 25%" },
  { expense: "Product COGS", left: hairSalonLeftCostStructure[1].value, right: "8 – 14%" },
  { expense: "Rent / Vehicle", left: hairSalonLeftCostStructure[2].value, right: "3 – 10% (vehicle & fuel)" },
  { expense: "Other Overhead", left: hairSalonLeftCostStructure[3].value, right: "8 – 14%" },
] as const;

export const recurringHighlights = {
  left: hairSalonLeftRecurringHighlight,
  right: { title: "Standing Appointments", value: "High loyalty; low retail attachment" },
} as const;

export const recurringComparison = [
  { metric: "Rebooking Rate", left: hairSalonLeftRecurringComparison[0].value, right: "60 – 80%" },
  { metric: "Retail Attachment", left: hairSalonLeftRecurringComparison[1].value, right: "0 – 4%" },
  { metric: "Membership / Standing Slots", left: hairSalonLeftRecurringComparison[2].value, right: "20 – 40%" },
] as const;

export const ownerIncomeComparison = [
  { model: "Owner-Operator Hair Salon", earnings: hairSalonLeftOwnerIncome[0].earnings, type: "left" },
  { model: "Established Hair Salon", earnings: hairSalonLeftOwnerIncome[1].earnings, type: "left" },
  { model: "Solo Mobile Stylist", earnings: "$40K – $80K", type: "right" },
  { model: "Mobile Salon w/ Small Team", earnings: "$80K – $130K", type: "right" },
] as const;

export const leftStartupItems = hairSalonLeftStartupItems;

export const rightStartupItems = [
  { item: "Portable Equipment", percent: 35 },
  { item: "Vehicle / Kit", percent: 30 },
  { item: "Inventory", percent: 15 },
  { item: "Licensing & Insurance", percent: 20 },
] as const;

export const startupSideBySide = [
  { category: "Buildout / Vehicle Setup", left: hairSalonLeftStartupSideBySide.buildout, right: "$2K – $20K" },
  { category: "Equipment", left: hairSalonLeftStartupSideBySide.equipment, right: "$2K – $12K" },
  { category: "Inventory", left: hairSalonLeftStartupSideBySide.inventory, right: "$1K – $5K" },
  { category: "Total Launch Budget", left: hairSalonLeftStartupSideBySide.total, right: "$5K – $40K" },
] as const;

export const valuationComparison = [
  { metric: "SDE Multiple", left: hairSalonLeftValuation.sde, right: "0.5× – 1.5×" },
  { metric: "Revenue Multiple", left: hairSalonLeftValuation.revenue, right: "0.2× – 0.5×" },
  { metric: "Transferability", left: "Location + staff transfer", right: "Owner-dependent client book" },
] as const;

export const valuationExamples = {
  left: hairSalonLeftValuation.example,
  right: { revenue: "$120K", value: "$30K – $70K", note: "Owner-dependent; lower transferable value" },
} as const;

export const valuationExampleTitle = "Typical Exit Outcomes";

export const breakEvenComparison = [
  { metric: "Monthly Revenue Needed", left: hairSalonLeftBreakEven[0].value, right: "$4K – $9K" },
  { metric: "Jobs Per Day", left: hairSalonLeftBreakEven[1].value, right: "3 – 6" },
  { metric: "Months to Break-Even", left: hairSalonLeftBreakEven[2].value, right: "1 – 6 months" },
] as const;

export const scalingLadder = {
  left: [...hairSalonLeftScalingLadder],
  right: ["Solo Mobile Stylist", "Add Mobile Van", "Hire Traveling Stylists", "Convert to Fixed Salon"],
} as const;

export const scalingLeftTitle = "Hair Salon Growth Path";
export const scalingRightTitle = "Mobile Salon Growth Path";

export const capitalEfficiency = {
  investment: "$30,000",
  left: {
    revenue: "$60K – $100K",
    profit: "$6K – $14K net profit",
    payback: "3 – 5 years",
  },
  right: {
    revenue: "$90K – $160K",
    profit: "$30K – $60K net profit",
    payback: "under 1 year",
  },
} as const;

export const chooseLeftTitle = "Choose a Hair Salon If";
export const chooseRightTitle = "Choose a Mobile Salon If";

export const chooseLeft = [
  "You want a higher revenue ceiling per business",
  "You plan to build and scale a team of stylists",
  "You value retail revenue and a professional storefront",
  "You want a saleable, location-based asset",
  "You can support higher fixed overhead with volume",
] as const;

export const chooseRight = [
  "You want the lowest possible startup cost and overhead",
  "You value flexible scheduling and no fixed rent",
  "You keep more of each ticket with very high margins",
  "You serve events, bridal, or homebound clients",
  "You prefer a solo or very lean operating model",
] as const;

export const calculators = hairSalonCalculators;

export const relatedComparisons = [
  { label: "Hair Salon vs Barbershop", href: "/comparisons/hair-salon-vs-barbershop/" },
  { label: "Hair Salon vs Franchise Salon", href: "/comparisons/hair-salon-vs-franchise-salon/" },
  { label: "Hair Salon vs Nail Salon", href: "/comparisons/hair-salon-vs-nail-salon/" },
  { label: "Hair Salon vs Day Spa", href: "/comparisons/hair-salon-vs-day-spa/" },
  { label: "Hair Salon Hub", href: "/industries/beauty/hair-salon/" },
] as const;

export const faqs = [
  {
    question: "Is a hair salon or a mobile salon more profitable?",
    answer:
      "A mobile salon has much higher net margins (25–45%) because it carries little overhead, but a fixed hair salon reaches a far higher revenue ceiling and total profit through volume and a team. Per dollar of revenue the mobile model wins; per location the fixed salon earns more.",
  },
  {
    question: "Which is cheaper to start, a hair salon or a mobile salon?",
    answer:
      "A mobile salon is dramatically cheaper to start ($5K–$40K) than a fixed hair salon ($80K–$250K) since there's no buildout or lease — just portable equipment, a vehicle or kit, licensing, and insurance. That makes break-even possible within months.",
  },
  {
    question: "What limits a mobile salon's revenue?",
    answer:
      "Travel time caps a mobile stylist at roughly 3–6 jobs per day, so revenue typically tops out at $60K–$180K solo. A fixed hair salon overcomes this with multiple chairs and staff serving clients simultaneously.",
  },
  {
    question: "Which is easier to sell?",
    answer:
      "A fixed hair salon is easier to sell because location, staff, and systems transfer to a buyer (1.8×–3.0× SDE). A mobile salon's value is largely tied to the owner's personal client book, so it trades lower (0.5×–1.5× SDE).",
  },
  {
    question: "Can you start mobile and open a salon later?",
    answer:
      "Yes — many stylists start mobile to build a loyal client base with minimal risk, then convert to a fixed hair salon once demand and cash flow justify the higher overhead and a team.",
  },
] as const;

export type DecisionInputs = BeautyDecisionInputs;

export function getRecommendation(inputs: DecisionInputs): string {
  return scoreBeautyChoice(inputs, "Hair Salon", "Mobile Salon", {
    ownerHandsOn: 1,
    ownerManager: 3,
    budgetLow: 3,
    budgetMedium: 1,
    budgetHigh: 3,
    revenueModerate: 1,
    revenueHigh: 2,
    revenueVeryHigh: 3,
    growthLifestyle: 1,
    growthExpand: 2,
    growthMulti: 3,
  });
}

export const decisionToolCopy = {
  left:
    "A hair salon is the better fit — a higher revenue ceiling, the ability to scale a team, retail revenue, and a saleable location-based asset.",
  right:
    "A mobile salon aligns with your goals if you want the lowest startup cost, flexible scheduling, very high per-job margins, and a lean solo operating model.",
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
