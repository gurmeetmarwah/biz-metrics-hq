import type { Metadata } from "next";
import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { ElectricalLaborUtilizationCalculator } from "@/components/calculator/ElectricalLaborUtilizationCalculator";
import { faqs, introContent, meta } from "@/lib/industries/electrical-labor-utilization-calculator";
import { electricalAttribution } from "@/lib/data-sources/electrical";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Billable hours · utilization benchmarks"
      hubHref="/industries/electrical/"
      hubLabel="Electrical"
      sampleSize={electricalAttribution.sampleSize}
      dataVintage={electricalAttribution.dataVintage}
      faqs={faqs}
    >
      <ElectricalLaborUtilizationCalculator />
    </CalculatorPageShell>
  );
}
