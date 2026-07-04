import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { PoolServiceStartupCostCalculator } from "@/components/calculator/PoolServiceStartupCostCalculator";
import { faqs, introContent, meta } from "@/lib/industries/pool-service-startup-cost-calculator";
import { poolServiceAttribution } from "@/lib/data-sources/pool-service";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Launch investment · industry benchmarks"
      hubHref="/industries/pool-service/"
      hubLabel="Pool Service"
      sampleSize={poolServiceAttribution.sampleSize}
      dataVintage={poolServiceAttribution.dataVintage}
      faqs={faqs}
    >
      <PoolServiceStartupCostCalculator />
    </CalculatorPageShell>
  );
}
