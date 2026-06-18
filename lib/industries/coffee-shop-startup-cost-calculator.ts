import {
  coffeeShopDataLinks,
  formatCurrency,
  relatedCalculators,
} from "@/lib/industries/coffee-shop-calculators-shared";

export const meta = {
  title: "Coffee Shop Startup Cost Calculator & Investment Estimator",
  shortTitle: "Coffee Shop Startup Cost Calculator",
  subtitle:
    "Estimate total investment to open a coffee shop — equipment, buildout, inventory, and working capital.",
  description:
    "Free coffee shop startup cost calculator. Estimate espresso equipment, lease improvements, furniture, POS, inventory, and working capital for your cafe opening budget.",
};

export const introContent = {
  lead: "Opening a coffee shop requires capital across equipment, buildout, and operating reserves — often spread across dozens of line items. This calculator totals your investment and compares it against typical cafe opening ranges.",
  bullets: [
    "Total startup = Equipment + Buildout + Furniture + POS + Inventory + Working Capital",
    "Typical neighborhood cafe: $150K–$250K all-in",
    "Budget kiosk: under $100K · Premium drive-thru: up to $400K",
  ],
  audience:
    "Built for aspiring cafe owners, franchise candidates, and investors evaluating opening costs.",
};

export type StartupInputs = {
  equipment: number;
  leaseImprovements: number;
  furniture: number;
  posSystem: number;
  initialInventory: number;
  workingCapital: number;
  permits: number;
};

export const defaultInputs: StartupInputs = {
  equipment: 45000,
  leaseImprovements: 75000,
  furniture: 25000,
  posSystem: 12000,
  initialInventory: 8000,
  workingCapital: 35000,
  permits: 5000,
};

export const presets = [
  { label: "Budget Kiosk", total: 80000, note: "Used equipment, minimal buildout" },
  { label: "Standard Cafe", total: 200000, note: "Neighborhood cafe, new equipment" },
  { label: "Premium Drive-Thru", total: 400000, note: "Full buildout with drive-thru lane" },
] as const;

export function calculateStartup(inputs: StartupInputs) {
  const lineItems = [
    { label: "Espresso Equipment", amount: inputs.equipment, pct: 0 },
    { label: "Lease Improvements", amount: inputs.leaseImprovements, pct: 0 },
    { label: "Furniture & Fixtures", amount: inputs.furniture, pct: 0 },
    { label: "POS System", amount: inputs.posSystem, pct: 0 },
    { label: "Initial Inventory", amount: inputs.initialInventory, pct: 0 },
    { label: "Working Capital", amount: inputs.workingCapital, pct: 0 },
    { label: "Permits & Licenses", amount: inputs.permits, pct: 0 },
  ];
  const total = lineItems.reduce((s, i) => s + i.amount, 0);
  const withPct = lineItems.map((item) => ({
    ...item,
    pct: total > 0 ? (item.amount / total) * 100 : 0,
  }));

  let tier: "Budget" | "Standard" | "Premium" = "Standard";
  if (total < 120000) tier = "Budget";
  else if (total > 300000) tier = "Premium";

  return { total, lineItems: withPct, tier };
}

export const faqs = [
  {
    question: "How much does it cost to open a coffee shop?",
    answer:
      "Total startup investment ranges from $80K (kiosk, used equipment) to $400K (premium buildout, drive-thru). Typical neighborhood cafe costs $150K–$250K including lease improvements, espresso equipment, furniture, POS, inventory, and 3–6 months working capital.",
  },
  {
    question: "What is the biggest startup cost for a coffee shop?",
    answer:
      "Lease improvements and espresso equipment are typically the two largest line items — together often 50–60% of total investment. Equipment runs $25K–$80K; buildout $40K–$150K depending on location condition and design.",
  },
  {
    question: "How much working capital does a coffee shop need?",
    answer:
      "Plan for $20K–$60K in working capital to cover 3–6 months of operating expenses before the cafe reaches break-even. This includes rent, payroll, inventory replenishment, and marketing during the ramp-up period.",
  },
  {
    question: "Can I open a coffee shop for under $100K?",
    answer:
      "Yes — with a used espresso machine, minimal lease improvements, and a small footprint (kiosk or cart), some operators open for $80K–$100K. Trade-offs include limited seating, older equipment maintenance, and slower brand build.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/coffee-shop-startup-cost/");
export { coffeeShopDataLinks, formatCurrency };
