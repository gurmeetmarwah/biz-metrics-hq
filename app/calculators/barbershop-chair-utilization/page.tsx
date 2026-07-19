import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { BarbershopChairUtilizationCalculator } from "@/components/calculator/BarbershopChairUtilizationCalculator";
import { faqs, introContent, meta } from "@/lib/industries/barbershop-chair-utilization-calculator";
import { barbershopAttribution } from "@/lib/data-sources/barbershop";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Utilization · chair hours"
      hubHref="/industries/beauty/barbershop/"
      hubLabel="Barbershop"
      sampleSize={barbershopAttribution.sampleSize}
      dataVintage={barbershopAttribution.dataVintage}
      faqs={faqs}
    >
      <BarbershopChairUtilizationCalculator />
    </CalculatorPageShell>
  );
}
