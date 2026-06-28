import {
  formatCurrency,
  martialArtsIndustryAverages,
  relatedMartialArtsCalculators,
} from "@/lib/industries/martial-arts-calculators-shared";

export const meta = {
  title: "Martial Arts Tuition Revenue Calculator & MRR Tool",
  shortTitle: "Tuition Revenue Calculator",
  subtitle: "Model monthly recurring tuition revenue from active students and average program fees.",
  description:
    "Free martial arts tuition revenue calculator. Estimate tuition MRR, annual tuition revenue, and revenue per student against school benchmarks.",
};

export const introContent = {
  lead: "Tuition MRR is the foundation of martial arts school economics. This calculator models recurring revenue from your active student base and benchmarks against typical program fees.",
  bullets: [
    "Tuition MRR = Active Students × Average Monthly Tuition",
    "Annual Tuition Revenue = MRR × 12",
    "Median school tuition MRR is ~$58K/mo at ~220 active students",
  ],
  audience: "Built for school owners tracking tuition MRR growth, pricing tiers, and recurring revenue quality.",
};

export type TuitionRevenueInputs = {
  activeStudents: number;
  monthlyTuition: number;
  autopayStudentPct: number;
};

export const defaultInputs: TuitionRevenueInputs = {
  activeStudents: 220,
  monthlyTuition: 145,
  autopayStudentPct: 91,
};

export const tuitionBenchmarks = [
  { metric: "Median Monthly Tuition", range: "$110 – $195/mo" },
  { metric: "Active Students (median school)", range: "150 – 300" },
  { metric: "Tuition MRR (median)", range: "$45K – $68K/mo" },
  { metric: "Recurring Tuition %", range: "85 – 92%" },
] as const;

export function calculateTuitionRevenue(inputs: TuitionRevenueInputs) {
  const tuitionMrr = inputs.activeStudents * inputs.monthlyTuition;
  const annualTuitionRevenue = tuitionMrr * 12;
  const autopayMrr = tuitionMrr * (inputs.autopayStudentPct / 100);
  const vsBenchmarkMrr = tuitionMrr - martialArtsIndustryAverages.tuitionMrr;
  const impliedSchoolRevenue = annualTuitionRevenue / (martialArtsIndustryAverages.tuitionRevenuePct / 100);

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (tuitionMrr < 45_000) tier = "Below";
  else if (tuitionMrr >= 68_000) tier = "Strong";

  return { tuitionMrr, annualTuitionRevenue, autopayMrr, vsBenchmarkMrr, impliedSchoolRevenue, tier };
}

export const faqs = [
  {
    question: "What is tuition MRR for a martial arts school?",
    answer:
      "Tuition MRR equals active paying students multiplied by average monthly program fees. A school with 220 students at $145/mo generates $31,900 in tuition MRR — before belt testing and camps.",
  },
  {
    question: "What is a good monthly tuition price?",
    answer:
      "Program tuition typically ranges $110–$195/mo depending on market and class frequency. Kids unlimited programs often price $130–$175/mo; family plans may discount per student.",
  },
  {
    question: "How many students should a martial arts school have?",
    answer:
      "Most schools break even between 100–150 active students and reach healthy margins at 180–250 engaged students with strong kids enrollment.",
  },
] as const;

export const relatedTools = relatedMartialArtsCalculators("/calculators/martial-arts-tuition-revenue/");
export { martialArtsIndustryAverages, formatCurrency };
