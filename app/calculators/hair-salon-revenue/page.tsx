import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { HairSalonRevenueCalculator } from "@/components/calculator/HairSalonRevenueCalculator";
import { faqs, introContent, meta } from "@/lib/industries/hair-salon-revenue-calculator";
import { hairSalonAttribution } from "@/lib/data-sources/hair-salon";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Revenue · average ticket"
      hubHref="/industries/beauty/hair-salon/"
      hubLabel="Hair Salon"
      sampleSize={hairSalonAttribution.sampleSize}
      dataVintage={hairSalonAttribution.dataVintage}
      faqs={faqs}
    >
      <HairSalonRevenueCalculator />
    </CalculatorPageShell>
  );
}
