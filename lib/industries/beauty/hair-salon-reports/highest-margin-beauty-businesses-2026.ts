import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { hairSalonMarketAnchors, hairSalonReportSources } from "./shared-hair-salon-market-data";

export const reportMeta: ReportMeta = {
  slug: "highest-margin-beauty-businesses-2026",
  title: "Highest Margin Beauty Businesses 2026",
  subtitle:
    "2026 net-margin rankings across the beauty and personal-care sector — from med spas and lash studios to hair salons, nail salons, and barbershops — with a hair salon profitability deep-dive.",
  description:
    "Highest margin beauty businesses in 2026: med spas lead net margins (15–30%), while hair salons run 8–15%. Full ranking of salon, spa, nail, lash, and barbershop economics with margin drivers.",
  published: "July 2026",
  dataVintage: "2025–2026",
  readTime: "7 min",
  href: "/industries/beauty/hair-salon/reports/highest-margin-beauty-businesses-2026/",
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
          { label: "Hair Salon Median Net Margin", value: hairSalonMarketAnchors.medianNetMargin },
          { label: "Top Beauty Format Net Margin", value: "25 – 35% (mobile / med spa)" },
          { label: "Hair Salon Top-Quartile Margin", value: hairSalonMarketAnchors.topQuartileNetMargin },
          { label: "Sector Payroll Load", value: hairSalonMarketAnchors.payrollShare },
      ],
      },
      {
        type: "paragraph",
        text: "The **highest margin beauty businesses** in 2026 are those that combine **high tickets** with **low fixed overhead** or **low labor intensity**. **Medical spas** lead on absolute margin quality (15–30% net) via premium injectable and device revenue, while **mobile/independent stylists** post the highest *percentage* margins (25–45%) by eliminating rent and staff. Traditional **hair salons** sit mid-pack at a **median 8–15% net**, constrained primarily by a **45–50% payroll load** — but top-quartile operators reach **16–22%** through pricing discipline, retail, and utilization.",
      },
      {
        type: "bullets",
        items: [
          "**Margin thesis:** Beauty margin is driven by **ticket size ÷ labor intensity** — the models that decouple revenue from stylist-hours win.",
          "**Hair salon context:** Median **8–15% net**; the biggest lever is payroll efficiency and retail attachment, not raw traffic.",
          "**Strategic takeaway:** Benchmark against **format peers**, not the whole sector — a salon P&L looks nothing like a med spa's.",
        ],
      },
    ],
  },
  {
    id: "margin-rankings",
    title: "2. Beauty Format Net-Margin Rankings",
    blocks: [
      {
        type: "table",
        headers: ["Beauty Format", "Net Margin", "Avg Ticket", "Primary Margin Driver"],
        rows: [
          ["Medical Spa", "15 – 30%", "$250 – $600", "High-ticket injectables & devices"],
          ["Mobile / Solo Stylist", "25 – 45%", "$55 – $120", "No rent or payroll overhead"],
          ["Lash / Brow Studio", "15 – 25%", "$80 – $200", "Low product cost, recurring fills"],
          ["Day Spa", "10 – 18%", "$120 – $250", "Membership + retail attach"],
          ["Barbershop", "12 – 20%", "$25 – $45", "Low product cost, fast turnover"],
          ["Nail Salon", "10 – 17%", "$30 – $60", "High frequency, teachable menu"],
          ["Hair Salon", "8 – 15%", `~${hairSalonMarketAnchors.averageTicket}`, "Color & retail; payroll-heavy"],
          ["Franchise Salon", "6 – 12%", "$22 – $45", "Volume, minus 6–12% royalties"],
        ],
      },
      {
        type: "paragraph",
        text: "**Hair salon positioning:** Ranks **below high-ticket and low-overhead formats** on net margin but offers a **larger, more stable revenue base** than most. The path to top-quartile margin runs through **higher-ticket color/treatment mix**, **retail attachment (10–15% of gross)**, and **payroll discipline** rather than chasing raw volume.",
      },
    ],
  },
  {
    id: "margin-drivers",
    title: "3. What Expands or Compresses Beauty Margin",
    blocks: [
      {
        type: "bullets",
        items: [
          "**Labor intensity:** Payroll is the swing factor — hair salons run **45–50%**, while device-led med spas and self-serve models run far lower as a share of revenue.",
          "**Product cost:** Color and treatment COGS (**10–14%** for salons) exceed barbershop product cost (**4–7%**); retail sales carry the highest gross margin in every format.",
          "**Rent:** Fixed rent (**10–16%** for salons) is eliminated by mobile and suite models, which is why they top the percentage-margin table.",
          "**Ticket mix:** Shifting a salon toward color, extensions, and scalp treatments adds margin points without adding chairs.",
          "**Royalties:** Franchise fees of **6–12%** compress net margin by **3–5 points** versus comparable independents.",
          "**Recurring revenue:** Memberships and prepaid packages (strong in spas/lash) smooth utilization and lift effective margin.",
        ],
      },
    ],
  },
  {
    id: "actionable-insights",
    title: "4. Actionable Insights for Salon Operators",
    blocks: [
      {
        type: "paragraph",
        text: "Hair salon owners chasing margin should **optimize mix and payroll before cutting quality**. Premium color, treatment bundles, and a disciplined retail program lift margin without expanding square footage. Compare your P&L against the **8–15% median** and identify whether payroll, product cost, or rent is the primary drag.",
      },
      {
        type: "bullets",
        items: [
          "**Target net margin:** **12–15%** for well-run independents; **16–22%** for premium-positioned salons with strong retail and utilization.",
          "**Benchmark yourself:** Use the [hair salon profit margin calculator](/calculators/hair-salon-profit-margin/) and review [hair salon profitability data](/industries/beauty/hair-salon/#profitability).",
          "**Read next:** [Best Recurring Revenue Beauty Businesses 2026](/industries/beauty/hair-salon/reports/best-recurring-revenue-beauty-businesses-2026/) — how memberships change the margin math.",
        ],
      },
    ],
  },
];
