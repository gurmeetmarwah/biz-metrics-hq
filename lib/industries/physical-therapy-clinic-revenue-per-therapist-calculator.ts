import {
  formatCurrency,
  formatNumber,
  physicalTherapyIndustryAverages,
  relatedCalculators,
} from "@/lib/industries/physical-therapy-calculators-shared";

export const meta = {
  title: "Physical Therapy Revenue Per Therapist Calculator & Productivity Tool",
  shortTitle: "Revenue Per Therapist Calculator",
  subtitle:
    "Calculate revenue per therapist, daily production, and revenue per visit for your PT clinic.",
  description:
    "Free physical therapy revenue per therapist calculator. Measure therapist productivity with revenue per PT, visits per day, utilization context, and per-visit revenue.",
};

export const introContent = {
  lead: "Revenue per therapist is a core operating KPI for staffing, utilization, and growth planning in outpatient PT clinics. This calculator converts annual revenue into therapist-level production metrics.",
  bullets: [
    "Revenue Per Therapist = Annual Revenue ÷ Therapists",
    "Daily Production = Revenue Per Therapist ÷ Working Days",
    "Productive therapists often complete 12 – 18 visits per day",
  ],
  audience:
    "Built for PT owners, directors, and practice managers evaluating therapist productivity, scheduling, and hiring plans.",
};

export type RevenuePerTherapistInputs = {
  annualRevenue: number;
  therapists: number;
  workingDays: number;
  visitsPerDay: number;
};

export const defaultInputs: RevenuePerTherapistInputs = {
  annualRevenue: 850000,
  therapists: 2,
  workingDays: 245,
  visitsPerDay: 14,
};

export const productivityBenchmarks = [
  { metric: "Revenue Per Therapist", range: "$320K – $540K/yr" },
  { metric: "Visits Per Day", range: "12 – 18" },
  { metric: "Utilization", range: "72 – 88%" },
  { metric: "Revenue Per Visit", range: "$95 – $135" },
] as const;

export function calculateRevenuePerTherapist(inputs: RevenuePerTherapistInputs) {
  const revenuePerTherapist = inputs.therapists > 0 ? inputs.annualRevenue / inputs.therapists : 0;
  const dailyProduction = inputs.workingDays > 0 ? revenuePerTherapist / inputs.workingDays : 0;
  const revenuePerVisit = inputs.visitsPerDay > 0 ? dailyProduction / inputs.visitsPerDay : 0;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (revenuePerTherapist < 320000) tier = "Below";
  else if (revenuePerTherapist >= 500000) tier = "Strong";

  const vsMedian = revenuePerTherapist - physicalTherapyIndustryAverages.revenuePerTherapist;

  return {
    revenuePerTherapist,
    dailyProduction,
    revenuePerVisit,
    vsMedian,
    tier,
  };
}

export const faqs = [
  {
    question: "What is a good revenue per therapist in a PT clinic?",
    answer:
      "Many outpatient PT clinics target roughly $320K–$540K annual revenue per full-time therapist, with a median near $420K. Performance at the high end usually combines strong scheduling, payer mix, and visit completion rates.",
  },
  {
    question: "How many visits should a physical therapist complete per day?",
    answer:
      "A common productivity range is 12–18 completed visits per therapist per day, depending on treatment model and appointment length. Most clinics treat 14–16 as a practical baseline for consistent throughput and quality.",
  },
  {
    question: "How is revenue per visit calculated for PT clinics?",
    answer:
      "Revenue per visit is daily therapist production divided by visits completed per day. For example, $1,700 daily production across 15 visits equals about $113 revenue per visit.",
  },
  {
    question: "What therapist utilization rate is considered healthy?",
    answer:
      "Healthy outpatient PT utilization is often in the 72–88% range. Sustained utilization below this range usually points to referral leakage, scheduling gaps, or front-desk conversion issues.",
  },
] as const;

export const relatedTools = relatedCalculators(
  "/calculators/physical-therapy-clinic-revenue-per-therapist/"
);
export { physicalTherapyIndustryAverages, formatCurrency, formatNumber };
