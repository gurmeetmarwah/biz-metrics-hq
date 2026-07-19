import {
  CalculatorPageShell,
  createCalculatorMetadata,
} from "@/components/calculator/CalculatorPageShell";
import { BarbershopMembershipRevenueCalculator } from "@/components/calculator/BarbershopMembershipRevenueCalculator";
import { faqs, introContent, meta } from "@/lib/industries/barbershop-membership-revenue-calculator";
import { barbershopAttribution } from "@/lib/data-sources/barbershop";

export const metadata = createCalculatorMetadata(meta);

export default function Page() {
  return (
    <CalculatorPageShell
      meta={meta}
      intro={introContent}
      badge="Membership · MRR"
      hubHref="/industries/beauty/barbershop/"
      hubLabel="Barbershop"
      sampleSize={barbershopAttribution.sampleSize}
      dataVintage={barbershopAttribution.dataVintage}
      faqs={faqs}
    >
      <BarbershopMembershipRevenueCalculator />
    </CalculatorPageShell>
  );
}
