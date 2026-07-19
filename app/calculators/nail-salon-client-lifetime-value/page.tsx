import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { NailSalonClientLifetimeValueCalculator } from "@/components/calculator/NailSalonClientLifetimeValueCalculator";
import { faqs, introContent, meta } from "@/lib/industries/nail-salon-client-lifetime-value-calculator";
import { nailSalonAttribution } from "@/lib/data-sources/nail-salon";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Retention · client value"
      hubHref="/industries/beauty/nail-salon/"
      hubLabel="Nail Salon"
      sampleSize={nailSalonAttribution.sampleSize}
      dataVintage={nailSalonAttribution.dataVintage}
      faqs={faqs}
    >
      <NailSalonClientLifetimeValueCalculator />
    </CalculatorPageShell>
  );
}
