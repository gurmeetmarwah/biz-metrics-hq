import type { HealthcareDecisionInputs } from "./healthcare-comparison-types";
import { buildGymComparison } from "./build-gym-comparison";
import { yogaStudioProfile } from "./fitness-format-profiles";
import { gymRelatedComparisons } from "./gym-comparison-shared";

export const comparisonMeta = {
  slug: "gym-vs-yoga-studio",
  title: "Gym vs Yoga Studio",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, member economics, recurring revenue, lifestyle fit, and valuation for gym and yoga studio businesses.",
  dataVintage: "2025–2026",
} as const;

const relatedComparisons = gymRelatedComparisons.filter((c) => !c.href.includes("gym-vs-yoga-studio"));

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "Gym" },
  { factor: "Higher Profit Margins", winner: "Yoga Studio" },
  { factor: "Lower Startup Cost", winner: "Yoga Studio" },
  { factor: "Recurring Revenue", winner: "Yoga Studio" },
  { factor: "Member Volume Scale", winner: "Gym" },
  { factor: "Lifestyle Flexibility", winner: "Yoga Studio" },
  { factor: "Valuation Multiples", winner: "Gym" },
  { factor: "Market Size", winner: "Gym" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 9, right: 5, winner: "Gym" },
  { label: "Profit Margin", left: 6, right: 8, winner: "Yoga Studio" },
  { label: "Low Capital Entry", left: 4, right: 10, winner: "Yoga Studio" },
  { label: "Scalability", left: 8, right: 6, winner: "Gym" },
] as const;

export function getRecommendation(inputs: HealthcareDecisionInputs): string {
  let gym = 0;
  let yoga = 0;

  if (inputs.clinicalInterest === "specialty") yoga += 2;
  else gym += 2;

  if (inputs.revenueGoal === "very-high" || inputs.revenueGoal === "high") gym += 3;
  else yoga += 2;

  if (inputs.insuranceComfort === "high") yoga += 2;
  else gym += 1;

  if (inputs.growthAmbition === "multi-location") gym += 3;
  else if (inputs.growthAmbition === "lifestyle") yoga += 3;
  else gym += 1;

  return gym >= yoga ? "Gym" : "Yoga Studio";
}

export const decisionToolCopy = {
  left: "A full-service gym fits — higher revenue potential, larger member base, and multi-location growth with diversified fitness offerings.",
  right:
    "A yoga studio fits — lowest startup costs, strong margins, lifestyle-friendly operations, and premium community-driven retention.",
} as const;

export const fitnessDualComparisonData = buildGymComparison({
  slug: comparisonMeta.slug,
  title: comparisonMeta.title,
  subtitle: comparisonMeta.subtitle,
  right: yogaStudioProfile,
  decisionSnapshot,
  winnerScorecard,
  revenueDrivers: [
    { driver: "Active Members", left: "800 – 1,400", right: "100 – 300" },
    { driver: "Average Monthly Spend", left: "$38 – $69 dues", right: "$80 – $160" },
    { driver: "Class-Based Revenue", left: "8 – 15% of revenue", right: "60 – 80% of revenue" },
    { driver: "Workshop / Event Revenue", left: "Low", right: "10 – 20% of revenue" },
  ],
  memberEconomicsMetrics: [
    { metric: "Member Lifetime Value", left: "$500 – $900", right: "$700 – $1,400" },
    { metric: "Monthly Churn", left: "3 – 5%", right: "3 – 6%" },
    { metric: "Annual Retention", left: "60 – 75%", right: "65 – 78%" },
    { metric: "Class Pack vs Membership", left: "Membership-heavy", right: "Mixed model" },
  ],
  staffMetrics: [
    { metric: "Revenue Per Member", left: "$43 – $65/mo", right: "$80 – $160/mo" },
    { metric: "Members Per Location", left: "800 – 1,400", right: "100 – 300" },
    { metric: "Instructors on Staff", left: "5 – 15", right: "3 – 10" },
  ],
  costStructureComparison: [
    { expense: "Rent & Occupancy", left: "18 – 28%", right: "20 – 30%" },
    { expense: "Instructor Payroll", left: "28 – 38%", right: "30 – 42%" },
    { expense: "Equipment", left: "6 – 12%", right: "3 – 8%" },
    { expense: "Marketing", left: "8 – 14%", right: "10 – 18%" },
  ],
  recurringComparison: [
    { metric: "Membership / Pack Revenue", left: "55 – 70%", right: "75 – 90%" },
    { metric: "Workshop Revenue", left: "3 – 8%", right: "10 – 20%" },
    { metric: "Retail / Retail", left: "3 – 8%", right: "5 – 12%" },
    { metric: "Community Retention", left: "Moderate", right: "Strong" },
  ],
  ownerIncomeComparison: [
    { model: "Owner-Operator Gym", earnings: "$85K – $110K", type: "left" },
    { model: "Multi-Location Gym Operator", earnings: "$140K – $220K+", type: "left" },
    { model: "Yoga Studio Owner", earnings: "$70K – $110K", type: "right" },
    { model: "Multi-Studio Yoga Operator", earnings: "$120K – $180K+", type: "right" },
  ],
  breakEvenComparison: [
    { metric: "Monthly Revenue Needed", left: "$85K – $120K", right: "$25K – $45K" },
    { metric: "Members Needed", left: "350 – 500", right: "60 – 100" },
    { metric: "Months To Break-Even", left: "18 – 30 months", right: "10 – 16 months" },
    { metric: "Startup Investment", left: "$250K – $600K", right: "$50K – $150K" },
  ],
  scalingRightTitle: "Yoga Studio Growth Path",
  chooseLeft: [
    "You want the highest revenue ceiling and broadest market appeal",
    "You prefer serving diverse fitness needs beyond a single discipline",
    "You're building toward 800+ members and multi-location scale",
    "You can manage higher capital requirements and operational complexity",
    "You want personal training and equipment-based revenue streams",
  ],
  chooseRight: [
    "You want the lowest startup cost entry in fitness ($50K–$150K)",
    "You prefer a lifestyle business with instructor-led community",
    "You value workshop, retreat, and teacher training revenue streams",
    "You want minimal equipment investment and simpler operations",
    "You're passionate about yoga and wellness-focused member experiences",
  ],
  chooseRightTitle: "Choose Yoga Studio If",
  relatedComparisons,
  faqs: [
    {
      question: "Gym vs yoga studio — which is more profitable?",
      answer:
        "Yoga studios often achieve similar or better net margins (15–25%) on lower revenue bases. Gyms generate more total revenue but face higher fixed costs. Owner income can be comparable at scale.",
    },
    {
      question: "Which costs less to open?",
      answer:
        "Yoga studios are among the lowest-capital fitness formats at $50K–$150K. Full gyms require $250K–$600K for equipment, buildout, and amenities.",
    },
    {
      question: "Which is better as a lifestyle business?",
      answer:
        "Yoga studios typically offer more lifestyle flexibility with smaller teams, class-based scheduling, and lower overhead. Gyms require longer hours, more staff, and higher member volume management.",
    },
    {
      question: "Which has more growth potential?",
      answer:
        "Gyms have a higher revenue ceiling due to member volume and ancillary income. Yoga studios grow through multi-studio expansion, workshops, and teacher training programs.",
    },
  ],
});
