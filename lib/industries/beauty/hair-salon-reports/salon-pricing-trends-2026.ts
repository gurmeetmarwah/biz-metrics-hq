import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { hairSalonMarketAnchors, hairSalonReportSources } from "./shared-hair-salon-market-data";

export const reportMeta: ReportMeta = {
  slug: "salon-pricing-trends-2026",
  title: "Salon Pricing Trends 2026",
  subtitle:
    "How hair salon service pricing, average tickets, and menu structure are shifting in 2026 — inflation-driven increases, premium tiering, and the pricing playbook that protects margin.",
  description:
    "2026 salon pricing trends: average ticket near $65, inflation-driven service price increases, premium color/treatment tiering, and a pricing playbook to protect hair salon margins.",
  published: "July 2026",
  dataVintage: "2025–2026",
  readTime: "7 min",
  href: "/industries/beauty/hair-salon/reports/salon-pricing-trends-2026/",
  sources: hairSalonReportSources,
};

export const reportSections: readonly ReportSection[] = [
  {
    id: "executive-summary",
    title: "1. Executive Summary",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "Average Ticket", value: hairSalonMarketAnchors.averageTicket },
          { label: "Color Share of Revenue", value: hairSalonMarketAnchors.hairColorShare },
          { label: "Payroll % of Revenue", value: hairSalonMarketAnchors.payrollShare },
          { label: "Retail Target", value: hairSalonMarketAnchors.retailAttachTarget },
        ],
      },
      {
        type: "paragraph",
        text: "Salon pricing in 2026 is defined by one imperative: **raise prices strategically to offset inflation without losing clients**. With rent, product, and wage costs climbing and payroll already at **45–50% of revenue**, salons that hold prices flat are quietly eroding margin. The most successful operators are moving from **flat menu pricing** to **tiered, stylist-level, and premium-service pricing** that aligns price with value and protects the bottom line.",
      },
      {
        type: "bullets",
        items: [
          "**Pricing thesis:** Inflation makes **regular, modest, well-communicated increases** essential — not optional.",
          "**Structure shift:** Salons are moving to **tiered pricing** (by stylist level and service complexity) to capture willingness-to-pay.",
          "**Margin protector:** Premium color and treatment tiers lift average ticket faster than base-cut increases.",
        ],
      },
    ],
  },
  {
    id: "pricing-benchmarks",
    title: "2. 2026 Service Pricing Benchmarks",
    blocks: [
      {
        type: "table",
        headers: ["Service", "Typical 2026 Range", "Pricing Trend"],
        rows: [
          ["Women's Cut & Style", "$45 – $95", "Rising with stylist tiering"],
          ["Men's Cut", "$25 – $55", "Rising; grooming premium"],
          ["Single-Process Color", "$75 – $150", "Rising fastest (product cost)"],
          ["Highlights / Balayage", "$120 – $300+", "Premium tier expansion"],
          ["Bond / Scalp Treatment", "$30 – $90 add-on", "New high-margin add-on"],
          ["Extensions", "$200 – $1,000+", "Specialist premium pricing"],
        ],
      },
      {
        type: "paragraph",
        text: "**Ticket dynamics:** The average salon ticket sits near **$65**, but the spread is widening as premium color and treatment services pull the top end higher. Salons that **bundle** (color + bond treatment + scalp therapy) are lifting effective tickets well above the base-cut price without discounting.",
      },
    ],
  },
  {
    id: "pricing-strategies",
    title: "3. Pricing Strategies That Protect Margin",
    blocks: [
      {
        type: "bullets",
        items: [
          "**Tiered stylist pricing:** Price by experience level (junior → master stylist) to reward top producers and capture willingness-to-pay.",
          "**Regular small increases:** Modest annual/semi-annual increases beat rare large jumps — clients tolerate them far better.",
          "**Service bundling:** Package color + treatment + scalp therapy to raise ticket and showcase premium value.",
          "**Add-on menu:** High-margin, low-cost add-ons (bond treatments, gloss, scalp therapy) lift ticket at the chair.",
          "**Retail alignment:** Recommend take-home products alongside services to hit the **10–15% retail target** — the highest-margin revenue.",
          "**Transparent communication:** Frame increases around quality, expertise, and premium products, not just cost pass-through.",
        ],
      },
      {
        type: "paragraph",
        text: "The mechanism matters: because payroll consumes **45–50%** of revenue, a **5–8% price increase** can translate into a disproportionate lift in net margin when utilization holds. Under-pricing, by contrast, quietly subsidizes clients at the owner's expense.",
      },
    ],
  },
  {
    id: "actionable-insights",
    title: "4. Actionable Insights for Operators",
    blocks: [
      {
        type: "paragraph",
        text: "Treat pricing as an ongoing discipline, not a once-a-year afterthought. Audit your menu against 2026 benchmarks, introduce tiering, and pair every service with an add-on and retail recommendation to defend margin against inflation.",
      },
      {
        type: "bullets",
        items: [
          "**Model the impact:** Use the [hair salon profit margin calculator](/calculators/hair-salon-profit-margin/) to see how a price increase flows to net margin.",
          "**Right-size payroll:** Check your [payroll percentage](/calculators/hair-salon-payroll-percentage/) against the 45–50% benchmark before adjusting prices.",
          "**Read next:** [U.S. Hair Salon Industry Report 2026](/industries/beauty/hair-salon/reports/us-hair-salon-industry-report-2026/) for the full market context behind these pricing shifts.",
        ],
      },
    ],
  },
];
