import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { BarbershopProfitMarginCalculator } from "@/components/calculator/BarbershopProfitMarginCalculator";
import { faqs, introContent, meta } from "@/lib/industries/barbershop-profit-margin-calculator";
import { barbershopAttribution } from "@/lib/data-sources/barbershop";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Profitability · net margin"
      hubHref="/industries/beauty/barbershop/"
      hubLabel="Barbershop"
      sampleSize={barbershopAttribution.sampleSize}
      dataVintage={barbershopAttribution.dataVintage}
      faqs={faqs}
    >
      <BarbershopProfitMarginCalculator />
    </CalculatorPageShell>
  );
}
