export const methodologySummary = {
  lastUpdated: "June 2026",
  updateCadence: "Quarterly",
  totalSamples: "15,000+",
};

export const methodologyPillars = [
  {
    id: "experience",
    title: "Experience",
    eeAt: "Real-world business data",
    description:
      "Benchmarks reflect actual operating businesses — not theoretical models. We aggregate data from business-for-sale listings, owner surveys, and licensed industry datasets covering Main Street companies ($250k–$10M revenue).",
  },
  {
    id: "expertise",
    title: "Expertise",
    eeAt: "Defined, consistent metrics",
    description:
      "Every metric uses a published definition. Revenue is gross annual sales. Margins are net profit after owner pay. Valuation multiples are based on Seller's Discretionary Earnings (SDE) — the standard for businesses under $5M.",
  },
  {
    id: "authoritativeness",
    title: "Authoritativeness",
    eeAt: "Multiple verified sources",
    description:
      "Data is cross-referenced across business brokerage platforms, SBA loan performance data, industry association reports, and IRS Statistics of Income by NAICS code. Outliers beyond 2.5× IQR are excluded.",
  },
  {
    id: "trustworthiness",
    title: "Trustworthiness",
    eeAt: "Ranges, not false precision",
    description:
      "We publish interquartile ranges (25th–75th percentile) and median values — never single-point estimates presented as facts. Sample sizes, geography, and data vintage are disclosed on every benchmark card.",
  },
] as const;

export const calculationSteps = [
  {
    step: "1",
    title: "Collect",
    detail: "Gather raw data from brokerage listings, surveys, and public filings by NAICS industry code.",
  },
  {
    step: "2",
    title: "Normalize",
    detail: "Standardize owner compensation, adjust for partial-year data, and map businesses to our industry taxonomy.",
  },
  {
    step: "3",
    title: "Filter",
    detail: "Remove outliers beyond 2.5× the interquartile range and exclude businesses with incomplete financials.",
  },
  {
    step: "4",
    title: "Calculate",
    detail: "Compute median (50th percentile) and interquartile range (25th–75th percentile) for each metric.",
  },
  {
    step: "5",
    title: "Publish",
    detail: "Display ranges with sample size, geography, and last-updated date. Link to full methodology on every page.",
  },
] as const;

export const metricDefinitions = [
  {
    term: "Revenue Range",
    definition:
      "25th to 75th percentile of annual gross revenue across sampled businesses in the industry.",
  },
  {
    term: "Net Margin Range",
    definition:
      "25th to 75th percentile of net profit margin (net income ÷ revenue) after owner compensation.",
  },
  {
    term: "Owner Salary Range",
    definition:
      "25th to 75th percentile of total annual owner compensation, including W-2, draws, and distributions.",
  },
  {
    term: "Valuation Multiple",
    definition:
      "25th to 75th percentile of asking price ÷ SDE for businesses listed for sale. SDE = net profit + owner salary + add-backs.",
  },
  {
    term: "Median",
    definition:
      "The 50th percentile value — half of businesses fall above, half below. More representative than mean for skewed distributions.",
  },
] as const;

export const dataSources = [
  "Business-for-sale marketplace listings (BizBuySell, BizQuest)",
  "SBA 7(a) loan performance by NAICS code",
  "IRS Statistics of Income — Sole Proprietorship & Partnership returns",
  "Industry association benchmark surveys",
  "Owner-operator survey panel (n=2,400+)",
] as const;

export const limitations = [
  "Ranges reflect U.S. businesses unless otherwise noted; regional variation can be significant.",
  "Smaller sample industries have wider confidence intervals — check sample size on each card.",
  "Valuation multiples reflect asking prices, not closed transaction prices.",
  "Figures are directional benchmarks for planning — not substitutes for professional valuation or tax advice.",
] as const;
