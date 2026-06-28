import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";
import { martialArtsMarketAnchors, martialArtsReportSources } from "./shared-martial-arts-market-data";

export const reportMeta: ReportMeta = {
  slug: "martial-arts-lowest-startup-cost-fitness-2026",
  title: "Lowest Startup Cost Fitness Businesses — Martial Arts Industry Report",
  subtitle:
    "2026 U.S. fitness startup cost analysis with a martial arts deep-dive: capex benchmarks, mat-school economics, kids program launch models, and capital-efficient academy buildouts vs full-service gyms.",
  description:
    "Lowest startup cost martial arts fitness businesses in 2026: $75K–$180K school launches, equipment benchmarks, lease strategies, and capital efficiency vs full-service gyms and reformer studios.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "8 min",
  href: "/industries/martial-arts-school/reports/martial-arts-lowest-startup-cost-fitness-2026/",
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
          { label: "Martial Arts School Launch Range", value: "$75K – $180K" },
          { label: "Lean Kids Academy Launch", value: "$75K – $120K" },
          { label: "Full-Service Gym (comparison)", value: "$250K – $600K" },
          { label: "Mats & Equipment (typical school)", value: "$15K – $45K" },
        ],
      },
      {
        type: "paragraph",
        text: "**Lowest startup cost fitness businesses** in 2026 cluster in **boutique and specialty studio formats** — and martial arts schools rank among the most capital-efficient. Within the **$19.2 billion** wellness market, **kids-focused martial arts academies** offer **moderate capital entry** with **high recurring revenue potential** at maturity. Minimal heavy equipment requirements mean founders can reach **$780K+ median revenue** with **$75K–$180K** total launch capital — materially less than full-service gyms.",
      },
      {
        type: "bullets",
        items: [
          "**Capital thesis:** Martial arts schools achieve **gym-competitive revenue at 1/3 to 1/2 the capex** of full-service clubs.",
          "**Industry context:** Average **$145/mo** tuition means break-even is reachable at **100–150 students** — not 500+.",
          "**Kids focus advantage:** Schools launching with **55%+ kids enrollment** reach cash-flow positive faster due to higher retention and family plan density.",
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
        text: "The **$19.2 billion** wellness and youth activity market includes formats spanning **$50K micro-studios** to **$500K+ full gym buildouts**. Martial arts occupies the **efficient middle**: sufficient space for group instruction, minimal apparatus, and strong tuition economics. Compared to reformer Pilates (**$150K–$350K** equipment alone) or full gyms (**$250K–$600K**), martial arts launch capital concentrates on **lease, mats, mirrors, and curriculum**.",
      },
      {
        type: "table",
        headers: ["Format", "Typical Launch Capex", "Break-Even Students", "Time to Profitability"],
        rows: [
          ["Lean Kids Martial Arts School", "$75K – $120K", "100 – 130", "12 – 18 months"],
          ["Full-Size Academy (2,500+ sq ft)", "$120K – $180K", "140 – 180", "14 – 20 months"],
          ["BJJ / MMA (heavy mats)", "$100K – $200K", "120 – 160", "14 – 22 months"],
          ["Full-Service Gym", "$250K – $600K", "400 – 600", "24 – 36 months"],
        ],
      },
      {
        type: "paragraph",
        text: "**Capital efficiency insight:** Martial arts schools generate **$168/mo revenue per student** at maturity — achieving strong unit economics with **modest upfront investment** relative to revenue potential.",
      },
    ],
  },
  {
    id: "consumer-demographics",
    title: "3. Consumer Demographics & Behavior",
    blocks: [
      {
        type: "paragraph",
        text: "Startup cost efficiency depends on **matching capex to local demand**. **Suburban family markets** with **28–48 age parent cohorts** support kids-focused launches at **2,000–3,500 sq ft** — avoiding over-building that plagues over-capitalized gyms. Parents evaluate schools on **instructor quality**, **safety**, and **progression systems** before facility luxury.",
      },
      {
        type: "bullets",
        items: [
          "**Launch sequencing:** Start with **kids after-school** and **evening family classes** before adding adult programs or competition teams.",
          "**Intro offer economics:** $29–$79 trial programs convert at **35–50%** — low acquisition cost relative to gym marketing spend.",
          "**Referral leverage:** **32% referral rate** reduces marketing capex needs in year one.",
          "**Lease strategy:** Second-generation retail at **$18–$28/sq ft** keeps occupancy at **14–22%** of revenue — critical for capital efficiency.",
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
        text: "**Capital-disciplined launch models** define successful new schools. Operators defer non-essential buildout — competition floors, pro shops, spectator areas — until **150+ students** validate demand. Software-first operations (billing, attendance, parent communication) reduce admin headcount capex.",
      },
      {
        type: "bullets",
        items: [
          "**Phased buildout:** Phase 1 = mats + mirrors + office; Phase 2 = additional training area; Phase 3 = pro shop / spectator space.",
          "**Used equipment:** Quality used mats and bags reduce equipment capex **30–50%** without compromising safety if inspected.",
          "**Franchise trade-off:** Franchise fees add **$30K–$80K** launch cost but reduce marketing and curriculum development risk.",
          "**After-school pickup:** Partnering with local schools for pickup adds revenue without facility expansion — high ROI program model.",
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
        text: "**Capital-efficient operators** launch with **tuition-first billing**, minimal merchandise inventory, and **belt testing** as the first ancillary revenue stream — avoiding heavy retail or equipment sales that tie up working capital.",
      },
      {
        type: "table",
        headers: ["Launch Model", "Capex Range", "Year-1 Revenue Target", "Capital Efficiency"],
        rows: [
          ["Owner-Instructor Lean Launch", "$75K – $100K", "$250K – $400K", "Highest ROI; owner teaches"],
          ["Staffed Kids Academy", "$120K – $160K", "$400K – $600K", "Faster scale; higher payroll"],
          ["Franchise Launch", "$130K – $200K", "$350K – $550K", "Playbook speed; royalty drag"],
          ["Multi-Room Academy", "$160K – $220K", "$500K – $750K", "Higher ceiling; more risk"],
        ],
      },
      {
        type: "bullets",
        items: [
          "**Working capital:** Reserve **3–4 months** operating expenses ($25K–$45K) beyond buildout capex.",
          "**Payback benchmark:** Lean launches targeting **18-month payback** on total invested capital at **130+ students**.",
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
          "**Challenge — Lease guarantees:** Personal lease guarantees increase founder risk; negotiate tenant improvement allowances.",
          "**Challenge — Under-capitalized marketing:** Schools that cut marketing below **8% of revenue** in year one grow too slowly to cover fixed costs.",
          "**Opportunity — Low equipment barrier:** Launch without heavy apparatus — focus budget on **instructor quality** and **parent experience**.",
          "**Opportunity — Kids program density:** **55–75% kids revenue** from day one maximizes retention and tuition MRR per square foot.",
          "**Opportunity — Belt testing ROI:** Promotion infrastructure costs **$2K–$8K** but generates **$60K+** annual revenue at scale.",
        ],
      },
      {
        type: "paragraph",
        text: "For capital-constrained founders, martial arts offers **among the best startup cost-to-revenue ratios in fitness** — provided launch scope matches local demand and kids enrollment is prioritized from opening day.",
      },
    ],
  }
];
