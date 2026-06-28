import type { HealthcareDecisionInputs } from "./healthcare-comparison-types";
import { buildYogaComparison } from "./build-yoga-comparison";
import { martialArtsSchoolProfile } from "./fitness-format-profiles";
import { yogaRelatedComparisons } from "./yoga-comparison-shared";

export const comparisonMeta = {
  slug: "yoga-studio-vs-martial-arts-school",
  title: "Yoga Studio vs Martial Arts School",
  subtitle:
    "Compare revenue, profit margins, owner compensation, startup costs, client economics, community retention, kids and family market fit, recurring revenue, and valuation for yoga studio and martial arts school businesses.",
  dataVintage: "2025–2026",
} as const;

const relatedComparisons = yogaRelatedComparisons.filter(
  (c) => !c.href.includes("yoga-studio-vs-martial-arts-school"),
);

export const decisionSnapshot = [
  { factor: "Lower Startup Cost", winner: "Yoga Studio" },
  { factor: "Kids & Family Market", winner: "Martial Arts School" },
  { factor: "Wellness Community Focus", winner: "Yoga Studio" },
  { factor: "Program-Based Retention", winner: "Martial Arts School" },
  { factor: "Revenue Per Student", winner: "Martial Arts School" },
  { factor: "Lifestyle Flexibility", winner: "Yoga Studio" },
  { factor: "Workshop / Retreat Revenue", winner: "Yoga Studio" },
  { factor: "Belt Progression Revenue", winner: "Martial Arts School" },
] as const;

export const winnerScorecard = [
  { label: "Low Capital Entry", left: 10, right: 8, winner: "Yoga Studio" },
  { label: "Family Market", left: 5, right: 9, winner: "Martial Arts School" },
  { label: "Community Retention", left: 9, right: 8, winner: "Yoga Studio" },
  { label: "Revenue Per Client", left: 6, right: 8, winner: "Martial Arts School" },
] as const;

export function getRecommendation(inputs: HealthcareDecisionInputs): string {
  let yoga = 0;
  let martialArts = 0;

  if (inputs.clinicalInterest === "specialty") martialArts += 2;
  else yoga += 2;

  if (inputs.revenueGoal === "very-high" || inputs.revenueGoal === "high") martialArts += 2;
  else yoga += 3;

  if (inputs.insuranceComfort === "high") martialArts += 2;
  else yoga += 2;

  if (inputs.growthAmbition === "multi-location") martialArts += 2;
  else if (inputs.growthAmbition === "lifestyle") yoga += 3;
  else {
    yoga += 1;
    martialArts += 1;
  }

  return yoga >= martialArts ? "Yoga Studio" : "Martial Arts School";
}

export const decisionToolCopy = {
  left: "A yoga studio fits your goals — lowest startup costs, wellness community focus, workshop and retreat revenue, and lifestyle-friendly boutique operations.",
  right:
    "A martial arts school fits your goals — kids and family market, program-based belt retention, tuition-driven recurring revenue, and structured curriculum community.",
} as const;

export const fitnessDualComparisonData = buildYogaComparison({
  slug: comparisonMeta.slug,
  title: comparisonMeta.title,
  subtitle: comparisonMeta.subtitle,
  right: martialArtsSchoolProfile,
  decisionSnapshot,
  winnerScorecard,
  revenueDrivers: [
    { driver: "Active Clients / Students", left: "100 – 300", right: "150 – 400" },
    { driver: "Average Monthly Tuition", left: "$80 – $160", right: "$100 – $180" },
    { driver: "Kids & Family Mix", left: "10 – 25%", right: "50 – 70%" },
    { driver: "Belt / Program Revenue", left: "N/A", right: "10 – 20% of revenue" },
  ],
  memberEconomicsMetrics: [
    { metric: "Client / Student Lifetime Value", left: "$700 – $1,400", right: "$800 – $1,600" },
    { metric: "Monthly Churn", left: "3 – 6%", right: "3 – 5%" },
    { metric: "Annual Retention", left: "65 – 78%", right: "65 – 80%" },
    { metric: "Family Membership Rate", left: "Low – Moderate", right: "High" },
  ],
  staffMetrics: [
    { metric: "Revenue Per Client / Student", left: "$80 – $160/mo", right: "$100 – $180/mo" },
    { metric: "Clients Per Location", left: "100 – 300", right: "150 – 400" },
    { metric: "Instructors / Coaches", left: "3 – 10", right: "3 – 8" },
  ],
  costStructureComparison: [
    { expense: "Rent & Occupancy", left: "20 – 30%", right: "18 – 26%" },
    { expense: "Instructor Payroll", left: "30 – 42%", right: "30 – 40%" },
    { expense: "Equipment", left: "3 – 8%", right: "5 – 10%" },
    { expense: "Marketing", left: "10 – 18%", right: "10 – 16%" },
  ],
  recurringComparison: [
    { metric: "Membership / Tuition MRR", left: "75 – 90%", right: "70 – 85%" },
    { metric: "Workshop / Retreat Revenue", left: "10 – 20%", right: "5 – 10%" },
    { metric: "Belt Testing Revenue", left: "N/A", right: "10 – 20%" },
    { metric: "Camp & Seminar Revenue", left: "3 – 8%", right: "8 – 15%" },
  ],
  ownerIncomeComparison: [
    { model: "Yoga Studio Owner", earnings: "$70K – $110K", type: "left" },
    { model: "Multi-Studio Yoga Operator", earnings: "$120K – $180K+", type: "left" },
    { model: "Martial Arts School Owner", earnings: "$75K – $120K", type: "right" },
    { model: "Multi-Location School Operator", earnings: "$130K – $200K+", type: "right" },
  ],
  breakEvenComparison: [
    { metric: "Monthly Revenue Needed", left: "$25K – $45K", right: "$30K – $50K" },
    { metric: "Clients / Students Needed", left: "60 – 100", right: "100 – 150" },
    { metric: "Months To Break-Even", left: "10 – 16 months", right: "12 – 18 months" },
    { metric: "Startup Investment", left: "$50K – $150K", right: "$75K – $200K" },
  ],
  scalingRightTitle: "Martial Arts School Growth Path",
  chooseLeft: [
    "You want the lowest startup cost entry in boutique fitness ($50K–$150K)",
    "You prefer wellness community building with workshop and retreat revenue",
    "You value lifestyle-friendly operations serving adult wellness clients",
    "You want minimal equipment investment and flexible class formats",
    "You're passionate about yoga, mindfulness, and holistic member experiences",
  ],
  chooseRight: [
    "You want to serve the kids and family market with program-based retention",
    "You prefer structured belt progression and curriculum-driven student loyalty",
    "You value tuition-based recurring revenue with camp and testing upsells",
    "You want higher revenue per student through family memberships",
    "You're building a community school with instructor-led martial arts culture",
  ],
  chooseRightTitle: "Choose Martial Arts School If",
  relatedComparisons,
  faqs: [
    {
      question: "Yoga studio vs martial arts school — which costs less to open?",
      answer:
        "Yoga studios typically launch at $50K–$150K with mats and props. Martial arts schools require $75K–$200K for mats, mirrors, and dojo buildout — accessible but higher than yoga.",
    },
    {
      question: "Which is better for the kids and family market?",
      answer:
        "Martial arts schools are built around youth programs — 50–70% of revenue often comes from kids and family memberships. Yoga studios serve adults primarily, with kids programming as a secondary offering.",
    },
    {
      question: "Which has better community retention?",
      answer:
        "Both formats build strong communities. Yoga studios excel at mindfulness-driven loyalty and workshop engagement. Martial arts schools use belt progression and program structure to drive long-term student commitment.",
    },
    {
      question: "Which makes more money per client?",
      answer:
        "Martial arts schools typically earn more per student ($100–$180/mo vs $80–$160/mo for yoga) through tuition programs and family memberships. Yoga studios offset lower ARPU with workshop, retreat, and teacher training revenue.",
    },
  ],
});
