import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { martialArtsMarketAnchors, martialArtsReportSources } from "./shared-martial-arts-market-data";

export const reportMeta: ReportMeta = {
  slug: "martial-arts-best-recurring-revenue-fitness-2026",
  title: "Best Recurring Revenue Fitness Businesses — Martial Arts Industry Report",
  subtitle:
    "2026 U.S. fitness recurring revenue analysis with a martial arts deep-dive: tuition MRR models, autopay economics, family retention, belt testing cadence, and why martial arts schools lead subscription fitness.",
  description:
    "Best recurring revenue martial arts fitness businesses in 2026: 85–92% tuition MRR, $58K median school MRR, 3.8% churn, autopay models, and subscription economics for martial arts schools.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "8 min",
  href: "/industries/martial-arts-school/reports/martial-arts-best-recurring-revenue-fitness-2026/",
  sources: martialArtsReportSources,
};

export const reportSections: readonly ReportSection[] = [
  {
    id: "executive-summary",
    title: "1. Executive Summary",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "Martial Arts Tuition MRR Share", value: "85 – 92%" },
          { label: "Median School Tuition MRR", value: martialArtsMarketAnchors.medianTuitionMrr },
          { label: "Target Monthly Churn", value: martialArtsMarketAnchors.monthlyChurn },
          { label: "Autopay Adoption (top schools)", value: "88 – 94%" },
        ],
      },
      {
        type: "paragraph",
        text: "**Best recurring revenue fitness businesses** in 2026 are defined by **autopay tuition density** and **family stickiness**, not contract length alone. Within the **$19.2 billion** wellness and youth activity market, **martial arts schools** rank near the top of the recurring revenue spectrum — often deriving **85–92% of revenue** from monthly tuition and family plans. This compares to **55–70%** at general gyms and **70–85%** at CrossFit affiliates. " + martialArtsMarketAnchors.familyRetentionFocus + " — making martial arts a natural subscription business with **3.8% median monthly churn**.",
      },
      {
        type: "bullets",
        items: [
          "**Recurring thesis:** Families pay for **ongoing progression and child development**, not facility access — natural subscription fit amplified by belt milestones.",
          "**Benchmark:** Average **$145/mo** tuition and **$58K/mo MRR** at median scale; MRR health is measured by **autopay %**, **churn**, and **failed payment recovery**.",
          "**Investor view:** High-MRR schools with strong family retention command **lower discount rates** in valuation — recurring tuition plus progression systems is the primary asset.",
        ],
      },
    ],
  },
  {
    id: "market-size-share",
    title: "2. Market Size & Share — Martial Arts & Youth Activity",
    blocks: [
      {
        type: "paragraph",
        text: "The **$19.2 billion** combined wellness market masks a critical split: **drop-in and trial-heavy models** skew transactional, while **tuition-forward martial arts schools** skew recurring. Family investment — belt ceremonies, parent portals, sibling discounts — correlates with subscription models: families paying **$145/mo** expect ongoing progression, not transactional class access.",
      },
      {
        type: "table",
        headers: ["Format", "Recurring Revenue %", "Primary Billing Model", "Churn Profile"],
        rows: [
          ["Kids-Focused Martial Arts School", "85 – 92%", "Autopay monthly tuition", "2.5 – 4.5% monthly"],
          ["Adult-Heavy BJJ / MMA", "70 – 82%", "Month-to-month + privates", "4 – 7% monthly"],
          ["Franchise Martial Arts", "86 – 92%", "Autopay + annual options", "3 – 5% monthly"],
          ["General Gym (comparison)", "55 – 70%", "Month-to-month dues", "3 – 5% monthly"],
        ],
      },
      {
        type: "paragraph",
        text: "**Revenue stability:** While location growth has plateaued, **MRR per school is rising** as operators migrate away from Groupon-dependent acquisition toward **intro-to-tuition funnels** with **35–50% conversion** targets and **parent onboarding** sequences.",
      },
    ],
  },
  {
    id: "consumer-demographics",
    title: "3. Consumer Demographics & Behavior",
    blocks: [
      {
        type: "paragraph",
        text: "Recurring revenue quality depends on **who** enrolls and **why families stay**. **Parents aged 28–48** hold the majority of enrollment decisions — demographics with credit cards on file, multi-year child development horizons, and **activity budgets** that renew automatically. This cohort treats martial arts like **structured enrichment**: canceling feels like disrupting a child's progression path.",
      },
      {
        type: "bullets",
        items: [
          "**Retention driver:** Belt advancement creates **visible milestones** that justify continued tuition — schools with active promotion calendars retain **12–18% longer** than those without.",
          "**Family plans:** Sibling discounts increase household MRR while reducing per-student acquisition cost.",
          "**Churn triggers:** Instructor turnover, slow belt progression, and summer attendance drops — each addressable with systems.",
          "**Autopay psychology:** Parents on autopay churn **20–30% less** than invoice-based billing.",
        ],
      },
    ],
  },
  {
    id: "trends-program-models",
    title: "4. Key Trends & Program Models",
    blocks: [
      {
        type: "paragraph",
        text: "**Subscription-native program design** defines recurring revenue leaders. Schools structure **monthly tuition as default**, use **intro offers as conversion funnels** (not permanent pricing), and layer **belt testing** as predictable ancillary billing events that reinforce commitment without replacing MRR.",
      },
      {
        type: "bullets",
        items: [
          "**Tuition architecture:** Unlimited monthly programs outperform class-pack models by **15–25%** on annual retention.",
          "**Failed payment recovery:** Top schools recover **65–80%** of failed autopay within 7 days via automated retry and parent outreach.",
          "**Belt testing cadence:** Quarterly promotions create **commitment checkpoints** — families renew around testing seasons.",
          "**Camp bundling:** Summer camp pre-enrollment locks in **Q3 tuition continuity** for 40–60% of active families.",
        ],
      },
    ],
  },
  {
    id: "business-models",
    title: "5. Business Models & Monetization",
    blocks: [
      {
        type: "paragraph",
        text: "**Highest-recurring operators** share a monetization stack: **autopay tuition MRR** as the base (**85–92%** of revenue), **belt testing** as commitment reinforcement (**8–12%**), and **camps / privates** as upsell without eroding subscription core.",
      },
      {
        type: "table",
        headers: ["Model", "MRR %", "Median Monthly Churn", "MRR Driver"],
        rows: [
          ["Kids Academy (tuition-first)", "88 – 92%", "2.5 – 4%", "Autopay + progression"],
          ["Family Plan School", "85 – 90%", "3 – 4.5%", "Sibling retention"],
          ["Adult + Kids Hybrid", "78 – 85%", "4 – 6%", "Mixed billing complexity"],
          ["Trial-Heavy / Promo School", "65 – 75%", "5 – 8%", "Discount dependency"],
        ],
      },
      {
        type: "bullets",
        items: [
          "**MRR formula:** Active Students × Average Monthly Tuition = tuition MRR; target **$58K+/mo** at median scale.",
          "**Rule of thumb:** Reducing churn from **5% to 3.8%** adds **$40K–$75K** annual revenue without new students.",
        ],
      },
    ],
  },
  {
    id: "challenges-opportunities",
    title: "6. Challenges & Opportunities",
    blocks: [
      {
        type: "bullets",
        items: [
          "**Challenge — Summer churn:** Vacation months spike cancellations; camp pre-enrollment and make-up class policies mitigate.",
          "**Challenge — Failed payments:** Undetected autopay failures erode MRR silently; automated recovery systems are essential.",
          "**Opportunity — Family plan expansion:** Converting single-child to multi-child households increases MRR **30–50%** per family.",
          "**Opportunity — Belt testing revenue:** Structured promotions add recurring-adjacent income without replacing tuition.",
          "**Opportunity — Referral MRR:** **32% referral rate** means lowest-CAC recurring growth for schools with strong retention.",
        ],
      },
      {
        type: "paragraph",
        text: "For operators building durable revenue, martial arts offers **among the highest recurring revenue ratios in fitness** — provided tuition is autopay-default, belt progression creates commitment, and family retention is actively managed.",
      },
    ],
  }
];
