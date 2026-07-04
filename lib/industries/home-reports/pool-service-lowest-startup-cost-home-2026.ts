import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { homeServicesMarketAnchors, homeServicesReportSources } from "./shared-home-services-market-data";

export const reportMeta: ReportMeta = {
  slug: "pool-service-lowest-startup-cost-home-2026",
  title: "Lowest Startup Cost Home Services — Pool Service Industry Report",
  subtitle:
    "2026 U.S. home services startup cost analysis with a pool service deep-dive: launch capex benchmarks, capital efficiency by trade, and where pool service ranks among route-based home service models.",
  description:
    "Lowest startup cost home services in 2026: lawn care and pool service lead capital efficiency; pool service launches at $65K–$165K; rankings across pest control, HVAC, plumbing, and cleaning formats.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "7 min",
  href: "/industries/pool-service/reports/pool-service-lowest-startup-cost-home-2026/",
  sources: homeServicesReportSources,
};

export const reportSections: readonly ReportSection[] = [
  {
    id: "executive-summary",
    title: "1. Executive Summary",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "Pool Service Launch Range", value: homeServicesMarketAnchors.startupCostRange },
          { label: "Median Pool Service Launch", value: homeServicesMarketAnchors.medianStartupCost },
          { label: "Lawn Care Launch (comparison)", value: "$15K – $75K" },
          { label: "HVAC Company Launch (comparison)", value: "$50K – $250K" },
        ],
      },
      {
        type: "paragraph",
        text: "**Lowest startup cost home services** in 2026 cluster in **route-based and solo-operator formats** — lawn care, pool service, and residential cleaning — not full fleet HVAC or plumbing companies. Pool service launches at **$65K–$165K** (median **$95K**), placing it in the **low-to-moderate capital tier**: more than solo lawn mowing, but often **less than a full HVAC shop** with inventory, vans, and technician payroll. The pool service capital thesis is **moderate capex with strong recurring revenue density** — **$950K median revenue** on **$95K typical launch** delivers excellent payback when route density targets are met within **18–24 months**.",
      },
      {
        type: "bullets",
        items: [
          "**Capital thesis:** Pool service achieves **route-business revenue at moderate capex** — a service vehicle and cleaning equipment are the primary line items, not warehouse inventory.",
          "**Industry context:** Break-even often requires **80–120 residential accounts** at healthy monthly ticket sizes.",
          "**Honest ranking:** Pool service is **not** the absolute lowest startup cost trade; solo lawn care leads on capex, but pool service offers **stronger recurring revenue and margins**.",
        ],
      },
    ],
  },
  {
    id: "startup-cost-rankings",
    title: "2. Home Service Startup Cost Rankings",
    blocks: [
      {
        type: "table",
        headers: ["Trade", "Typical Launch Cost", "Key Cost Drivers", "Capital Efficiency"],
        rows: [
          ["Lawn Care (solo)", "$15K – $75K", "Mower, trailer, marketing", "Very high (low capex)"],
          ["Residential Cleaning", "$5K – $30K", "Supplies, insurance", "Very high"],
          ["Pool Service", "$65K – $165K", "Vehicle, equipment, chemicals", "High"],
          ["Pest Control", "$50K – $150K", "Vehicle, chemicals, licensing", "High"],
          ["HVAC (service)", "$50K – $250K", "Vans, tools, inventory", "Moderate"],
          ["Plumbing (service)", "$40K – $180K", "Van, tools, licensing", "Moderate–high"],
          ["Franchise Pool Route", "$80K – $200K", "Franchise fee + equipment", "Moderate"],
        ],
      },
      {
        type: "paragraph",
        text: "**Pool service positioning:** Mid-low on launch cost with **top-quartile revenue-per-dollar-invested**. Service vehicles represent **28–35%** of launch budget; working capital for route ramp-up is often underestimated at **15–22%** of total capex.",
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
          "**Service vehicle:** **$25K–$55K** for a wrapped work truck or van — the largest single line item for most launches.",
          "**Cleaning equipment:** **$8K–$20K** for vacuums, poles, brushes, and testing kits.",
          "**Chemical inventory:** **$3K–$8K** initial stock; bulk purchasing improves margins at scale.",
          "**Insurance & licensing:** **$7K–$20K** combined — liability, workers comp, and state pool contractor licenses vary by market.",
          "**Working capital:** Budget **$15K–$40K** for **6–12 months of route ramp** before reaching breakeven account density.",
          "**Franchise premium:** Pool Scouts, ASP, and regional franchises add **$25K–$60K** in fees vs. independent launches.",
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
        text: "Choose trade based on **available capital, local pool density, and recurring revenue appetite**. If capital is **<$50K**, consider lawn care or cleaning first. If capital is **$80K–$120K**, pool service offers strong MRR potential with independent or franchise paths. Always budget **12 months working capital** for route ramp-up.",
      },
      {
        type: "bullets",
        items: [
          "**Rule of thumb:** Total startup should support **12–18 months to cash-flow positive** without additional equity.",
          "**Compare formats:** [Pool service startup cost benchmarks](/industries/pool-service/#startup-costs) on the hub.",
          "**Model your launch:** Use the [startup cost calculator](/calculators/pool-service-startup-cost/) with your market assumptions.",
        ],
      },
    ],
  },
];
