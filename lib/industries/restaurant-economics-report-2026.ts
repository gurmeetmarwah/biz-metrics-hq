import type { ReportSection } from "@/lib/industries/reports/types";

export const reportMeta = {
  slug: "restaurant-economics-2026",
  title: "US Restaurant Industry Economics Report 2026",
  subtitle:
    "A comprehensive analysis of sales projections, consumer behavior, margin pressures, labor dynamics, and technology adoption across the $1.55 trillion US restaurant economy.",
  description:
    "2026 US restaurant industry economics report: $1.55T projected sales, 1.3% real growth, uneven traffic, 3–5% operator margins, 42% unprofitable, tariff-driven menu inflation, generational spending shifts, and AI adoption imperatives.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "8 min",
  href: "/reports/restaurant-economics-2026/",
  sources: [
    "National Restaurant Association — State of the Restaurant Industry 2026",
    "Technomic — US Foodservice Outlook",
    "Bureau of Labor Statistics — Leisure & Hospitality Employment",
    "USDA ERS — Food Price Outlook 2026",
    "Federal Reserve — Consumer Expenditure Surveys",
    "BizMetricsHQ — Independent Restaurant Operator Panel (680+ businesses)",
  ],
} as const;

export const reportSections: readonly ReportSection[] = [
  {
    id: "executive-summary",
    title: "1. Executive Summary",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "Projected Industry Sales (2026)", value: "$1.55T" },
          { label: "Real Growth (Inflation-Adjusted)", value: "+1.3%" },
          { label: "Operators Reporting Unprofitable", value: "42%" },
          { label: "Typical Net Margin Range", value: "3–5%" },
        ],
      },
      {
        type: "paragraph",
        text: "The US restaurant industry enters 2026 at a **$1.55 trillion** inflection point — a nominal sales milestone that masks a far more complex operating reality. After years of post-pandemic recovery, growth has decelerated to a **1.3% real (inflation-adjusted) gain**, reflecting an economy where consumers still dine out but do so with greater selectivity, sharper price sensitivity, and widening generational divergence in spending patterns.",
      },
      {
        type: "paragraph",
        text: "Traffic remains **uneven across dayparts, formats, and income cohorts**. Inflation, a cooling labor market, and **tariff-driven commodity cost increases** are pushing menu prices up an estimated **3.9% year-over-year** — a rate that outpaces wage growth for many households and compresses visit frequency among younger diners. Yet the industry is not in uniform decline: premium and experience-led concepts continue to capture share, while value-oriented operators who confuse discounting with genuine value proposition are losing ground.",
      },
      {
        type: "bullets",
        items: [
          "**Bottom line:** Revenue is growing in dollars but not in visits. Winning operators are protecting margin through menu engineering, labor productivity, and technology — not promotional depth.",
          "**Structural pressure:** **42% of operators** reported being unprofitable in recent industry surveys, operating on **3–5% net margins** squeezed by food costs, labor, insurance premiums, and payment processing fees.",
          "**Workforce:** Industry employment is projected to reach **15.8 million**, but hiring and retention remain acute challenges — particularly for skilled kitchen and management roles.",
          "**Technology shift:** A structural pivot from **buying to building** AI capabilities — predictive analytics, automated ordering, demand forecasting — is emerging as a margin survival strategy, not a novelty investment.",
        ],
      },
    ],
  },
  {
    id: "market-overview",
    title: "2. Market Overview & Sales Projections",
    blocks: [
      {
        type: "paragraph",
        text: "The **$1.55 trillion** sales projection for 2026 represents the restaurant and foodservice industry's largest nominal revenue figure on record. Context matters: much of this growth is **price-driven rather than volume-driven**. Nominal sales expansion of roughly **4–5%** is partially offset by menu price increases and mix shift, yielding only **1.3% real growth** once inflation is stripped out.",
      },
      {
        type: "table",
        headers: ["Metric", "2026 Projection", "Interpretation"],
        rows: [
          ["Total Industry Sales", "$1.55 trillion", "Record nominal revenue; modest real expansion"],
          ["Real Sales Growth", "+1.3%", "Below long-term historical average of ~2%"],
          ["Menu Price Inflation", "~+3.9% YoY", "Tariff pass-through + labor cost recovery"],
          ["Industry Employment", "15.8 million", "Near-record headcount; productivity gap persists"],
          ["Unprofitable Operators", "42%", "Nearly half of operators under water or break-even"],
        ],
      },
      {
        type: "paragraph",
        text: "What the **$1.55T milestone means** for operators depends entirely on segment and geography. **Limited-service** (fast food, fast casual, coffee) continues to capture disproportionate visit share due to speed, value perception, and digital ordering infrastructure. **Full-service** dining faces the steepest traffic headwinds outside of special-occasion and premium tiers. **Off-premise** (delivery, takeout, drive-thru) now represents a structural baseline rather than a pandemic-era anomaly — concepts without robust off-premise economics are at a structural disadvantage.",
      },
      {
        type: "bullets",
        items: [
          "**Sales composition:** Roughly **55–60%** of industry revenue flows through chain and franchise systems; independents (~340,000+ locations) compete on locality, chef-driven differentiation, and operational agility.",
          "**Geographic divergence:** Sun Belt and suburban markets show stronger traffic resilience; urban cores face office-lunch recovery gaps and higher operating costs.",
          "**Daypart dynamics:** Breakfast and afternoon dayparts are growing faster than dinner in many limited-service formats; full-service dinner remains the highest-check but most traffic-volatile daypart.",
          "**Investment implication:** Top-line growth alone will not restore profitability. Operators must treat **margin recovery** as the primary 2026 KPI.",
        ],
      },
    ],
  },
  {
    id: "consumer-trends",
    title: "3. Consumer Trends & Sentiment",
    blocks: [
      {
        type: "paragraph",
        text: "2026 is defined by a **dining divide** — not between dining in and dining out, but between **deal-hunting** and **splurging** within the same consumer base. Households are not uniformly pulling back; they are **reallocating** spend toward occasions that justify the check and away from routine meals that feel overpriced relative to perceived quality.",
      },
      {
        type: "table",
        headers: ["Consumer Cohort", "2026 Spend Trend", "Behavioral Signal"],
        rows: [
          ["Ages 25–34", "Weakest growth", "Price-sensitive; fewer discretionary visits; delivery-heavy"],
          ["Ages 35–54", "Moderate / mixed", "Family dining trade-offs; value bundles over à la carte"],
          ["Ages 55+", "Most resilient", "Higher visit frequency; loyalty to familiar brands and full-service"],
          ["High-income ($150K+)", "Splurge segment growing", "Experience, protein quality, premium spirits"],
          ["Middle-income", "Bifurcated", "Strategic value seekers — not pure discount hunters"],
        ],
      },
      {
        type: "paragraph",
        text: "The definition of **'value'** has fundamentally shifted. Consumers in 2026 are not simply seeking the lowest price — they are evaluating **total perceived value**: portion adequacy, protein quality, health benefits, service speed, ambiance, and digital convenience. A **10% discount** on a mediocre experience converts less effectively than a **$15 lunch combo** with transparent ingredients and a 12-minute ticket time.",
      },
      {
        type: "bullets",
        items: [
          "**Deal-hunting behavior** persists but has become more strategic — consumers use loyalty apps, targeted promotions, and daypart-specific offers rather than broad couponing.",
          "**Splurging behavior** concentrates in premium proteins (steak, seafood, craft cocktails), chef-driven tasting menus, and celebratory occasions where experience justifies premium pricing.",
          "**Health & wellness** continues to influence menu mix — not as a niche trend but as a baseline expectation, particularly among millennial and Gen Z diners who index higher on protein-forward, minimally processed options.",
          "**Younger demographic weakness (25–34)** reflects housing costs, student debt service, and labor market cooling in entry-level professional roles — this cohort is delaying family formation and reducing frequency of full-service visits.",
          "**Digital-first ordering** is now default for limited-service; friction in app experience, delivery fees, and tip expectations are active deterrents to repeat visits.",
        ],
      },
    ],
  },
  {
    id: "operational-headwinds",
    title: "4. Operational Headwinds",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "Operators Unprofitable", value: "42%" },
          { label: "Typical Net Margin", value: "3–5%" },
          { label: "Menu Price Increase (YoY)", value: "~3.9%" },
          { label: "Projected Employment", value: "15.8M" },
        ],
      },
      {
        type: "paragraph",
        text: "Restaurant operators in 2026 are navigating a **convergence of margin pressures** that cannot be solved by a single lever. Food costs, labor, insurance, rent escalations, and payment processing fees are each consuming points of margin that most operators do not have to give. The result: **42% of operators report being unprofitable**, and even profitable units often run on **3–5% net margins** — leaving minimal buffer for equipment failure, liability claims, or a single quarter of traffic softness.",
      },
      {
        type: "table",
        headers: ["Cost Category", "2026 Pressure", "Operator Impact"],
        rows: [
          ["Food & Commodities", "Tariff-driven increases on proteins, produce, packaging", "COGS up 50–120 bps; menu repricing risk"],
          ["Labor", "Wage inflation + hiring difficulty", "Labor 28–35% of revenue; overtime leakage"],
          ["Insurance", "GL, workers' comp, property premiums rising", "Fixed cost creep; multi-unit exposure amplified"],
          ["Payment Processing", "Swipe fees 2.5–3.5% of card revenue", "Effective tax on every digital transaction"],
          ["Occupancy", "Lease renewals at elevated rates", "Rent 6–10% of revenue in urban markets"],
        ],
      },
      {
        type: "paragraph",
        text: "**Tariff-driven commodity costs** are a defining 2026 variable. Import duties on food packaging, select proteins, and agricultural inputs are flowing through distributor invoices with a **3–6 month lag**, meaning operators who locked 2025 contracts are now facing renewal shocks. Menu price increases of **~3.9% YoY** are partially a pass-through mechanism — but operators who raise prices faster than competitors without improving perceived value risk accelerating traffic decline.",
      },
      {
        type: "bullets",
        items: [
          "**Structural labor shortage:** Employment may reach **15.8 million**, but open positions for cooks, dishwashers, and general managers remain unfilled for weeks. Operators are compensating with overtime, simplified menus, and reduced operating hours — each a margin-negative adaptation.",
          "**Wage compression:** Entry-level wage floors have risen in most states; tip-credit debates and minimum wage ballot measures add regulatory uncertainty for full-service models.",
          "**Insurance hard market:** General liability and workers' compensation premiums have increased **8–15%** for many operators since 2024, with carriers tightening underwriting for bars, pizzerias, and high-volume QSR.",
          "**Swipe fee burden:** As cashless transactions exceed **80%** at many concepts, interchange fees function as a silent partner taking **2.5–3.5%** of gross revenue — a cost line that did not exist at this scale a decade ago.",
        ],
      },
    ],
  },
  {
    id: "strategic-imperatives",
    title: "5. Strategic Imperatives for Operators",
    blocks: [
      {
        type: "paragraph",
        text: "Operators who are navigating 2026 profitably share a common profile: they treat **margin management as a daily discipline**, not a quarterly accounting exercise. Success is less about concept novelty and more about **operational precision** — supply-chain flexibility, labor scheduling science, menu engineering, and technology deployment that reduces waste rather than adding complexity.",
      },
      {
        type: "bullets",
        items: [
          "**Supply-chain flexibility:** Dual-source critical proteins and produce; negotiate shorter contract cycles (90-day vs. annual) to preserve pricing agility; build strong distributor relationships that provide allocation priority during shortages.",
          "**Menu engineering 2.0:** Analyze contribution margin by item, not just popularity. Retire low-margin SKUs, bundle high-margin proteins with sides, and use LTOs to test price elasticity before permanent menu changes.",
          "**Labor productivity:** Cross-train front- and back-of-house; deploy scheduling software tied to forecasted covers; reduce menu complexity to lower skill requirements and training time.",
          "**Strategic value, not discounting:** Replace blanket promotions with targeted loyalty offers, daypart bundles, and experience upgrades (premium protein add-ons, wine pairings) that protect margin while increasing perceived value.",
          "**Off-premise optimization:** Treat delivery as a profit center with menu-specific pricing, packaging cost control, and aggregator fee negotiation — not a loss-leader channel.",
        ],
      },
      {
        type: "paragraph",
        text: "The **AI and technology shift** is the most significant structural change in restaurant operations since the POS revolution. In 2026, leading operators are moving from **buying point solutions** (a scheduling app here, an inventory tool there) to **building integrated data capabilities** — unified platforms that connect sales forecasting, prep lists, labor scheduling, and purchasing into a single predictive loop.",
      },
      {
        type: "table",
        headers: ["Technology Capability", "Primary Use Case", "Margin Impact"],
        rows: [
          ["Predictive demand analytics", "Forecast covers by daypart; reduce over-prep waste", "−1 to −2 pts COGS waste"],
          ["Automated ordering (kiosk, app, AI phone)", "Reduce labor per transaction; increase attach rate", "−0.5 to −1.5 pts labor"],
          ["Dynamic labor scheduling", "Match staffing to forecasted demand", "−1 to −2 pts labor overtime"],
          ["Inventory & purchasing AI", "Auto-generate purchase orders; flag price anomalies", "−0.5 to −1 pt COGS"],
          ["Guest data & personalization", "Targeted offers vs. blanket discounts", "+1 to −3 pts traffic retention"],
        ],
      },
      {
        type: "paragraph",
        text: "The operators who survive 2026 will not necessarily be the largest — they will be the **most data-literate**. Independent restaurants with **$500K–$2M revenue** can now access forecasting and scheduling tools that were chain-exclusive five years ago. The competitive gap is closing for operators willing to invest **60–90 days** in implementation and staff training rather than treating technology as a plug-and-play expense.",
      },
    ],
  },
  {
    id: "future-outlook",
    title: "6. Future Outlook: Late 2026 & 2027",
    blocks: [
      {
        type: "paragraph",
        text: "The remainder of 2026 and the transition into 2027 will be shaped by **three watch variables**: the trajectory of food commodity prices (particularly tariff policy outcomes), the resilience of consumer spending as labor markets cool, and the pace of restaurant technology adoption across independents and mid-market chains.",
      },
      {
        type: "bullets",
        items: [
          "**Traffic recovery is not guaranteed.** Real sales growth of **1.3%** suggests the industry has entered a low-growth volume environment. Operators should plan for flat-to-modest visit growth and compete on check average and margin rather than cover count alone.",
          "**Consolidation will accelerate.** With **42% of operators unprofitable**, acquisition opportunities for well-capitalized groups and franchise systems will increase. Independent sellers should prepare clean financials and document transferable systems before distress selling.",
          "**Menu inflation will moderate — but not reverse.** Expect menu price growth to decelerate from **~3.9%** toward **2.5–3.0%** by late 2026 if commodity pressures ease, but operators who cut prices risk training consumers to wait for promotions.",
          "**AI adoption reaches tipping point.** By Q4 2026, predictive ordering and automated scheduling will move from early-adopter to **table-stakes** for competitive limited-service operators. Full-service adoption will lag 12–18 months but follow the same curve.",
          "**Generational shift deepens.** Weakness among **25–34** diners will persist until housing affordability improves; concepts targeting this cohort must lead on digital value, health-forward menus, and social experience — not price alone.",
          "**Labor market bifurcation.** Hiring will remain difficult for skilled roles while entry-level supply stabilizes. Wage growth will moderate but not retreat — operators must engineer labor out of repetitive tasks via technology.",
        ],
      },
      {
        type: "table",
        headers: ["Scenario", "2027 Real Growth", "Key Assumption"],
        rows: [
          ["Base case", "+1.0% to +1.5%", "Soft landing; moderate commodity relief; steady employment"],
          ["Upside", "+2.0% to +2.5%", "Tariff rollback; consumer confidence rebound; traffic recovery"],
          ["Downside", "0% to +0.5%", "Recessionary spending pullback; sustained food inflation; credit tightening"],
        ],
      },
      {
        type: "paragraph",
        text: "**Investment view:** The US restaurant industry remains an essential sector of the economy — **$1.55 trillion in sales** and **15.8 million jobs** confirm its scale. But 2026 is a **margin year, not a growth year**. Operators, investors, and advisors should underwrite acquisitions and expansion plans against **3–5% net margins**, not the 8–12% figures that characterized pre-2019 benchmarks. Those who invest in supply-chain agility, labor productivity, and integrated AI capabilities today will be positioned to capture share as weaker competitors exit — whether through closure, sale, or consolidation into multi-unit platforms.",
      },
    ],
  },
] as const;

export const industryInsights = [
  {
    title: "US Restaurant Industry Outlook 2026",
    href: "/reports/restaurant-economics-2026/#executive-summary",
    metric: "$1.55T sales · +1.3% real growth",
  },
  {
    title: "Consumer Trends & the Dining Divide",
    href: "/reports/restaurant-economics-2026/#consumer-trends",
    metric: "Value over discounts",
  },
  {
    title: "Margin Pressures & Cost Headwinds",
    href: "/reports/restaurant-economics-2026/#operational-headwinds",
    metric: "42% unprofitable",
  },
  {
    title: "AI & Technology Adoption",
    href: "/reports/restaurant-economics-2026/#strategic-imperatives",
    metric: "Buy → build shift",
  },
  {
    title: "2026–2027 Outlook Scenarios",
    href: "/reports/restaurant-economics-2026/#future-outlook",
    metric: "3 forecast scenarios",
  },
] as const;
