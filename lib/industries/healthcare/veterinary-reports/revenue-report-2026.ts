import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";

export const reportMeta: ReportMeta = {
  slug: "veterinary-clinic-revenue-2026",
  title: "How Much Revenue Does A Veterinary Clinic Generate?",
  subtitle:
    "2026 analysis of US veterinary clinic revenue by practice model, service mix, and care segment, with operator and investor benchmarks.",
  description:
    "Veterinary clinic revenue benchmarks for 2026: US market sizing, median clinic revenue of $1.2M, segment economics, and growth outlook through 2033.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "8 min",
  href: "/industries/healthcare/veterinary-clinic/reports/veterinary-clinic-revenue-2026/",
  sources: [
    "AVMA — U.S. Veterinary Workforce & Practice Ownership Data",
    "IBISWorld — Veterinarians in the US (2026)",
    "Fortune Business Insights — Veterinary Services Market",
    "BizMetricsHQ — 240+ veterinary clinic operator panel",
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
          { label: "US Veterinary Services Market (2026)", value: "$74.5B" },
          { label: "Global Veterinary Services CAGR", value: "7.9%" },
          { label: "Median Clinic Revenue", value: "$1.2M" },
          { label: "Typical Revenue Range (Companion Clinics)", value: "$850K – $2.4M" },
        ],
      },
      {
        type: "paragraph",
        text: "US veterinary clinics in 2026 operate in a structurally growing healthcare segment anchored by high companion-animal utilization and improving preventive compliance. BizMetricsHQ analysis across **240+ clinics** indicates median annual clinic revenue of **$1.2M**, with bottom-quartile operators below **$850K** and top-quartile clinics exceeding **$2.4M**. At market level, US veterinary services are estimated at **$74.5B** in 2026, with demand supported by increased pet ownership intensity and willingness to pay for advanced care.",
      },
      {
        type: "bullets",
        items: [
          "**Companion-animal clinics** remain the core revenue engine, typically generating **75–90%** of total clinic revenue in mixed-animal markets.",
          "**Practice-level variance** is driven by doctor capacity, appointment access, diagnostics adoption, and average invoice size rather than local pet population alone.",
          "**Corporate-backed hospitals** typically post higher gross collections due to longer opening hours and referral capture, while **independent clinics** retain stronger local loyalty and continuity of care.",
          "The 2026 baseline supports sustained expansion into preventive subscriptions, diagnostics-led care pathways, and tele-triage enabled follow-up services.",
        ],
      },
    ],
  },
  {
    id: "market-dynamics",
    title: "2. Market Dynamics",
    blocks: [
      {
        type: "paragraph",
        text: "Three forces shape veterinary revenue performance in 2026: the **humanization of pets**, broader **pet insurance penetration**, and persistent **veterinarian labor shortages**. Consumer behavior continues to treat pets as family members, expanding willingness to fund diagnostics, chronic disease management, and surgical interventions that were previously deferred.",
      },
      {
        type: "stats",
        items: [
          { label: "Insured US Pets (dogs + cats, 2026 est.)", value: "9.1M+" },
          { label: "Insurance Penetration YoY Growth", value: "15–18%" },
          { label: "Clinics Reporting Capacity Constraints", value: "~62%" },
          { label: "Average Wait-Time Inflation vs 2019", value: "+25–35%" },
        ],
      },
      {
        type: "bullets",
        items: [
          "**Humanization trend:** Demand has shifted from reactive sick care to continuous wellness and quality-of-life medicine, raising annual spend per household.",
          "**Pet insurance:** Greater reimbursement confidence supports acceptance of higher-ticket diagnostics and procedures, increasing average transaction value.",
          "**Workforce constraints:** Veterinarian and credentialed technician shortages cap appointment supply, limiting top-line growth even in high-demand ZIP codes.",
          "**Price realization vs volume:** Clinics increasingly rely on case-mix quality and service bundling when visit capacity cannot scale.",
        ],
      },
    ],
  },
  {
    id: "industry-segmentation",
    title: "3. Industry Segmentation",
    blocks: [
      {
        type: "paragraph",
        text: "Revenue composition differs materially by animal segment and by service line. Companion-animal medicine dominates US clinic economics, while production-animal services remain regionally concentrated and more exposed to commodity cycles.",
      },
      {
        type: "table",
        headers: ["Segment / Service Line", "Typical Revenue Share", "Margin Profile"],
        rows: [
          ["Companion animals (dogs/cats)", "70 – 85%", "Moderate to high"],
          ["Production animals (bovine/swine/equine mix)", "15 – 30%", "Variable, travel-intensive"],
          ["Routine preventive care", "25 – 35%", "Stable recurring"],
          ["Diagnostics (lab/imaging)", "15 – 22%", "High incremental margin"],
          ["Surgery & advanced procedures", "18 – 28%", "High value, capacity-constrained"],
          ["Pharmacy & therapeutic products", "10 – 18%", "Moderate, inventory-sensitive"],
        ],
      },
      {
        type: "bullets",
        items: [
          "**Companion-focused clinics** benefit from predictable recall cycles, vaccinations, dental cleanings, and chronic condition monitoring.",
          "**Production-animal practices** often show larger contract accounts but lower scheduling density and higher field-service overhead.",
          "**Preventive-first models** increase lifetime value by improving continuity and generating downstream diagnostics and treatment demand.",
          "**Diagnostics and surgery** drive outsized revenue per doctor hour and are key differentiators in top-quartile clinics.",
        ],
      },
    ],
  },
  {
    id: "competitive-landscape",
    title: "4. Competitive Landscape",
    blocks: [
      {
        type: "paragraph",
        text: "The veterinary market remains fragmented but is mid-cycle in consolidation. National and regional operators, including networks associated with **Mars Veterinary Health** and **NVA**, continue to aggregate multi-site platforms; however, independent clinic formation and succession buyouts have re-accelerated in select suburban and secondary markets.",
      },
      {
        type: "stats",
        items: [
          { label: "Estimated Corporate Share (US companion clinics)", value: "35–40%" },
          { label: "Independent Clinic Share", value: "60–65%" },
          { label: "Top Platform Ownership Trend", value: "Consolidating, slower pace" },
          { label: "New Independent Openings (2025–2026)", value: "Rising in select markets" },
        ],
      },
      {
        type: "bullets",
        items: [
          "**Corporate groups** win on recruiting infrastructure, centralized procurement, and referral network depth.",
          "**Independent clinics** are regaining ground through local brand trust, continuity with lead veterinarians, and selective specialty add-ons.",
          "**Acquisition multiples** remain sensitive to doctor retention and normalized EBITDA durability, not revenue growth alone.",
          "Hybrid affiliation models (partial MSO services without full sale) are emerging as a middle path for owner-operators.",
        ],
      },
    ],
  },
  {
    id: "technology-innovation",
    title: "5. Technology & Innovation",
    blocks: [
      {
        type: "paragraph",
        text: "Technology adoption is becoming a direct revenue lever rather than a back-office efficiency play. AI-assisted interpretation tools, connected diagnostics workflows, and telemedicine/tele-triage extensions are increasing both throughput and case completion rates.",
      },
      {
        type: "table",
        headers: ["Technology Lever", "Revenue Impact", "Implementation Horizon"],
        rows: [
          ["AI-assisted imaging/diagnostic support", "+$60K – $180K/yr", "3–9 months"],
          ["Tele-triage and follow-up telemedicine", "+$40K – $120K/yr", "2–6 months"],
          ["Automated recall and preventive reminders", "+$35K – $95K/yr", "3–6 months"],
          ["Integrated lab workflow optimization", "+$50K – $140K/yr", "4–8 months"],
          ["Digital client communication + payments", "+$25K – $80K/yr", "2–5 months"],
        ],
      },
      {
        type: "bullets",
        items: [
          "**AI diagnostics** support earlier detection and improved owner communication, lifting acceptance for imaging and lab panels.",
          "**Telemedicine extensions** reduce leakage for post-op checks and chronic care monitoring while preserving in-clinic capacity.",
          "**Workflow automation** improves appointment fill rates and reduces no-show impact through proactive digital engagement.",
          "Clinics with disciplined tech adoption generally convert productivity gains into both higher revenue and improved staff utilization.",
        ],
      },
    ],
  },
  {
    id: "future-outlook",
    title: "6. Future Outlook (2026-2033)",
    blocks: [
      {
        type: "paragraph",
        text: "From 2026 through 2033, the veterinary revenue outlook remains expansionary, with growth expected to be led by companion-animal chronic care, diagnostics intensity, and digitally enabled care continuity. Base-case projections assume demand remains strong while workforce growth gradually improves clinic throughput.",
      },
      {
        type: "stats",
        items: [
          { label: "US Market Projection (2030)", value: "$96B – $101B" },
          { label: "US Market Projection (2033)", value: "$118B – $126B" },
          { label: "Implied 2026–2033 CAGR (US)", value: "6.8 – 7.6%" },
          { label: "Projected Median Clinic Revenue (2033)", value: "$1.7M – $1.9M" },
        ],
      },
      {
        type: "bullets",
        items: [
          "**Base case:** Moderate hiring recovery and sustained demand yield stable high-single-digit revenue growth.",
          "**Upside case:** Faster insurance penetration and broader AI-enabled diagnostics drive stronger average invoice expansion.",
          "**Downside case:** Persistent staffing bottlenecks and affordability pressures reduce realized growth despite underlying demand.",
          "Clinics that combine preventive subscriptions, diagnostics-led protocols, and capacity management are positioned to outperform sector averages.",
        ],
      },
    ],
  },
];
