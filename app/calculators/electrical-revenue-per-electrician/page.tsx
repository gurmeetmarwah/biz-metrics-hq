import type { Metadata } from "next";
import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { ElectricalRevenuePerElectricianCalculator } from "@/components/calculator/ElectricalRevenuePerElectricianCalculator";
import { faqs, introContent, meta } from "@/lib/industries/electrical-revenue-per-electrician-calculator";
import { electricalAttribution } from "@/lib/data-sources/electrical";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Industry benchmarks · electrician productivity"
      hubHref="/industries/electrical/"
      hubLabel="Electrical"
      sampleSize={electricalAttribution.sampleSize}
      dataVintage={electricalAttribution.dataVintage}
      faqs={faqs}
    >
      <ElectricalRevenuePerElectricianCalculator />
    </CalculatorPageShell>
  );
}
