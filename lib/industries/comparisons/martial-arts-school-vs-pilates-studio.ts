import type { HealthcareDecisionInputs } from "./healthcare-comparison-types";
import { buildMartialArtsComparison } from "./build-martial-arts-comparison";
import { pilatesStudioProfile } from "./fitness-format-profiles";
import { martialArtsRelatedComparisons } from "./martial-arts-comparison-shared";

export const comparisonMeta = {
  slug: "martial-arts-school-vs-pilates-studio",
  title: "Martial Arts School vs Pilates Studio",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, student economics, kids market fit, recurring tuition, equipment needs, and valuation for martial arts schools and pilates studios.",
  dataVintage: "2025–2026",
} as const;

const relatedComparisons = martialArtsRelatedComparisons.filter(
  (c) => !c.href.includes("martial-arts-school-vs-pilates-studio"),
);

export const decisionSnapshot = [
  { factor: "Kids & Family Market", winner: "Martial Arts School" },
  { factor: "Higher Revenue Per Client", winner: "Pilates Studio" },
  { factor: "Lower Startup Cost", winner: "Martial Arts School" },
  { factor: "Program-Based Retention", winner: "Martial Arts School" },
  { factor: "Premium Adult Pricing", winner: "Pilates Studio" },
  { factor: "Recurring Revenue %", winner: "Pilates Studio" },
  { factor: "Belt / Progression Revenue", winner: "Martial Arts School" },
  { factor: "Valuation Multiples", winner: "Pilates Studio" },
] as const;

export const winnerScorecard = [
  { label: "Family Market", left: 9, right: 4, winner: "Martial Arts School" },
  { label: "Premium Pricing", left: 6, right: 10, winner: "Pilates Studio" },
  { label: "Low Capital Entry", left: 8, right: 6, winner: "Martial Arts School" },
  { label: "Recurring Revenue", left: 7, right: 9, winner: "Pilates Studio" },
] as const;

export function getRecommendation(inputs: HealthcareDecisionInputs): string {
  let martialArts = 0;
  let pilates = 0;

  if (inputs.clinicalInterest === "specialty") martialArts += 2;
  else pilates += 2;

  if (inputs.revenueGoal === "very-high" || inputs.revenueGoal === "high") pilates += 3;
  else martialArts += 2;

  if (inputs.insuranceComfort === "high") pilates += 3;
  else martialArts += 2;

  if (inputs.growthAmbition === "multi-location") pilates += 2;
  else if (inputs.growthAmbition === "lifestyle") martialArts += 2;
  else {
    martialArts += 1;
    pilates += 1;
  }

  return martialArts >= pilates ? "Martial Arts School" : "Pilates Studio";
}

export const decisionToolCopy = {
  left: "A martial arts school fits your goals — kids and family enrollment, belt progression retention, tuition-based recurring revenue, and structured curriculum community.",
  right:
    "A pilates studio fits your goals — premium adult pricing, reformer differentiation, higher revenue per client, and strong membership recurring economics.",
} as const;

export const fitnessDualComparisonData = buildMartialArtsComparison({
  slug: comparisonMeta.slug,
  title: comparisonMeta.title,
  subtitle: comparisonMeta.subtitle,
  right: pilatesStudioProfile,
  decisionSnapshot,
  winnerScorecard,
  revenueDrivers: [
    { driver: "Active Students / Clients", left: "150 – 400", right: "150 – 400" },
    { driver: "Average Monthly Spend", left: "$100 – $180 tuition", right: "$120 – $220 dues" },
    { driver: "Kids & Family Mix", left: "55 – 75% of revenue", right: "15 – 30% of revenue" },
    { driver: "Private Session Revenue", left: "8 – 16% of revenue", right: "16 – 30% of revenue" },
  ],
  memberEconomicsMetrics: [
    { metric: "Student / Client Lifetime Value", left: "$3,800 – $6,200", right: "$2,400 – $4,200" },
    { metric: "Monthly Churn", left: "3 – 5%", right: "2 – 4%" },
    { metric: "Annual Retention", left: "72 – 82%", right: "75 – 88%" },
    { metric: "Family Enrollment Rate", left: "High", right: "Low – Moderate" },
  ],
  staffMetrics: [
    { metric: "Revenue Per Student / Client", left: "$100 – $180/mo", right: "$120 – $220/mo" },
    { metric: "Students / Clients Per Location", left: "150 – 400", right: "150 – 400" },
    { metric: "Instructors", left: "3 – 8", right: "4 – 10" },
  ],
  costStructureComparison: [
    { expense: "Rent & Occupancy", left: "14 – 22%", right: "18 – 26%" },
    { expense: "Instructor Payroll", left: "32 – 42%", right: "35 – 45%" },
    { expense: "Equipment", left: "4 – 8%", right: "8 – 14%" },
    { expense: "Marketing", left: "8 – 14%", right: "10 – 16%" },
  ],
  recurringComparison: [
    { metric: "Tuition / Membership MRR", left: "70 – 85%", right: "85 – 95%" },
    { metric: "Belt Testing Revenue", left: "8 – 12%", right: "N/A" },
    { metric: "Private Session Revenue", left: "8 – 16%", right: "16 – 30%" },
    { metric: "Camp & Workshop Revenue", left: "8 – 14%", right: "5 – 10%" },
  ],
  ownerIncomeComparison: [
    { model: "Martial Arts School Owner", earnings: "$95K – $140K", type: "left" },
    { model: "Multi-Location School Operator", earnings: "$185K – $280K+", type: "left" },
    { model: "Pilates Studio Owner", earnings: "$90K – $140K", type: "right" },
    { model: "Multi-Studio Pilates Operator", earnings: "$150K – $220K+", type: "right" },
  ],
  breakEvenComparison: [
    { metric: "Monthly Revenue Needed", left: "$30K – $50K", right: "$35K – $55K" },
    { metric: "Students / Clients Needed", left: "100 – 150", right: "80 – 120" },
    { metric: "Months To Break-Even", left: "12 – 18 months", right: "14 – 20 months" },
    { metric: "Startup Investment", left: "$75K – $200K", right: "$80K – $250K" },
  ],
  scalingRightTitle: "Pilates Studio Growth Path",
  chooseLeft: [
    "You want to serve the kids and family market with after-school enrollment",
    "You prefer belt progression and curriculum-driven multi-year student retention",
    "You value tuition MRR with camp, testing, and merchandise upsells",
    "You want lower equipment investment than reformer-based pilates studios",
    "You're building a community dojo with instructor-led martial arts culture",
  ],
  chooseRight: [
    "You want premium adult pricing with reformer-based differentiation",
    "You prefer higher revenue per client through private and semi-private sessions",
    "You value 85–95% recurring membership revenue with boutique wellness positioning",
    "You want stronger valuation multiples and premium studio exit potential",
    "You're passionate about movement therapy and adult corrective fitness",
  ],
  chooseRightTitle: "Choose Pilates Studio If",
  relatedComparisons,
  faqs: [
    {
      question: "Martial arts school vs pilates studio — which is better for kids?",
      answer:
        "Martial arts schools are built around youth programs — 55–75% of revenue often comes from children's tuition and family plans. Pilates studios primarily serve adults, with kids programming as a secondary niche.",
    },
    {
      question: "Which costs more to open?",
      answer:
        "Both formats launch in a similar range. Martial arts schools typically need $75K–$200K for mats and dojo buildout. Pilates studios require $80K–$250K, with reformers representing a larger equipment share.",
    },
    {
      question: "Which has higher revenue per client?",
      answer:
        "Pilates studios typically earn more per client ($120–$220/mo) through premium reformer memberships and private sessions. Martial arts schools earn $100–$180/mo per student but often achieve longer enrollment tenure and higher family LTV.",
    },
    {
      question: "Which has better recurring revenue?",
      answer:
        "Pilates studios achieve 85–95% membership MRR with adult autopay. Martial arts schools run 70–85% tuition MRR, supplemented by belt testing, camps, and retail that improve annual stability.",
    },
  ],
});
