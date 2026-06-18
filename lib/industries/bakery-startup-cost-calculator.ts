import {
  bakeryDataLinks,
  formatCurrency,
  relatedCalculators,
} from "@/lib/industries/bakery-calculators-shared";

export const meta = {
  title: "Bakery Startup Cost Calculator & Investment Estimator",
  shortTitle: "Bakery Startup Cost Calculator",
  subtitle:
    "Estimate total investment to open a bakery — ovens, buildout, display cases, inventory, and working capital.",
  description:
    "Free bakery startup cost calculator. Estimate ovens, lease improvements, display cases, refrigeration, POS, inventory, and working capital for your bakery opening budget.",
};

export const introContent = {
  lead: "Opening a bakery requires capital across production equipment, buildout, and operating reserves. This calculator totals your investment and compares it against typical bakery opening ranges.",
  bullets: [
    "Total startup = Equipment + Buildout + Display + Refrigeration + POS + Inventory + Working Capital",
    "Typical retail bakery: $120K–$200K all-in",
    "Home bakery: under $50K · Full commercial: up to $300K",
  ],
  audience:
    "Built for aspiring bakery owners, wholesale operators, and investors evaluating opening costs.",
};

export type StartupInputs = {
  ovensMixers: number;
  leaseImprovements: number;
  displayCases: number;
  refrigeration: number;
  posSystem: number;
  initialInventory: number;
  workingCapital: number;
  permits: number;
};

export const defaultInputs: StartupInputs = {
  ovensMixers: 40000,
  leaseImprovements: 60000,
  displayCases: 20000,
  refrigeration: 15000,
  posSystem: 8000,
  initialInventory: 6000,
  workingCapital: 25000,
  permits: 5000,
};

export const presets = [
  { label: "Home Bakery", total: 50000, note: "Cottage license, basic equipment" },
  { label: "Retail Bakery", total: 175000, note: "Standard shop with new equipment" },
  { label: "Commercial Wholesale", total: 300000, note: "Full buildout with production line" },
] as const;

export function calculateStartup(inputs: StartupInputs) {
  const lineItems = [
    { label: "Ovens & Mixers", amount: inputs.ovensMixers, pct: 0 },
    { label: "Leasehold Improvements", amount: inputs.leaseImprovements, pct: 0 },
    { label: "Display Cases", amount: inputs.displayCases, pct: 0 },
    { label: "Refrigeration", amount: inputs.refrigeration, pct: 0 },
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

  let tier: "Home" | "Retail" | "Commercial" = "Retail";
  if (total < 80000) tier = "Home";
  else if (total > 250000) tier = "Commercial";

  return { total, lineItems: withPct, tier };
}

export const faqs = [
  {
    question: "How much does it cost to open a bakery?",
    answer:
      "Total startup investment ranges from $50K (home-based, cottage food license) to $300K (full commercial buildout). Typical retail bakery costs $120K–$200K including leasehold improvements, ovens, display cases, POS, inventory, and 3–6 months working capital.",
  },
  {
    question: "What is the biggest startup cost for a bakery?",
    answer:
      "Leasehold improvements and ovens/mixers are typically the two largest line items — together often 50–60% of total investment. Equipment runs $20K–$60K; buildout $30K–$120K depending on location and ventilation requirements.",
  },
  {
    question: "How much working capital does a bakery need?",
    answer:
      "Plan for $15K–$40K in working capital to cover 3–6 months of operating expenses before the bakery reaches break-even. This includes rent, payroll, inventory replenishment, and marketing during the ramp-up period.",
  },
  {
    question: "Can I open a bakery for under $100K?",
    answer:
      "Yes — with a home bakery license, used equipment, or a small retail footprint, some operators open for $50K–$80K. Trade-offs include limited production capacity, regulatory constraints, and slower brand build.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/bakery-startup-cost/");
export { bakeryDataLinks, formatCurrency };
