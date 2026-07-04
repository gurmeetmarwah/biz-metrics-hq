import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { PoolServiceCustomerLifetimeValueCalculator } from "@/components/calculator/PoolServiceCustomerLifetimeValueCalculator";
import { faqs, introContent, meta } from "@/lib/industries/pool-service-customer-lifetime-value-calculator";
import { poolServiceAttribution } from "@/lib/data-sources/pool-service";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="LTV modeling · retention benchmarks"
      hubHref="/industries/pool-service/"
      hubLabel="Pool Service"
      sampleSize={poolServiceAttribution.sampleSize}
      dataVintage={poolServiceAttribution.dataVintage}
      faqs={faqs}
    >
      <PoolServiceCustomerLifetimeValueCalculator />
    </CalculatorPageShell>
  );
}
