import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { homeServicesMarketAnchors, homeServicesReportSources } from "./shared-home-services-market-data";

export const reportMeta: ReportMeta = {
  slug: "pool-service-best-recurring-revenue-home-2026",
  title: "Best Recurring Revenue Home Services — Pool Service Industry Report",
  subtitle:
    "2026 U.S. home services recurring revenue analysis with a pool service deep-dive: monthly contract MRR, autopay economics, route retention, and why pool operators lead subscription home services.",
  description:
    "Best recurring revenue home services in 2026: pool service and pest control lead with 75–85% recurring revenue; $58K median MRR; autopay models, churn reduction, and subscription economics for route operators.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "7 min",
  href: "/industries/pool-service/reports/pool-service-best-recurring-revenue-home-2026/",
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
          { label: "Pool Service Recurring Revenue %", value: "75 – 85%" },
          { label: "Median Pool Service MRR", value: homeServicesMarketAnchors.medianMrr },
          { label: "Target Annual Customer Retention", value: "85 – 92%" },
          { label: "Autopay Adoption (top operators)", value: "88 – 95%" },
        ],
      },
      {
        type: "paragraph",
        text: "**Best recurring revenue home services** in 2026 are defined by **monthly service contracts** and **autopay billing density**, not one-time job volume alone. Within the **$657 billion** home services market, **pool service** and **pest control** rank among the **top tier of recurring revenue models** — often deriving **75–85% of revenue** from weekly or biweekly maintenance agreements. This compares to **40–60%** at HVAC service companies and **50–70%** at lawn care operators. " + homeServicesMarketAnchors.recurringRevenueFocus + ".",
      },
      {
        type: "bullets",
        items: [
          "**Recurring thesis:** Pool customers pay for **ongoing water quality and equipment care** — natural subscription fit amplified by chemical balancing requirements and seasonal openings/closings.",
          "**Benchmark:** Median **" + homeServicesMarketAnchors.medianMrr + "** MRR and **" + homeServicesMarketAnchors.medianRecurringRevenuePct + "** recurring revenue share; MRR health is measured by **autopay %**, **annual churn**, and **contract renewal rates**.",
          "**Investor view:** High-MRR pool routes with **85%+ retention** command **premium SDE multiples (3.5×–4.5×)** — recurring revenue plus route density is the primary asset.",
        ],
      },
    ],
  },
  {
    id: "recurring-landscape",
    title: "2. Home Services Recurring Revenue Landscape",
    blocks: [
      {
        type: "paragraph",
        text: "The home services market masks a critical split: **dispatch-heavy emergency trades** skew transactional, while **route-based maintenance operators** skew recurring. Pool service's weekly cleaning model — **$95–$165/mo per residential customer** — correlates with subscription economics: customers expect ongoing service, not one-time visits.",
      },
      {
        type: "table",
        headers: ["Trade", "Recurring Revenue %", "Primary Billing Model", "Churn Profile"],
        rows: [
          ["Pool Service (contract-forward)", "75 – 85%", "Monthly autopay", "8 – 15% annual"],
          ["Pest Control", "80 – 90%", "Quarterly/annual contracts", "10 – 18% annual"],
          ["Lawn Care", "60 – 75%", "Seasonal recurring", "15 – 25% annual"],
          ["HVAC Maintenance", "40 – 60%", "Annual service plans", "20 – 30% annual"],
          ["Plumbing (service)", "25 – 45%", "Job-based + maintenance", "High transactional"],
        ],
      },
      {
        type: "paragraph",
        text: "**Revenue stability:** Pool service MRR per company is rising as operators migrate from promo-dependent acquisition toward **contract-first onboarding** with **12-month agreements** and **autopay enrollment at signup**.",
      },
    ],
  },
  {
    id: "customer-behavior",
    title: "3. Customer Behavior & Retention Economics",
    blocks: [
      {
        type: "paragraph",
        text: "Recurring revenue quality depends on **why** customers stay. Pool owners with in-ground pools in Sun Belt markets maintain year-round service — **$2,800–$6,500 customer LTV** over **3–5 year average tenure**. Canceling means finding a new provider, rebalancing chemicals, and risking equipment damage — natural switching costs beyond contract terms.",
      },
      {
        type: "bullets",
        items: [
          "**Retention drivers:** Consistent service quality, proactive communication, and bundled repair offerings keep churn at **8–15% annual** for top operators.",
          "**Autopay impact:** Operators with **90%+ autopay** see **2–4 pts lower churn** vs. invoice-based billing.",
          "**Commercial contracts:** HOA and apartment accounts offer **multi-year terms** and **lower churn** than residential — a key MRR stability lever.",
          "**MRR leakage:** Failed payment recovery and seasonal cancellations (pool closings) are the primary MRR risks in temperate climates.",
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
        text: "Pool service operators building recurring revenue should **enforce autopay at contract signing**, **bundle openings/closings into annual agreements**, and **track MRR churn monthly** — not just customer count. MRR quality matters more than gross contract volume for valuation.",
      },
      {
        type: "bullets",
        items: [
          "**Target recurring %:** **78–85%** for median operators; **85%+** for acquisition-ready companies.",
          "**Benchmark yourself:** Review [recurring revenue metrics](/industries/pool-service/#recurring-revenue) and model MRR with the [MRR calculator](/calculators/pool-service-monthly-recurring-revenue/).",
          "**Read next:** [Highest Valued Home Services](/industries/pool-service/reports/pool-service-highest-valued-home-2026/) — MRR quality directly drives SDE multiples.",
        ],
      },
    ],
  },
];
