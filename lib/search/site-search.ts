import { industryCategories, metrics, comparisons } from "@/lib/data";
import {
  calculatorCategories,
  industrySpecificTools,
  popularCalculators,
} from "@/lib/metric-hubs/calculators-hub-data";

export type SearchCategory = "Industry" | "Calculator" | "Comparison" | "Hub" | "Page" | "Report";

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
  "tree-service-vs-landscaping",
  "tree-service-vs-lawn-care",
  "tree-service-vs-pool-service",
  "tree-service-vs-excavation",
  "pest-control-vs-hvac",
  "pest-control-vs-lawn-care",
  "pest-control-vs-cleaning-business",
  "cleaning-business-vs-landscaping",
  "cleaning-business-vs-hvac",
  "cleaning-business-vs-lawn-care",
  "cleaning-business-vs-janitorial-business",
  "pool-service-vs-landscaping",
  "pool-service-vs-hvac",
  "pool-service-vs-plumbing",
  "pool-service-vs-pest-control",
  "pool-service-vs-pressure-washing",
  "pool-service-vs-window-cleaning",
  "restaurant-vs-food-truck",
  "restaurant-vs-coffee-shop",
  "restaurant-vs-bakery",
  "coffee-shop-vs-bakery",
  "ice-cream-shop-vs-coffee-shop",
  "ice-cream-shop-vs-bakery",
  "ice-cream-shop-vs-frozen-yogurt",
  "ice-cream-shop-vs-dessert-cafe",
  "ice-cream-shop-vs-bubble-tea",
  "coffee-shop-vs-food-truck",
  "coffee-shop-vs-fast-casual",
  "bakery-vs-food-truck",
  "bakery-vs-fast-casual",
  "bakery-vs-home-bakery",
  "food-truck-vs-catering",
  "food-truck-vs-ghost-kitchen",
  "dental-practice-vs-veterinary-clinic",
  "dental-practice-vs-orthodontic-practice",
  "optometry-vs-dentistry",
  "optometry-vs-chiropractic",
  "optometry-vs-physical-therapy",
  "optometry-vs-dermatology",
  "optometry-vs-veterinary",
  "hair-salon-vs-barbershop",
  "hair-salon-vs-nail-salon",
  "hair-salon-vs-day-spa",
  "hair-salon-vs-medical-spa",
  "hair-salon-vs-franchise-salon",
  "hair-salon-vs-mobile-salon",
  "nail-salon-vs-hair-salon",
  "nail-salon-vs-lash-studio",
  "nail-salon-vs-day-spa",
  "nail-salon-vs-medical-spa",
  "nail-salon-vs-waxing-salon",
  "nail-salon-vs-barbershop",
  "medical-spa-vs-dermatology-practice",
  "medical-spa-vs-plastic-surgery-clinic",
  "medical-spa-vs-day-spa",
  "medical-spa-vs-hair-salon",
  "medical-spa-vs-dental-practice",
  "medical-spa-vs-wellness-clinic",
  "day-spa-vs-massage-spa",
  "day-spa-vs-wellness-clinic",
  "day-spa-vs-facial-studio",
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
    label: "Franchise Economics",
    href: "/franchise/",
    category: "Hub",
    keywords: ["franchise", "franchise economics", "royalties", "franchise fee", "roi", "payback"],
  });

  add({
    label: "Hair Salon Franchise Guide",
    href: "/franchise/beauty/hair-salon/",
    category: "Hub",
    keywords: [
      "hair salon franchise",
      "great clips",
      "sport clips",
      "supercuts",
      "franchise fee",
      "royalty",
      "salon franchise roi",
    ],
  });

  add({
    label: "Medical Spa Franchise Guide",
    href: "/franchise/beauty/medical-spa/",
    category: "Hub",
    keywords: [
      "medical spa franchise",
      "med spa franchise cost",
      "ideal image franchise",
      "milan laser franchise",
      "laser clinic franchise",
    ],
  });

  add({
    label: "Massage Franchise Guide",
    href: "/franchise/beauty/massage/",
    category: "Hub",
    keywords: [
      "massage franchise",
      "massage envy franchise cost",
      "elements massage franchise",
      "hand and stone franchise",
    ],
  });

  add({
    label: "Waxing Franchise Guide",
    href: "/franchise/beauty/waxing/",
    category: "Hub",
    keywords: [
      "waxing franchise",
      "european wax center franchise cost",
      "waxing the city franchise",
      "wax franchise roi",
    ],
  });

  add({
    label: "HVAC Franchise Guide",
    href: "/franchise/home-services/hvac/",
    category: "Hub",
    keywords: [
      "hvac franchise",
      "hvac franchise cost",
      "one hour heating franchise",
      "aire serv franchise",
      "hvac franchise roi",
      "hvac royalty fee",
    ],
  });

  add({
    label: "Plumbing Franchise Guide",
    href: "/franchise/home-services/plumbing/",
    category: "Hub",
    keywords: [
      "plumbing franchise",
      "plumbing franchise cost",
      "mr rooter franchise",
      "benjamin franklin plumbing franchise",
      "roto-rooter franchise",
      "plumbing franchise roi",
    ],
  });

  add({
    label: "Cleaning Franchise Guide",
    href: "/franchise/home-services/cleaning/",
    category: "Hub",
    keywords: [
      "cleaning franchise",
      "maid franchise",
      "merry maids franchise",
      "molly maid franchise",
      "cleaning franchise cost",
      "cleaning franchise roi",
    ],
  });

  add({
    label: "Pest Control Franchise Guide",
    href: "/franchise/home-services/pest-control/",
    category: "Hub",
    keywords: [
      "pest control franchise",
      "orkin franchise",
      "terminix franchise",
      "aptive franchise",
      "mosquito joe franchise",
      "pest control franchise cost",
    ],
  });

  add({
    label: "Gym Franchise Guide",
    href: "/franchise/fitness/gym/",
    category: "Hub",
    keywords: [
      "gym franchise",
      "gym franchise cost",
      "anytime fitness franchise",
      "planet fitness franchise",
      "orangetheory franchise",
      "snap fitness franchise",
      "fitness franchise roi",
    ],
  });

  add({
    label: "Pilates Franchise Guide",
    href: "/franchise/fitness/pilates/",
    category: "Hub",
    keywords: [
      "pilates franchise",
      "club pilates franchise",
      "solidcore franchise",
      "pilates franchise cost",
      "pilates studio franchise",
    ],
  });

  add({
    label: "Yoga Franchise Guide",
    href: "/franchise/fitness/yoga/",
    category: "Hub",
    keywords: [
      "yoga franchise",
      "yogasix franchise",
      "hotworx franchise",
      "corepower yoga franchise",
      "yoga studio franchise cost",
    ],
  });

  add({
    label: "CrossFit Franchise Guide",
    href: "/franchise/fitness/crossfit/",
    category: "Hub",
    keywords: [
      "crossfit franchise",
      "crossfit affiliate cost",
      "f45 franchise",
      "9round franchise",
      "functional fitness franchise",
    ],
  });

  add({
    label: "Swim School Franchise Guide",
    href: "/franchise/fitness/swim-school/",
    category: "Hub",
    keywords: [
      "swim school franchise",
      "british swim school franchise",
      "goldfish swim school franchise",
      "aqua-tots franchise",
      "swim school franchise cost",
    ],
  });

  for (const item of [
    {
      label: "Gym Franchise ROI Calculator",
      href: "/franchise/fitness/gym/calculators/roi/",
      keywords: ["gym franchise roi", "gym franchise return"],
    },
    {
      label: "Gym Franchise Startup Cost Calculator",
      href: "/franchise/fitness/gym/calculators/startup-cost/",
      keywords: ["gym franchise startup cost", "gym franchise investment calculator"],
    },
    {
      label: "Pilates Franchise ROI Calculator",
      href: "/franchise/fitness/pilates/calculators/roi/",
      keywords: ["pilates franchise roi", "club pilates roi calculator"],
    },
    {
      label: "Yoga Franchise ROI Calculator",
      href: "/franchise/fitness/yoga/calculators/roi/",
      keywords: ["yoga franchise roi", "yogasix roi calculator"],
    },
    {
      label: "CrossFit Franchise ROI Calculator",
      href: "/franchise/fitness/crossfit/calculators/roi/",
      keywords: ["crossfit franchise roi", "f45 roi calculator"],
    },
    {
      label: "Swim School Franchise ROI Calculator",
      href: "/franchise/fitness/swim-school/calculators/roi/",
      keywords: ["swim school franchise roi", "british swim school calculator"],
    },
  ]) {
    add({
      label: item.label,
      href: item.href,
      category: "Calculator",
      keywords: item.keywords,
    });
  }

  for (const item of [
    {
      label: "Best Medical Spa Franchises 2026",
      href: "/franchise/beauty/medical-spa/rankings/best-medical-spa-franchises-2026/",
      keywords: ["best medical spa franchises", "best med spa franchise"],
    },
    {
      label: "Most Profitable Medical Spa Franchises 2026",
      href: "/franchise/beauty/medical-spa/rankings/most-profitable-medical-spa-franchises-2026/",
      keywords: ["most profitable medical spa franchise", "med spa franchise roi"],
    },
    {
      label: "Best Massage Franchises 2026",
      href: "/franchise/beauty/massage/rankings/best-massage-franchises-2026/",
      keywords: ["best massage franchises", "massage envy franchise"],
    },
    {
      label: "Most Profitable Massage Franchises 2026",
      href: "/franchise/beauty/massage/rankings/most-profitable-massage-franchises-2026/",
      keywords: ["most profitable massage franchise", "massage franchise roi"],
    },
    {
      label: "Best Waxing Franchises 2026",
      href: "/franchise/beauty/waxing/rankings/best-waxing-franchises-2026/",
      keywords: ["best waxing franchises", "european wax center franchise"],
    },
    {
      label: "Most Profitable Waxing Franchises 2026",
      href: "/franchise/beauty/waxing/rankings/most-profitable-waxing-franchises-2026/",
      keywords: ["most profitable waxing franchise", "wax franchise roi"],
    },
  ]) {
    add({
      label: item.label,
      href: item.href,
      category: "Report",
      keywords: item.keywords,
    });
  }

  add({
    label: "Best Hair Salon Franchises 2026",
    href: "/franchise/beauty/hair-salon/rankings/best-hair-salon-franchises-2026/",
    category: "Report",
    keywords: ["best hair salon franchises", "best salon franchise to buy", "top salon franchise"],
  });
  add({
    label: "Lowest Cost Hair Salon Franchises 2026",
    href: "/franchise/beauty/hair-salon/rankings/lowest-cost-hair-salon-franchises-2026/",
    category: "Report",
    keywords: ["cheapest salon franchise", "lowest cost hair salon franchise", "salon franchise under 200k"],
  });
  add({
    label: "Highest Revenue Hair Salon Franchises 2026",
    href: "/franchise/beauty/hair-salon/rankings/highest-revenue-hair-salon-franchises-2026/",
    category: "Report",
    keywords: ["highest revenue salon franchise", "franchise salon average sales", "how much does a salon franchise make"],
  });
  add({
    label: "Fastest Growing Hair Salon Franchises 2026",
    href: "/franchise/beauty/hair-salon/rankings/fastest-growing-hair-salon-franchises-2026/",
    category: "Report",
    keywords: ["fastest growing salon franchise", "salon franchise expansion", "growing hair salon franchises"],
  });
  add({
    label: "Best Hair Salon Franchise for First-Time Owners 2026",
    href: "/franchise/beauty/hair-salon/rankings/best-franchise-for-first-time-owners-2026/",
    category: "Report",
    keywords: ["best salon franchise for beginners", "first time franchisee salon", "salon franchise no experience"],
  });
  add({
    label: "Most Profitable Hair Salon Franchises 2026",
    href: "/franchise/beauty/hair-salon/rankings/most-profitable-hair-salon-franchises-2026/",
    category: "Report",
    keywords: ["most profitable salon franchise", "highest roi salon franchise", "salon franchise profit margin"],
  });

  for (const item of [
    {
      label: "Best HVAC Franchises 2026",
      href: "/franchise/home-services/hvac/rankings/best-hvac-franchises-2026/",
      keywords: ["best hvac franchises", "best hvac franchise to buy", "top hvac franchise"],
    },
    {
      label: "Lowest Investment HVAC Franchises 2026",
      href: "/franchise/home-services/hvac/rankings/lowest-cost-hvac-franchises-2026/",
      keywords: ["lowest investment hvac franchise", "cheapest hvac franchise", "hvac franchise under 200k"],
    },
    {
      label: "Highest ROI HVAC Franchises 2026",
      href: "/franchise/home-services/hvac/rankings/highest-revenue-hvac-franchises-2026/",
      keywords: ["highest roi hvac franchises", "hvac franchise roi", "most profitable hvac franchise"],
    },
    {
      label: "Fastest Growing HVAC Franchises 2026",
      href: "/franchise/home-services/hvac/rankings/fastest-growing-hvac-franchises-2026/",
      keywords: ["fastest growing hvac franchises", "hvac franchise expansion"],
    },
    {
      label: "Best HVAC Franchise for Veterans 2026",
      href: "/franchise/home-services/hvac/rankings/best-franchise-for-first-time-owners-2026/",
      keywords: ["best hvac franchise for veterans", "hvac franchise veterans", "military hvac franchise"],
    },
    {
      label: "Best HVAC Franchise for Existing Contractors 2026",
      href: "/franchise/home-services/hvac/rankings/most-profitable-hvac-franchises-2026/",
      keywords: ["best hvac franchise for contractors", "hvac contractor franchise", "convert to hvac franchise"],
    },
    {
      label: "Best Plumbing Franchises 2026",
      href: "/franchise/home-services/plumbing/rankings/best-plumbing-franchises-2026/",
      keywords: ["best plumbing franchises", "best plumbing franchise to buy", "mr rooter franchise"],
    },
    {
      label: "Lowest Investment Plumbing Franchises 2026",
      href: "/franchise/home-services/plumbing/rankings/lowest-cost-plumbing-franchises-2026/",
      keywords: ["lowest investment plumbing franchise", "cheapest plumbing franchise"],
    },
    {
      label: "Highest ROI Plumbing Franchises 2026",
      href: "/franchise/home-services/plumbing/rankings/highest-revenue-plumbing-franchises-2026/",
      keywords: ["highest roi plumbing franchises", "plumbing franchise roi"],
    },
    {
      label: "Best Cleaning Franchises 2026",
      href: "/franchise/home-services/cleaning/rankings/best-cleaning-franchises-2026/",
      keywords: ["best cleaning franchises", "best maid franchise", "merry maids franchise"],
    },
    {
      label: "Lowest Investment Cleaning Franchises 2026",
      href: "/franchise/home-services/cleaning/rankings/lowest-cost-cleaning-franchises-2026/",
      keywords: ["lowest investment cleaning franchise", "cheapest cleaning franchise"],
    },
    {
      label: "Highest ROI Cleaning Franchises 2026",
      href: "/franchise/home-services/cleaning/rankings/highest-revenue-cleaning-franchises-2026/",
      keywords: ["highest roi cleaning franchises", "cleaning franchise roi"],
    },
    {
      label: "Best Pest Control Franchises 2026",
      href: "/franchise/home-services/pest-control/rankings/best-pest-control-franchises-2026/",
      keywords: ["best pest control franchises", "orkin franchise", "terminix franchise"],
    },
    {
      label: "Lowest Investment Pest Control Franchises 2026",
      href: "/franchise/home-services/pest-control/rankings/lowest-cost-pest-control-franchises-2026/",
      keywords: ["lowest investment pest control franchise", "cheapest pest control franchise"],
    },
    {
      label: "Highest ROI Pest Control Franchises 2026",
      href: "/franchise/home-services/pest-control/rankings/highest-revenue-pest-control-franchises-2026/",
      keywords: ["highest roi pest control franchises", "pest control franchise roi"],
    },
    {
      label: "Best Gym Franchises 2026",
      href: "/franchise/fitness/gym/rankings/best-gym-franchises-2026/",
      keywords: ["best gym franchises", "best gym franchise to buy", "anytime fitness franchise"],
    },
    {
      label: "Lowest Cost Gym Franchises 2026",
      href: "/franchise/fitness/gym/rankings/lowest-cost-gym-franchises-2026/",
      keywords: ["lowest cost gym franchise", "cheapest gym franchise", "snap fitness franchise"],
    },
    {
      label: "Highest ROI Gym Franchises 2026",
      href: "/franchise/fitness/gym/rankings/highest-revenue-gym-franchises-2026/",
      keywords: ["highest roi gym franchises", "gym franchise roi", "most profitable gym franchise"],
    },
    {
      label: "Fastest Growing Gym Franchises 2026",
      href: "/franchise/fitness/gym/rankings/fastest-growing-gym-franchises-2026/",
      keywords: ["fastest growing gym franchises", "gym franchise expansion"],
    },
    {
      label: "Best Gym Franchise for First-Time Owners 2026",
      href: "/franchise/fitness/gym/rankings/best-franchise-for-first-time-owners-2026/",
      keywords: ["best gym franchise for beginners", "first time gym franchise"],
    },
    {
      label: "Best Boutique Fitness Franchises 2026",
      href: "/franchise/fitness/gym/rankings/most-profitable-gym-franchises-2026/",
      keywords: ["best boutique fitness franchises", "orangetheory franchise", "boutique gym franchise"],
    },
    {
      label: "Best Pilates Franchises 2026",
      href: "/franchise/fitness/pilates/rankings/best-pilates-franchises-2026/",
      keywords: ["best pilates franchises", "club pilates franchise"],
    },
    {
      label: "Best Yoga Franchises 2026",
      href: "/franchise/fitness/yoga/rankings/best-yoga-franchises-2026/",
      keywords: ["best yoga franchises", "yogasix franchise", "hotworx franchise"],
    },
    {
      label: "Best CrossFit Franchises 2026",
      href: "/franchise/fitness/crossfit/rankings/best-crossfit-franchises-2026/",
      keywords: ["best crossfit franchises", "f45 franchise", "crossfit affiliate"],
    },
    {
      label: "Best Swim School Franchises 2026",
      href: "/franchise/fitness/swim-school/rankings/best-swim-school-franchises-2026/",
      keywords: ["best swim school franchises", "british swim school", "goldfish swim school"],
    },
  ]) {
    add({
      label: item.label,
      href: item.href,
      category: "Report",
      keywords: item.keywords,
    });
  }

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
  Report: "Reports",
};
