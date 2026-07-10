import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { hairSalonMarketAnchors, hairSalonReportSources } from "./shared-hair-salon-market-data";

export const reportMeta: ReportMeta = {
  slug: "best-recurring-revenue-beauty-businesses-2026",
  title: "Best Recurring Revenue Beauty Businesses 2026",
  subtitle:
    "Which beauty models build the most predictable recurring revenue in 2026 — memberships, packages, and pre-booking — and how hair salons can engineer recurring income into a project-based service.",
  description:
    "Best recurring revenue beauty businesses 2026: med spas and lash studios lead on memberships, while hair salons build recurring revenue through pre-booking and packages. Recurring-revenue rankings and playbook.",
  published: "July 2026",
  dataVintage: "2025–2026",
  readTime: "7 min",
  href: "/industries/beauty/hair-salon/reports/best-recurring-revenue-beauty-businesses-2026/",
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
          { label: "Salon Rebooking Rate", value: hairSalonMarketAnchors.rebookingRate },
          { label: "Top Recurring Format", value: "Med spa / lash (memberships)" },
          { label: "Retail Target", value: hairSalonMarketAnchors.retailAttachTarget },
          { label: "Chair Utilization Target", value: hairSalonMarketAnchors.chairUtilizationTarget },
        ],
      },
      {
        type: "paragraph",
        text: "Recurring revenue is the single biggest predictor of **valuation and cash-flow stability** in beauty. **Medical spas** and **lash/brow studios** lead the sector because their services demand a fixed maintenance cadence, making **memberships** and prepaid packages natural. **Hair salons** are inherently more project-based, but the best operators engineer recurring revenue through **pre-booking, packages, and retail replenishment** — lifting rebooking toward the **45–60%** range and stabilizing utilization.",
      },
      {
        type: "bullets",
        items: [
          "**Recurring thesis:** Predictable revenue (memberships, pre-booking) commands higher margins and higher sale multiples.",
          "**Salon reality:** Hair salons must *build* recurring revenue — it is not automatic like a lash-fill cadence.",
          "**Highest-ROI move:** Pre-booking at the chair is the closest thing to a membership a salon can implement immediately.",
        ],
      },
    ],
  },
  {
    id: "recurring-rankings",
    title: "2. Recurring-Revenue Rankings by Format",
    blocks: [
      {
        type: "table",
        headers: ["Beauty Format", "Recurring Strength", "Recurring Mechanism"],
        rows: [
          ["Medical Spa", "Very High", "Memberships + treatment plans (25–50% adoption)"],
          ["Lash & Brow Studio", "Very High", "2–4 week fill cadence; memberships"],
          ["Day Spa", "High", "Memberships & packages (25–45%)"],
          ["Nail Salon", "Moderate–High", "2–4 week rebooking cadence"],
          ["Barbershop", "Moderate–High", "2–4 week cuts; memberships (10–25%)"],
          ["Hair Salon", "Moderate", "Pre-booking + packages (45–60% rebooking)"],
          ["Mobile Salon", "Moderate", "Standing appointments; owner-dependent"],
        ],
      },
      {
        type: "paragraph",
        text: "**Hair salon takeaway:** Salons rank mid-pack because visit cadence (every 6–10 weeks) is longer and less automatic than a lash fill or nail rebook. The gap is closable: salons that **pre-book every client at checkout** and **sell service packages** convert one-off visits into a predictable revenue stream.",
      },
    ],
  },
  {
    id: "recurring-playbook",
    title: "3. The Salon Recurring-Revenue Playbook",
    blocks: [
      {
        type: "bullets",
        items: [
          "**Pre-book at the chair:** Schedule the next appointment before the client leaves — the highest-leverage recurring tactic in a salon.",
          "**Service packages:** Sell prepaid multi-visit color or treatment packages to lock in future visits and cash flow.",
          "**Membership / VIP tiers:** Offer a monthly plan (e.g., blowouts, treatments, retail discount) to create true subscription revenue.",
          "**Retail replenishment:** Time product recommendations to run out near the next visit, reinforcing the **10–15% retail** target and the rebook.",
          "**Recall & reminders:** Automated booking reminders and win-back messages recover lapsing clients before they churn.",
          "**Track cohorts:** Monitor rebooking rate and repeat-visit frequency as core KPIs, not afterthoughts.",
        ],
      },
      {
        type: "paragraph",
        text: "Recurring revenue directly protects **chair utilization** (target **65–80%**), which is the true driver of salon net margin. A salon that lifts rebooking from 40% to 60% often sees a larger profit gain than one chasing new-client traffic.",
      },
    ],
  },
  {
    id: "actionable-insights",
    title: "4. Actionable Insights for Operators",
    blocks: [
      {
        type: "paragraph",
        text: "Recurring revenue is engineered, not wished for. Make pre-booking mandatory at checkout, add packages or a membership tier, and align retail with the visit cycle. The payoff shows up in steadier cash flow, higher utilization, and a stronger valuation at exit.",
      },
      {
        type: "bullets",
        items: [
          "**Measure it:** Track rebooking and utilization with the [chair utilization calculator](/calculators/hair-salon-chair-utilization/).",
          "**Value it:** Predictable revenue lifts sale price — model it with the [hair salon valuation calculator](/calculators/hair-salon-valuation/).",
          "**Read next:** [Highest Margin Beauty Businesses 2026](/industries/beauty/hair-salon/reports/highest-margin-beauty-businesses-2026/) — how recurring revenue reshapes margin.",
        ],
      },
    ],
  },
];
