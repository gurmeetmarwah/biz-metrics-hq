import { industryCategories, metrics, comparisons } from "@/lib/data";
import {
  calculatorCategories,
  industrySpecificTools,
  popularCalculators,
} from "@/lib/metric-hubs/calculators-hub-data";

export type SearchCategory = "Industry" | "Calculator" | "Comparison" | "Hub" | "Page";

export type SiteSearchItem = {
  label: string;
  href: string;
  category: SearchCategory;
  keywords: string[];
};

function slugToLabel(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace(/\bHvac\b/g, "HVAC")
    .replace(/\bDso\b/g, "DSO")
    .replace(/\bPt\b/g, "PT")
    .replace(/\bEbitda\b/g, "EBITDA")
    .replace(/\bLtv\b/g, "LTV");
}

const comparisonSlugs = [
  "hvac-vs-plumbing",
  "hvac-vs-roofing",
  "hvac-vs-landscaping",
  "hvac-vs-electrical",
  "plumbing-vs-hvac",
  "plumbing-vs-electrical",
  "plumbing-vs-roofing",
  "plumbing-vs-landscaping",
  "plumbing-vs-pest-control",
  "landscaping-vs-hvac",
  "landscaping-vs-plumbing",
  "landscaping-vs-roofing",
  "landscaping-vs-pest-control",
  "landscaping-vs-lawn-care",
  "landscaping-vs-tree-service",
  "pest-control-vs-hvac",
  "pest-control-vs-lawn-care",
  "pest-control-vs-cleaning-business",
  "cleaning-business-vs-landscaping",
  "cleaning-business-vs-hvac",
  "cleaning-business-vs-lawn-care",
  "cleaning-business-vs-janitorial-business",
  "restaurant-vs-food-truck",
  "restaurant-vs-coffee-shop",
  "restaurant-vs-bakery",
  "coffee-shop-vs-bakery",
  "coffee-shop-vs-food-truck",
  "coffee-shop-vs-fast-casual",
  "bakery-vs-food-truck",
  "bakery-vs-fast-casual",
  "bakery-vs-home-bakery",
  "food-truck-vs-catering",
  "food-truck-vs-ghost-kitchen",
  "dental-practice-vs-veterinary-clinic",
  "dental-practice-vs-orthodontic-practice",
] as const;

const industryKeywords: Record<string, string[]> = {
  HVAC: ["heating", "cooling", "air conditioning", "hvac"],
  Restaurant: ["food", "dining", "restaurant"],
  "Dental Practice": ["dentist", "dental", "dds"],
  "Veterinary Clinic": ["vet", "veterinary", "animal"],
  "Physical Therapy Clinic": ["pt", "physical therapy", "physio"],
  "Chiropractic Clinic": ["chiro", "chiropractic"],
  Plumbing: ["plumber", "plumbing"],
  Electrical: ["electrician", "electrical"],
  Roofing: ["roofer", "roofing"],
  Landscaping: ["landscape", "lawn", "grounds"],
  "Pest Control": ["pest", "exterminator", "termite"],
  "Cleaning Business": ["cleaning", "janitorial", "maid"],
  "Coffee Shop": ["cafe", "coffee"],
  Bakery: ["bake", "bakery", "pastry"],
  "Food Truck": ["food truck", "mobile food"],
};

function buildIndex(): SiteSearchItem[] {
  const items: SiteSearchItem[] = [];
  const seen = new Set<string>();

  const add = (item: Omit<SiteSearchItem, "keywords"> & { keywords?: string[] }) => {
    if (seen.has(item.href)) return;
    seen.add(item.href);
    items.push({
      ...item,
      keywords: item.keywords ?? [],
    });
  };

  for (const category of industryCategories) {
    for (const industry of category.industries) {
      add({
        label: industry.label,
        href: industry.href,
        category: "Industry",
        keywords: [
          category.name.toLowerCase(),
          ...(industryKeywords[industry.label] ?? []),
          industry.label.toLowerCase(),
        ],
      });
    }
  }

  for (const metric of metrics) {
    add({
      label: `${metric.label} Benchmarks`,
      href: metric.href,
      category: "Hub",
      keywords: [metric.label.toLowerCase(), "benchmarks", metric.description.toLowerCase()],
    });
  }

  add({
    label: "Calculators Hub",
    href: "/calculators/",
    category: "Hub",
    keywords: ["calculator", "tools", "profit", "valuation", "revenue"],
  });

  add({
    label: "Methodology",
    href: "/methodology/",
    category: "Page",
    keywords: ["methodology", "data sources", "how we calculate"],
  });

  for (const calc of popularCalculators) {
    add({
      label: calc.label,
      href: calc.href,
      category: "Calculator",
      keywords: [calc.description.toLowerCase(), "calculator"],
    });
  }

  for (const group of calculatorCategories) {
    for (const calc of group.calculators) {
      add({
        label: calc.label,
        href: calc.href,
        category: "Calculator",
        keywords: [group.name.toLowerCase(), "calculator"],
      });
    }
  }

  for (const tool of industrySpecificTools) {
    add({
      label: tool.tool,
      href: tool.toolHref,
      category: "Calculator",
      keywords: [tool.industry.toLowerCase(), "calculator"],
    });
  }

  for (const comparison of comparisons) {
    add({
      label: comparison.label,
      href: comparison.href,
      category: "Comparison",
      keywords: ["compare", "vs", "versus"],
    });
  }

  for (const slug of comparisonSlugs) {
    const label = slugToLabel(slug);
    add({
      label,
      href: `/comparisons/${slug}/`,
      category: "Comparison",
      keywords: ["compare", "vs", "versus", slug.replace(/-/g, " ")],
    });
  }

  return items;
}

export const siteSearchIndex = buildIndex();

function scoreItem(item: SiteSearchItem, query: string): number {
  const q = query.trim().toLowerCase();
  if (!q) return 0;

  const label = item.label.toLowerCase();
  const href = item.href.toLowerCase();
  let score = 0;

  if (label === q) score += 100;
  else if (label.startsWith(q)) score += 80;
  else if (label.includes(q)) score += 50;

  for (const keyword of item.keywords) {
    const kw = keyword.toLowerCase();
    if (kw === q) score += 60;
    else if (kw.startsWith(q)) score += 40;
    else if (kw.includes(q)) score += 25;
  }

  if (href.includes(q.replace(/\s+/g, "-"))) score += 20;

  const words = q.split(/\s+/).filter(Boolean);
  if (words.length > 1 && words.every((w) => label.includes(w) || item.keywords.some((k) => k.includes(w)))) {
    score += 30;
  }

  return score;
}

export function searchSite(query: string, limit = 8): SiteSearchItem[] {
  const q = query.trim();
  if (!q) return [];

  return siteSearchIndex
    .map((item) => ({ item, score: scoreItem(item, q) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.item.label.localeCompare(b.item.label))
    .slice(0, limit)
    .map(({ item }) => item);
}

export const searchCategoryLabels: Record<SearchCategory, string> = {
  Industry: "Industries",
  Calculator: "Calculators",
  Comparison: "Comparisons",
  Hub: "Intelligence Hubs",
  Page: "Pages",
};
