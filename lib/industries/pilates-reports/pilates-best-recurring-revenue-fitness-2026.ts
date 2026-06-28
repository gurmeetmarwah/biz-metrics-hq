import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { pilatesMarketAnchors, pilatesReportSources } from "./shared-pilates-market-data";

export const reportMeta: ReportMeta = {
  slug: "pilates-best-recurring-revenue-fitness-2026",
  title: "Best Recurring Revenue Fitness Businesses — Pilates Industry Report",
  subtitle:
    "2026 U.S. fitness recurring revenue analysis with a Pilates deep-dive: MRR models, autopay economics, churn benchmarks, and why reformer studios lead subscription fitness.",
  description:
    "Best recurring revenue Pilates fitness businesses in 2026: 85–95% MRR, $62K median studio MRR, autopay models, churn reduction, and subscription economics for reformer studios.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "8 min",
  href: "/industries/pilates-studio/reports/pilates-best-recurring-revenue-fitness-2026/",
  sources: pilatesReportSources,
};

export const reportSections: readonly ReportSection[] = [
  {
    id: "executive-summary",
    title: "1. Executive Summary",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "Pilates Studio MRR Share", value: "85 – 95%" },
          { label: "Median Studio MRR (est.)", value: "~$62K/mo" },
          { label: "Target Monthly Churn", value: "2.5 – 4%" },
          { label: "Autopay Adoption (top studios)", value: "90 – 95%" },
        ],
      },
      {
        type: "paragraph",
        text: "**Best recurring revenue fitness businesses** in 2026 are defined by **autopay membership density**, not contract length alone. Within the **$19.2 billion** Pilates and yoga studio industry, **reformer-based Pilates** ranks at the top of the recurring revenue spectrum — often deriving **85–95% of revenue** from monthly memberships and session subscriptions. This compares to **55–70%** at general gyms and **70–85%** at CrossFit affiliates. Stable studio counts with **stabilizing revenue trends** reflect an industry maturing from promo-driven growth to **MRR-quality optimization**.",
      },
      {
        type: "bullets",
        items: [
          "**Recurring thesis:** Pilates clients pay for **ongoing coaching**, not facility access — natural subscription fit.",
          "**Benchmark:** Average **$25** class pricing and **65% fill rates** are occupancy metrics; MRR health is measured by **autopay %**, **churn**, and **failed payment recovery**.",
          "**Investor view:** High-MRR studios command **lower discount rates** in valuation — recurring revenue is the primary asset.",
        ],
      },
    ],
  },
  {
    id: "pilates-boom-market-size",
    title: "2. The U.S. Pilates Boom: Market Size & Share",
    blocks: [
      {
        type: "paragraph",
        text: "The **$19.2 billion** combined market masks a critical split: **mat and class-pack models** skew transactional, while **reformer membership studios** skew recurring. Equipment investment — tied to the **$1.2 billion** reformer market growing at **8.2% CAGR** — correlates with subscription models: clients paying **$165–$220/mo** expect continuous programming, not drop-in access.",
      },
      {
        type: "table",
        headers: ["Format", "Recurring Revenue %", "Primary Billing Model", "Churn Profile"],
        rows: [
          ["Reformer Membership Studio", "85 – 95%", "Autopay unlimited", "2.5 – 4% monthly"],
          ["Class Pack / Credit Studio", "50 – 70%", "Prepaid bundles", "4 – 7% monthly"],
          ["Franchise Reformer", "88 – 93%", "Autopay + annual options", "3 – 5% monthly"],
          ["General Gym (comparison)", "55 – 70%", "Month-to-month dues", "3 – 5% monthly"],
        ],
      },
      {
        type: "paragraph",
        text: "**Revenue stability:** While location growth has plateaued, **MRR per studio is rising** as operators migrate away from Groupon-dependent acquisition toward **intro-to-membership funnels** with **35–50% conversion** targets.",
      },
    ],
  },
  {
    id: "consumer-demographics",
    title: "3. Consumer Demographics & Behavior",
    blocks: [
      {
        type: "paragraph",
        text: "Recurring revenue quality depends on **who** subscribes. **Adults 25–55 hold 62.3% of market share** — demographics with credit cards on file, routine schedules, and **wellness budgets** that renew automatically. This cohort treats Pilates like **health insurance for the body**: canceling feels like abandoning a treatment plan, not skipping a gym visit.",
      },
      {
        type: "bullets",
        items: [
          "**Habit formation:** Clients who reach **12 consecutive weeks** have **3× higher** 12-month retention.",
          "**Payment behavior:** Autopay members churn **40–60% less** than manual renewals — non-negotiable for MRR-focused operators.",
          "**Visit frequency:** **2×/week minimum** correlates with **<3% monthly churn**; once-weekly members churn at **2× the rate**.",
          "**Fill rate signal:** **65% average class occupancy** with waitlisted peak slots indicates pricing power to raise dues **5–8% annually** without churn spikes.",
        ],
      },
    ],
  },
  {
    id: "trends-equipment",
    title: "4. Key Trends & Equipment",
    blocks: [
      {
        type: "paragraph",
        text: "Recurring revenue and equipment strategy are linked: **reformer studios** justify subscriptions through **apparatus-based progression** clients cannot replicate at home without **$3K–$6K** home reformer investment. The commercial **$1.2 billion** reformer market (**8.2% CAGR**) includes home units, but **studio subscriptions** remain the full-service value proposition.",
      },
      {
        type: "bullets",
        items: [
          "**Hybrid retention:** Studios bundling **1 on-demand class/week** with membership reduce churn **8–15%** — incremental content as retention insurance.",
          "**AI billing recovery:** Failed payment retry sequences recover **15–25%** of at-risk MRR — direct EBITDA impact.",
          "**Waitlist automation:** Converting waitlist to filled spots improves **perceived scarcity** and supports **$25+** effective class economics.",
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
        text: "The **MRR-maximizing stack** for Pilates: (1) low-friction intro offer, (2) autopay unlimited membership as default close, (3) private session upsell at day 21, (4) annual prepay discount at **10–15%** for cash flow. Franchising accelerates MRR system deployment; independents achieve **higher MRR per client** with localized pricing.",
      },
      {
        type: "table",
        headers: ["MRR Lever", "Implementation", "Typical MRR Lift"],
        rows: [
          ["Autopay default at signup", "Opt-out vs opt-in billing", "+12 – 18% retention"],
          ["Failed payment recovery", "3-attempt retry + SMS", "+3 – 6% effective MRR"],
          ["Annual membership option", "2 months free incentive", "+8% cash; stable churn"],
          ["Private session attach", "Day-21 offer post-intro", "+$18K – $40K/yr"],
        ],
      },
      {
        type: "paragraph",
        text: "Model MRR with the [Pilates Membership Revenue Calculator](/calculators/pilates-membership-revenue/) — target **$62K/mo** median MRR at **150 members** and **$165** average dues as a benchmark.",
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
          "**Challenge — Promo dependency:** Studios with **>30% intro-offer members** see **MRR volatility** when promos end — false recurring signal.",
          "**Challenge — Seasonal churn:** January acquisition spikes mask **March–April churn** if onboarding is weak.",
          "**Opportunity — Corporate wellness:** B2B stipends create **bulk MRR** with lower CAC — growing channel for 25–55 demographic.",
          "**Opportunity — Annual prepay:** Converts transactional mindsets to committed members; improves cash and valuation.",
          "**Opportunity — Fill rate optimization:** Moving from **65% to 75% occupancy** grows MRR capacity without new member acquisition spend.",
        ],
      },
    ],
  }
];
