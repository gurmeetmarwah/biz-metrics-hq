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
  HVAC: [
    "heating",
    "cooling",
    "air conditioning",
    "hvac",
    "are hvac businesses profitable",
    "hvac profit",
    "hvac profit margin",
    "hvac owner salary",
  ],
  Restaurant: [
    "food",
    "dining",
    "restaurant",
    "restaurant profit margin",
    "restaurant owner salary",
  ],
  "Dental Practice": [
    "dentist",
    "dental",
    "dds",
    "dental practice profit margin",
    "dental practice owner salary",
  ],
  "Veterinary Clinic": [
    "vet",
    "veterinary",
    "animal",
    "how much profit does a vet clinic make",
    "vet clinic profit",
    "vet clinic profit margin",
  ],
  "Physical Therapy Clinic": ["pt", "physical therapy", "physio", "pt clinic profit margin"],
  "Chiropractic Clinic": ["chiro", "chiropractic", "chiropractor owner salary"],
  Plumbing: [
    "plumber",
    "plumbing",
    "plumbers net worth",
    "plumber net worth",
    "plumbing owner salary",
    "plumbing profit margin",
  ],
  Electrical: ["electrician", "electrical", "electrical contractor profit margin"],
  Roofing: ["roofer", "roofing", "roofing company profit margin"],
  Landscaping: ["landscape", "lawn", "grounds", "landscaping profit margin"],
  "Pest Control": ["pest", "exterminator", "termite", "pest control profit margin"],
  "Cleaning Business": [
    "cleaning",
    "janitorial",
    "maid",
    "is a cleaning business profitable",
    "cleaning business profit",
    "cleaning business profit margin",
  ],
  "Coffee Shop": ["cafe", "coffee", "coffee shop profit margin", "coffee shop owner salary"],
  Bakery: ["bake", "bakery", "pastry", "bakery profit margin", "bakery startup cost"],
  "Food Truck": ["food truck", "mobile food", "food truck profit margin", "food truck owner salary"],
  Gym: ["gym", "fitness", "gym profit margin", "gym owner salary", "membership revenue"],
  "Yoga Studio": ["yoga", "yoga studio profit margin", "yoga studio owner salary"],
  "Pilates Studio": ["pilates", "reformer", "pilates studio profit margin"],
  "CrossFit Gym": ["crossfit", "affiliate", "crossfit gym profit margin"],
  "Martial Arts School": ["martial arts", "dojo", "martial arts school profit margin"],
  "Hair Salon": ["salon", "hair salon profit margin", "hair salon owner salary", "stylist"],
  "Nail Salon": ["nails", "nail salon profit margin", "nail salon startup cost"],
  "Medical Spa": ["med spa", "medical spa profit margin", "aesthetic"],
  "Day Spa": ["spa", "day spa profit margin"],
  Barbershop: ["barber", "barbershop profit margin", "chair rental"],
  "Optometry": ["optometry", "optical", "optometrist owner salary", "optometry practice"],
  "Ice Cream Shop": ["ice cream", "gelato", "ice cream shop profit margin"],
  "Tree Service": ["tree", "arborist", "tree service profit margin"],
  "Pool Service": ["pool", "pool service profit margin", "pool route"],
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
    label: "Easy Small Business Profit Margin Calculators",
    href: "/calculators/",
    category: "Hub",
    keywords: [
      "calculator",
      "tools",
      "profit",
      "valuation",
      "revenue",
      "easy small business profit margin calculator",
      "profitability metrics",
    ],
  });

  add({
    label: "Franchise Economics",
    href: "/franchise/",
    category: "Hub",
    keywords: [
      "franchise",
      "franchise economics",
      "royalties",
      "franchise fee",
      "roi",
      "payback",
      "restaurant franchise",
      "fast food franchise",
      "coffee shop franchise",
      "best franchise for pilates",
      "pilates franchise",
      "gym franchise",
    ],
  });

  add({
    label: "Restaurant Franchise Guide",
    href: "/franchise/food/restaurant-franchise/",
    category: "Hub",
    keywords: [
      "restaurant franchise",
      "restaurant franchise cost",
      "how much does a restaurant franchise cost",
      "restaurant franchise owner make",
      "restaurant franchise profit margin",
      "restaurant franchises under 500k",
      "lowest cost restaurant franchise",
      "subway franchise",
      "mcdonalds franchise",
      "taco bell franchise",
      "restaurant franchise roi",
    ],
  });

  add({
    label: "Fast Food Franchise Guide",
    href: "/franchise/food/restaurant-franchise/fast-food/",
    category: "Hub",
    keywords: [
      "fast food franchise",
      "fast food franchise cost",
      "cheapest fast food franchises",
      "fast food franchises under 500k",
      "how much does a fast food franchise owner make",
      "fast food franchise profit margin",
      "fast food franchise revenue",
      "how much cash to open a fast food franchise",
      "mcdonalds franchise",
      "wendys franchise",
      "popeyes franchise",
      "dairy queen franchise",
      "fast food franchise roi",
    ],
  });

  add({
    label: "Coffee Shop Franchise Guide",
    href: "/franchise/food/coffee-shop-franchise/",
    category: "Hub",
    keywords: [
      "coffee shop franchise",
      "coffee franchise cost",
      "dunkin franchise",
      "dutch bros franchise",
      "scooters coffee franchise",
      "7 brew franchise",
      "tim hortons franchise",
      "drive thru coffee franchise",
      "cheapest coffee franchise",
      "coffee franchise roi",
      "coffee franchise profit margin",
      "how much does a coffee franchise owner make",
      "coffee shop franchise investment",
    ],
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
      "best gym franchise",
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
      "best franchise for pilates",
      "best pilates franchise",
      "best pilates franchise 2026",
      "best pilates franchise to buy",
      "pilates franchise",
      "club pilates franchise",
      "club pilates franchise cost",
      "solidcore franchise",
      "pilates franchise cost",
      "pilates franchise ROI",
      "pilates studio franchise",
      "cheapest pilates franchise",
      "pilates franchise profit margin",
      "pilates franchise owner salary",
    ],
  });

  add({
    label: "Yoga Franchise Guide",
    href: "/franchise/fitness/yoga/",
    category: "Hub",
    keywords: [
      "top yoga franchises",
      "top yoga franchises 2026",
      "best yoga franchise",
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
      label: "Best Franchise for Pilates 2026",
      href: "/franchise/fitness/pilates/rankings/best-pilates-franchises-2026/",
      keywords: [
        "best franchise for pilates",
        "best pilates franchises",
        "best pilates franchises 2026",
        "club pilates franchise",
        "club pilates vs solidcore",
      ],
    },
    {
      label: "Top Yoga Franchises 2026",
      href: "/franchise/fitness/yoga/rankings/best-yoga-franchises-2026/",
      keywords: [
        "top yoga franchises",
        "top yoga franchises 2026",
        "best yoga franchises",
        "yogasix franchise",
        "hotworx franchise",
      ],
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
    label: "How We Track Business Profitability Metrics",
    href: "/methodology/",
    category: "Page",
    keywords: [
      "methodology",
      "data sources",
      "how we calculate",
      "how to track business profitability metrics",
      "cash flow vs profitability",
      "key financial performance indicators for small business",
    ],
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
