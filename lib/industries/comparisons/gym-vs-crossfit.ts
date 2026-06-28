import type { HealthcareDecisionInputs } from "./healthcare-comparison-types";
import { buildGymComparison } from "./build-gym-comparison";
import { crossFitProfile } from "./fitness-format-profiles";
import { gymRelatedComparisons } from "./gym-comparison-shared";

export const comparisonMeta = {
  slug: "gym-vs-crossfit",
  title: "Gym vs CrossFit",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, member economics, community retention, scalability, and valuation for gym and CrossFit box businesses.",
  dataVintage: "2025–2026",
} as const;

const relatedComparisons = gymRelatedComparisons.filter((c) => !c.href.includes("gym-vs-crossfit"));

export const decisionSnapshot = [
  { factor: "Higher Annual Revenue", winner: "Gym" },
  { factor: "Higher Profit Margins", winner: "CrossFit" },
  { factor: "Lower Startup Cost", winner: "CrossFit" },
  { factor: "Community Retention", winner: "CrossFit" },
  { factor: "Member Volume Scale", winner: "Gym" },
  { factor: "Revenue Per Member", winner: "CrossFit" },
  { factor: "Valuation Multiples", winner: "Gym" },
  { factor: "Market Breadth", winner: "Gym" },
] as const;

export const winnerScorecard = [
  { label: "Revenue Potential", left: 8, right: 7, winner: "Gym" },
  { label: "Profit Margin", left: 6, right: 8, winner: "CrossFit" },
  { label: "Community Retention", left: 6, right: 9, winner: "CrossFit" },
  { label: "Low Capital Entry", left: 5, right: 8, winner: "CrossFit" },
] as const;

export function getRecommendation(inputs: HealthcareDecisionInputs): string {
  let gym = 0;
  let crossfit = 0;

  if (inputs.clinicalInterest === "specialty") crossfit += 2;
  else gym += 2;

  if (inputs.revenueGoal === "very-high") gym += 3;
  else if (inputs.revenueGoal === "high") gym += 2;
  else crossfit += 1;

  if (inputs.insuranceComfort === "high") crossfit += 2;
  else gym += 1;

  if (inputs.growthAmbition === "multi-location") gym += 2;
  else if (inputs.growthAmbition === "lifestyle") crossfit += 2;
  else {
    gym += 1;
    crossfit += 1;
  }

  return gym >= crossfit ? "Gym" : "CrossFit";
}

export const decisionToolCopy = {
  left: "A full-service gym fits — broader market appeal, higher revenue ceiling, and diversified membership plus training income at scale.",
  right:
    "CrossFit fits — community-driven retention, premium membership pricing, lower startup costs, and strong coach-led member loyalty.",
} as const;

export const fitnessDualComparisonData = buildGymComparison({
  slug: comparisonMeta.slug,
  title: comparisonMeta.title,
  subtitle: comparisonMeta.subtitle,
  right: crossFitProfile,
  decisionSnapshot,
  winnerScorecard,
  revenueDrivers: [
    { driver: "Active Members", left: "800 – 1,400", right: "120 – 250" },
    { driver: "Average Monthly Dues", left: "$38 – $69", right: "$150 – $250" },
    { driver: "Class / Session Model", left: "Open access + classes", right: "Coach-led WOD classes" },
    { driver: "Recurring Revenue", left: "55 – 70% MRR", right: "80 – 90% MRR" },
  ],
  memberEconomicsMetrics: [
    { metric: "Member Lifetime Value", left: "$500 – $900", right: "$900 – $1,800" },
    { metric: "Monthly Churn", left: "3 – 5%", right: "3 – 5%" },
    { metric: "Annual Retention", left: "60 – 75%", right: "65 – 80%" },
    { metric: "Referral Rate", left: "Moderate", right: "High" },
  ],
  staffMetrics: [
    { metric: "Revenue Per Member", left: "$43 – $65/mo", right: "$150 – $250/mo" },
    { metric: "Members Per Location", left: "800 – 1,400", right: "120 – 250" },
    { metric: "Coaches / Trainers", left: "8 – 20", right: "3 – 8" },
  ],
  costStructureComparison: [
    { expense: "Rent & Occupancy", left: "18 – 28%", right: "15 – 24%" },
    { expense: "Payroll & Coaches", left: "28 – 38%", right: "32 – 42%" },
    { expense: "Equipment", left: "6 – 12%", right: "8 – 14%" },
    { expense: "Marketing", left: "8 – 14%", right: "10 – 15%" },
  ],
  recurringComparison: [
    { metric: "Membership MRR Share", left: "55 – 70%", right: "80 – 90%" },
    { metric: "Community Retention", left: "Moderate", right: "Strong" },
    { metric: "Personal Training / Coaching", left: "15 – 25%", right: "10 – 20%" },
    { metric: "Brand Affiliation", left: "Independent", right: "Affiliate / Independent" },
  ],
  ownerIncomeComparison: [
    { model: "Owner-Operator Gym", earnings: "$85K – $110K", type: "left" },
    { model: "Multi-Location Gym Operator", earnings: "$140K – $220K+", type: "left" },
    { model: "CrossFit Box Owner", earnings: "$85K – $140K", type: "right" },
    { model: "Multi-Box CrossFit Operator", earnings: "$160K – $250K+", type: "right" },
  ],
  breakEvenComparison: [
    { metric: "Monthly Revenue Needed", left: "$85K – $120K", right: "$45K – $70K" },
    { metric: "Members Needed", left: "350 – 500", right: "80 – 120 members" },
    { metric: "Months To Break-Even", left: "18 – 30 months", right: "12 – 20 months" },
    { metric: "Startup Investment", left: "$250K – $600K", right: "$100K – $350K" },
  ],
  scalingRightTitle: "CrossFit Growth Path",
  chooseLeft: [
    "You want maximum member volume and broad market appeal",
    "You prefer diversified revenue beyond a single training methodology",
    "You're building a full-service facility with cardio, weights, and amenities",
    "You can invest in higher buildout costs for larger membership scale",
    "You want to serve casual exercisers alongside serious athletes",
  ],
  chooseRight: [
    "You want a community-driven model with strong member loyalty",
    "You prefer coach-led programming and premium membership pricing",
    "You value lower startup costs and faster break-even",
    "You're passionate about functional fitness and group training culture",
    "You want high revenue per member in a focused boutique format",
  ],
  chooseRightTitle: "Choose CrossFit If",
  relatedComparisons,
  faqs: [
    {
      question: "Gym vs CrossFit — which makes more money?",
      answer:
        "Full-service gyms typically generate higher total revenue ($650K–$1.8M vs $400K–$1.1M for CrossFit boxes) due to larger member counts. CrossFit boxes earn more per member ($150–$250/mo vs $38–$69 gym median) with strong community retention.",
    },
    {
      question: "Which has lower startup costs?",
      answer:
        "CrossFit boxes typically launch with $100K–$350K versus $250K–$600K for full gyms. CrossFit requires less cardio equipment and amenity buildout, focusing on rig, barbells, and open floor space.",
    },
    {
      question: "Which has better member retention?",
      answer:
        "CrossFit boxes often achieve stronger community-driven retention through coach relationships and group accountability. Gyms rely more on amenities and variety; retention varies widely by operator.",
    },
    {
      question: "Can a CrossFit box scale like a gym?",
      answer:
        "CrossFit boxes scale through multi-box ownership but typically cap at 120–250 members per location due to class-based capacity. Gyms can support 800–1,400+ members with open-access models.",
    },
  ],
});
