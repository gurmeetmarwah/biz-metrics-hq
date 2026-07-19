import {
  formatCurrency,
  formatPercent,
  nailSalonDataLinks,
  relatedCalculators,
} from "@/lib/industries/nail-salon-calculators-shared";

export const meta = {
  title: "Nail Salon Startup Cost Calculator — Cost to Open a Nail Salon",
  shortTitle: "Nail Salon Startup Cost Calculator",
  subtitle: "Estimate the total cost to open a nail salon — buildout, stations, ventilation, inventory, and working capital.",
  description:
    "Free nail salon startup cost calculator. Add up buildout, stations, ventilation, furniture, inventory, licensing, marketing, and working capital to see the total cost to open a nail salon.",
};

export const introContent = {
  lead: "Opening a nail salon typically costs $70K–$180K. This calculator adds up every launch line item so you can budget the total cost to open a nail salon.",
  bullets: [
    "Total Startup = Buildout + Ventilation + Stations + Furniture + Inventory + Licensing + Marketing + Working Capital",
    "Buildout and ventilation are usually the largest line items",
    "Median nail salon startup cost is ~$110K",
  ],
  audience: "Built for first-time nail salon owners and buyers budgeting a new salon launch.",
};

export type StartupInputs = {
  buildout: number;
  ventilation: number;
  stationsEquipment: number;
  furnitureFixtures: number;
  initialInventory: number;
  licensingPermits: number;
  brandingMarketing: number;
  workingCapital: number;
};

export const defaultInputs: StartupInputs = {
  buildout: 45000,
  ventilation: 12000,
  stationsEquipment: 28000,
  furnitureFixtures: 10000,
  initialInventory: 8000,
  licensingPermits: 3500,
  brandingMarketing: 5000,
  workingCapital: 15000,
};

export const industryBenchmarks = [
  { metric: "Total Startup Cost", range: "$70K – $180K" },
  { metric: "Buildout & Renovation", range: "$25K – $65K" },
  { metric: "Stations & Ventilation", range: "$25K – $50K" },
  { metric: "Working Capital", range: "$8K – $20K" },
] as const;

export function calculateStartup(inputs: StartupInputs) {
  const lineItems = [
    { label: "Buildout & Renovation", value: inputs.buildout },
    { label: "Ventilation System", value: inputs.ventilation },
    { label: "Stations & Equipment", value: inputs.stationsEquipment },
    { label: "Furniture & Fixtures", value: inputs.furnitureFixtures },
    { label: "Initial Inventory", value: inputs.initialInventory },
    { label: "Licensing & Permits", value: inputs.licensingPermits },
    { label: "Branding & Marketing", value: inputs.brandingMarketing },
    { label: "Working Capital", value: inputs.workingCapital },
  ];
  const total = lineItems.reduce((sum, item) => sum + item.value, 0);
  const breakdown = lineItems.map((item) => ({
    ...item,
    percent: total > 0 ? (item.value / total) * 100 : 0,
  }));

  let tier: "lean" | "typical" | "premium" = "typical";
  if (total < 70000) tier = "lean";
  else if (total > 150000) tier = "premium";

  return { total, breakdown, tier };
}

export const faqs = [
  {
    question: "How much does it cost to open a nail salon?",
    answer:
      "Opening a nail salon typically costs $70K–$180K, with a median near $110K. Buildout, ventilation, stations and equipment, furniture, initial inventory, licensing, branding, and working capital are the biggest components of nail salon startup cost.",
  },
  {
    question: "What is the biggest startup cost for a nail salon?",
    answer:
      "Buildout and renovation is usually the largest nail salon startup cost, often 30–40% of the budget, followed by stations, equipment, and ventilation. Leasing a former salon space can significantly reduce buildout cost.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/nail-salon-startup-cost/");
export { nailSalonDataLinks, formatCurrency, formatPercent };
