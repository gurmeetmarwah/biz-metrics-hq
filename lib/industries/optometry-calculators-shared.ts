export const optometryHubHref = "/industries/optometry-practice/";

export const optometryIndustryAverages = {
  revenue: 1350000,
  revenueRange: "$900K – $1.9M",
  netMarginPct: 24,
  netMarginRange: "18 – 28%",
  ownerComp: 235000,
  ownerCompRange: "$180K – $280K",
  ebitdaMultiple: 5.2,
  ebitdaMultipleRange: "4.5× – 6.5×",
  activePatients: 3200,
  revenuePerPatient: 420,
  revenuePerOd: 650000,
  opticalCaptureRate: 62,
  startupCostRange: "$350K – $750K",
  insuranceRevenuePct: 55,
  retailRevenuePct: 58,
};

export const allOptometryCalculators = [
  {
    label: "Optometry Startup Cost Calculator",
    href: "/calculators/optometry-practice-startup-cost/",
    description: "Estimate total launch investment — buildout, equipment, optical inventory, and working capital.",
  },
  {
    label: "Practice Profit Calculator",
    href: "/calculators/optometry-practice-profit/",
    description: "Model net margin from collections, payroll, optical COGS, and overhead.",
  },
  {
    label: "Practice Valuation Calculator",
    href: "/calculators/optometry-practice-valuation/",
    description: "Estimate practice value using EBITDA multiples and optical revenue quality.",
  },
  {
    label: "Revenue per Patient Calculator",
    href: "/calculators/optometry-practice-revenue-per-patient/",
    description: "Calculate annual revenue per patient from visits and optical attach.",
  },
  {
    label: "Insurance Mix Calculator",
    href: "/calculators/optometry-practice-insurance-mix/",
    description: "Model margin impact from vision plan vs medical vs private-pay mix.",
  },
  {
    label: "Optical Capture Rate Calculator",
    href: "/calculators/optometry-practice-optical-capture-rate/",
    description: "Measure dispensary conversion from exams to eyewear sales.",
  },
  {
    label: "Break-even Calculator",
    href: "/calculators/optometry-practice-break-even/",
    description: "Find daily exams and optical sales needed to cover fixed costs.",
  },
  {
    label: "Staffing Cost Calculator",
    href: "/calculators/optometry-practice-staffing-cost/",
    description: "Model staff payroll as a percentage of revenue and per-OD burden.",
  },
] as const;

export function relatedCalculators(excludeHref: string) {
  return allOptometryCalculators.filter((c) => c.href !== excludeHref);
}

export const optometryDataLinks = [
  {
    label: "Optometry Revenue Benchmarks",
    href: "/industries/optometry-practice/#revenue-benchmark",
    description: "Median $1.35M annual revenue — percentile distribution and revenue mix.",
  },
  {
    label: "Optometry Profit Margins",
    href: "/industries/optometry-practice/#profitability",
    description: "Healthy range 22–26% net margin with strong optical capture.",
  },
  {
    label: "Optometry Owner Compensation",
    href: "/industries/optometry-practice/#owner-economics",
    description: "Solo owner median $235K total compensation.",
  },
  {
    label: "Optometry Practice Valuation",
    href: "/industries/optometry-practice/#valuation",
    description: "EBITDA multiples 4.5×–6.5× at transaction.",
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
