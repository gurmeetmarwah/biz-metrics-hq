import {
  foodTruckDataLinks,
  formatCurrency,
  relatedCalculators,
} from "@/lib/industries/food-truck-calculators-shared";

export const meta = {
  title: "Food Truck Startup Cost Calculator & Investment Estimator",
  shortTitle: "Food Truck Startup Cost Calculator",
  subtitle:
    "Estimate total investment to launch a food truck — vehicle, kitchen buildout, permits, branding, and working capital.",
  description:
    "Free food truck startup cost calculator. Estimate truck purchase, kitchen equipment, permits, wrap, inventory, and working capital for your mobile food opening budget.",
};

export const introContent = {
  lead: "Launching a food truck requires capital across the vehicle, kitchen buildout, and operating reserves. This calculator totals your investment and compares it against typical food truck opening ranges.",
  bullets: [
    "Total startup = Truck + Equipment + Permits + Branding + Inventory + Working Capital",
    "Typical all-in cost: $80K–$110K",
    "Budget launch: $60K · Premium build: up to $150K",
  ],
  audience:
    "Built for aspiring food truck owners, event operators, and investors evaluating mobile food opening costs.",
};

export type StartupInputs = {
  truckPurchase: number;
  kitchenEquipment: number;
  permits: number;
  brandingWrap: number;
  initialInventory: number;
  workingCapital: number;
  commissaryDeposit: number;
};

export const defaultInputs: StartupInputs = {
  truckPurchase: 50000,
  kitchenEquipment: 25000,
  permits: 5000,
  brandingWrap: 5000,
  initialInventory: 3500,
  workingCapital: 15000,
  commissaryDeposit: 3000,
};

export const presets = [
  { label: "Budget Launch", total: 60000, note: "Used truck, basic wrap, minimal equipment" },
  { label: "Typical Truck", total: 100000, note: "Standard buildout with new or refurbished truck" },
  { label: "Premium Build", total: 150000, note: "New truck, full kitchen, premium branding" },
] as const;

export function calculateStartup(inputs: StartupInputs) {
  const lineItems = [
    { label: "Truck Purchase", amount: inputs.truckPurchase, pct: 0 },
    { label: "Kitchen Equipment", amount: inputs.kitchenEquipment, pct: 0 },
    { label: "Permits & Licenses", amount: inputs.permits, pct: 0 },
    { label: "Branding & Wrap", amount: inputs.brandingWrap, pct: 0 },
    { label: "Initial Inventory", amount: inputs.initialInventory, pct: 0 },
    { label: "Working Capital", amount: inputs.workingCapital, pct: 0 },
    { label: "Commissary Deposit", amount: inputs.commissaryDeposit, pct: 0 },
  ];
  const total = lineItems.reduce((s, i) => s + i.amount, 0);
  const withPct = lineItems.map((item) => ({
    ...item,
    pct: total > 0 ? (item.amount / total) * 100 : 0,
  }));

  let tier: "Budget" | "Typical" | "Premium" = "Typical";
  if (total < 75000) tier = "Budget";
  else if (total > 125000) tier = "Premium";

  return { total, lineItems: withPct, tier };
}

export const faqs = [
  {
    question: "How much does it cost to start a food truck?",
    answer:
      "Total startup investment ranges from $60K (used truck, basic equipment) to $150K (new truck, premium buildout). Typical all-in cost is $80K–$110K including truck, kitchen equipment, permits, branding, inventory, and 2–3 months working capital.",
  },
  {
    question: "What is the biggest startup cost for a food truck?",
    answer:
      "The truck itself is typically the largest line item — 40–50% of total investment. Kitchen equipment is second at 20–30%. Together they often account for 65–75% of startup capital.",
  },
  {
    question: "How much working capital does a food truck need?",
    answer:
      "Plan for $10K–$25K in working capital to cover fuel, inventory, commissary fees, and payroll during the first 2–3 months before routes stabilize. Event-focused trucks may need more for slow winter months.",
  },
  {
    question: "Can I start a food truck for under $75K?",
    answer:
      "Yes — with a used truck ($25K–$40K), basic wrap, and commissary kitchen access, some operators launch for $60K–$75K. Trade-offs include older equipment, limited menu capacity, and higher maintenance risk.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/food-truck-startup-cost/");
export { foodTruckDataLinks, formatCurrency };
