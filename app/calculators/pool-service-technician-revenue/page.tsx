import { CalculatorPageShell, createCalculatorMetadata } from "@/components/calculator/CalculatorPageShell";
import { PoolServiceTechnicianRevenueCalculator } from "@/components/calculator/PoolServiceTechnicianRevenueCalculator";
import { faqs, introContent, meta } from "@/lib/industries/pool-service-technician-revenue-calculator";
import { poolServiceAttribution } from "@/lib/data-sources/pool-service";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Technician productivity · route benchmarks"
      hubHref="/industries/pool-service/"
      hubLabel="Pool Service"
      sampleSize={poolServiceAttribution.sampleSize}
      dataVintage={poolServiceAttribution.dataVintage}
      faqs={faqs}
    >
      <PoolServiceTechnicianRevenueCalculator />
    </CalculatorPageShell>
  );
}
