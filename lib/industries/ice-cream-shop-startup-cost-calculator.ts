import {
  iceCreamShopDataLinks,
  formatCurrency,
  relatedCalculators,
} from "@/lib/industries/ice-cream-shop-calculators-shared";

export const meta = {
  title: "Ice Cream Shop Startup Cost Calculator & Investment Estimator",
  shortTitle: "Ice Cream Shop Startup Cost Calculator",
  subtitle:
    "Estimate total investment to open an ice cream shop — freezers, equipment, buildout, and working capital.",
  description:
    "Free ice cream shop startup cost calculator. Estimate freezers, lease improvements, equipment, POS, inventory, and working capital for your opening budget.",
};

export const introContent = {
  lead: "Opening an ice cream shop requires capital across freezers, equipment, buildout, and off-season working capital. This calculator totals your investment and compares it against typical launch ranges.",
  bullets: [
    "Total startup = Equipment + Freezers + Buildout + Furniture + POS + Inventory + Working Capital",
    "Typical independent shop: $150K–$250K all-in",
    "Franchise buildouts can exceed $350K",
  ],
  audience:
    "Built for aspiring ice cream shop owners, franchise candidates, and investors evaluating opening costs.",
};

export type StartupInputs = {
  leaseImprovements: number;
  equipment: number;
  freezers: number;
  furniture: number;
  posSystem: number;
  initialInventory: number;
  permits: number;
  workingCapital: number;
};

export const defaultInputs: StartupInputs = {
  leaseImprovements: 50000,
  equipment: 65000,
  freezers: 22000,
  furniture: 15000,
  posSystem: 7000,
  initialInventory: 10000,
  permits: 6000,
  workingCapital: 40000,
};

export const presets = [
  { label: "Budget Shop", total: 110000, note: "Used equipment, small footprint" },
  { label: "Standard Shop", total: 185000, note: "Median independent launch" },
  { label: "Premium / Franchise", total: 320000, note: "Full buildout with franchise fees" },
] as const;

export function calculateStartup(inputs: StartupInputs) {
  const lineItems = [
    { label: "Lease Improvements", amount: inputs.leaseImprovements, pct: 0 },
    { label: "Equipment", amount: inputs.equipment, pct: 0 },
    { label: "Freezers", amount: inputs.freezers, pct: 0 },
    { label: "Furniture", amount: inputs.furniture, pct: 0 },
    { label: "POS System", amount: inputs.posSystem, pct: 0 },
    { label: "Initial Inventory", amount: inputs.initialInventory, pct: 0 },
    { label: "Permits & Licenses", amount: inputs.permits, pct: 0 },
    { label: "Working Capital", amount: inputs.workingCapital, pct: 0 },
  ];
  const total = lineItems.reduce((s, i) => s + i.amount, 0);
  const withPct = lineItems.map((item) => ({
    ...item,
    pct: total > 0 ? (item.amount / total) * 100 : 0,
  }));

  let tier: "Budget" | "Standard" | "Premium" = "Standard";
  if (total < 140000) tier = "Budget";
  else if (total > 260000) tier = "Premium";

  return { total, lineItems: withPct, tier };
}

export const faqs = [
  {
    question: "How much does it cost to open an ice cream shop?",
    answer:
      "Most independent ice cream shops launch between $110K and $320K, with a median near $185K. Franchise concepts can exceed $350K. Equipment, freezers, lease improvements, and working capital for off-season months are the largest line items.",
  },
  {
    question: "What is the biggest startup cost for an ice cream shop?",
    answer:
      "Equipment and lease improvements are typically the two largest line items — together often 50–60% of total investment. Freezers alone run $12K–$35K; buildout $25K–$80K depending on location.",
  },
  {
    question: "How much working capital does an ice cream shop need?",
    answer:
      "Plan for $20K–$60K in working capital to cover 3–6 months of operating expenses, especially off-season months when revenue drops 40%+ in temperate climates.",
  },
  {
    question: "Can I open an ice cream shop for under $150K?",
    answer:
      "Yes — with used equipment, a small footprint, and limited buildout, some operators open for $110K–$140K. Trade-offs include smaller menu capacity and less premium positioning.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/ice-cream-shop-startup-cost/");
export { iceCreamShopDataLinks, formatCurrency };
