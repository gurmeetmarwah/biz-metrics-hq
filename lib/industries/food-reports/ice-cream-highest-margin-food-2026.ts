import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { iceCreamMarketAnchors, iceCreamReportSources } from "./shared-ice-cream-market-data";

export const reportMeta: ReportMeta = {
  slug: "ice-cream-highest-margin-food-2026",
  title: "Highest Margin Food Businesses — Ice Cream Industry Report",
  subtitle:
    "2026 U.S. food profitability rankings with an ice cream shop deep-dive: net margin benchmarks, premium dessert economics, beverage attach rates, and why specialty formats lead food retail margins.",
  description:
    "Highest margin food businesses in 2026: bubble tea and dessert cafe formats lead net margins; ice cream shops median 17% net; rankings across frozen yogurt, coffee, bakery, food truck, and dessert cafe economics.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "6 min",
  href: "/industries/ice-cream-shop/reports/ice-cream-highest-margin-food-2026/",
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
          { label: "Ice Cream Shop Median Net Margin", value: iceCreamMarketAnchors.medianNetMargin },
          { label: "Top Food Format Net Margin Range", value: "18 – 26%" },
          { label: "Ice Cream Shop Median Revenue", value: iceCreamMarketAnchors.medianAnnualRevenue },
          { label: "Ice Cream Gross Margin Range", value: iceCreamMarketAnchors.grossMarginRange },
        ],
      },
      {
        type: "paragraph",
        text: "**Highest margin food businesses** in 2026 are not the largest chains — they are **specialty beverage and premium dessert formats** with high attach rates and controlled labor models. Within the dessert and snack-bar segment, **bubble tea** and **dessert cafes** often lead net margins at **18–26%**, while **ice cream shops** sit at a healthy **median 17%** with top performers reaching **22–28%** through upselling, catering, and efficient peak-season labor. Food trucks and bakeries trail on margin due to mobility costs, waste, and production complexity — though well-run trucks can match ice cream economics on a per-operator basis.",
      },
      {
        type: "bullets",
        items: [
          "**Margin thesis:** Premium ticket builders (toppings, beverages, cakes) and **low spoilage** relative to full-service restaurants drive food retail margins.",
          "**Ice cream context:** Median **17% net margin** with **55–68% gross margin**; top shops reach **22–28%** via milkshake attach and catering revenue.",
          "**Strategic implication:** Operators should benchmark margin against **format peers**, not restaurant P&L — food cost, labor, and rent ratios differ materially.",
        ],
      },
    ],
  },
  {
    id: "margin-rankings",
    title: "2. Food Format Margin Rankings",
    blocks: [
      {
        type: "table",
        headers: ["Format", "Gross Margin", "Net Margin", "Primary Margin Driver"],
        rows: [
          ["Bubble Tea", "62 – 72%", "18 – 26%", "High beverage markup; compact footprint"],
          ["Dessert Cafe", "58 – 70%", "17 – 24%", "Premium positioning; multi-category attach"],
          ["Coffee Shop", "55 – 68%", "14 – 22%", "Beverage-led; pastry cross-sell"],
          ["Ice Cream Shop", "55 – 68%", "11 – 20%", "Upsells (shakes, sundaes); seasonal labor leverage"],
          ["Frozen Yogurt", "52 – 65%", "11 – 18%", "Self-serve labor savings; topping margin"],
          ["Bakery", "50 – 62%", "10 – 18%", "Production waste; morning/daypart concentration"],
          ["Food Truck", "48 – 60%", "10 – 20%", "Low rent; variable by commissary and route"],
        ],
      },
      {
        type: "paragraph",
        text: "**Ice cream positioning:** Ranks **mid-pack on net margin** but offers **strong gross margin** on core scoops and shakes. Shops that push **milkshakes (18% revenue share)** and **sundaes (12%)** add **3–5 margin points** without proportional labor increases. Seasonal labor management is the primary margin risk — overstaffing in winter or understaffing in July both compress profitability.",
      },
    ],
  },
  {
    id: "margin-drivers",
    title: "3. What Compresses or Expands Margin",
    blocks: [
      {
        type: "bullets",
        items: [
          "**Food cost:** Ice cream shops target **24–32%** COGS; bubble tea runs **22–28%**; bakeries face **28–38%** with higher waste.",
          "**Labor:** Ice cream labor runs **22–30%** of revenue — seasonal hiring is critical. Self-serve frozen yogurt can operate at **18–24%** labor.",
          "**Rent:** Healthy food retail targets **8–12%** rent; food trucks eliminate fixed rent but add commissary and fuel costs.",
          "**Ticket upsell:** Moving average ticket from **$6.50 to $9+** via shakes and toppings can add **2–4 pts net margin** at constant traffic.",
          "**Seasonality tax:** Ice cream and frozen yogurt carry **high seasonality** — winter revenue dips require off-season cost discipline or supplemental revenue (cakes, catering, retail pints).",
          "**Franchise fees:** Royalties of **5–8%** compress net margin **3–5 pts** vs. independent operators with strong local brands.",
        ],
      },
    ],
  },
  {
    id: "actionable-insights",
    title: "4. Actionable Insights for Operators",
    blocks: [
      {
        type: "paragraph",
        text: "Ice cream operators chasing margin should **optimize the menu mix** before cutting quality. Premium scoops, shake programs, and event catering lift ticket and margin without expanding square footage. Compare your P&L against the **17% median** and identify whether food cost, labor, or rent is the primary drag.",
      },
      {
        type: "bullets",
        items: [
          "**Target net margin:** **17–21%** for median independents; **22–28%** for premium-positioned shops with strong upsell programs.",
          "**Benchmark yourself:** Compare against [ice cream profit margin data](/industries/ice-cream-shop/#profitability) and run the [profit margin calculator](/calculators/ice-cream-shop-profit-margin/).",
          "**Read next:** [Lowest Startup Cost Food Businesses](/industries/ice-cream-shop/reports/ice-cream-lowest-startup-cost-food-2026/) — margin vs. capital efficiency tradeoffs.",
        ],
      },
    ],
  },
];
