export const veterinaryHubHref = "/industries/healthcare/veterinary-clinic/";

export const veterinaryIndustryAverages = {
  revenue: 1200000,
  revenueRange: "$600K – $1.8M",
  ebitdaMarginPct: 19,
  ebitdaMarginRange: "15 – 22%",
  ownerComp: 185000,
  ownerCompRange: "$120K – $250K",
  sdeMultiple: 3.4,
  sdeMultipleRange: "2.8× – 4.0×",
  activeClients: 3200,
  revenuePerClient: 375,
  revenuePerVet: 550000,
  revenuePerExamRoom: 400000,
  startupCostRange: "$350K – $900K",
};

export const allVeterinaryCalculators = [
  {
    label: "Veterinary Clinic Valuation Calculator",
    href: "/calculators/veterinary-clinic-valuation/",
    description: "Estimate clinic value using SDE multiples.",
  },
  {
    label: "Revenue Per Client Calculator",
    href: "/calculators/veterinary-clinic-revenue-per-client/",
    description: "Calculate client lifetime value and annual revenue.",
  },
  {
    label: "EBITDA Calculator",
    href: "/calculators/veterinary-clinic-ebitda/",
    description: "Calculate EBITDA margin and compare to benchmarks.",
  },
  {
    label: "Break-Even Calculator",
    href: "/calculators/veterinary-clinic-break-even/",
    description: "Estimate monthly revenue needed to break even.",
  },
  {
    label: "Revenue Per Veterinarian Calculator",
    href: "/calculators/veterinary-clinic-revenue-per-veterinarian/",
    description: "Measure DVM productivity and revenue per vet.",
  },
  {
    label: "Startup Cost Calculator",
    href: "/calculators/veterinary-clinic-startup-cost/",
    description: "Estimate total investment to open or acquire a clinic.",
  },
] as const;

export function relatedCalculators(excludeHref: string) {
  return allVeterinaryCalculators.filter((c) => c.href !== excludeHref);
}

export const veterinaryDataLinks = [
  {
    label: "Veterinary Revenue Benchmarks",
    href: "/industries/healthcare/veterinary-clinic/#revenue-benchmark",
    description: "Median $1.2M revenue — by type, vet count, and location.",
  },
  {
    label: "Veterinary EBITDA Margins",
    href: "/industries/healthcare/veterinary-clinic/#profitability",
    description: "Healthy range 17–21% EBITDA for general clinics.",
  },
  {
    label: "Veterinary Owner Compensation",
    href: "/industries/healthcare/veterinary-clinic/#owner-economics",
    description: "Solo owner median $185K total compensation.",
  },
  {
    label: "Veterinary Practice Valuation",
    href: "/industries/healthcare/veterinary-clinic/#valuation",
    description: "SDE multiples 2.8×–4.0× at transaction.",
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
