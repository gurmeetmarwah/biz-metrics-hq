import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { NailSalonStartupCostCalculator } from "@/components/calculator/NailSalonStartupCostCalculator";
import { faqs, introContent, meta } from "@/lib/industries/nail-salon-startup-cost-calculator";
import { nailSalonAttribution } from "@/lib/data-sources/nail-salon";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Startup · launch budget"
      hubHref="/industries/beauty/nail-salon/"
      hubLabel="Nail Salon"
      sampleSize={nailSalonAttribution.sampleSize}
      dataVintage={nailSalonAttribution.dataVintage}
      faqs={faqs}
    >
      <NailSalonStartupCostCalculator />
    </CalculatorPageShell>
  );
}
