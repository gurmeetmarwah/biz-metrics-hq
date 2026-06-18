export const calculatorsHubMeta = {
  title: "Business Economics Calculators",
  subtitle: "Estimate revenue, profit, and business value with industry-benchmarked tools.",
  dataVintage: "2025–2026",
  sampleSize: "70+ calculators",
} as const;

export const popularCalculators = [
  {
    label: "Business Valuation Calculator",
    description: "Estimate company value using SDE multiples and revenue benchmarks.",
    href: "/calculators/pest-control-valuation/",
    accent: "metric-valuation",
    featured: true,
  },
  {
    label: "Profit Margin Calculator",
    description: "Calculate net margin and compare against industry cost structure.",
    href: "/calculators/hvac-profit-margin/",
    accent: "metric-margin",
    featured: true,
  },
  {
    label: "Revenue Calculator",
    description: "Model annual revenue from routes, contracts, and service volume.",
    href: "/calculators/landscaping-revenue/",
    accent: "metric-revenue",
    featured: true,
  },
  {
    label: "Break-even Calculator",
    description: "Find monthly revenue needed to cover fixed and variable costs.",
    href: "/calculators/restaurant-break-even/",
    accent: "accent",
    featured: true,
  },
] as const;

export const industrySpecificTools = [
  {
    industry: "HVAC",
    href: "/industries/hvac/",
    tool: "Revenue Per Technician",
    toolHref: "/calculators/hvac-revenue-per-technician/",
  },
  {
    industry: "Pest Control",
    href: "/industries/pest-control/",
    tool: "Customer Lifetime Value",
    toolHref: "/calculators/pest-control-customer-lifetime-value/",
  },
  {
    industry: "Landscaping",
    href: "/industries/landscaping/",
    tool: "Contract Revenue Calculator",
    toolHref: "/calculators/landscaping-commercial-contract/",
  },
  {
    industry: "Cleaning Business",
    href: "/industries/cleaning-business/",
    tool: "Revenue Per Cleaner",
    toolHref: "/calculators/cleaning-business-revenue-per-cleaner/",
  },
] as const;

export const calculatorCategories = [
  {
    name: "Revenue",
    description: "Model top-line growth from routes, contracts, and productivity.",
    calculators: [
      { label: "HVAC Revenue Per Technician", href: "/calculators/hvac-revenue-per-technician/" },
      { label: "Landscaping Revenue", href: "/calculators/landscaping-revenue/" },
      { label: "Cleaning Revenue Per Cleaner", href: "/calculators/cleaning-business-revenue-per-cleaner/" },
      { label: "Food Truck Revenue", href: "/calculators/food-truck-revenue/" },
    ],
  },
  {
    name: "Profitability",
    description: "Analyze margins, cost structure, and bottom-line performance.",
    calculators: [
      { label: "HVAC Profit Margin", href: "/calculators/hvac-profit-margin/" },
      { label: "Pest Control Profit Margin", href: "/calculators/pest-control-profit-margin/" },
      { label: "Restaurant Profit Margin", href: "/industries/restaurant/profit-margin-calculator/" },
      { label: "Cleaning Profit Margin", href: "/calculators/cleaning-business-profit-margin/" },
    ],
  },
  {
    name: "Valuation",
    description: "Estimate business worth using SDE and revenue multiples.",
    calculators: [
      { label: "Pest Control Valuation", href: "/calculators/pest-control-valuation/" },
      { label: "HVAC Valuation", href: "/calculators/hvac-valuation/" },
      { label: "Dental Practice Valuation", href: "/calculators/dental-practice-valuation/" },
      { label: "Landscaping Valuation", href: "/calculators/landscaping-valuation/" },
    ],
  },
  {
    name: "Growth",
    description: "Forecast recurring revenue, LTV, and contract economics.",
    calculators: [
      { label: "Pest Control Recurring Revenue", href: "/calculators/pest-control-recurring-revenue/" },
      { label: "Pest Control Customer LTV", href: "/calculators/pest-control-customer-lifetime-value/" },
      { label: "Cleaning Contract Value", href: "/calculators/cleaning-business-contract-value/" },
      { label: "Landscaping Commercial Contract", href: "/calculators/landscaping-commercial-contract/" },
    ],
  },
  {
    name: "Operations",
    description: "Measure productivity, break-even, and labor efficiency.",
    calculators: [
      { label: "Pest Control Route Density", href: "/calculators/pest-control-route-density/" },
      { label: "Landscaping Crew Productivity", href: "/calculators/landscaping-crew-productivity/" },
      { label: "HVAC Break-even", href: "/calculators/hvac-break-even/" },
      { label: "Electrical Labor Utilization", href: "/calculators/electrical-labor-utilization/" },
    ],
  },
] as const;

export const calculatorsQuickLinks = [
  { label: "Valuation calculator", href: "/calculators/pest-control-valuation/" },
  { label: "Profit margin", href: "/calculators/hvac-profit-margin/" },
  { label: "Break-even", href: "/calculators/restaurant-break-even/" },
  { label: "HVAC hub calculators", href: "/industries/hvac/#calculators" },
] as const;
