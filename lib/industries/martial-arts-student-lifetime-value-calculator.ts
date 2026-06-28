import {
  formatCurrency,
  formatPercent,
  martialArtsIndustryAverages,
  relatedMartialArtsCalculators,
} from "@/lib/industries/martial-arts-calculators-shared";

export const meta = {
  title: "Martial Arts Student Lifetime Value Calculator & LTV Tool",
  shortTitle: "Student Lifetime Value Calculator",
  subtitle: "Estimate student lifetime value from monthly ARPU, churn rate, and acquisition cost.",
  description:
    "Free martial arts student LTV calculator. Model lifetime value from revenue per student, monthly churn, and CAC against school benchmarks.",
};

export const introContent = {
  lead: "Student lifetime value tells you how much an enrolled student is worth over their full program — and whether your marketing spend pays back. Kids-focused schools often see $3,800–$6,200 LTV due to multi-year enrollment and family plans.",
  bullets: [
    "Avg. Lifespan (months) ≈ 1 ÷ Monthly Churn Rate",
    "LTV = Monthly ARPU × Average Lifespan (months)",
    "Healthy LTV:CAC ratio is 3:1 or higher",
  ],
  audience: "Built for school owners evaluating intro offers, referral programs, and retention investments.",
};

export type StudentLtvInputs = {
  monthlyRevenuePerStudent: number;
  monthlyChurnPct: number;
  acquisitionCost: number;
};

export const defaultInputs: StudentLtvInputs = {
  monthlyRevenuePerStudent: 168,
  monthlyChurnPct: 3.8,
  acquisitionCost: 165,
};

export const ltvBenchmarks = [
  { metric: "Revenue Per Student", range: "$120 – $220/mo" },
  { metric: "Monthly Churn", range: "2.5 – 6%" },
  { metric: "Student LTV", range: "$3,800 – $6,200" },
  { metric: "Customer Acquisition Cost", range: "$100 – $280" },
] as const;

export function calculateAverageLifespanMonths(monthlyChurnPct: number): number {
  if (monthlyChurnPct <= 0) return 60;
  if (monthlyChurnPct >= 100) return 1;
  return 1 / (monthlyChurnPct / 100);
}

export function calculateStudentLtv(inputs: StudentLtvInputs) {
  const avgLifespanMonths = calculateAverageLifespanMonths(inputs.monthlyChurnPct);
  const lifetimeValue = inputs.monthlyRevenuePerStudent * avgLifespanMonths;
  const ltvToCacRatio = inputs.acquisitionCost > 0 ? lifetimeValue / inputs.acquisitionCost : 0;
  const annualRetentionPct = (1 - inputs.monthlyChurnPct / 100) ** 12 * 100;
  const vsBenchmark = lifetimeValue - martialArtsIndustryAverages.studentLtv;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (lifetimeValue < 3_800) tier = "Below";
  else if (lifetimeValue >= 5_800) tier = "Strong";

  let cacTier: "Weak" | "Healthy" | "Strong" = "Healthy";
  if (ltvToCacRatio < 2) cacTier = "Weak";
  else if (ltvToCacRatio >= 4) cacTier = "Strong";

  return { avgLifespanMonths, lifetimeValue, ltvToCacRatio, annualRetentionPct, vsBenchmark, tier, cacTier };
}

export const faqs = [
  {
    question: "How do you calculate martial arts student LTV?",
    answer:
      "LTV equals monthly revenue per student multiplied by average enrollment lifespan in months. At $168/mo and 3.8% churn, lifespan is ~26 months and LTV is ~$4,368.",
  },
  {
    question: "What is a good student LTV for a martial arts school?",
    answer:
      "Kids-focused schools typically see $3,800–$6,200 LTV depending on belt testing upsells and family retention. Higher ARPU and lower churn drive top-quartile LTV.",
  },
  {
    question: "What LTV:CAC ratio should a martial arts school target?",
    answer:
      "A 3:1 LTV:CAC ratio is the minimum for sustainable growth. Top schools achieve 4:1+ through family referrals while improving trial-to-enrollment conversion.",
  },
] as const;

export const relatedTools = relatedMartialArtsCalculators("/calculators/martial-arts-student-lifetime-value/");
export { martialArtsIndustryAverages, formatCurrency, formatPercent };
