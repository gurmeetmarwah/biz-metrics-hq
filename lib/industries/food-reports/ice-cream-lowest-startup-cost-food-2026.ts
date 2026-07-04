import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { iceCreamMarketAnchors, iceCreamReportSources } from "./shared-ice-cream-market-data";

export const reportMeta: ReportMeta = {
  slug: "ice-cream-lowest-startup-cost-food-2026",
  title: "Lowest Startup Cost Food Businesses — Ice Cream Industry Report",
  subtitle:
    "2026 U.S. food startup cost analysis with an ice cream shop deep-dive: launch capex benchmarks, capital efficiency by format, and where ice cream ranks among dessert and beverage concepts.",
  description:
    "Lowest startup cost food businesses in 2026: food trucks and bubble tea lead capital efficiency; ice cream shops launch at $110K–$320K; rankings across bakery, coffee shop, dessert cafe, and frozen yogurt formats.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "6 min",
  href: "/industries/ice-cream-shop/reports/ice-cream-lowest-startup-cost-food-2026/",
  sources: iceCreamReportSources,
};

export const reportSections: readonly ReportSection[] = [
  {
    id: "executive-summary",
    title: "1. Executive Summary",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "Ice Cream Shop Launch Range", value: iceCreamMarketAnchors.startupCostRange },
          { label: "Median Ice Cream Shop Launch", value: iceCreamMarketAnchors.medianStartupCost },
          { label: "Food Truck Launch Range", value: "$60K – $180K" },
          { label: "Full Bakery Buildout (comparison)", value: "$200K – $450K" },
        ],
      },
      {
        type: "paragraph",
        text: "**Lowest startup cost food businesses** in 2026 cluster in **mobile and compact-footprint formats** — food trucks, bubble tea kiosks, and small coffee counters — not full buildout dessert concepts. Ice cream shops launch at **$110K–$320K** (median **$185K**), placing them in the **middle capital tier**: more than a food truck or bubble tea kiosk, but often **less than a full bakery or dessert cafe** with commercial kitchen requirements. The ice cream capital thesis is **moderate capex with strong peak-season revenue density** — **$720K median revenue** on **$185K typical launch** delivers solid payback when seasonality is managed.",
      },
      {
        type: "bullets",
        items: [
          "**Capital thesis:** Ice cream achieves **dessert-retail revenue at moderate capex** — equipment and freezers are the primary line items, not full commercial kitchens.",
          "**Industry context:** Break-even often requires **200–280 daily customers** at healthy ticket sizes during peak months.",
          "**Honest ranking:** Ice cream is **not** the lowest startup cost format; food trucks and bubble tea kiosks lead on absolute capex.",
        ],
      },
    ],
  },
  {
    id: "startup-cost-rankings",
    title: "2. Food Format Startup Cost Rankings",
    blocks: [
      {
        type: "table",
        headers: ["Format", "Typical Launch Cost", "Sq Ft / Model", "Key Cost Drivers"],
        rows: [
          ["Food Truck", "$60K – $180K", "Mobile", "Truck, commissary, permits, wrap"],
          ["Bubble Tea (kiosk)", "$80K – $200K", "400 – 1,000", "Equipment, buildout, inventory"],
          ["Coffee Shop (small)", "$100K – $250K", "800 – 1,500", "Espresso equipment, seating"],
          ["Ice Cream Shop", "$110K – $320K", "1,000 – 2,500", "Freezers, soft-serve, leasehold TI"],
          ["Frozen Yogurt", "$120K – $300K", "1,200 – 2,500", "Self-serve machines, toppings bar"],
          ["Bakery", "$150K – $450K", "1,500 – 3,000", "Ovens, production, display cases"],
          ["Dessert Cafe", "$180K – $400K", "1,500 – 3,500", "Full kitchen, seating, multi-category"],
        ],
      },
      {
        type: "paragraph",
        text: "**Ice cream positioning:** Mid-pack on launch cost but **strong revenue-per-dollar-invested** when location and seasonality align. Equipment and freezers represent **28–35%** of launch budget; working capital for off-season months is often underestimated at **15–22%** of total capex.",
      },
    ],
  },
  {
    id: "capital-drivers",
    title: "3. Where the Capital Goes",
    blocks: [
      {
        type: "bullets",
        items: [
          "**Equipment & freezers:** Ice cream shops allocate **$35K–$95K** to soft-serve machines, dipping cabinets, and batch freezers — the largest single line item after lease improvements.",
          "**Lease & buildout:** **$25K–$80K** for flooring, HVAC, electrical, and customer-facing finishes; first/last/deposit adds **3–6 months rent** upfront.",
          "**Working capital:** Budget **$20K–$60K** for off-season payroll and inventory — January revenue may be only **4–7%** of annual.",
          "**Franchise premium:** Cold Stone, Baskin-Robbins, and regional franchises add **$30K–$80K** in fees and mandated buildout standards vs. independent concepts.",
          "**Food truck tradeoff:** Lower upfront capex but **commissary fees ($1K–$3K/mo)**, permit variability, and weather-dependent revenue reduce capital efficiency predictability.",
          "**Bubble tea efficiency:** Compact footprint and minimal seating reduce TI — but competition density in urban markets raises marketing spend.",
        ],
      },
    ],
  },
  {
    id: "actionable-insights",
    title: "4. Actionable Insights for New Operators",
    blocks: [
      {
        type: "paragraph",
        text: "Choose format based on **available capital, local competition, and seasonality tolerance**. If capital is **<$120K**, consider food truck or bubble tea kiosk first. If capital is **$150K–$250K**, ice cream offers strong revenue potential with franchise or independent paths. Always budget **6+ months working capital** for seasonal formats.",
      },
      {
        type: "bullets",
        items: [
          "**Rule of thumb:** Total startup should support **12 months to cash-flow positive** without additional equity — critical for ice cream given winter dips.",
          "**Compare formats:** [Ice cream startup cost benchmarks](/industries/ice-cream-shop/#startup-costs) on the hub.",
          "**Model your launch:** Use the [startup cost calculator](/calculators/ice-cream-shop-startup-cost/) with your market assumptions.",
        ],
      },
    ],
  },
];
