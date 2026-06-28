import { industryBenchmarks } from "@/lib/metric-hubs/industry-benchmarks";
import { countTotalIndustries, industryDirectory } from "@/lib/industry-directory";

export type IndustryLevel = "low" | "medium" | "high";

const categoryAccentMap: Record<string, string> = {
  "home-services": "var(--metric-margin)",
  healthcare: "var(--metric-revenue)",
  fitness: "var(--accent)",
  food: "var(--metric-salary)",
};

export const industriesHubMeta = {
  title: "Industry Benchmarks & Business Economics",
  subtitle:
    "Compare revenue, profit margins, owner salaries, startup costs and valuation multiples across industries.",
  dataVintage: "2025–2026",
  sampleSize: `${countTotalIndustries()} industries tracked`,
} as const;

export const industriesHubQuickLinks = [
  { label: "HVAC", href: "/industries/hvac/" },
  { label: "Plumbing", href: "/industries/plumbing/" },
  { label: "Dental Practice", href: "/industries/healthcare/dental-practice/" },
  { label: "Landscaping", href: "/industries/landscaping/" },
  { label: "Pest Control", href: "/industries/pest-control/" },
] as const;

export const featuredRankings = [
  {
    title: "Highest Profit Margin Businesses",
    description: "Industries with the strongest net margin medians",
    href: "/margins/#rankings",
    accent: "var(--metric-margin)",
    icon: "margin",
  },
  {
    title: "Highest Valued Businesses",
    description: "Top SDE multiple ranges by sector",
    href: "/valuation/#rankings",
    accent: "var(--metric-valuation)",
    icon: "valuation",
  },
  {
    title: "Best Recurring Revenue Businesses",
    description: "Contract-heavy models with predictable cash flow",
    href: "/revenue/#rankings",
    accent: "var(--metric-revenue)",
    icon: "recurring",
  },
  {
    title: "Most Recession Resistant Businesses",
    description: "Essential services that hold up in downturns",
    href: "/industries/#goal-finder",
    accent: "var(--accent)",
    icon: "shield",
  },
  {
    title: "Lowest Startup Cost Businesses",
    description: "Lower capital barriers to launch and scale",
    href: "/industries/#goal-finder",
    accent: "var(--metric-salary)",
    icon: "startup",
  },
] as const;

export type HubIndustry = {
  label: string;
  slug: string;
  href: string;
  comingSoon?: boolean;
};

export type HubCategory = {
  name: string;
  accent: string;
  industries: HubIndustry[];
};

export const industryHubCategories: HubCategory[] = industryDirectory.map((category) => ({
  name: category.name,
  accent: categoryAccentMap[category.key],
  industries: category.industries,
}));

export const mostViewedIndustries = [
  { label: "HVAC", href: "/industries/hvac/", views: "12.4k" },
  { label: "Plumbing", href: "/industries/plumbing/", views: "9.8k" },
  { label: "Pest Control", href: "/industries/pest-control/", views: "8.6k" },
  { label: "Dental Practice", href: "/industries/healthcare/dental-practice/", views: "7.9k" },
  { label: "Landscaping", href: "/industries/landscaping/", views: "6.5k" },
  { label: "Cleaning Business", href: "/industries/cleaning-business/", views: "5.8k" },
] as const;

export const hubComparisons = [
  { label: "HVAC vs Plumbing", href: "/comparisons/hvac-vs-plumbing/", left: "HVAC", right: "Plumbing" },
  { label: "Roofing vs Landscaping", href: "/comparisons/landscaping-vs-roofing/", left: "Roofing", right: "Landscaping" },
  { label: "Pest Control vs Cleaning", href: "/comparisons/pest-control-vs-cleaning-business/", left: "Pest Control", right: "Cleaning" },
  { label: "Electrical vs HVAC", href: "/comparisons/hvac-vs-electrical/", left: "Electrical", right: "HVAC" },
  { label: "Restaurant vs Food Truck", href: "/industries/comparisons/restaurant-vs-food-truck/", left: "Restaurant", right: "Food Truck" },
  { label: "Dental vs Veterinary", href: "/comparisons/dental-practice-vs-veterinary-clinic/", left: "Dental", right: "Veterinary" },
  { label: "Coffee Shop vs Bakery", href: "/comparisons/coffee-shop-vs-bakery/", left: "Coffee Shop", right: "Bakery" },
  { label: "HVAC vs Landscaping", href: "/comparisons/hvac-vs-landscaping/", left: "HVAC", right: "Landscaping" },
] as const;

export const businessQualityRankings = [
  { label: "Highest Revenue", description: "Top median revenue by industry", href: "/revenue/#rankings", accent: "var(--metric-revenue)" },
  { label: "Highest Margins", description: "Best net profit margin medians", href: "/margins/#rankings", accent: "var(--metric-margin)" },
  { label: "Highest Valuation", description: "Top SDE multiple ranges", href: "/valuation/#rankings", accent: "var(--metric-valuation)" },
  { label: "Best Recurring Revenue", description: "Contract and subscription-heavy models", href: "/industries/#goal-finder", accent: "var(--accent)" },
  { label: "Fastest Growth", description: "Industries scaling fastest in our dataset", href: "/revenue/#rankings", accent: "var(--metric-revenue)" },
  { label: "Lowest Startup Cost", description: "Lower capital to launch and operate", href: "/industries/#goal-finder", accent: "var(--metric-salary)" },
] as const;

export const goalPresets = [
  { id: "low-startup", label: "Low Startup Cost", filters: { startupCost: "low" as IndustryLevel } },
  { id: "high-recurring", label: "High Recurring Revenue", filters: { recurringRevenue: "high" as IndustryLevel } },
  { id: "high-margin", label: "High Profit Margin", filters: { profitability: "high" as IndustryLevel } },
  { id: "recession-resistant", label: "Recession Resistant", filters: { recessionResistant: "high" as IndustryLevel } },
] as const;

export type IndustryProfile = {
  slug: string;
  name: string;
  href: string;
  category: string;
  revenue: string;
  revenueSort: number;
  margin: string;
  marginSort: number;
  salary: string;
  salarySort: number;
  valuation: string;
  valuationSort: number;
  startupCost: IndustryLevel;
  recurringRevenue: IndustryLevel;
  profitability: IndustryLevel;
  scalability: IndustryLevel;
  recessionResistant: IndustryLevel;
  live: boolean;
};

const profileExtras: Record<
  string,
  {
    salary: string;
    salarySort: number;
    startupCost: IndustryLevel;
    recurringRevenue: IndustryLevel;
    profitability: IndustryLevel;
    scalability: IndustryLevel;
    recessionResistant: IndustryLevel;
  }
> = {
  hvac: { salary: "$145K", salarySort: 145000, startupCost: "medium", recurringRevenue: "high", profitability: "high", scalability: "high", recessionResistant: "high" },
  plumbing: { salary: "$120K", salarySort: 120000, startupCost: "medium", recurringRevenue: "medium", profitability: "high", scalability: "high", recessionResistant: "high" },
  electrical: { salary: "$115K", salarySort: 115000, startupCost: "medium", recurringRevenue: "medium", profitability: "medium", scalability: "high", recessionResistant: "high" },
  roofing: { salary: "$130K", salarySort: 130000, startupCost: "medium", recurringRevenue: "low", profitability: "medium", scalability: "medium", recessionResistant: "medium" },
  landscaping: { salary: "$85K", salarySort: 85000, startupCost: "low", recurringRevenue: "high", profitability: "medium", scalability: "medium", recessionResistant: "medium" },
  "pest-control": { salary: "$110K", salarySort: 110000, startupCost: "low", recurringRevenue: "high", profitability: "high", scalability: "high", recessionResistant: "high" },
  "cleaning-business": { salary: "$75K", salarySort: 75000, startupCost: "low", recurringRevenue: "high", profitability: "high", scalability: "medium", recessionResistant: "high" },
  "dental-practice": { salary: "$280K", salarySort: 280000, startupCost: "high", recurringRevenue: "high", profitability: "high", scalability: "medium", recessionResistant: "high" },
  "veterinary-clinic": { salary: "$195K", salarySort: 195000, startupCost: "high", recurringRevenue: "high", profitability: "high", scalability: "medium", recessionResistant: "high" },
  "physical-therapy-clinic": { salary: "$140K", salarySort: 140000, startupCost: "medium", recurringRevenue: "medium", profitability: "high", scalability: "medium", recessionResistant: "high" },
  "chiropractic-clinic": { salary: "$125K", salarySort: 125000, startupCost: "medium", recurringRevenue: "medium", profitability: "high", scalability: "medium", recessionResistant: "high" },
  restaurant: { salary: "$72K", salarySort: 72000, startupCost: "high", recurringRevenue: "low", profitability: "low", scalability: "medium", recessionResistant: "low" },
  "coffee-shop": { salary: "$68K", salarySort: 68000, startupCost: "medium", recurringRevenue: "medium", profitability: "medium", scalability: "medium", recessionResistant: "medium" },
  bakery: { salary: "$65K", salarySort: 65000, startupCost: "medium", recurringRevenue: "low", profitability: "medium", scalability: "low", recessionResistant: "medium" },
  "food-truck": { salary: "$58K", salarySort: 58000, startupCost: "low", recurringRevenue: "low", profitability: "medium", scalability: "low", recessionResistant: "low" },
};

export const industryProfiles: IndustryProfile[] = industryBenchmarks
  .filter((b) => profileExtras[b.slug])
  .map((b) => {
    const extra = profileExtras[b.slug]!;
    return {
      slug: b.slug,
      name: b.name,
      href: b.hubHref ?? "/industries/",
      category: b.category,
      revenue: b.medianRevenueLabel,
      revenueSort: b.medianRevenue,
      margin: b.netMarginLabel,
      marginSort: b.netMarginPct,
      salary: extra.salary,
      salarySort: extra.salarySort,
      valuation: b.sdeMultipleLabel,
      valuationSort: b.sdeMultiple,
      startupCost: extra.startupCost,
      recurringRevenue: extra.recurringRevenue,
      profitability: extra.profitability,
      scalability: extra.scalability,
      recessionResistant: extra.recessionResistant,
      live: b.live,
    };
  });

export const featuredCalculators = [
  { label: "Business Valuation Calculator", href: "/calculators/pest-control-valuation/", accent: "var(--metric-valuation)" },
  { label: "Profit Margin Calculator", href: "/calculators/hvac-profit-margin/", accent: "var(--metric-margin)" },
  { label: "Revenue Calculator", href: "/calculators/landscaping-revenue/", accent: "var(--metric-revenue)" },
  { label: "Break-even Calculator", href: "/calculators/restaurant-break-even/", accent: "var(--accent)" },
  { label: "Owner Salary Calculator", href: "/calculators/dental-practice-associate-compensation/", accent: "var(--metric-salary)" },
] as const;

export const industryInsights = [
  {
    title: "Most Valuable Home Service Businesses",
    description: "SDE multiples, recurring revenue, and scalability across HVAC, plumbing, pest control, and more.",
    href: "/valuation/#rankings",
    tag: "Home Services",
  },
  {
    title: "Best Healthcare Businesses",
    description: "Revenue per provider, margin structure, and acquisition multiples for clinical practices.",
    href: "/industries/healthcare/dental-practice/",
    tag: "Healthcare",
  },
  {
    title: "Highest Margin Service Businesses",
    description: "Which service industries consistently clear 15%+ net margins in our dataset.",
    href: "/margins/#rankings",
    tag: "Profitability",
  },
  {
    title: "Businesses With Recurring Revenue",
    description: "Contract-heavy models that generate predictable monthly cash flow.",
    href: "/industries/#goal-finder",
    tag: "Recurring Revenue",
  },
] as const;

export const popularIndustriesFooter = [
  { label: "HVAC", href: "/industries/hvac/" },
  { label: "Plumbing", href: "/industries/plumbing/" },
  { label: "Electrical", href: "/industries/electrical/" },
  { label: "Roofing", href: "/industries/roofing/" },
  { label: "Landscaping", href: "/industries/landscaping/" },
  { label: "Pest Control", href: "/industries/pest-control/" },
  { label: "Cleaning", href: "/industries/cleaning-business/" },
  { label: "Dental", href: "/industries/healthcare/dental-practice/" },
  { label: "Veterinary", href: "/industries/healthcare/veterinary-clinic/" },
] as const;

export const levelScore: Record<IndustryLevel, number> = {
  low: 1,
  medium: 2,
  high: 3,
};

export function scoreIndustryMatch(
  profile: IndustryProfile,
  filters: Partial<Record<"startupCost" | "recurringRevenue" | "profitability" | "scalability", IndustryLevel>>,
): number {
  let score = 0;
  let count = 0;
  for (const key of Object.keys(filters) as (keyof typeof filters)[]) {
    const target = filters[key];
    if (!target) continue;
    const actual = profile[key];
    if (levelScore[actual] >= levelScore[target]) {
      score += levelScore[actual];
    }
    count += 1;
  }
  return count > 0 ? score / count : 0;
}
