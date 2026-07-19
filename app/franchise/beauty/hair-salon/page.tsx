import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IndustrySectionNav } from "@/components/industry/IndustrySectionNav";
import { CalculatorHubGrid } from "@/components/industry/CalculatorHubGrid";
import { LinkCardGrid } from "@/components/industry/LinkCardGrid";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { CustomerMetricsPanel, StartupCostBreakdownPanel } from "@/components/industry/PoolServiceIndustryPanels";
import { HashLink } from "@/components/ui/HashLink";
import { businessQuestionFaqs } from "@/lib/franchise/beauty/hair-salon-questions";
import {
  economicsRows,
  executiveKpis,
  franchiseBrands,
  franchiseCalculators,
  franchiseFaqs,
  franchisePageMeta,
  franchiseRankings,
  franchiseVsIndependent,
  heroCtas,
  relatedFranchiseIndustries,
  sectionNav,
  startupCostBreakdown,
  startupCostTotal,
  whichIsBestCards,
} from "@/lib/franchise/beauty/hair-salon-franchise";

export const metadata: Metadata = {
  title: `${franchisePageMeta.title} | BizMetricsHQ`,
  description: franchisePageMeta.subtitle,
};

const accentMap: Record<string, string> = {
  "metric-revenue": "var(--metric-revenue)",
  "metric-margin": "var(--metric-margin)",
  "metric-salary": "var(--metric-salary)",
  "metric-valuation": "var(--metric-valuation)",
};

function HubSection({
  id,
  title,
  subtitle,
  children,
  className = "bg-surface",
  featured = false,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
}) {
  return (
    <section id={id} className={`border-b border-border/60 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">{title}</h2>
          {featured && (
            <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent">
              Featured
            </span>
          )}
        </div>
        {subtitle && <p className="mt-3 max-w-2xl text-sm text-ink-muted sm:text-base">{subtitle}</p>}
        <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export default function HairSalonFranchisePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [...businessQuestionFaqs, ...franchiseFaqs].map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />
      <main>
        <section className="hero-mesh relative border-b border-border/60">
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.35]"
            style={{
              backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-16">
            <nav aria-label="Breadcrumb" className="mb-6 text-left text-sm text-ink-faint">
              <Link href="/" className="hover:text-accent">
                Home
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <Link href="/franchise/" className="hover:text-accent">
                Franchise Economics
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <Link href="/franchise/#beauty" className="hover:text-accent">
                {franchisePageMeta.categoryLabel}
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <span className="text-ink-muted">Hair Salon</span>
            </nav>

            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-xs font-medium text-ink-muted shadow-sm backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              Franchise Guide · {franchisePageMeta.dataVintage} · {franchisePageMeta.sampleSize}
            </p>

            <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              {franchisePageMeta.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {franchisePageMeta.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {heroCtas.map((cta) => (
                <HashLink
                  key={cta.label}
                  href={cta.href}
                  className={
                    cta.primary
                      ? "inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
                      : "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                  }
                >
                  {cta.label}
                </HashLink>
              ))}
            </div>
          </div>
        </section>

        <section aria-label="Executive dashboard" className="border-b border-border/60 bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold tracking-wider text-accent uppercase">Executive Dashboard</p>
                <h2 className="mt-1 font-display text-lg font-semibold text-ink sm:text-xl">
                  Hair Salon Franchise KPIs
                </h2>
              </div>
              <p className="text-sm text-ink-muted">Directional ranges across leading U.S. salon franchise systems.</p>
            </div>
            <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
              {executiveKpis.map((kpi) => (
                <li key={kpi.id}>
                  <HashLink
                    href={kpi.href}
                    className="group flex min-h-[128px] flex-col items-center justify-center bg-surface px-3 py-5 text-center transition-colors hover:bg-accent-soft/30 sm:min-h-[140px] sm:px-4"
                  >
                    <span className="text-[11px] font-semibold tracking-wider text-ink-faint uppercase sm:text-xs">
                      {kpi.label}
                    </span>
                    <span
                      className="mt-2 text-xl font-bold tracking-tight tabular-nums sm:text-2xl"
                      style={{ color: accentMap[kpi.accent] }}
                    >
                      {kpi.value}
                    </span>
                    <span className="mt-1 text-[11px] leading-snug text-ink-faint sm:text-xs">{kpi.sublabel}</span>
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <IndustrySectionNav items={sectionNav} />

        <HubSection
          id="overview"
          title="Which Hair Salon Franchise is Best?"
          subtitle="Match the franchise model to your capital, experience, and ownership goals."
        >
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whichIsBestCards.map((card) => (
              <li key={card.title} className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
                <p className="text-xs font-semibold tracking-wider text-accent uppercase">{card.title}</p>
                <h3 className="mt-2 font-display font-semibold text-ink">{card.brand}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{card.detail}</p>
              </li>
            ))}
          </ul>
        </HubSection>

        <HubSection
          id="compare-brands"
          title="Compare Hair Salon Franchises"
          subtitle="Side-by-side snapshot of initial investment, fees, royalties, unit scale, and fit — open a brand for the full profile."
          className="bg-surface-muted/50"
          featured
        >
          <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Franchise</th>
                  <th className="px-4 py-3.5 text-right font-semibold text-ink sm:px-5">Initial Investment</th>
                  <th className="px-4 py-3.5 text-right font-semibold text-ink sm:px-5">Franchise Fee</th>
                  <th className="px-4 py-3.5 text-right font-semibold text-ink sm:px-5">Royalty</th>
                  <th className="px-4 py-3.5 text-right font-semibold text-ink sm:px-5">Units</th>
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Best For</th>
                </tr>
              </thead>
              <tbody>
                {franchiseBrands.map((brand, i) => (
                  <tr
                    key={brand.slug}
                    className={i < franchiseBrands.length - 1 ? "border-b border-border-subtle" : ""}
                  >
                    <td className="px-4 py-4 sm:px-5">
                      <Link
                        href={brand.href}
                        className="inline-flex items-center gap-1.5 font-semibold text-accent hover:underline"
                      >
                        {brand.label}
                        <svg className="size-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                    </td>
                    <td className="px-4 py-4 text-right tabular-nums text-ink sm:px-5">{brand.investment}</td>
                    <td className="px-4 py-4 text-right tabular-nums text-ink sm:px-5">{brand.franchiseFee}</td>
                    <td className="px-4 py-4 text-right tabular-nums text-ink sm:px-5">{brand.royalty}</td>
                    <td className="px-4 py-4 text-right tabular-nums text-ink sm:px-5">{brand.units}</td>
                    <td className="px-4 py-4 text-ink-muted sm:px-5">{brand.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-ink-faint">
            Ranges are directional for planning — verify current Item 5–7 fees and costs in each brand’s FDD.
          </p>
        </HubSection>

        <HubSection
          id="economics"
          title="Franchise Economics"
          subtitle="Industry-average operating ranges for mature U.S. hair salon franchise units after royalties."
        >
          <CustomerMetricsPanel
            title="Financial Dashboard"
            subtitle="Typical single-unit performance for national quick-cut and full-service salon franchises."
            items={economicsRows}
          />
        </HubSection>

        <HubSection
          id="startup-costs"
          title="Startup Cost Breakdown"
          subtitle="Where the first $150K–$400K typically goes when launching a hair salon franchise."
          className="bg-surface-muted/50"
        >
          <StartupCostBreakdownPanel
            title="Total typical investment"
            subtitle="Includes franchise fee, buildout, equipment, inventory, and opening working capital."
            items={startupCostBreakdown}
            totalRange={startupCostTotal}
          />
        </HubSection>

        <HubSection
          id="calculators"
          title="Franchise Calculators"
          subtitle="Model ROI, fees, break-even, owner pay, and valuation before you buy a salon franchise."
        >
          <CalculatorHubGrid items={franchiseCalculators} />
        </HubSection>

        <HubSection
          id="rankings"
          title="Franchise Rankings"
          subtitle="Curated lists for comparing salon franchises by cost, growth, and profitability."
          className="bg-surface-muted/50"
        >
          <LinkCardGrid items={franchiseRankings} columns={3} />
        </HubSection>

        <HubSection
          id="pros-cons"
          title="Franchise vs Independent Salon"
          subtitle="Trade brand systems and faster ramp for royalties and less operating freedom."
        >
          <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink">Factor</th>
                  <th className="px-5 py-3.5 text-left font-semibold text-ink">Franchise</th>
                  <th className="px-5 py-3.5 text-left font-semibold text-ink">Independent</th>
                </tr>
              </thead>
              <tbody>
                {franchiseVsIndependent.map((row, i) => (
                  <tr
                    key={row.factor}
                    className={i < franchiseVsIndependent.length - 1 ? "border-b border-border-subtle" : ""}
                  >
                    <td className="px-5 py-4 font-medium text-ink">{row.factor}</td>
                    <td className="px-5 py-4 text-ink-muted">{row.franchise}</td>
                    <td className="px-5 py-4 text-ink-muted">{row.independent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 rounded-2xl border border-accent/20 bg-accent-soft/30 px-6 py-8 text-center sm:px-8">
            <h3 className="font-display text-lg font-semibold text-ink">Should You Buy a Franchise?</h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-ink-muted">
              Use our full side-by-side comparison for margins, fees, ramp speed, and exit value.
            </p>
            <Link
              href="/comparisons/hair-salon-vs-franchise-salon/"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Should You Buy a Franchise?
            </Link>
          </div>
        </HubSection>

        <HubSection
          id="questions"
          title="Business Questions"
          subtitle="Common research questions for buyers evaluating a hair salon franchise."
        >
          <IndustryFaq faqs={businessQuestionFaqs} />
        </HubSection>

        <HubSection
          id="related"
          title="Related Franchise Industries"
          subtitle="Explore franchise economics across other beauty and personal-care categories."
          className="bg-surface-muted/50"
        >
          <LinkCardGrid items={relatedFranchiseIndustries} columns={3} />
        </HubSection>

        <HubSection
          id="faq"
          title="Frequently Asked Questions"
          subtitle="Quick answers on costs, royalties, payback, and multi-unit ownership."
        >
          <IndustryFaq faqs={franchiseFaqs} />
        </HubSection>

        <section className="bg-gradient-to-b from-accent-soft/40 to-surface">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Compare Hair Salon Franchise Opportunities
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-ink-muted sm:text-base">
              Find the right franchise by comparing startup costs, fees, revenue, ROI, and long-term profitability.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <HashLink
                href="#compare-brands"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Compare Franchise Brands
              </HashLink>
              <HashLink
                href="#calculators"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Calculate Franchise ROI
              </HashLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
