import type { ReportMeta, ReportSection } from "@/lib/industries/reports/types";

export const reportMeta: ReportMeta = {
  slug: "physical-therapy-clinic-revenue-2026",
  title: "How Much Revenue Does A Physical Therapy Clinic Generate?",
  subtitle:
    "2026 analysis of US physical therapy clinic revenue by care setting, payer mix, and operating model, with owner-operator benchmarks.",
  description:
    "Physical therapy clinic revenue benchmarks for 2026: US market sizing, median clinic revenue of $850K, growth outlook, and strategic expansion priorities through 2033.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "8 min",
  href: "/industries/healthcare/physical-therapy-clinic/reports/physical-therapy-clinic-revenue-2026/",
  sources: [
    "APTA — US Physical Therapy Workforce & Practice Trends",
    "IBISWorld — Physical Therapists in the US (2026)",
    "Grand View Research — Physical Therapy Services Market",
    "CMS — Medicare Physician Fee Schedule and Utilization Data",
    "BizMetricsHQ — 180+ physical therapy clinic operator panel",
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
          { label: "US Physical Therapy Market (2026)", value: "$52B – $56B" },
          { label: "Implied US Growth Rate", value: "3 – 5% CAGR" },
          { label: "Median Clinic Revenue", value: "$850K" },
          { label: "Typical Clinic Revenue Range", value: "$600K – $1.9M" },
        ],
      },
      {
        type: "paragraph",
        text: "US physical therapy clinics in 2026 are operating in a large, stable outpatient healthcare category with structural demand from aging demographics and chronic musculoskeletal conditions. BizMetricsHQ analysis across **180+ clinics** indicates median annual clinic revenue of **$850K**, with lower-quartile practices often below **$600K** and top performers exceeding **$1.9M**. At market level, the US sector is estimated at **$52B–$56B** with moderate **3–5%** annual growth, reinforcing a durable but execution-sensitive revenue environment for owners.",
      },
      {
        type: "bullets",
        items: [
          "**Demand is resilient** across orthopedic rehab, post-surgical recovery, and chronic pain management pathways.",
          "**Revenue dispersion is wide** and usually tied to therapist productivity, referral conversion, payer mix, and plan-of-care completion rates.",
          "**Independent clinics** continue to hold meaningful local share, while larger multi-site and PE-backed platforms scale through centralized operations.",
          "The 2026 baseline favors operators who combine visit growth with disciplined reimbursement management and staff retention programs.",
        ],
      },
    ],
  },
  {
    id: "market-size-growth",
    title: "2. Market Size & Growth",
    blocks: [
      {
        type: "paragraph",
        text: "Current US physical therapy market valuations cluster between **$52B and $56B** in 2026, with growth supported by rising utilization among seniors, increasing prevalence of chronic MSK disorders, and broader acceptance of conservative rehabilitation pathways before invasive interventions. While not a hyper-growth segment, physical therapy remains one of the most durable outpatient categories with recurring demand tied to functional recovery and mobility maintenance.",
      },
      {
        type: "table",
        headers: ["Year / Horizon", "US Market Estimate", "Growth View"],
        rows: [
          ["2026 (current)", "$52B – $56B", "Baseline"],
          ["2030 projection", "$60B – $66B", "Moderate expansion"],
          ["2033 projection", "$67B – $75B", "Sustained demand-led growth"],
          ["Implied CAGR (2026–2030)", "3.4 – 4.2%", "Base case"],
          ["Implied CAGR (2026–2033)", "3.7 – 4.9%", "Range by reimbursement scenario"],
        ],
      },
      {
        type: "bullets",
        items: [
          "**2030 outlook:** Incremental market growth is primarily volume-driven, with modest support from acuity-adjusted pricing.",
          "**2033 outlook:** Market scale expands further as older adults represent a larger share of high-frequency rehab utilization.",
          "**Growth quality matters:** Clinics that improve completed plan-of-care rates capture more value than clinics relying only on new eval volume.",
          "**Regional variation remains material:** States with favorable access and referral ecosystems generally grow faster than reimbursement-constrained markets.",
        ],
      },
    ],
  },
  {
    id: "market-drivers-restraints",
    title: "3. Market Drivers & Restraints",
    blocks: [
      {
        type: "paragraph",
        text: "Revenue performance in physical therapy is shaped by a clear push-pull dynamic. Demand-side drivers include an aging population, higher chronic MSK burden, and expanding direct-access laws in many states. The main constraints are operational: staffing shortages, clinician burnout, documentation burden, and relatively flat reimbursement trajectories in key payer segments.",
      },
      {
        type: "stats",
        items: [
          { label: "US Adults with Chronic MSK Symptoms", value: "50M+" },
          { label: "States with Some Direct Access", value: "All 50 (varying limits)" },
          { label: "Clinics Reporting PT Hiring Difficulty", value: "~60%" },
          { label: "Reimbursement Pressure Trend", value: "Flat to mildly negative" },
        ],
      },
      {
        type: "bullets",
        items: [
          "**Aging population:** Higher incidence of mobility impairment and post-acute rehab needs supports recurring visit demand.",
          "**Chronic MSK prevalence:** Long-duration care pathways increase total addressable visits but require strong patient adherence.",
          "**Direct access expansion:** Reduced dependency on physician referrals can improve acquisition velocity for consumer-visible clinics.",
          "**Staffing and burnout:** Capacity ceilings and turnover constrain schedule availability and suppress potential top-line growth.",
          "**Flat reimbursements:** Margin pressure rises when wage inflation outpaces payer rate adjustments.",
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
        text: "Competition spans outpatient private practices, home-health rehabilitation providers, and hospital-based therapy departments. Outpatient clinics typically compete on access speed, continuity of care, and specialization (sports, neuro, pelvic health), while hospital systems compete on integrated referral pipelines. The ownership landscape continues to split between independent operators and PE-backed multi-site groups with stronger capital and recruiting leverage.",
      },
      {
        type: "table",
        headers: ["Care Setting / Ownership Model", "Competitive Advantage", "Revenue Implication"],
        rows: [
          ["Independent outpatient clinics", "Local reputation, flexible service mix", "Higher loyalty, variable scale"],
          ["PE-backed outpatient platforms", "Centralized billing, recruiting, marketing", "Faster expansion, tighter KPI control"],
          ["Home health rehab providers", "In-home convenience for complex patients", "Different payer/channel economics"],
          ["Hospital outpatient departments", "Referral integration, higher acuity capture", "Strong volume but administrative overhead"],
        ],
      },
      {
        type: "bullets",
        items: [
          "**Outpatient clinics** remain the largest visible channel for elective and chronic rehabilitation episodes.",
          "**Independent vs PE-backed** competition is intensifying around therapist recruiting, patient acquisition costs, and digital scheduling convenience.",
          "**Hospital settings** retain an advantage in post-surgical capture but may face slower consumer access workflows.",
          "**Strategic differentiation** increasingly depends on specialty programs, outcomes transparency, and therapist continuity.",
        ],
      },
    ],
  },
  {
    id: "technological-disruptions",
    title: "5. Technological Disruptions",
    blocks: [
      {
        type: "paragraph",
        text: "Technology is moving from optional efficiency tooling to a central growth lever in physical therapy operations. AI documentation assistants such as **Sidekick**, telerehabilitation workflows, and wearable-enabled remote monitoring can reduce administrative drag, improve patient adherence, and expand billable care opportunities beyond in-clinic visit windows.",
      },
      {
        type: "table",
        headers: ["Technology Lever", "Operational Effect", "Revenue / Margin Effect"],
        rows: [
          ["AI scribes (e.g., Sidekick)", "Less note-writing time per visit", "Higher therapist throughput and lower burnout risk"],
          ["Telerehabilitation programs", "Hybrid care continuity between in-person sessions", "Adds incremental follow-up volume"],
          ["Wearable device integration", "Objective movement/adherence tracking", "Improves completion rates and outcomes confidence"],
          ["Automated patient engagement", "Recall, plan reminders, reactivation", "Reduces leakage and cancellation impact"],
        ],
      },
      {
        type: "bullets",
        items: [
          "**AI scribes** can free meaningful therapist time for direct care and patient communication rather than documentation.",
          "**Telerehabilitation** expands geographic reach and helps clinics retain patients who would otherwise discontinue care.",
          "**Wearables** strengthen progress tracking, which supports plan adherence and more complete episode monetization.",
          "Technology ROI is highest when paired with clinical protocol redesign rather than stand-alone software deployment.",
        ],
      },
    ],
  },
  {
    id: "strategic-recommendations",
    title: "6. Strategic Recommendations",
    blocks: [
      {
        type: "paragraph",
        text: "For 2026, clinic owners should prioritize controllable growth levers that improve therapist productivity, preserve clinical quality, and defend margins against reimbursement pressure. High-performing operators treat referral expansion, payer strategy, and workforce design as one integrated system rather than isolated initiatives.",
      },
      {
        type: "bullets",
        items: [
          "**Lift completed plan-of-care rates:** Implement structured follow-up cadences and dropout-risk triggers to convert evaluations into full episodes.",
          "**Optimize payer mix deliberately:** Expand employer/consumer-pay channels where feasible while renegotiating low-yield contracts.",
          "**Build therapist capacity resilience:** Use support staff, templated workflows, and AI-assisted documentation to protect clinician bandwidth.",
          "**Invest in specialty service lines:** Add programs such as pelvic health, vestibular, neuro, or sports rehab to increase differentiation and case value.",
          "**Scale digital patient engagement:** Combine online scheduling, automated reminders, and hybrid telerehab pathways to reduce leakage.",
          "**Track unit economics weekly:** Monitor visits per therapist FTE, cancellation rates, average reimbursement per visit, and cohort completion by payer.",
        ],
      },
      {
        type: "stats",
        items: [
          { label: "Near-Term Owner Priority", value: "Capacity + retention execution" },
          { label: "Primary Risk to Growth", value: "Staffing and reimbursement pressure" },
          { label: "Most Reliable Growth Lever", value: "Episode completion improvement" },
          { label: "2026 Strategic Posture", value: "Operational discipline with selective expansion" },
        ],
      },
    ],
  },
];
