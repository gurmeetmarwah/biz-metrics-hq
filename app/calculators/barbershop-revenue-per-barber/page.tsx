import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { BarbershopRevenuePerBarberCalculator } from "@/components/calculator/BarbershopRevenuePerBarberCalculator";
import { faqs, introContent, meta } from "@/lib/industries/barbershop-revenue-per-barber-calculator";
import { barbershopAttribution } from "@/lib/data-sources/barbershop";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Productivity · per barber"
      hubHref="/industries/beauty/barbershop/"
      hubLabel="Barbershop"
      sampleSize={barbershopAttribution.sampleSize}
      dataVintage={barbershopAttribution.dataVintage}
      faqs={faqs}
    >
      <BarbershopRevenuePerBarberCalculator />
    </CalculatorPageShell>
  );
}
