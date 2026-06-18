import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RestaurantFoodCostCalculator } from "@/components/calculator/RestaurantFoodCostCalculator";
import {
  foodCostCalculatorMeta,
  foodCostFaqs,
  introContent,
} from "@/lib/industries/restaurant-food-cost-calculator";

export const metadata: Metadata = {
  title: `${foodCostCalculatorMeta.title} | BizMetricsHQ`,
  description: foodCostCalculatorMeta.description,
};

export default function RestaurantFoodCostCalculatorPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: foodCostFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const appJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: foodCostCalculatorMeta.title,
    description: foodCostCalculatorMeta.description,
    applicationCategory: "BusinessApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      <Header />
      <main>
        <section className="hero-mesh border-b border-border/60">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
            <nav
              aria-label="Breadcrumb"
              className="mb-6 text-sm text-ink-faint"
            >
              <Link href="/" className="hover:text-accent">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/industries/restaurant/" className="hover:text-accent">
                Restaurant
              </Link>
              <span className="mx-2">/</span>
              <span className="text-ink-muted">Food Cost Calculator</span>
            </nav>

            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-medium text-ink-muted">
              <span className="size-1.5 rounded-full bg-metric-salary" />
              Weekly tracking · menu-level analysis
            </p>

            <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {foodCostCalculatorMeta.shortTitle}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {foodCostCalculatorMeta.subtitle}
            </p>

            <div className="mt-8 max-w-3xl space-y-4">
              <p className="text-sm leading-relaxed text-ink-muted">
                {introContent.lead}
              </p>
              <ul className="space-y-2">
                {introContent.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2.5 text-sm text-ink-muted"
                  >
                    <svg
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-7.5"
                      />
                    </svg>
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-ink-faint">{introContent.audience}</p>
            </div>
          </div>
        </section>

        <RestaurantFoodCostCalculator />
      </main>
      <Footer />
    </>
  );
}
