import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IndustryHero } from "@/components/industry/IndustryHero";
import { IndustrySectionNav } from "@/components/industry/IndustrySectionNav";
import { KpiDashboard } from "@/components/industry/KpiDashboard";
import { QuickSummaryTable } from "@/components/industry/QuickSummaryTable";
import { DistributionBar } from "@/components/industry/DistributionBar";
import { DataTable } from "@/components/industry/DataTable";
import { CostBreakdownChart } from "@/components/industry/CostBreakdownChart";
import { MarginTierChart } from "@/components/industry/MarginTierChart";
import { BenchmarkTool } from "@/components/industry/BenchmarkTool";
import { LinkCardGrid } from "@/components/industry/LinkCardGrid";
import { IndustryFaq } from "@/components/industry/IndustryFaq";
import {
  restaurantMeta,
  restaurantKpis,
  businessScorecard,
  quickSummary,
  revenueDistribution,
  revenueByType,
  revenueDrivers,
  marginDistribution,
  marginByType,
  costBreakdown,
  ownerSalaryTiers,
  salaryFactors,
  valuationMultiples,
  valuationExample,
  benchmarkThresholds,
  restaurantTypes,
  comparisons,
  calculators,
  faqs,
  relatedIndustries,
  sectionNav,
  popularIndustries,
} from "@/lib/industries/restaurant";

export const metadata: Metadata = {
  title: "Restaurant Industry Benchmarks — Revenue, Margins & Valuation | BizMetricsHQ",
  description:
    "Restaurant industry dashboard: revenue ranges, profit margins, owner salaries, valuation multiples, benchmark tool, and FAQs for independent restaurants.",
};

function Section({
  id,
  title,
  subtitle,
  children,
  className = "bg-surface",
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`border-b border-border/60 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-base text-ink-muted">{subtitle}</p>
        )}
        <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export default function RestaurantIndustryPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        <IndustryHero
          title={restaurantMeta.title}
          subtitle={restaurantMeta.subtitle}
          popular={popularIndustries}
        />
        <KpiDashboard kpis={restaurantKpis} scorecard={businessScorecard} />
        <IndustrySectionNav items={sectionNav} />

        <QuickSummaryTable
          title="Restaurant Economics At A Glance"
          rows={quickSummary}
        />

        {/* Revenue */}
        <Section
          id="revenue"
          title="Average Restaurant Revenue"
          subtitle="How much independent restaurants earn — distribution, by concept type, and key drivers."
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <DistributionBar
              bottom25={revenueDistribution.bottom25}
              median={revenueDistribution.median}
              top25={revenueDistribution.top25}
              label="Revenue distribution"
            />
            <DataTable
              title="Revenue by Type"
              columns={["Restaurant Type", "Revenue"]}
              rows={revenueByType.map((r) => ({ label: r.type, value: r.revenue }))}
            />
          </div>

          <div className="mt-10">
            <h3 className="font-display text-lg font-semibold text-ink">Revenue Drivers</h3>
            <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {revenueDrivers.map((driver) => (
                <li
                  key={driver.title}
                  className="rounded-xl border border-border bg-surface-muted/30 p-5"
                >
                  <p className="font-semibold text-ink">{driver.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                    {driver.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/margins/"
              className="text-sm font-medium text-accent hover:underline"
            >
              Restaurant Profit Margins →
            </Link>
            <Link
              href="/salaries/"
              className="text-sm font-medium text-accent hover:underline"
            >
              Restaurant Owner Salary →
            </Link>
          </div>
        </Section>

        {/* Profit Margins */}
        <Section
          id="profit-margins"
          title="Restaurant Profit Margins"
          subtitle="Net margin benchmarks by performance tier and restaurant type."
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <MarginTierChart
              poor={marginDistribution.poor}
              average={marginDistribution.average}
              topQuartile={marginDistribution.topQuartile}
            />
            <DataTable
              title="Margin by Type"
              columns={["Type", "Margin"]}
              rows={marginByType.map((r) => ({ label: r.type, value: r.margin }))}
            />
          </div>
          <div className="mt-8">
            <CostBreakdownChart items={costBreakdown} />
          </div>
        </Section>

        {/* Owner Salary */}
        <Section
          id="owner-salary"
          title="How Much Do Restaurant Owners Make?"
          subtitle="Owner compensation by restaurant size and scale."
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {ownerSalaryTiers.map((tier) => (
              <article
                key={tier.tier}
                className="card-interactive rounded-2xl border border-border bg-surface p-6"
              >
                <h3 className="font-display font-semibold text-ink">{tier.tier}</h3>
                <p className="mt-3 text-2xl font-bold tabular-nums text-metric-salary">
                  {tier.range}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {tier.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-surface-muted/30 p-6">
            <h3 className="font-display font-semibold text-ink">Influencing Factors</h3>
            <ul className="mt-4 space-y-2">
              {salaryFactors.map((factor) => (
                <li key={factor} className="flex items-start gap-2.5 text-sm text-ink-muted">
                  <svg
                    className="mt-0.5 size-4 shrink-0 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-7.5" />
                  </svg>
                  {factor}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Valuation */}
        <Section
          id="valuation"
          title="Restaurant Valuation Multiples"
          subtitle="How independent restaurants are priced in the market."
          className="bg-surface-muted/50"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {valuationMultiples.map((mult) => (
              <article
                key={mult.label}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <h3 className="font-display font-semibold text-ink">{mult.label}</h3>
                <p className="mt-3 text-xl font-bold tabular-nums text-metric-valuation">
                  {mult.range}
                </p>
                <p className="mt-1 text-sm text-ink-faint">median {mult.median}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{mult.note}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-accent/20 bg-accent-soft/30 p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-ink">Example Valuation</h3>
            <dl className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: "Restaurant Revenue", value: valuationExample.revenue },
                { label: "SDE", value: valuationExample.sde },
                { label: "Valuation", value: valuationExample.valuation },
                { label: "Multiple", value: valuationExample.multiple },
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-surface px-4 py-4">
                  <dt className="text-xs font-medium text-ink-faint">{item.label}</dt>
                  <dd className="mt-1 text-lg font-bold tabular-nums text-ink">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        {/* Benchmark Tool */}
        <Section
          id="benchmark"
          title="Benchmark Your Restaurant"
          subtitle="See how your numbers compare to industry quartiles."
        >
          <BenchmarkTool thresholds={benchmarkThresholds} />
          <p className="mt-4 text-xs text-ink-faint">
            Based on {restaurantMeta.sampleSize} U.S. restaurants ({restaurantMeta.dataVintage}).{" "}
            <Link href="/methodology/" className="text-accent hover:underline">
              Methodology
            </Link>
          </p>
        </Section>

        {/* Restaurant Types */}
        <Section
          id="types"
          title="Restaurant Types"
          subtitle="Explore economics by concept type."
          className="bg-surface-muted/50"
        >
          <LinkCardGrid items={restaurantTypes} columns={3} />
        </Section>

        {/* Comparisons */}
        <Section
          id="comparisons"
          title="Industry Comparisons"
          subtitle="Side-by-side economics vs. related food businesses."
        >
          <LinkCardGrid items={comparisons} columns={3} />
        </Section>

        {/* Calculators */}
        <Section
          id="calculators"
          title="Related Calculators"
          subtitle="Run the numbers on your restaurant."
          className="bg-surface-muted/50"
        >
          <LinkCardGrid items={calculators} columns={2} />
        </Section>

        {/* FAQs */}
        <Section id="faqs" title="Frequently Asked Questions">
          <IndustryFaq faqs={faqs} />
        </Section>

        {/* Related Industries */}
        <Section
          id="related"
          title="Related Industries"
          subtitle="More food & beverage benchmarks."
          className="bg-surface-muted/50"
        >
          <LinkCardGrid items={relatedIndustries} columns={5} />
        </Section>
      </main>
      <Footer />
    </>
  );
}
