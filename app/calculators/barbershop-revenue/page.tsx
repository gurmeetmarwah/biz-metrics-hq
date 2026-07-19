import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { BarbershopRevenueCalculator } from "@/components/calculator/BarbershopRevenueCalculator";
import { faqs, introContent, meta } from "@/lib/industries/barbershop-revenue-calculator";
import { barbershopAttribution } from "@/lib/data-sources/barbershop";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Revenue · client volume"
      hubHref="/industries/beauty/barbershop/"
      hubLabel="Barbershop"
      sampleSize={barbershopAttribution.sampleSize}
      dataVintage={barbershopAttribution.dataVintage}
      faqs={faqs}
    >
      <BarbershopRevenueCalculator />
    </CalculatorPageShell>
  );
}
