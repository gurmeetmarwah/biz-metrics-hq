import type { HealthcareDecisionInputs } from "./healthcare-comparison-types";
import { buildMartialArtsComparison } from "./build-martial-arts-comparison";
import { swimSchoolProfile } from "./fitness-format-profiles";
import { martialArtsRelatedComparisons } from "./martial-arts-comparison-shared";

export const comparisonMeta = {
  slug: "martial-arts-school-vs-swim-school",
  title: "Martial Arts School vs Swim School",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, youth student economics, safety positioning, facility requirements, recurring lesson revenue, and valuation for martial arts schools and swim schools.",
  dataVintage: "2025–2026",
} as const;

const relatedComparisons = martialArtsRelatedComparisons.filter(
  (c) => !c.href.includes("martial-arts-school-vs-swim-school"),
);

export const decisionSnapshot = [
  { factor: "Lower Startup Cost", winner: "Martial Arts School" },
  { factor: "Kids & Family Market", winner: "Tie" },
  { factor: "Higher Annual Revenue", winner: "Swim School" },
  { factor: "Student Retention", winner: "Martial Arts School" },
  { factor: "Safety / Life-Skill Positioning", winner: "Swim School" },
  { factor: "Recurring Revenue %", winner: "Swim School" },
  { factor: "Facility Complexity", winner: "Martial Arts School" },
  { factor: "Valuation Potential", winner: "Tie" },
] as const;

export const winnerScorecard = [
  { label: "Low Capital Entry", left: 9, right: 4, winner: "Martial Arts School" },
  { label: "Revenue Potential", left: 7, right: 8, winner: "Swim School" },
  { label: "Youth Retention", left: 8, right: 7, winner: "Martial Arts School" },
  { label: "Recurring Revenue", left: 7, right: 9, winner: "Swim School" },
] as const;

export function getRecommendation(inputs: HealthcareDecisionInputs): string {
  let martialArts = 0;
  let swim = 0;

  if (inputs.clinicalInterest === "specialty") martialArts += 2;
  else swim += 2;

  if (inputs.revenueGoal === "very-high") swim += 3;
  else if (inputs.revenueGoal === "high") swim += 2;
  else martialArts += 2;

  if (inputs.insuranceComfort === "high") swim += 2;
  else martialArts += 2;

  if (inputs.growthAmbition === "multi-location") swim += 2;
  else if (inputs.growthAmbition === "lifestyle") martialArts += 2;
  else {
    martialArts += 1;
    swim += 1;
  }

  return martialArts >= swim ? "Martial Arts School" : "Swim School";
}

export const decisionToolCopy = {
  left: "A martial arts school fits your goals — lower facility capital, belt progression retention, character-building programs, and flexible dojo operations without pool infrastructure.",
  right:
    "A swim school fits your goals — life-skill safety positioning, premium lesson pricing, strong parent demand, and high recurring lesson package revenue.",
} as const;

export const fitnessDualComparisonData = buildMartialArtsComparison({
  slug: comparisonMeta.slug,
  title: comparisonMeta.title,
  subtitle: comparisonMeta.subtitle,
  right: swimSchoolProfile,
  decisionSnapshot,
  winnerScorecard,
  revenueDrivers: [
    { driver: "Active Students", left: "150 – 400", right: "200 – 500" },
    { driver: "Average Monthly Spend", left: "$100 – $180 tuition", right: "$120 – $200 lessons" },
    { driver: "Kids Program Revenue", left: "55 – 75%", right: "70 – 85%" },
    { driver: "Level Progression Revenue", left: "Belt testing 8 – 12%", right: "Level advancement 10 – 18%" },
  ],
  memberEconomicsMetrics: [
    { metric: "Student Lifetime Value", left: "$3,800 – $6,200", right: "$4,200 – $6,800" },
    { metric: "Monthly Churn", left: "3 – 5%", right: "3 – 6%" },
    { metric: "Average Enrollment Length", left: "22 – 38 months", right: "20 – 34 months" },
    { metric: "Family Enrollment Rate", left: "High", right: "Very High" },
  ],
  staffMetrics: [
    { metric: "Revenue Per Student", left: "$100 – $180/mo", right: "$120 – $200/mo" },
    { metric: "Students Per Location", left: "150 – 400", right: "200 – 500" },
    { metric: "Instructors / Coaches", left: "3 – 8", right: "6 – 14" },
  ],
  costStructureComparison: [
    { expense: "Rent & Facility", left: "14 – 22%", right: "22 – 32%" },
    { expense: "Instructor Payroll", left: "32 – 42%", right: "30 – 40%" },
    { expense: "Pool / Equipment", left: "4 – 8%", right: "12 – 20%" },
    { expense: "Marketing", left: "8 – 14%", right: "8 – 14%" },
  ],
  recurringComparison: [
    { metric: "Tuition / Lesson MRR", left: "70 – 85%", right: "80 – 92%" },
    { metric: "Belt Testing Revenue", left: "8 – 12%", right: "N/A" },
    { metric: "Team / Camp Revenue", left: "8 – 14%", right: "8 – 15%" },
    { metric: "Level Progression Fees", left: "Included in belt fees", right: "10 – 18%" },
  ],
  ownerIncomeComparison: [
    { model: "Martial Arts School Owner", earnings: "$95K – $140K", type: "left" },
    { model: "Multi-Location School Operator", earnings: "$185K – $280K+", type: "left" },
    { model: "Swim School Owner", earnings: "$90K – $155K", type: "right" },
    { model: "Multi-Location Swim Operator", earnings: "$180K – $300K+", type: "right" },
  ],
  breakEvenComparison: [
    { metric: "Monthly Revenue Needed", left: "$30K – $50K", right: "$40K – $65K" },
    { metric: "Students Needed", left: "100 – 150", right: "140 – 200" },
    { metric: "Months To Break-Even", left: "12 – 18 months", right: "18 – 28 months" },
    { metric: "Startup Investment", left: "$75K – $200K", right: "$150K – $500K" },
  ],
  scalingRightTitle: "Swim School Growth Path",
  chooseLeft: [
    "You want lower startup capital without pool access or buildout requirements",
    "You prefer belt progression and curriculum-driven multi-year student loyalty",
    "You value flexible dojo operations in standard retail or industrial space",
    "You want character development and discipline positioning for parent buyers",
    "You're building a martial arts community with camp, testing, and retail upsells",
  ],
  chooseRight: [
    "You want life-skill safety positioning that parents prioritize for young children",
    "You prefer premium lesson pricing with 80–92% recurring package revenue",
    "You have access to pool facilities or capital for aquatic infrastructure",
    "You value higher revenue ceilings with team programs and summer intensives",
    "You're building a swim instruction brand with level-based progression systems",
  ],
  chooseRightTitle: "Choose Swim School If",
  relatedComparisons,
  faqs: [
    {
      question: "Martial arts school vs swim school — which costs more to open?",
      answer:
        "Swim schools require significantly more capital — $150K–$500K for pool access, lane rental, or buildout. Martial arts schools launch at $75K–$200K with mats and standard commercial space.",
    },
    {
      question: "Which has better youth market economics?",
      answer:
        "Both are heavily youth-focused. Swim schools derive 70–85% of revenue from children's lessons with very high family enrollment. Martial arts schools run 55–75% kids revenue with strong sibling and family plan dynamics.",
    },
    {
      question: "Which retains students longer?",
      answer:
        "Martial arts schools typically retain students slightly longer (22–38 months) through belt progression. Swim schools average 20–34 months, with level advancement and team programs extending tenure.",
    },
    {
      question: "Which generates more recurring revenue?",
      answer:
        "Swim schools achieve 80–92% lesson package MRR with autopay enrollment. Martial arts schools run 70–85% tuition MRR, supplemented by belt testing and camp revenue that improves annual stability.",
    },
  ],
});
