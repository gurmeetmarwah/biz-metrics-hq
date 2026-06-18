export const dentalHubHref = "/industries/healthcare/dental-practice/";

export const dentalIndustryAverages = {
  revenue: 1800000,
  revenueRange: "$1.2M – $2.6M",
  ebitdaMarginPct: 24,
  ebitdaMarginRange: "18 – 30%",
  ownerComp: 285000,
  ownerCompRange: "$220K – $360K",
  sdeMultiple: 3.8,
  sdeMultipleRange: "3.2× – 4.5×",
  activePatients: 1500,
  revenuePerPatient: 1000,
  revenuePerOperatory: 400000,
  startupCostRange: "$515K – $1.0M",
  associateCompPct: 28,
  associateProduction: 650000,
};

export const allDentalCalculators = [
  {
    label: "Dental Practice Valuation Calculator",
    href: "/calculators/dental-practice-valuation/",
    description: "Estimate practice value using SDE multiples.",
  },
  {
    label: "EBITDA Calculator",
    href: "/calculators/dental-practice-ebitda/",
    description: "Calculate EBITDA margin and compare to benchmarks.",
  },
  {
    label: "Revenue Per Patient Calculator",
    href: "/calculators/dental-practice-revenue-per-patient/",
    description: "Calculate patient lifetime value and annual production.",
  },
  {
    label: "Break-Even Calculator",
    href: "/calculators/dental-practice-break-even/",
    description: "Estimate monthly production needed to break even.",
  },
  {
    label: "Associate Compensation Calculator",
    href: "/calculators/dental-practice-associate-compensation/",
    description: "Model associate dentist pay from production.",
  },
  {
    label: "Startup Cost Calculator",
    href: "/calculators/dental-practice-startup-cost/",
    description: "Estimate total investment to open or acquire a practice.",
  },
] as const;

export function relatedCalculators(excludeHref: string) {
  return allDentalCalculators.filter((c) => c.href !== excludeHref);
}

export const dentalDataLinks = [
  {
    label: "Dental Practice Revenue Benchmarks",
    href: "/industries/healthcare/dental-practice/#revenue-benchmark",
    description: "Median $1.8M collections — by size and operatory count.",
  },
  {
    label: "Dental EBITDA Margins",
    href: "/industries/healthcare/dental-practice/#profitability",
    description: "Healthy range 22–26% EBITDA for general practices.",
  },
  {
    label: "Dental Owner Compensation",
    href: "/industries/healthcare/dental-practice/#owner-economics",
    description: "Solo owner median $285K total compensation.",
  },
  {
    label: "Dental Practice Valuation",
    href: "/industries/healthcare/dental-practice/#valuation",
    description: "SDE multiples 3.2×–4.5× at transaction.",
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
