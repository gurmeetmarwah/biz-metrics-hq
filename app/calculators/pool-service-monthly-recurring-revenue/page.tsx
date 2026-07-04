import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { PoolServiceMrrCalculator } from "@/components/calculator/PoolServiceMrrCalculator";
import { faqs, introContent, meta } from "@/lib/industries/pool-service-monthly-recurring-revenue-calculator";
import { poolServiceAttribution } from "@/lib/data-sources/pool-service";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="MRR modeling · recurring revenue benchmarks"
      hubHref="/industries/pool-service/"
      hubLabel="Pool Service"
      sampleSize={poolServiceAttribution.sampleSize}
      dataVintage={poolServiceAttribution.dataVintage}
      faqs={faqs}
    >
      <PoolServiceMrrCalculator />
    </CalculatorPageShell>
  );
}
