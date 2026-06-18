import type { ReportSection } from "@/lib/industries/reports/types";

export const reportMeta = {
  slug: "hvac-benchmarks-2026",
  title: "2026 US HVAC Industry Economic & Market Report",
  subtitle:
    "Investment-grade analysis of market size, electrification trends, regulatory shifts, labor constraints, regional growth, and competitive dynamics across the U.S. HVAC equipment, services, and software ecosystem.",
  description:
    "2026 U.S. HVAC industry report: $80B–$165B market scope (by definition), 4.7–6.9% CAGR, heat pump adoption at 47% of cooling shipments, A2L/SEER2 compliance, IRA incentive shifts, technician shortage, and service-first competitive models.",
  published: "June 2026",
  dataVintage: "2025–2026",
  readTime: "9 min",
  href: "/reports/hvac-benchmarks-2026/",
  sources: [
    "Mordor Intelligence — U.S. HVAC Equipment & Services Market (2026)",
    "Grand View Research — U.S. HVAC Systems Market Report",
    "RMI — Heat Pump & Water Heater Market Tracker (AHRI data)",
    "AHRI — Shipment Statistics (2025 year-end, Feb 2026 release)",
    "Bureau of Labor Statistics — HVACR Occupational Outlook (2024–2034)",
    "EPA — AIM Act HFC Phasedown & A2L Refrigerant Transition",
    "IRS / DOE — Section 25C repeal & HEAR/HOMES rebate programs",
    "BizMetricsHQ — HVAC Operator Panel (420+ businesses)",
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
          { label: "Equipment + Services Market (2026)", value: "~$80B" },
          { label: "CAGR (2026–2030 est.)", value: "4.7–6.9%" },
          { label: "Heat Pump Share of Cooling Shipments", value: "47%" },
          { label: "Annual Technician Openings (BLS)", value: "~40,100" },
        ],
      },
      {
        type: "paragraph",
        text: "The U.S. HVAC industry in 2026 is defined by **regulatory transition, electrification acceleration, and margin defense** — not by uniform volume growth. Equipment-and-services revenue is projected at **~$80 billion** ([Mordor Intelligence](https://www.mordorintelligence.com/industry-reports/united-states-hvac-equipment-and-services-market)), with broader contractor-ecosystem estimates reaching **$120B–$165B** depending on whether maintenance, software, and commercial mechanical scope are included. Growth is driven by replacement cycles, heat pump adoption, data-center cooling demand, and policy-led retrofits — partially offset by elevated financing costs, refrigerant transition inventory corrections, and a structural technician shortage affecting service capacity and margins.",
      },
    ],
  },
  {
    id: "market-size",
    title: "2. Market Size & Economic Outlook",
    blocks: [
      {
        type: "paragraph",
        text: "**Market sizing requires explicit scope definition.** Published 2026 U.S. HVAC valuations range from **~$34 billion** (equipment systems only) to **~$199 billion** (broad equipment + services + contractor revenue). This report anchors on two peer-reviewed commercial datasets and notes where estimates diverge.",
      },
      {
        type: "table",
        headers: ["Market Definition", "2026 Size", "CAGR (Forecast Period)", "Source"],
        rows: [
          [
            "HVAC equipment + services (U.S.)",
            "$79.96B",
            "4.69% (2026–2031)",
            "[Mordor Intelligence](https://www.mordorintelligence.com/industry-reports/united-states-hvac-equipment-and-services-market)",
          ],
          [
            "HVAC systems / equipment only (U.S.)",
            "$33.93B",
            "6.9% (2026–2033)",
            "[Grand View Research](https://www.grandviewresearch.com/industry-analysis/us-hvac-systems-market)",
          ],
          [
            "Broader contractor ecosystem (est.)",
            "$120B–$165B",
            "6.4–7.4% (varies by scope)",
            "Industry synthesis; see methodology note below",
          ],
        ],
      },
      {
        type: "paragraph",
        text: "**CAGR methodology:** Compound annual growth rate is calculated as CAGR = (V_f / V_0)^(1/n) − 1, where V_0 is the base-year market value, V_f is the terminal-year value, and n is the number of years. Applying this to [Mordor Intelligence](https://www.mordorintelligence.com/industry-reports/united-states-hvac-equipment-and-services-market) figures ($79.96B in 2026 → $100.55B in 2031) yields **4.69% CAGR**. [Grand View Research](https://www.grandviewresearch.com/industry-analysis/us-hvac-systems-market) projects equipment revenue from **$33.93B (2026) to $54.02B (2033)**, implying **6.9% CAGR** — faster on equipment-only scope because services and replacement revenue are excluded.",
      },
      {
        type: "paragraph",
        text: "**Macroeconomic context for 2026:** Elevated interest rates continue to suppress discretionary system replacements and new-construction HVAC spend, particularly in residential new builds. Commercial construction shows modest employment growth (**+0.7% YoY** as of March 2026 per [ACHR News / BLS construction data](https://www.achrnews.com/articles/166187-how-hvac-contractors-can-solve-labor-woes-in-the-age-of-ai)), while data-center and industrial cooling projects provide a counter-cyclical demand pillar. Inflation in skilled labor and refrigerant-compliant equipment persists, compressing contractor gross margins even where top-line revenue grows.",
      },
      {
        type: "bullets",
        items: [
          "**Replacement over new-build:** [Mordor Intelligence](https://www.mordorintelligence.com/industry-reports/united-states-hvac-equipment-and-services-market) reports retrofits/replacements expanding at **5.74% CAGR** vs. new installations at **43.62%** of 2025 revenue — signaling a mature, replacement-driven market.",
          "**Split systems lead equipment mix:** **36.92%** revenue share in 2025; heat pumps are the fastest-growing equipment category at **5.89% CAGR** through 2031.",
          "**Software & IoT adjacency:** Field-service software, connected thermostats, and building-automation platforms are not fully captured in equipment-only forecasts but represent a growing margin pool for service-first contractors.",
          "**Estimation note:** Broader **$120B–$165B** figures include residential/commercial service labor, maintenance agreements, and distributor markups. Where exact 2026 audited totals are unavailable, we triangulate from Mordor services scope + ACCA contractor revenue benchmarks + BLS HVAC employment × revenue-per-tech estimates.",
        ],
      },
    ],
  },
  {
    id: "key-drivers",
    title: "3. Key Drivers & Trends",
    blocks: [
      {
        type: "paragraph",
        text: "**3.1 Electrification & Heat Pump Adoption**",
      },
      {
        type: "paragraph",
        text: "Heat pumps have **outsold gas furnaces every year since 2021** per [RMI's AHRI shipment tracker](https://rmi.org/resources/tracking-the-heat-pump-water-heater-market-in-the-united-states/). In 2025, manufacturers shipped **3.6 million heat pumps vs. 3.2 million gas furnaces** — a **12% unit gap**. Heat pumps now represent **47% of residential cooling equipment shipments**, up from **33% a decade ago** ([RMI / AHRI](https://rmi.org/resources/tracking-the-heat-pump-water-heater-market-in-the-united-states/)). In Q4 2025, heat pumps **outsold one-way air conditioners for the first time** in October–December ([ServiceMag / AHRI](https://servicemag.org/news/heat-pumps-outsell-gas-furnaces)).",
      },
      {
        type: "table",
        headers: ["Metric", "2025 Data", "Trend"],
        rows: [
          ["Heat pump unit shipments", "3.6M", "+12% vs. gas furnaces"],
          ["Gas furnace shipments", "3.2M", "Declining YoY"],
          ["Heat pump share of cooling equipment", "47%", "Up from 33% (10-yr)"],
          ["Installed gas furnace base (est.)", "~60M units", "15–20 yr service tail"],
        ],
      },
      {
        type: "paragraph",
        text: "**3.2 Regulatory Shifts — A2L, Low-GWP, and SEER2**",
      },
      {
        type: "bullets",
        items: [
          "**A2L refrigerant mandate:** Equipment manufactured after **January 1, 2025** for most residential/light-commercial applications must use lower-GWP A2L refrigerants (e.g., R-454B replacing R-410A) per [EPA AIM Act phasedown rules](https://www.epa.gov/climate-hfcs-reduction). The transition contributed to **2025 inventory pre-buying** and **early-2026 shipment softness** as distributors cleared legacy R-410A stock ([RMI](https://rmi.org/resources/tracking-the-heat-pump-water-heater-market-in-the-united-states/)).",
          "**Installation capex impact:** A2L systems require updated tooling, leak detection, and technician certification. Industry estimates add **$200–$800 per install** in incremental labor and equipment costs — not always passed through in equipment BOM, but material to contractor margins.",
          "**SEER2 efficiency standards:** Higher minimum efficiency ratings (SEER2, HSPF2, EER2) effective since 2023 raise baseline equipment costs **8–15%** vs. legacy SEER-rated systems while improving operating economics over system life.",
          "**Federal incentives — 2026 shift:** The **Section 25C** federal tax credit (up to **$2,000** for qualifying air-source heat pumps) **expired December 31, 2025** under the One Big Beautiful Bill Act ([IRS guidance via VouchedPros](https://vouchedpros.com/hvac/policy/ira-overview)). **Geothermal heat pumps** remain eligible for **30% credit under Section 25D through 2032**. IRA-funded **HEAR/HOMES state rebates** (up to **$8,000** point-of-sale for income-qualified households) continue where states have launched programs ([DOE Home Energy Rebates](https://www.energy.gov/scep/home-energy-rebates)).",
        ],
      },
      {
        type: "paragraph",
        text: "**3.3 Smart HVAC, IoT, and AI-Driven Precision Cooling**",
      },
      {
        type: "bullets",
        items: [
          "**Connected thermostats & demand response:** Utility-sponsored load-shifting programs increasingly require smart thermostat integration — creating recurring software revenue and stickier customer relationships for contractors who own the platform relationship.",
          "**Predictive maintenance:** AI-driven fault detection on commercial RTUs and chillers reduces emergency call volume and extends equipment life — shifting contractor value from reactive repair to uptime guarantees.",
          "**Data-center liquid cooling:** AI server density is driving a **precision cooling supercycle** in Texas, Virginia, and other data-center hubs ([MarkWide Research](https://markwideresearch.com/united-states-hvac-equipment-and-services-market)). Liquid-to-chip and rear-door heat exchanger deployments represent the highest-growth commercial HVAC sub-segment in 2026 — distinct from residential replacement economics.",
          "**Field-service AI:** Dispatch optimization, dynamic pricing, and technician copilot tools are moving from enterprise chains to independent contractors via SaaS — compressing admin overhead **1–3 margin points** for early adopters.",
        ],
      },
    ],
  },
  {
    id: "challenges",
    title: "4. Challenges & Constraints",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "HVACR Employment (2024)", value: "425,200" },
          { label: "Projected Job Growth (2024–2034)", value: "+8%" },
          { label: "Annual Openings (BLS)", value: "~40,100" },
          { label: "Median Technician Wage (2024)", value: "$59,810" },
        ],
      },
      {
        type: "paragraph",
        text: "**Skilled labor shortage** is the binding constraint on industry growth. The [Bureau of Labor Statistics](https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm) projects **8% employment growth** from 2024 to 2034 — much faster than the all-occupations average — with **~40,100 openings per year**. Nearly **40% of the skilled trades workforce** will be retirement-eligible within a decade ([ACHR News](https://www.achrnews.com/articles/166295-hvac-workforce-crisis-expands-beyond-technicians-to-instructor-shortages)). The shortage extends to **CTE instructors**: at least **26 states** reported career-and-technical-education teacher shortages in 2025–26, limiting pipeline expansion.",
      },
      {
        type: "table",
        headers: ["Labor Metric", "Figure", "Source"],
        rows: [
          ["BLS median annual wage (2024)", "$59,810 ($28.75/hr)", "[BLS OOH](https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm)"],
          ["Journeyman total comp (residential, 2026 est.)", "$75K–$95K", "[Pipeline On / BLS OEWS](https://pipelineon.com/blog/hvac-technician-salary/)"],
          ["Senior tech / comfort advisor (commission)", "$120K–$250K+", "[Pipeline On](https://pipelineon.com/blog/hvac-technician-salary/)"],
          ["CTE instructor shortage states", "26+ states", "[ACHR News](https://www.achrnews.com/articles/166295-hvac-workforce-crisis-expands-beyond-technicians-to-instructor-shortages)"],
        ],
      },
      {
        type: "paragraph",
        text: "**Rising technician wages** are a margin event, not merely a labor-market statistic. Contractors competing on base wage alone lose journeymen to shops offering total-compensation packages (truck, tools, spiffs, 401k, predictable schedules). Wage pressure flows directly into **service truck roll costs** — the primary variable cost in residential HVAC — compressing net margins **50–150 bps** industry-wide in 2025–2026.",
      },
      {
        type: "bullets",
        items: [
          "**Backlog bottlenecks:** Peak-season demand (June–August cooling, December–February heating) creates **3–6 week install backlogs** in high-growth Sun Belt markets. Deferred maintenance converts to emergency calls at higher margin but lower customer satisfaction.",
          "**Supply chain & inventory:** A2L transition caused distributor inventory imbalances in early 2026 — January heat pump/A/C shipments fell **~29% YoY** while distributor revenue held flat, indicating warehouse destocking rather than demand collapse ([Free Agency / AHRI](https://freeagency.ai/state-of-hvac-industry-2026/)).",
          "**Refrigerant availability:** Reported shortages of A2L refrigerant supply in select regions add procurement risk and extend job completion times.",
          "**Service margin squeeze:** Install margins remain healthier than service/maintenance in many markets because install pricing absorbed equipment cost inflation more effectively than service labor rates. Contractors over-indexed on install during 2021–2023 boom are now rebuilding maintenance contract books.",
        ],
      },
    ],
  },
  {
    id: "regional-focus",
    title: "5. Regional Focus",
    blocks: [
      {
        type: "paragraph",
        text: "HVAC demand in 2026 is **geographically bifurcated**: climate-driven cooling intensity in the Sun Belt vs. policy-driven electrification retrofits in California and the Northeast. Understanding regional mix is critical for equipment manufacturers, distributors, and contractor expansion strategy.",
      },
      {
        type: "table",
        headers: ["Region", "Primary Demand Driver", "2026 Growth Profile"],
        rows: [
          [
            "Southeast & Sun Belt (TX, FL, AZ, GA)",
            "Cooling load, population migration, new construction",
            "Highest unit volume; extreme heat extends cooling season",
          ],
          [
            "California & Pacific Northwest",
            "Building electrification codes, heat pump mandates, IRA state rebates",
            "Policy-led retrofit acceleration; cold-climate HP demand",
          ],
          [
            "Northeast (NY, MA, CT, NJ)",
            "HEAR/HOMES rebates, utility incentives (e.g., Mass Save), aging housing stock",
            "Strong replacement + electrification stack; high labor costs",
          ],
          [
            "Texas & Virginia (data-center corridor)",
            "AI server density, hyperscale construction",
            "Fastest commercial/precision-cooling growth",
          ],
          [
            "Midwest & Northern states",
            "Heating-season furnace/HP replacement, commercial baseline",
            "Moderate growth; seasonal cash-flow concentration",
          ],
        ],
      },
      {
        type: "bullets",
        items: [
          "**Sun Belt cooling demand:** Longer cooling seasons and record heat events increase runtime hours, filter/refrigerant service frequency, and premature compressor replacements — boosting recurring service revenue per installed unit.",
          "**California electrification:** State and local building codes increasingly restrict new gas furnace installations in new construction; existing-building retrofit programs favor heat pump conversions with stacked utility rebates.",
          "**Northeast rebate stacking:** Income-qualified households in active HEAR states (e.g., Massachusetts) can combine **$8,000 federal point-of-sale rebates** with **$2,000–$8,500 utility incentives** — materially shifting heat pump payback periods despite the Section 25C federal tax credit expiration ([Pipeline On](https://pipelineon.com/blog/hvac-rebate-programs/)).",
          "**Seattle / Pacific NW leadership:** Municipal heat pump adoption has outpaced national averages since 2014; Seattle mechanical permit data shows heat pump installs at **4:1 vs. gas furnaces** in recent years ([PNW Residences / AHRI](https://www.pnwresidences.com/blog/hvac-stats-2026/)).",
        ],
      },
    ],
  },
  {
    id: "competitive-landscape",
    title: "6. Competitive Landscape",
    blocks: [
      {
        type: "paragraph",
        text: "The U.S. HVAC market is **highly fragmented at the contractor level** and **moderately concentrated at the equipment level**. The top 10 national HVAC service brands hold an estimated **15–25%** of the contractor market; roughly **120,000** independent heating and air businesses account for the remainder ([Free Agency](https://freeagency.ai/state-of-hvac-industry-2026/)). Private equity roll-ups continue consolidating regional contractors, but no single brand dominates nationwide service delivery.",
      },
      {
        type: "table",
        headers: ["Manufacturer", "Key Brands / Positioning", "Strategic Focus 2026"],
        rows: [
          ["Carrier Global (NYSE: CARR)", "Carrier, Bryant, Payne", "Heat pump portfolio expansion, IoT via Carrier Abound"],
          ["Trane Technologies (NYSE: TT)", "Trane, American Standard", "Commercial HVAC, energy services, sustainability"],
          ["Daikin Industries", "Daikin, Goodman, Amana", "Ductless/VRF, value-tier residential, global scale"],
          ["Lennox International (NYSE: LII)", "Lennox, Armstrong Air", "Premium residential, dealer network density"],
          ["Johnson Controls (NYSE: JCI)", "York, Metasys BMS", "Commercial buildings, smart building integration"],
          ["Rheem Manufacturing", "Rheem, Ruud", "Residential water heating + HVAC bundle"],
          ["Mitsubishi Electric", "Mitsubishi Electric, Trane ductless JV", "Ductless mini-split, cold-climate heat pumps"],
        ],
      },
      {
        type: "bullets",
        items: [
          "**Equipment layer:** Manufacturers compete on efficiency ratings, refrigerant compliance, distributor coverage, and dealer/installer training support. Heat pump SKU proliferation is the primary 2026 product battleground.",
          "**Distribution layer:** Watsco, Ferguson, and regional distributors control inventory allocation during A2L transition — distributor relationships are a competitive moat for contractors.",
          "**Service-first business models:** Leading contractors derive **35–55%** of revenue from maintenance agreements and recurring service (BizMetricsHQ panel median: **~38%**). IoT-connected systems enable proactive service scheduling and reduce customer churn.",
          "**Private equity thesis:** Recurring service revenue, essential-demand positioning, and fragmented ownership attract PE platforms rolling up regional contractors at **4–7× EBITDA** — compressing multiples for independent sellers who lack scale.",
          "**Software-enabled contractors:** Field-service management (ServiceTitan, Housecall Pro, Jobber), dynamic pricing, and AI dispatch are separating top-quartile operators (12–18% net margin) from median shops (8–12%).",
        ],
      },
      {
        type: "paragraph",
        text: "**Investment view:** Equipment manufacturers with heat pump-ready portfolios and strong distributor networks are positioned for regulatory tailwinds. Contractors who build **maintenance contract penetration above 35%**, invest in A2L-certified technician training, and adopt service-first IoT platforms will outperform on margin resilience through the 2026–2027 refrigerant and incentive transition. The industry's structural growth is secure — **8% BLS employment growth** and **$80B+ equipment/services revenue** confirm essential-demand status — but **profit pools accrue to operators who solve the labor bottleneck**, not those who compete on install price alone.",
      },
    ],
  },
] as const;

export const industryInsights = [
  {
    title: "US HVAC Industry Outlook 2026",
    href: "/reports/hvac-benchmarks-2026/#executive-summary",
    metric: "~$80B market · 4.7% CAGR",
  },
  {
    title: "Heat Pump Adoption & Electrification",
    href: "/reports/hvac-benchmarks-2026/#key-drivers",
    metric: "47% of cooling shipments",
  },
  {
    title: "A2L Refrigerant & SEER2 Compliance",
    href: "/reports/hvac-benchmarks-2026/#key-drivers",
    metric: "Regulatory transition",
  },
  {
    title: "Technician Shortage & Labor Costs",
    href: "/reports/hvac-benchmarks-2026/#challenges",
    metric: "~40K openings/yr",
  },
  {
    title: "Regional Growth & Competitive Landscape",
    href: "/reports/hvac-benchmarks-2026/#competitive-landscape",
    metric: "Sun Belt + data centers",
  },
] as const;
