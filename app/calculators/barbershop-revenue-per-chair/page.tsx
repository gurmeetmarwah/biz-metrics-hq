import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { BarbershopRevenuePerChairCalculator } from "@/components/calculator/BarbershopRevenuePerChairCalculator";
import { faqs, introContent, meta } from "@/lib/industries/barbershop-revenue-per-chair-calculator";
import { barbershopAttribution } from "@/lib/data-sources/barbershop";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Productivity · per chair"
      hubHref="/industries/beauty/barbershop/"
      hubLabel="Barbershop"
      sampleSize={barbershopAttribution.sampleSize}
      dataVintage={barbershopAttribution.dataVintage}
      faqs={faqs}
    >
      <BarbershopRevenuePerChairCalculator />
    </CalculatorPageShell>
  );
}
