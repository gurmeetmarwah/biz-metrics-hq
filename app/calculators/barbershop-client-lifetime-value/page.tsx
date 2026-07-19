import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { BarbershopClientLifetimeValueCalculator } from "@/components/calculator/BarbershopClientLifetimeValueCalculator";
import { faqs, introContent, meta } from "@/lib/industries/barbershop-client-lifetime-value-calculator";
import { barbershopAttribution } from "@/lib/data-sources/barbershop";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="LTV · client value"
      hubHref="/industries/beauty/barbershop/"
      hubLabel="Barbershop"
      sampleSize={barbershopAttribution.sampleSize}
      dataVintage={barbershopAttribution.dataVintage}
      faqs={faqs}
    >
      <BarbershopClientLifetimeValueCalculator />
    </CalculatorPageShell>
  );
}
