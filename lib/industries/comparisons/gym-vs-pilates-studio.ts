import type { HealthcareDecisionInputs } from "./healthcare-comparison-types";
import { buildGymComparison } from "./build-gym-comparison";
import { pilatesStudioProfile } from "./fitness-format-profiles";
import { gymRelatedComparisons } from "./gym-comparison-shared";

export const comparisonMeta = {
  slug: "gym-vs-pilates-studio",
  title: "Gym vs Pilates Studio",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, member economics, recurring revenue, scalability, and valuation for gym and pilates studio businesses.",
  dataVintage: "2025–2026",
} as const;

const relatedComparisons = gymRelatedComparisons.filter(
  (c) => !c.href.includes("gym-vs-pilates-studio"),
);

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "Gym" },
  { factor: "Higher Profit Margins", winner: "Pilates Studio" },
  { factor: "Lower Startup Cost", winner: "Pilates Studio" },
  { factor: "Recurring Revenue %", winner: "Pilates Studio" },
  { factor: "Revenue Per Member", winner: "Pilates Studio" },
  { factor: "Member Volume Scale", winner: "Gym" },
  { factor: "Valuation Multiples", winner: "Gym" },
  { factor: "Capital Efficiency", winner: "Pilates Studio" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 8, right: 6, winner: "Gym" },
  { label: "Profit Margin", left: 6, right: 9, winner: "Pilates Studio" },
  { label: "Recurring Revenue", left: 7, right: 10, winner: "Pilates Studio" },
  { label: "Low Capital Entry", left: 4, right: 9, winner: "Pilates Studio" },
] as const;

export function getRecommendation(inputs: HealthcareDecisionInputs): string {
  let gym = 0;
  let pilates = 0;

  if (inputs.clinicalInterest === "specialty") pilates += 2;
  else gym += 2;

  if (inputs.revenueGoal === "very-high") gym += 3;
  else if (inputs.revenueGoal === "high") gym += 2;
  else pilates += 2;

  if (inputs.insuranceComfort === "high") pilates += 3;
  else if (inputs.insuranceComfort === "medium") {
    pilates += 1;
    gym += 1;
  } else gym += 1;

  if (inputs.growthAmbition === "multi-location") gym += 2;
  else if (inputs.growthAmbition === "regional") {
    gym += 1;
    pilates += 1;
  } else pilates += 2;

  return gym >= pilates ? "Gym" : "Pilates Studio";
}

export const decisionToolCopy = {
  left: "A full-service gym fits your goals — higher revenue ceiling, larger member base, and multi-location scale with diversified income streams.",
  right:
    "A pilates studio fits your goals — premium margins, lower startup costs, high recurring revenue, and strong revenue per member in a boutique format.",
} as const;

export const fitnessDualComparisonData = buildGymComparison({
  slug: comparisonMeta.slug,
  title: comparisonMeta.title,
  subtitle: comparisonMeta.subtitle,
  right: pilatesStudioProfile,
  decisionSnapshot,
  winnerScorecard,
  revenueDrivers: [
    { driver: "Active Members / Clients", left: "800 – 1,400", right: "150 – 400" },
    { driver: "Average Monthly Dues", left: "$38 – $69", right: "$120 – $220" },
    { driver: "Personal Training Mix", left: "15 – 25% of revenue", right: "30 – 50% of revenue" },
    { driver: "Recurring Revenue", left: "55 – 70% MRR", right: "85 – 95% MRR" },
  ],
  memberEconomicsMetrics: [
    { metric: "Member Lifetime Value", left: "$500 – $900", right: "$1,200 – $2,500" },
    { metric: "Monthly Churn", left: "3 – 5%", right: "2 – 4%" },
    { metric: "Annual Retention", left: "60 – 75%", right: "70 – 85%" },
    { metric: "Customer Acquisition Cost", left: "$80 – $200", right: "$100 – $250" },
  ],
  staffMetrics: [
    { metric: "Revenue Per Member", left: "$43 – $65/mo", right: "$120 – $220/mo" },
    { metric: "Members Per Location", left: "800 – 1,400", right: "150 – 400" },
    { metric: "Labor Cost % of Revenue", left: "28 – 38%", right: "35 – 45%" },
  ],
  costStructureComparison: [
    { expense: "Rent & Occupancy", left: "18 – 28%", right: "15 – 22%" },
    { expense: "Payroll & Instructors", left: "28 – 38%", right: "35 – 45%" },
    { expense: "Equipment", left: "6 – 12%", right: "8 – 14%" },
    { expense: "Marketing", left: "8 – 14%", right: "10 – 16%" },
  ],
  recurringComparison: [
    { metric: "Membership MRR Share", left: "55 – 70%", right: "85 – 95%" },
    { metric: "Annual Member Retention", left: "60 – 75%", right: "70 – 85%" },
    { metric: "Personal Training Revenue", left: "15 – 25%", right: "30 – 50%" },
    { metric: "Premium Pricing Power", left: "Moderate", right: "High" },
  ],
  ownerIncomeComparison: [
    { model: "Owner-Operator Gym", earnings: "$85K – $110K", type: "left" },
    { model: "Multi-Location Gym Operator", earnings: "$140K – $220K+", type: "left" },
    { model: "Pilates Studio Owner", earnings: "$90K – $130K", type: "right" },
    { model: "Multi-Studio Pilates Operator", earnings: "$150K – $220K+", type: "right" },
  ],
  breakEvenComparison: [
    { metric: "Monthly Revenue Needed", left: "$85K – $120K", right: "$35K – $55K" },
    { metric: "Members Needed", left: "350 – 500 (break-even)", right: "80 – 120 members" },
    { metric: "Months To Break-Even", left: "18 – 30 months", right: "12 – 18 months" },
    { metric: "Startup Investment", left: "$250K – $600K", right: "$80K – $250K" },
  ],
  scalingRightTitle: "Pilates Studio Growth Path",
  chooseLeft: [
    "You want higher total revenue and a larger addressable member market",
    "You prefer diversified revenue from memberships, training, classes, and retail",
    "You're building toward multi-location scale with 800+ members per site",
    "You can manage higher fixed costs, equipment, and staffing complexity",
    "You value broader market appeal over premium boutique positioning",
  ],
  chooseRight: [
    "You want premium margins and higher revenue per member",
    "You prefer lower startup costs and faster path to profitability",
    "You value 85%+ recurring membership revenue in a boutique format",
    "You want a specialized brand with strong instructor-led retention",
    "You're targeting affluent clients willing to pay $120–$220/month",
  ],
  chooseRightTitle: "Choose Pilates Studio If",
  relatedComparisons,
  faqs: [
    {
      question: "Which generates more revenue — a gym or pilates studio?",
      answer:
        "Full-service gyms typically reach higher total revenue ($650K–$1.8M vs $350K–$900K for pilates studios) due to larger member counts. Pilates studios compensate with premium pricing ($120–$220/mo vs $38–$69 gym median) and higher margins.",
    },
    {
      question: "Which has better profit margins?",
      answer:
        "Pilates studios generally achieve higher net margins (18–28% vs 12–22% for gyms) thanks to premium pricing, smaller footprints, and high recurring membership revenue. Gyms scale revenue faster but face higher rent and equipment costs.",
    },
    {
      question: "Which is cheaper to start?",
      answer:
        "Pilates studios typically require $80K–$250K versus $250K–$600K for a full gym buildout. Reformer equipment and boutique buildouts cost less than full gym floor equipment, cardio machines, and locker facilities.",
    },
    {
      question: "Which has better member retention?",
      answer:
        "Pilates studios often achieve lower churn (2–4% monthly) through instructor relationships and premium community. Gym industry retention averages 66.4% annually per HFA; boutique formats frequently outperform.",
    },
    {
      question: "Which is better for a first-time fitness entrepreneur?",
      answer:
        "Pilates suits operators seeking lower capital entry, premium pricing, and instructor-led boutique economics. Gyms suit entrepreneurs with more capital who want maximum revenue scale and diversified fitness offerings.",
    },
  ],
});
