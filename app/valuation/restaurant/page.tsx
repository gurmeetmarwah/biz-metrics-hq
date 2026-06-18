import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Redirecting… | BizMetricsHQ",
  robots: { index: false, follow: true },
};

export default function RestaurantValuationRedirectPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/industries/restaurant/valuation/" />
      <main className="mx-auto max-w-lg px-4 py-24 text-center">
        <p className="text-ink-muted">
          This page has moved.{" "}
          <Link
            href="/industries/restaurant/valuation/"
            className="text-accent hover:underline"
          >
            Go to Restaurant Valuation Calculator
          </Link>
        </p>
      </main>
    </>
  );
}
