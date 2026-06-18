import {
  formatCurrency,
  formatNumber,
  relatedCalculators,
  veterinaryIndustryAverages,
} from "@/lib/industries/veterinary-calculators-shared";

export const meta = {
  title: "Veterinary Revenue Per Client Calculator & Client LTV Tool",
  shortTitle: "Revenue Per Client Calculator",
  subtitle: "Calculate annual revenue per active client and client lifetime value for your veterinary clinic.",
  description:
    "Free veterinary revenue per client calculator. Estimate annual revenue per client, client lifetime value, and compare against industry benchmarks.",
};

export const introContent = {
  lead: "Client economics drive veterinary clinic valuation and marketing ROI. This calculator computes annual revenue per active client and lifetime value based on retention assumptions.",
  bullets: [
    "Annual Revenue Per Client = Total Revenue ÷ Active Clients",
    "LTV = Annual Revenue Per Client × Retention Years",
    "Median active client generates $350–$900/year",
  ],
  audience:
    "Built for clinic owners evaluating client acquisition costs, marketing spend, and growth strategies.",
};

export type RevenuePerClientInputs = {
  activeClients: number;
  annualRevenue: number;
  retentionYears: number;
  newClientsPerMonth: number;
  acquisitionCost: number;
};

export const defaultInputs: RevenuePerClientInputs = {
  activeClients: 3200,
  annualRevenue: 1200000,
  retentionYears: 6,
  newClientsPerMonth: 50,
  acquisitionCost: 180,
};

export const clientBenchmarks = [
  { metric: "Active Clients", range: "2,000 – 4,500" },
  { metric: "Revenue / Client", range: "$350 – $900/yr" },
  { metric: "Retention", range: "4 – 7 years" },
  { metric: "LTV", range: "$1,500 – $4,200" },
] as const;

export function calculateRevenuePerClient(inputs: RevenuePerClientInputs) {
  const revenuePerClient =
    inputs.activeClients > 0 ? inputs.annualRevenue / inputs.activeClients : 0;
  const ltv = revenuePerClient * inputs.retentionYears;
  const annualNewClients = inputs.newClientsPerMonth * 12;
  const annualAcquisitionSpend = annualNewClients * inputs.acquisitionCost;
  const paybackMonths =
    revenuePerClient > 0 ? (inputs.acquisitionCost / revenuePerClient) * 12 : 0;
  const ltvToCac = inputs.acquisitionCost > 0 ? ltv / inputs.acquisitionCost : 0;

  let tier: "Below" | "Typical" | "Strong" = "Typical";
  if (revenuePerClient < 350) tier = "Below";
  else if (revenuePerClient >= 700) tier = "Strong";

  return {
    revenuePerClient,
    ltv,
    annualNewClients,
    annualAcquisitionSpend,
    paybackMonths,
    ltvToCac,
    tier,
  };
}

export const faqs = [
  {
    question: "What is the average revenue per client for a veterinary clinic?",
    answer:
      "The median general veterinary clinic generates $350–$900 per active client annually. Clinics with strong wellness plans and specialty services can exceed $800/client; low-service rural clinics may be below $350.",
  },
  {
    question: "How do you calculate client lifetime value for a veterinary clinic?",
    answer:
      "Client LTV = Annual Revenue Per Active Client × Average Retention Years. With $375/year revenue and 6-year retention, LTV is approximately $2,250. This helps evaluate marketing spend and new client acquisition ROI.",
  },
  {
    question: "How many active clients does a veterinary clinic need?",
    answer:
      "A general veterinary clinic typically maintains 2,000–4,500 active clients (seen within 18 months). At $375/client/year, 3,200 active clients supports ~$1.2M in annual revenue before new client growth.",
  },
  {
    question: "What is a good client acquisition cost for veterinary clinics?",
    answer:
      "Typical new client acquisition costs range $120–$250 depending on market and channel. With $2,250 LTV and $180 CAC, the LTV:CAC ratio of 12.5:1 is healthy. Payback within 4–6 months is the target.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/veterinary-clinic-revenue-per-client/");
export { veterinaryIndustryAverages, formatCurrency, formatNumber };
