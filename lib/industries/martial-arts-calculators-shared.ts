export const martialArtsHubHref = "/industries/martial-arts-school/";

export const martialArtsIndustryAverages = {
  revenue: 780_000,
  marginPct: 24,
  marginRange: "18–28%",
  activeStudents: 220,
  monthlyTuition: 145,
  revenuePerStudentMonthly: 168,
  monthlyChurnPct: 3.8,
  annualRetentionPct: 78,
  studentLtv: 4_700,
  acquisitionCost: 165,
  sdeMultiple: 3.9,
  sdeMultipleLow: 2.6,
  sdeMultipleHigh: 4.2,
  revenueMultiple: 0.65,
  ebitdaMultiple: 4.2,
  tuitionRevenuePct: 89,
  ownerSalary: 160_000,
  sde: 187_000,
  classesPerWeek: 55,
  avgClassCapacity: 18,
  avgOccupancyPct: 72,
  revenuePerClass: 285,
  revenuePerInstructorAnnual: 145_000,
  tuitionMrr: 58_000,
  beltTestsPerYear: 4,
  avgBeltTestFee: 85,
};

export const allMartialArtsCalculators = [
  {
    label: "Martial Arts School Revenue Calculator",
    href: "/calculators/martial-arts-school-revenue/",
    description: "Project annual revenue from tuition, belt testing, camps, and ancillary income.",
  },
  {
    label: "Tuition Revenue Calculator",
    href: "/calculators/martial-arts-tuition-revenue/",
    description: "Model tuition MRR from active students and average monthly program fees.",
  },
  {
    label: "Student Lifetime Value Calculator",
    href: "/calculators/martial-arts-student-lifetime-value/",
    description: "Calculate LTV from tuition ARPU, retention, and family enrollment length.",
  },
  {
    label: "Student Capacity Calculator",
    href: "/calculators/martial-arts-student-capacity/",
    description: "Estimate revenue impact from class fill rate and dojo capacity utilization.",
  },
  {
    label: "Instructor Productivity Calculator",
    href: "/calculators/martial-arts-instructor-productivity/",
    description: "Benchmark revenue per instructor and teaching-hour economics.",
  },
  {
    label: "Martial Arts School Valuation Calculator",
    href: "/calculators/martial-arts-valuation/",
    description: "Estimate school value using SDE multiples and tuition recurring quality.",
  },
  {
    label: "Belt Testing Revenue Calculator",
    href: "/calculators/martial-arts-belt-testing-revenue/",
    description: "Model promotion fee revenue from testing cycles and student progression.",
  },
] as const;

export function relatedMartialArtsCalculators(excludeHref: string) {
  return allMartialArtsCalculators.filter((c) => c.href !== excludeHref);
}

export const martialArtsDataLinks = [
  {
    label: "Martial Arts School Revenue Benchmarks",
    href: "/industries/martial-arts-school/#revenue-benchmark",
    description: "Median $780K — revenue percentiles and revenue mix.",
  },
  {
    label: "Tuition Economics",
    href: "/industries/martial-arts-school/#tuition-economics",
    description: "Tuition MRR, fees, churn, and revenue per student benchmarks.",
  },
  {
    label: "Student Retention Dashboard",
    href: "/industries/martial-arts-school/#student-retention",
    description: "Retention, belt advancement, churn, and family renewal rates.",
  },
  {
    label: "School Valuation Multiples",
    href: "/industries/martial-arts-school/#valuation",
    description: "SDE, EBITDA, and revenue multiples for martial arts school sales.",
  },
] as const;

export function formatPercent(value: number, decimals = 1): string {
  return `${value.toFixed(decimals)}%`;
}

export function formatNumber(value: number, decimals = 0): string {
  return value.toLocaleString("en-US", {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });
}

export { formatCurrency } from "@/lib/numbers";
