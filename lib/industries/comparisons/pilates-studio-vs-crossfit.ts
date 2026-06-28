import type { HealthcareDecisionInputs } from "./healthcare-comparison-types";
import { buildPilatesComparison } from "./build-pilates-comparison";
import { crossFitProfile } from "./fitness-format-profiles";
import { pilatesRelatedComparisons } from "./pilates-comparison-shared";

export const comparisonMeta = {
  slug: "pilates-studio-vs-crossfit",
  title: "Pilates Studio vs CrossFit",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, client economics, community retention, recurring revenue, and valuation for pilates studio and CrossFit box businesses.",
  dataVintage: "2025–2026",
} as const;

const relatedComparisons = pilatesRelatedComparisons.filter(
  (c) => !c.href.includes("pilates-studio-vs-crossfit"),
);

export const decisionSnapshot = [
  { factor: "Higher Profit Margins", winner: "Pilates Studio" },
  { factor: "Higher Revenue Per Client", winner: "Pilates Studio" },
  { factor: "Community Retention", winner: "CrossFit" },
  { factor: "Recurring Revenue %", winner: "Pilates Studio" },
  { factor: "Annual Revenue Ceiling", winner: "CrossFit" },
  { factor: "Premium Pricing", winner: "Pilates Studio" },
  { factor: "Startup Cost", winner: "CrossFit" },
  { factor: "Instructor Dependence", winner: "CrossFit" },
] as const;

export const winnerScorecard = [
  { label: "Profit Margin", left: 9, right: 7, winner: "Pilates Studio" },
  { label: "Revenue Per Client", left: 9, right: 8, winner: "Pilates Studio" },
  { label: "Community Retention", left: 7, right: 9, winner: "CrossFit" },
  { label: "Premium Positioning", left: 10, right: 7, winner: "Pilates Studio" },
] as const;

export function getRecommendation(inputs: HealthcareDecisionInputs): string {
  let pilates = 0;
  let crossfit = 0;

  if (inputs.clinicalInterest === "specialty") pilates += 2;
  else crossfit += 2;

  if (inputs.revenueGoal === "very-high") crossfit += 2;
  else if (inputs.revenueGoal === "high") {
    pilates += 2;
    crossfit += 1;
  } else pilates += 2;

  if (inputs.insuranceComfort === "high") pilates += 3;
  else crossfit += 1;

  if (inputs.growthAmbition === "multi-location") crossfit += 2;
  else if (inputs.growthAmbition === "lifestyle") pilates += 2;
  else {
    pilates += 1;
    crossfit += 1;
  }

  return pilates >= crossfit ? "Pilates Studio" : "CrossFit";
}

export const decisionToolCopy = {
  left: "A pilates studio fits your goals — premium margins, higher revenue per client, reformer differentiation, and boutique recurring revenue with lower injury-risk positioning.",
  right:
    "CrossFit fits your goals — community-driven retention, coach-led culture, scalable box economics, and strong member loyalty through group training.",
} as const;

export const fitnessDualComparisonData = buildPilatesComparison({
  slug: comparisonMeta.slug,
  title: comparisonMeta.title,
  subtitle: comparisonMeta.subtitle,
  right: crossFitProfile,
  decisionSnapshot,
  winnerScorecard,
  revenueDrivers: [
    { driver: "Active Clients", left: "150 – 400", right: "120 – 250" },
    { driver: "Average Monthly Dues", left: "$165 – $220", right: "$150 – $250" },
    { driver: "Private / Coaching Revenue", left: "16 – 30% of revenue", right: "10 – 20% of revenue" },
    { driver: "Recurring Revenue", left: "85 – 95% MRR", right: "80 – 90% MRR" },
  ],
  memberEconomicsMetrics: [
    { metric: "Client Lifetime Value", left: "$2,400 – $4,200", right: "$1,200 – $2,800" },
    { metric: "Monthly Churn", left: "2 – 4%", right: "3 – 5%" },
    { metric: "Annual Retention", left: "70 – 85%", right: "65 – 80%" },
    { metric: "Community Engagement", left: "High (boutique)", right: "Very High (tribal)" },
  ],
  staffMetrics: [
    { metric: "Revenue Per Client", left: "$150 – $280/mo", right: "$150 – $250/mo" },
    { metric: "Clients Per Location", left: "150 – 400", right: "120 – 250" },
    { metric: "Revenue Per Coach / Instructor", left: "$95K – $165K/yr", right: "$85K – $155K/yr" },
  ],
  costStructureComparison: [
    { expense: "Rent & Occupancy", left: "15 – 22%", right: "18 – 26%" },
    { expense: "Instructor / Coach Payroll", left: "35 – 45%", right: "32 – 42%" },
    { expense: "Equipment", left: "8 – 14%", right: "10 – 18%" },
    { expense: "Marketing", left: "10 – 16%", right: "12 – 18%" },
  ],
  recurringComparison: [
    { metric: "Membership MRR Share", left: "85 – 95%", right: "80 – 90%" },
    { metric: "Private / Coaching Revenue", left: "16 – 30%", right: "10 – 20%" },
    { metric: "Event / Challenge Revenue", left: "5 – 10%", right: "8 – 15%" },
    { metric: "Premium Market Position", left: "Affluent wellness", right: "Performance community" },
  ],
  ownerIncomeComparison: [
    { model: "Pilates Studio Owner", earnings: "$90K – $130K", type: "left" },
    { model: "Multi-Studio Pilates Operator", earnings: "$150K – $220K+", type: "left" },
    { model: "CrossFit Box Owner", earnings: "$85K – $180K", type: "right" },
    { model: "Multi-Box CrossFit Operator", earnings: "$140K – $220K+", type: "right" },
  ],
  breakEvenComparison: [
    { metric: "Monthly Revenue Needed", left: "$35K – $55K", right: "$40K – $65K" },
    { metric: "Clients Needed", left: "80 – 120", right: "100 – 150" },
    { metric: "Months To Break-Even", left: "12 – 18 months", right: "14 – 22 months" },
    { metric: "Startup Investment", left: "$80K – $250K", right: "$100K – $350K" },
  ],
  scalingRightTitle: "CrossFit Growth Path",
  chooseLeft: [
    "You want premium boutique positioning with higher margins",
    "You prefer reformer-based programming with lower injury-liability exposure",
    "You value private session revenue and affluent client demographics",
    "You want 85%+ recurring revenue with instructor-led retention",
    "You're targeting clients seeking low-impact, corrective movement",
  ],
  chooseRight: [
    "You want community-driven, coach-led group training culture",
    "You prefer performance-oriented programming and competitive events",
    "You value strong tribal member loyalty and referral networks",
    "You want nutrition challenges and merchandise revenue streams",
    "You're passionate about high-intensity functional fitness",
  ],
  chooseRightTitle: "Choose CrossFit If",
  relatedComparisons,
  faqs: [
    {
      question: "Pilates studio vs CrossFit — which is more profitable?",
      answer:
        "Pilates studios typically achieve higher net margins (18–28% vs 15–25%) with lower volume requirements. CrossFit boxes can reach similar owner income at higher member counts with strong community retention.",
    },
    {
      question: "Which has better client retention?",
      answer:
        "CrossFit is known for exceptional community retention through coach relationships and group accountability. Pilates studios achieve strong retention through premium pricing and specialized programming, often with lower churn (2–4% vs 3–5%).",
    },
    {
      question: "Which is better for premium pricing?",
      answer:
        "Pilates studios command higher average client spend in affluent markets ($150–$280/mo all-in). CrossFit memberships range $150–$250/mo with strong unlimited-model economics but less private-session upside.",
    },
    {
      question: "Which is easier to operate?",
      answer:
        "Pilates studios require reformer maintenance and instructor certification but have predictable class schedules. CrossFit demands coach quality, programming variety, and community event management with higher physical intensity considerations.",
    },
  ],
});
