import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { PoolServiceRouteProfitabilityCalculator } from "@/components/calculator/PoolServiceRouteProfitabilityCalculator";
import { faqs, introContent, meta } from "@/lib/industries/pool-service-route-profitability-calculator";
import { poolServiceAttribution } from "@/lib/data-sources/pool-service";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Route economics · density benchmarks"
      hubHref="/industries/pool-service/"
      hubLabel="Pool Service"
      sampleSize={poolServiceAttribution.sampleSize}
      dataVintage={poolServiceAttribution.dataVintage}
      faqs={faqs}
    >
      <PoolServiceRouteProfitabilityCalculator />
    </CalculatorPageShell>
  );
}
