import type { Metadata } from "next";
import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { PlumbingRevenuePerTechnicianCalculator } from "@/components/calculator/PlumbingRevenuePerTechnicianCalculator";
import { faqs, introContent, meta } from "@/lib/industries/plumbing-revenue-per-technician-calculator";
import { plumbingAttribution } from "@/lib/data-sources/plumbing";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Industry benchmarks · plumber productivity"
      hubHref="/industries/plumbing/"
      hubLabel="Plumbing"
      sampleSize={plumbingAttribution.sampleSize}
      dataVintage={plumbingAttribution.dataVintage}
      faqs={faqs}
    >
      <PlumbingRevenuePerTechnicianCalculator />
    </CalculatorPageShell>
  );
}
