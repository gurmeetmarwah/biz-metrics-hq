import {
  formatCurrency,
  poolServiceDataLinks,
  relatedCalculators,
} from "@/lib/industries/pool-service-calculators-shared";

export const meta = {
  title: "Pool Service Startup Cost Calculator & Launch Investment Estimator",
  shortTitle: "Pool Service Startup Cost Calculator",
  subtitle:
    "Estimate total investment to launch a pool service business — vehicle, equipment, chemicals, and working capital.",
  description:
    "Free pool service startup cost calculator. Estimate service vehicles, cleaning equipment, chemical inventory, insurance, and working capital for your launch budget.",
};

export const introContent = {
  lead: "Launching a pool service route requires capital across vehicles, equipment, chemicals, and route ramp-up working capital. This calculator totals your investment and compares it against typical launch ranges.",
  bullets: [
    "Total startup = Vehicle + Equipment + Chemicals + Insurance + Licensing + Working Capital",
    "Typical single-route launch: $65K–$165K all-in",
    "Multi-crew or franchise concepts can exceed $200K",
  ],
  audience:
    "Built for aspiring pool service owners, route buyers, and investors evaluating launch costs.",
};

export type StartupInputs = {
  serviceVehicle: number;
  cleaningEquipment: number;
  vacuumSystems: number;
  chemicalInventory: number;
  testingEquipment: number;
  insurance: number;
  licensing: number;
  workingCapital: number;
};

export const defaultInputs: StartupInputs = {
  serviceVehicle: 40000,
  cleaningEquipment: 12000,
  vacuumSystems: 8000,
  chemicalInventory: 5000,
  testingEquipment: 3500,
  insurance: 8000,
  licensing: 4000,
  workingCapital: 25000,
};

export const presets = [
  { label: "Lean Launch", total: 65000, note: "Used vehicle, minimal equipment" },
  { label: "Standard Route", total: 95000, note: "Median independent launch" },
  { label: "Premium / Multi-Crew", total: 165000, note: "New vehicle, full equipment suite" },
] as const;

export function calculateStartup(inputs: StartupInputs) {
  const lineItems = [
    { label: "Service Vehicle", amount: inputs.serviceVehicle },
    { label: "Cleaning Equipment", amount: inputs.cleaningEquipment },
    { label: "Vacuum Systems", amount: inputs.vacuumSystems },
    { label: "Chemical Inventory", amount: inputs.chemicalInventory },
    { label: "Testing Equipment", amount: inputs.testingEquipment },
    { label: "Insurance", amount: inputs.insurance },
    { label: "Licensing", amount: inputs.licensing },
    { label: "Working Capital", amount: inputs.workingCapital },
  ];
  const total = lineItems.reduce((s, i) => s + i.amount, 0);
  const withPct = lineItems.map((item) => ({
    ...item,
    pct: total > 0 ? (item.amount / total) * 100 : 0,
  }));

  let tier: "Lean" | "Standard" | "Premium" = "Standard";
  if (total < 80000) tier = "Lean";
  else if (total > 130000) tier = "Premium";

  return { total, lineItems: withPct, tier };
}

export const faqs = [
  {
    question: "How much does it cost to start a pool service business?",
    answer:
      "Most pool service businesses launch between $65K and $165K, with a median near $95K. Service vehicles, equipment, insurance, and working capital for route ramp-up are the largest line items.",
  },
  {
    question: "What is the biggest startup cost for pool service?",
    answer:
      "The service vehicle is typically the largest single investment — $25K–$55K for a properly equipped route truck or van. Working capital for 3–6 months of route growth is the second-largest category.",
  },
  {
    question: "How much working capital does a pool service need?",
    answer:
      "Plan for $15K–$40K in working capital to cover chemical inventory, payroll during route ramp-up, and marketing while building to 80–120 weekly accounts.",
  },
  {
    question: "Can I start a pool service for under $75K?",
    answer:
      "Yes — with a used vehicle, basic equipment, and a focused suburban territory, some operators launch for $65K–$75K. Trade-offs include slower route density build and less repair upsell capacity.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/pool-service-startup-cost/");
export { poolServiceDataLinks, formatCurrency };
