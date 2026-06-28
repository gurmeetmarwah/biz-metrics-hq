import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { yogaMarketAnchors, yogaReportSources } from "./shared-yoga-market-data";

export const reportMeta: ReportMeta = {
  slug: "yoga-best-recurring-revenue-fitness-2026",
  title: "Best Recurring Revenue Fitness Businesses — Yoga Industry Report",
  subtitle:
    "2026 U.S. fitness recurring revenue analysis with a yoga deep-dive: MRR models, autopay economics, community retention, and why boutique yoga studios lead subscription fitness.",
  description:
    "Best recurring revenue yoga fitness businesses in 2026: 80–92% MRR, $48K median studio MRR, autopay models, churn reduction, and subscription economics for yoga studios.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "8 min",
  href: "/industries/yoga-studio/reports/yoga-best-recurring-revenue-fitness-2026/",
  sources: yogaReportSources,
};

export const reportSections: readonly ReportSection[] = [
  {
    id: "executive-summary",
    title: "1. Executive Summary",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "Yoga Studio MRR Share", value: "80 – 92%" },
          { label: "Median Studio MRR (est.)", value: "~$48K/mo" },
          { label: "Target Monthly Churn", value: "3 – 5%" },
          { label: "Autopay Adoption (top studios)", value: "88 – 94%" },
        ],
      },
      {
        type: "paragraph",
        text: "**Best recurring revenue fitness businesses** in 2026 are defined by **autopay membership density** and **community stickiness**, not contract length alone. Within the **$19.2 billion** Pilates and yoga studio industry, **boutique yoga studios** rank near the top of the recurring revenue spectrum — often deriving **80–92% of revenue** from monthly memberships and class subscriptions. This compares to **55–70%** at general gyms and **70–85%** at CrossFit affiliates. " + yogaMarketAnchors.communityRetentionFocus + " — making yoga a natural subscription business.",
      },
      {
        type: "bullets",
        items: [
          "**Recurring thesis:** Yoga clients pay for **ongoing practice and community**, not facility access — natural subscription fit amplified by studio culture.",
          "**Benchmark:** Average **$25** class pricing and **65% fill rates** are occupancy metrics; MRR health is measured by **autopay %**, **churn**, and **failed payment recovery**.",
          "**Investor view:** High-MRR studios with strong retention command **lower discount rates** in valuation — recurring revenue plus community is the primary asset.",
        ],
      },
    ],
  },
  {
    id: "yoga-wellness-market-size",
    title: "2. The U.S. Yoga & Wellness Boom: Market Size & Share",
    blocks: [
      {
        type: "paragraph",
        text: "The **$19.2 billion** combined market masks a critical split: **drop-in and class-pack models** skew transactional, while **membership-forward yoga studios** skew recurring. Community investment — instructor continuity, class rituals, studio events — correlates with subscription models: clients paying **$120–$185/mo** expect ongoing belonging, not transactional access.",
      },
      {
        type: "table",
        headers: ["Format", "Recurring Revenue %", "Primary Billing Model", "Churn Profile"],
        rows: [
          ["Membership Yoga Studio", "80 – 92%", "Autopay unlimited", "3 – 5% monthly"],
          ["Class Pack / Credit Studio", "45 – 65%", "Prepaid bundles", "5 – 8% monthly"],
          ["Franchise Yoga", "82 – 90%", "Autopay + annual options", "3.5 – 5.5% monthly"],
          ["General Gym (comparison)", "55 – 70%", "Month-to-month dues", "3 – 5% monthly"],
        ],
      },
      {
        type: "paragraph",
        text: "**Revenue stability:** While location growth has plateaued, **MRR per studio is rising** as operators migrate away from Groupon-dependent acquisition toward **intro-to-membership funnels** with **30–45% conversion** targets and **community onboarding** sequences.",
      },
    ],
  },
  {
    id: "consumer-demographics",
    title: "3. Consumer Demographics & Behavior",
    blocks: [
      {
        type: "paragraph",
        text: "Recurring revenue quality depends on **who** subscribes and **why** they stay. **Adults 25–55 hold 62.3% of market share** — demographics with credit cards on file, routine schedules, and **wellness budgets** that renew automatically. This cohort treats yoga like **mental health maintenance**: canceling feels like leaving a community, not skipping a gym visit.",
      },
      {
        type: "bullets",
        items: [
          "**Habit formation:** Clients who reach **8 consecutive weeks** have **2.5× higher** 12-month retention — community milestones accelerate stickiness.",
          "**Payment behavior:** Autopay members churn **35–55% less** than manual renewals — non-negotiable for MRR-focused operators.",
          "**Visit frequency:** **3×/week minimum** correlates with **<4% monthly churn**; once-weekly members churn at **2× the rate**.",
          "**Fill rate signal:** **65% average class occupancy** with waitlisted peak slots indicates pricing power to raise dues **4–7% annually** without churn spikes.",
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
        text: "Recurring revenue and **community programming** are linked: yoga studios justify subscriptions through **instructor relationships**, **progressive class pathways**, and **studio rituals** clients cannot replicate at home with a YouTube video. Low equipment barriers mean **retention investment** shifts to **people and culture**, not apparatus.",
      },
      {
        type: "bullets",
        items: [
          "**Hybrid retention:** Studios bundling **1 on-demand class/week** with membership reduce churn **10–18%** — incremental content as retention insurance.",
          "**AI billing recovery:** Failed payment retry sequences recover **15–25%** of at-risk MRR — direct EBITDA impact.",
          "**Community automation:** Birthday messages, milestone celebrations, and re-engagement campaigns improve **perceived belonging** and support **$25+** effective class economics.",
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
        text: "The **MRR-maximizing stack** for yoga: (1) low-friction intro offer, (2) autopay unlimited membership as default close, (3) workshop upsell at day 30, (4) annual prepay discount at **10–15%** for cash flow. Franchising accelerates MRR system deployment; independents achieve **higher community attachment** with localized culture.",
      },
      {
        type: "table",
        headers: ["MRR Lever", "Implementation", "Typical MRR Lift"],
        rows: [
          ["Autopay default at signup", "Opt-out vs opt-in billing", "+10 – 16% retention"],
          ["Failed payment recovery", "3-attempt retry + SMS", "+3 – 5% effective MRR"],
          ["Annual membership option", "2 months free incentive", "+7% cash; stable churn"],
          ["Community onboarding", "30-day welcome sequence", "+$12K – $28K/yr retention value"],
        ],
      },
      {
        type: "paragraph",
        text: "Model MRR with the [Yoga Membership Revenue Calculator](/calculators/yoga-membership-revenue/) — target **$48K/mo** median MRR at **120 members** and **$140** average dues as a benchmark.",
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
          "**Challenge — Promo dependency:** Studios with **>35% intro-offer members** see **MRR volatility** when promos end — false recurring signal.",
          "**Challenge — Seasonal churn:** January acquisition spikes mask **March–April churn** if community onboarding is weak.",
          "**Opportunity — Corporate wellness:** B2B stipends create **bulk MRR** with lower CAC — growing channel for 25–55 demographic.",
          "**Opportunity — Annual prepay:** Converts transactional mindsets to committed members; improves cash and valuation.",
          "**Opportunity — Fill rate optimization:** Moving from **65% to 75% occupancy** grows MRR capacity without new member acquisition spend.",
        ],
      },
    ],
  }
];
