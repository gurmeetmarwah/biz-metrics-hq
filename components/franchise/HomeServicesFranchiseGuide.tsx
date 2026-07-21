import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IndustrySectionNav } from "@/components/industry/IndustrySectionNav";
import { CalculatorHubGrid } from "@/components/industry/CalculatorHubGrid";
import { LinkCardGrid } from "@/components/industry/LinkCardGrid";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import { CustomerMetricsPanel, StartupCostBreakdownPanel } from "@/components/industry/PoolServiceIndustryPanels";
import { HashLink } from "@/components/ui/HashLink";
import type { HomeServicesFranchiseGuideData } from "@/lib/franchise/beauty/beauty-franchise-guide-types";

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

function InvestmentStars({ score }: { score: number }) {
  return (
    <span className="inline-flex items-center gap-0.5 text-accent" aria-label={`Investment score ${score} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < score ? "opacity-100" : "opacity-25"}>
          ★
        </span>
      ))}
    </span>
  );
}

/** Shared franchise guide layout for Home Services and Fitness verticals. */
export function HomeServicesFranchiseGuide({ data }: { data: HomeServicesFranchiseGuideData }) {
  const { meta } = data;
  const hasCalculators = data.franchiseCalculators.length > 0;
  const categoryAnchor = data.categoryId ?? "home-services";
  const featuredProfiles = data.featuredProfiles ?? [];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [...data.businessQuestionFaqs, ...data.franchiseFaqs].map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const shouldBuyHref = meta.shouldBuyHref ?? "#compare-brands";
  const shouldBuyIsHash = shouldBuyHref.startsWith("#");
  const ShouldBuyTag = shouldBuyIsHash ? HashLink : Link;

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
              <Link href={`/franchise/#${categoryAnchor}`} className="hover:text-accent">
                {meta.categoryLabel}
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <span className="text-ink-muted">{meta.shortName}</span>
            </nav>

            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-xs font-medium text-ink-muted shadow-sm backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              Franchise Guide · {meta.dataVintage} · {meta.sampleSize}
            </p>

            <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              {meta.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {meta.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {data.heroCtas.map((cta) => (
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
                  {meta.kpiDashboardTitle}
                </h2>
              </div>
              <p className="text-sm text-ink-muted">{meta.kpiDashboardSubtitle}</p>
            </div>
            <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
              {data.executiveKpis.map((kpi) => (
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

        <IndustrySectionNav items={data.sectionNav} />

        <HubSection
          id="compare-brands"
          title={meta.compareTitle}
          subtitle={meta.compareSubtitle}
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
                  <th className="px-4 py-3.5 text-right font-semibold text-ink sm:px-5">Locations</th>
                  <th className="px-4 py-3.5 text-left font-semibold text-ink sm:px-5">Best For</th>
                </tr>
              </thead>
              <tbody>
                {data.franchiseBrands.map((brand, i) => (
                  <tr
                    key={brand.slug}
                    className={i < data.franchiseBrands.length - 1 ? "border-b border-border-subtle" : ""}
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
            Ranges are directional for planning — verify current FDD Item 5–7 fees or dealer program requirements before committing.
          </p>
        </HubSection>

        <HubSection
          id="overview"
          title={meta.overviewTitle}
          subtitle={meta.overviewSubtitle}
          className="bg-surface-muted/50"
        >
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.whichIsBestCards.map((card) => (
              <li key={card.title} className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
                <p className="text-xs font-semibold tracking-wider text-accent uppercase">{card.title}</p>
                <h3 className="mt-2 font-display font-semibold text-ink">{card.brand}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{card.detail}</p>
              </li>
            ))}
          </ul>
        </HubSection>

        <HubSection id="economics" title={data.economicsTitle ?? "Franchise Economics"} subtitle={meta.economicsSubtitle}>
          <CustomerMetricsPanel
            title="Financial Benchmark Dashboard"
            subtitle={meta.economicsPanelSubtitle}
            items={data.economicsRows}
          />
        </HubSection>

        <HubSection
          id="startup-costs"
          title="Startup Cost Breakdown"
          subtitle={meta.startupSubtitle}
          className="bg-surface-muted/50"
        >
          <StartupCostBreakdownPanel
            title="Total typical investment"
            subtitle={meta.startupPanelSubtitle}
            items={data.startupCostBreakdown}
            totalRange={data.startupCostTotal}
          />
        </HubSection>

        {hasCalculators && (
          <HubSection id="calculators" title={data.calculatorsTitle ?? "Franchise Calculators"} subtitle={meta.calculatorsSubtitle}>
            <CalculatorHubGrid items={data.franchiseCalculators} />
          </HubSection>
        )}

        <HubSection
          id="rankings"
          title={data.rankingsTitle ?? "Franchise Rankings"}
          subtitle={meta.rankingsSubtitle}
          className={hasCalculators ? "bg-surface-muted/50" : "bg-surface"}
        >
          <LinkCardGrid items={data.franchiseRankings} columns={3} />
        </HubSection>

        <HubSection
          id="pros-cons"
          title={meta.prosConsTitle}
          subtitle={meta.prosConsSubtitle}
          className={hasCalculators ? "bg-surface" : "bg-surface-muted/50"}
        >
          <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-muted/50">
                  <th className="px-5 py-3.5 text-left font-semibold text-ink">Metric</th>
                  <th className="px-5 py-3.5 text-left font-semibold text-ink">Franchise</th>
                  <th className="px-5 py-3.5 text-left font-semibold text-ink">Independent</th>
                </tr>
              </thead>
              <tbody>
                {data.franchiseVsIndependent.map((row, i) => (
                  <tr
                    key={row.factor}
                    className={i < data.franchiseVsIndependent.length - 1 ? "border-b border-border-subtle" : ""}
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
            <h3 className="font-display text-lg font-semibold text-ink">
              {data.shouldBuyCtaLabel ?? `Should You Buy a ${meta.shortName} Franchise?`}
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-ink-muted">{meta.shouldBuyBlurb}</p>
            <ShouldBuyTag
              href={shouldBuyHref}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              {data.shouldBuyCtaLabel ?? `Should You Buy a ${meta.shortName} Franchise?`}
            </ShouldBuyTag>
          </div>
        </HubSection>

        {featuredProfiles.length > 0 && (
          <HubSection
            id="featured-profiles"
            title={data.featuredProfilesTitle ?? "Featured Franchise Profiles"}
            subtitle={
              data.featuredProfilesSubtitle ??
              "Open a dedicated investment profile for each leading franchise brand."
            }
            className="bg-surface-muted/50"
          >
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {featuredProfiles.map((profile) => (
                <li key={profile.href}>
                  <Link
                    href={profile.href}
                    className="card-interactive flex h-full flex-col rounded-2xl border border-border bg-surface p-6"
                  >
                    <h3 className="font-display text-lg font-semibold text-ink">{profile.label}</h3>
                    <p className="mt-3 text-sm text-ink-muted">
                      Investment Score <InvestmentStars score={profile.investmentScore} />
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{profile.blurb}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      Read Investment Profile
                      <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </HubSection>
        )}

        <HubSection
          id="investment-guide"
          title="Investment Considerations"
          subtitle={data.investmentGuideSubtitle}
        >
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.investmentConsiderations.map((item) => (
              <li key={item.title} className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
                <h3 className="font-display font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
        </HubSection>

        <HubSection
          id="questions"
          title="Common Investor Questions"
          subtitle={meta.questionsSubtitle}
          className="bg-surface-muted/50"
        >
          <IndustryFaq faqs={data.businessQuestionFaqs} />
        </HubSection>

        <HubSection
          id="related"
          title={data.relatedTitle ?? "Related Home Service Franchises"}
          subtitle={data.relatedSubtitle ?? "Explore franchise economics across other residential trade and property-service categories."}
        >
          <LinkCardGrid items={data.relatedFranchiseIndustries} columns={3} />
        </HubSection>

        <HubSection
          id="faq"
          title="Frequently Asked Questions"
          subtitle="Quick answers on capital, experience, royalties, multi-unit ownership, and break-even timing."
          className="bg-surface-muted/50"
        >
          <IndustryFaq faqs={data.franchiseFaqs} />
        </HubSection>

        <section className="bg-gradient-to-b from-accent-soft/40 to-surface">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {meta.finalCtaTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-ink-muted sm:text-base">{meta.finalCtaSubtitle}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <HashLink
                href="#compare-brands"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                {data.compareCtaLabel ?? "Compare Franchise Brands"}
              </HashLink>
              <HashLink
                href={hasCalculators ? "#calculators" : "#economics"}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                {data.roiCtaLabel ?? (hasCalculators ? "Franchise ROI Calculator" : "Review Franchise Economics")}
              </HashLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
