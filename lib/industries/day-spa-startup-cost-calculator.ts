import {
  formatCurrency,
  formatPercent,
  daySpaDataLinks,
  relatedCalculators,
} from "@/lib/industries/day-spa-calculators-shared";

export const meta = {
  title: "Day Spa Startup Cost Calculator — Cost to Open a Day Spa",
  shortTitle: "Day Spa Startup Cost Calculator",
  subtitle: "Estimate the total cost to open a day spa — buildout, massage tables, inventory, licensing, and working capital.",
  description:
    "Free day spa startup cost calculator. Add up buildout, massage tables, furniture, skincare inventory, licensing, marketing, and working capital.",
};

export const introContent = {
  lead: "Opening a day spa typically costs $150K–$500K. This calculator adds up every launch line item so you can budget the total investment.",
  bullets: [
    "Total Startup = Buildout + Massage Tables + Furniture + Skincare Inventory + Licensing + Marketing + Working Capital",
    "Buildout and treatment rooms are usually the largest capital expense",
    "Median day spa startup cost is ~$300K",
  ],
  audience: "Built for first-time day spa owners and buyers budgeting a new spa launch.",
};

export type StartupInputs = {
  buildout: number;
  massageTables: number;
  furnitureFixtures: number;
  skincareInventory: number;
  licensingPermits: number;
  brandingMarketing: number;
  workingCapital: number;
};

export const defaultInputs: StartupInputs = {
  buildout: 100000,
  massageTables: 40000,
  furnitureFixtures: 30000,
  skincareInventory: 20000,
  licensingPermits: 15000,
  brandingMarketing: 15000,
  workingCapital: 60000,
};

export const industryBenchmarks = [
  { metric: "Total Startup Cost", range: "$150K – $500K" },
  { metric: "Buildout & Treatment Rooms", range: "$80K – $180K" },
  { metric: "Massage Tables & Equipment", range: "$25K – $60K" },
  { metric: "Working Capital", range: "$40K – $80K" },
] as const;

export function calculateStartup(inputs: StartupInputs) {
  const lineItems = [
    { label: "Buildout & Treatment Rooms", value: inputs.buildout },
    { label: "Massage Tables & Equipment", value: inputs.massageTables },
    { label: "Furniture & Fixtures", value: inputs.furnitureFixtures },
    { label: "Skincare & Product Inventory", value: inputs.skincareInventory },
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
  if (total < 150000) tier = "lean";
  else if (total > 400000) tier = "premium";

  return { total, breakdown, tier };
}

export const faqs = [
  {
    question: "How much does it cost to open a day spa?",
    answer:
      "Opening a day spa typically costs $150K–$500K, with a median near $300K. Buildout, massage tables, skincare inventory, licensing, branding, and working capital are the biggest components.",
  },
  {
    question: "What is the biggest startup cost for a day spa?",
    answer:
      "Buildout and treatment rooms are usually the largest day spa startup cost, often 35–40% of the budget, followed by massage tables and equipment. Leasing an existing wellness suite can significantly reduce buildout cost.",
  },
] as const;

export const relatedTools = relatedCalculators("/calculators/day-spa-startup-cost/");
export { daySpaDataLinks, formatCurrency, formatPercent };
