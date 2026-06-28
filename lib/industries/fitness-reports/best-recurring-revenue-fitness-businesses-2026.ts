import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";

export const reportMeta: ReportMeta = {
  slug: "best-recurring-revenue-fitness-businesses-2026",
  title: "Best Recurring Revenue Fitness Businesses",
  subtitle:
    "2026 rankings for subscription-heavy fitness models — MRR quality, membership economics, churn benchmarks, and which formats build the most durable recurring revenue.",
  description:
    "Best recurring revenue fitness businesses in 2026: gyms, CrossFit boxes, Pilates studios, MRR benchmarks (~$62K/mo median), HFA 66.4% retention, and subscription model comparison.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "5 min",
  href: "/industries/gym/reports/best-recurring-revenue-fitness-businesses-2026/",
  sources: [
    "Health & Fitness Association (HFA) — 2025 Benchmarking Report",
    "HFA — average revenue per member & dues data (2024)",
    "BizMetricsHQ — gym membership economics composite",
    "Statista — U.S. health club subscription trends",
  ],
};

export const reportSections: readonly ReportSection[] = [
  {
    id: "executive-summary",
    title: "1. Executive Summary",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "HFA Annual Member Retention (U.S.)", value: "66.4%" },
          { label: "Mean / Median Monthly Dues (HFA)", value: "$69 / $38" },
          { label: "Membership Share of Gym Revenue", value: "~62%" },
          { label: "Median MRR (~$1.2M gym, est.)", value: "~$62K/mo" },
        ],
      },
      {
        type: "paragraph",
        text: "**Best recurring revenue fitness businesses** treat membership as **infrastructure** — not a side product. The [Health & Fitness Association (HFA)](https://www.healthandfitness.org/) reports **66.4% annual member retention** across U.S. clubs, **$69 mean / $38 median monthly dues**, and **~$517 average annual revenue per member**. For a median **~$1.2M independent gym** with **~62% membership revenue share**, that implies **~$62K/month in membership MRR** — the metric buyers and operators use to underwrite stability.",
      },
      {
        type: "bullets",
        items: [
          "**Recurring revenue leaders:** Full-service gyms, CrossFit boxes, unlimited-class boutiques, and corporate-network HVLP clubs.",
          "**Weaker recurring models:** Session-pack studios without autopay conversion, class-card businesses, and drop-in-only formats.",
          "**2026 trend:** Hybrid digital + in-person bundles increase **visit frequency** and reduce churn vs. gym-only or app-only.",
        ],
      },
    ],
  },
  {
    id: "recurring-revenue-rankings",
    title: "2. Recurring Revenue Format Rankings",
    blocks: [
      {
        type: "table",
        headers: ["Format", "Recurring Revenue %", "Typical Billing", "Retention Profile"],
        rows: [
          ["HVLP / Budget Gym", "85 – 95%", "Monthly autopay", "Price-sensitive; higher churn at low engagement"],
          ["CrossFit Affiliate", "80 – 90%", "Monthly unlimited", "Strong community; coach relationship drives retention"],
          ["Full-Service Independent", "60 – 75%", "Monthly + annual options", "Moderate; PT upsell extends LTV"],
          ["Pilates / Yoga Studio", "75 – 90%", "Unlimited or 8-pack autopay", "High loyalty in core cohort"],
          ["HIIT / Cycling Boutique", "70 – 85%", "Monthly unlimited", "Class variety and community critical"],
          ["Personal Training Studio", "40 – 60%", "Session packages + memberships", "Lower subscription %; higher ARPU"],
        ],
      },
      {
        type: "paragraph",
        text: "**Gyms and CrossFit boxes** rank highest on **absolute MRR scale** — more members × recurring dues. **Boutiques** rank highest on **recurring revenue purity** (fewer drop-in dependencies) and **revenue per member**, often **$150–$250/mo** unlimited vs. **$38–$69** at mass-market clubs. The best models combine **high recurring %** with **low involuntary churn** (failed payments) via modern billing platforms.",
      },
    ],
  },
  {
    id: "membership-economics",
    title: "3. Membership Economics That Matter",
    blocks: [
      {
        type: "bullets",
        items: [
          "**MRR formula:** Annual Revenue × Membership Revenue Share ÷ 12. Track monthly — not just annual snapshots.",
          "**Implied churn:** **66.4%** annual retention (HFA) ≈ **3.4% monthly churn** in steady state; many clubs report **3–8%** depending on format.",
          "**LTV benchmark:** **$500–$900** for mid-market independents; boutiques with **$180/mo** dues and **18-month** lifespan exceed **$3,000**.",
          "**CAC payback:** Target **≤3 months** of member revenue to recover acquisition cost; referral channels often **<$75 CAC** vs. **$150–$249+** paid digital.",
          "**Corporate & insurance channels:** SilverSneakers, Active&Fit, and employer stipends add **low-CAC recurring volume** — increasingly material for HVLP and mid-tier chains.",
        ],
      },
      {
        type: "paragraph",
        text: "**Hybrid engagement:** Operators bundling app content, wearables sync, and in-person access report **higher monthly visit frequency** — a leading indicator of retention. Recurring revenue without engagement still churns; the best businesses pair **autopay** with **90-day onboarding** programs.",
      },
    ],
  },
  {
    id: "actionable-insights",
    title: "4. Actionable Insights for Operators",
    blocks: [
      {
        type: "paragraph",
        text: "To improve recurring revenue quality: migrate session buyers to **autopay unlimited**, implement **failed-payment recovery** (recovers **15–25%** of at-risk members), and segment churn risk by **last visit date**. Model growth with the [membership growth calculator](/calculators/gym-membership-growth/) and [churn rate calculator](/calculators/gym-churn-rate/).",
      },
      {
        type: "bullets",
        items: [
          "**Target:** **≥65%** annual retention (HFA median) with path to **70%+** for premium valuation.",
          "**Benchmark:** [Membership economics on the gym hub](/industries/gym/#membership-economics).",
          "**Read next:** [Highest Valued Fitness Businesses](/industries/gym/reports/highest-valued-fitness-businesses-2026/) — how MRR quality translates to sale price.",
        ],
      },
    ],
  },
];
