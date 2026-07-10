import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { HairSalonRevenuePerStylistCalculator } from "@/components/calculator/HairSalonRevenuePerStylistCalculator";
import { faqs, introContent, meta } from "@/lib/industries/hair-salon-revenue-per-stylist-calculator";
import { hairSalonAttribution } from "@/lib/data-sources/hair-salon";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Productivity · per stylist"
      hubHref="/industries/beauty/hair-salon/"
      hubLabel="Hair Salon"
      sampleSize={hairSalonAttribution.sampleSize}
      dataVintage={hairSalonAttribution.dataVintage}
      faqs={faqs}
    >
      <HairSalonRevenuePerStylistCalculator />
    </CalculatorPageShell>
  );
}
