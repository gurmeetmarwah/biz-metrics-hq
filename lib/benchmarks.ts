export type BenchmarkMetric = {
  label: string;
  range: string;
  median: string;
  definition: string;
};

export type FeaturedBenchmark = {
  industry: string;
  title: string;
  href: string;
  dataVintage: string;
  sampleSize: string;
  geography: string;
  metrics: {
    revenue: BenchmarkMetric;
    margin: BenchmarkMetric;
    ownerSalary: BenchmarkMetric;
    valuation: BenchmarkMetric;
  };
};

export const featuredBenchmarks: FeaturedBenchmark[] = [
  {
    industry: "HVAC",
    title: "HVAC Industry Economics",
    href: "/industries/hvac/",
    dataVintage: "2025–2026",
    sampleSize: "420+ businesses",
    geography: "United States",
    metrics: {
      revenue: {
        label: "Revenue",
        range: "$1.2M – $3.8M",
        median: "$2.4M",
        definition: "Annual gross revenue for owner-operated HVAC companies with 5–25 employees.",
      },
      margin: {
        label: "Net Margin",
        range: "8% – 16%",
        median: "12%",
        definition: "Net profit after owner salary, before taxes. Excludes pass-through entities with non-standard comp.",
      },
      ownerSalary: {
        label: "Owner Salary",
        range: "$95k – $185k",
        median: "$145k",
        definition: "W-2 wages, guaranteed payments, or owner draws normalized to annual salary.",
      },
      valuation: {
        label: "Valuation",
        range: "2.4x – 3.8x SDE",
        median: "3.1x SDE",
        definition: "Asking-price multiple on Seller's Discretionary Earnings for businesses under $5M revenue.",
      },
    },
  },
  {
    industry: "Restaurant",
    title: "Restaurant Industry Economics",
    href: "/industries/restaurant/",
    dataVintage: "2025–2026",
    sampleSize: "680+ businesses",
    geography: "United States",
    metrics: {
      revenue: {
        label: "Revenue",
        range: "$650k – $1.8M",
        median: "$1.1M",
        definition: "Annual gross sales for single-unit, full-service or fast-casual restaurants.",
      },
      margin: {
        label: "Net Margin",
        range: "3% – 9%",
        median: "6%",
        definition: "Net profit after food, labor, rent, and owner compensation.",
      },
      ownerSalary: {
        label: "Owner Salary",
        range: "$48k – $98k",
        median: "$72k",
        definition: "Owner-operator take-home pay including reported salary and distributions.",
      },
      valuation: {
        label: "Valuation",
        range: "1.8x – 3.0x SDE",
        median: "2.4x SDE",
        definition: "SDE multiple for independent restaurants; franchise and multi-unit deals excluded.",
      },
    },
  },
  {
    industry: "Dental",
    title: "Dental Practice Economics",
    href: "/industries/healthcare/dental-practice/",
    dataVintage: "2025–2026",
    sampleSize: "310+ practices",
    geography: "United States",
    metrics: {
      revenue: {
        label: "Revenue",
        range: "$1.2M – $2.6M",
        median: "$1.8M",
        definition: "Annual collections for general dentistry practices with 1–3 operatories.",
      },
      margin: {
        label: "Net Margin",
        range: "14% – 24%",
        median: "18%",
        definition: "Net income after clinical staff, supplies, lab fees, and owner compensation.",
      },
      ownerSalary: {
        label: "Owner Salary",
        range: "$220k – $360k",
        median: "$285k",
        definition: "Combined clinical production pay and owner distributions for practicing owners.",
      },
      valuation: {
        label: "Valuation",
        range: "3.2x – 4.5x SDE",
        median: "3.8x SDE",
        definition: "SDE multiple for solo and small-group general practices; specialty practices vary.",
      },
    },
  },
  {
    industry: "Gym",
    title: "Gym Industry Economics",
    href: "/industries/gym/",
    dataVintage: "2025–2026",
    sampleSize: "290+ businesses",
    geography: "United States",
    metrics: {
      revenue: {
        label: "Revenue",
        range: "$520k – $1.3M",
        median: "$890k",
        definition: "Annual revenue for independent gyms and boutique fitness studios.",
      },
      margin: {
        label: "Net Margin",
        range: "10% – 18%",
        median: "14%",
        definition: "Net profit after rent, equipment, payroll, and marketing.",
      },
      ownerSalary: {
        label: "Owner Salary",
        range: "$65k – $130k",
        median: "$95k",
        definition: "Owner-operator compensation including salary and profit distributions.",
      },
      valuation: {
        label: "Valuation",
        range: "2.2x – 3.6x SDE",
        median: "2.9x SDE",
        definition: "SDE multiple for membership-based gyms; franchise resale values excluded.",
      },
    },
  },
];
