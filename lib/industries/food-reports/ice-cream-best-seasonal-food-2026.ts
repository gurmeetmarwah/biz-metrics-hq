import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { iceCreamMarketAnchors, iceCreamReportSources } from "./shared-ice-cream-market-data";

export const reportMeta: ReportMeta = {
  slug: "ice-cream-best-seasonal-food-2026",
  title: "Best Seasonal Food Businesses — Ice Cream Industry Report",
  subtitle:
    "2026 U.S. seasonal food business analysis with an ice cream shop deep-dive: peak/off-peak revenue patterns, cash flow management, and how seasonal operators rank against year-round formats.",
  description:
    "Best seasonal food businesses in 2026: ice cream and frozen yogurt lead peak-season revenue density; rankings across food truck, bakery, coffee shop, bubble tea, and dessert cafe seasonality profiles.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "6 min",
  href: "/industries/ice-cream-shop/reports/ice-cream-best-seasonal-food-2026/",
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
          { label: "Ice Cream Summer Revenue Share", value: iceCreamMarketAnchors.peakSeasonRevenueShare },
          { label: "Peak Month", value: iceCreamMarketAnchors.peakMonth },
          { label: "Slowest Month", value: iceCreamMarketAnchors.slowestMonth },
          { label: "Off-Season Revenue Share", value: iceCreamMarketAnchors.offSeasonRevenueShare },
        ],
      },
      {
        type: "paragraph",
        text: "**Seasonal food businesses** in 2026 span a spectrum from **highly seasonal** (ice cream, frozen yogurt) to **year-round stable** (coffee shop, bakery morning daypart). Ice cream shops generate **38–45% of annual revenue in summer**, with **July alone representing 14–18%** of the year. **January** often delivers only **4–7%**. Among seasonal formats, ice cream and frozen yogurt offer the **highest peak-season revenue density** — but require the most disciplined off-season cash management. Food trucks share seasonality risk; coffee shops and bakeries provide counter-seasonal stability.",
      },
      {
        type: "bullets",
        items: [
          "**Seasonality thesis:** High seasonality is not inherently bad — it concentrates cash flow and enables lean winter operations when managed proactively.",
          "**Ice cream context:** Median shop needs **$20K–$60K working capital** to bridge October–March in temperate climates.",
          "**Strategic implication:** Seasonal operators must build **off-season revenue pillars** (cakes, catering, retail pints) or accept winter closure economics.",
        ],
      },
    ],
  },
  {
    id: "seasonal-rankings",
    title: "2. Food Format Seasonality Rankings",
    blocks: [
      {
        type: "table",
        headers: ["Format", "Seasonality Rating", "Peak Period", "Off-Season Strategy"],
        rows: [
          ["Ice Cream Shop", "Very High (5/5)", "May – August", "Cakes, catering, retail pints"],
          ["Frozen Yogurt", "Very High (5/5)", "May – August", "Self-serve; lean winter staffing"],
          ["Food Truck", "High (4/5)", "Spring – Fall", "Route shift; event catering"],
          ["Bubble Tea", "Moderate (3/5)", "Summer + school year", "Indoor malls; loyalty programs"],
          ["Dessert Cafe", "Moderate (3/5)", "Evenings + holidays", "Multi-category; dine-in"],
          ["Bakery", "Low (2/5)", "Holidays + mornings", "Wholesale; corporate accounts"],
          ["Coffee Shop", "Low (2/5)", "Year-round AM peak", "Seasonal LTO beverages"],
        ],
      },
      {
        type: "paragraph",
        text: "**Ice cream seasonal advantage:** When weather cooperates, peak-month revenue density exceeds **most food formats** — a well-located shop can generate **$90K–$130K in July** alone. The tradeoff is **winter survival math**: operators in Minnesota face different seasonality than operators in Florida or tourist corridors.",
      },
    ],
  },
  {
    id: "seasonal-drivers",
    title: "3. What Drives Seasonal Performance",
    blocks: [
      {
        type: "bullets",
        items: [
          "**Climate & geography:** Warm-climate and tourist markets flatten seasonality; temperate inland cities see the sharpest summer/winter split.",
          "**Product mix:** Ice cream cakes add **8–14% revenue share** with year-round birthday demand — the primary off-season stabilizer.",
          "**Catering & events:** Corporate and wedding catering can contribute **10–18%** of annual revenue for proactive operators.",
          "**Retail pints:** Take-home packs extend brand beyond the visit — **5–10% revenue share** with higher winter potential.",
          "**Labor flexibility:** Seasonal hiring models (college students, summer staff) reduce fixed labor cost vs. year-round formats.",
          "**Competitive dynamics:** Coffee shops capture winter foot traffic that ice cream cedes — complementary, not directly competitive, in most markets.",
        ],
      },
    ],
  },
  {
    id: "actionable-insights",
    title: "4. Actionable Insights for Seasonal Operators",
    blocks: [
      {
        type: "paragraph",
        text: "Ice cream operators should **model monthly cash flow**, not just annual P&L. Build a **6-month winter reserve** from peak-season profits. Invest in cake programs and catering before October. Consider **reduced winter hours** rather than full staffing at summer levels.",
      },
      {
        type: "bullets",
        items: [
          "**Cash reserve target:** **$20K–$60K** working capital for temperate-climate independents.",
          "**Benchmark seasonality:** See [seasonal performance data](/industries/ice-cream-shop/#seasonal-performance) on the hub.",
          "**Read next:** [Highest Margin Food Businesses](/industries/ice-cream-shop/reports/ice-cream-highest-margin-food-2026/) — margin levers during peak months.",
        ],
      },
    ],
  },
];
