import {
  FitnessFranchiseCalculatorPage,
  generateFitnessFranchiseCalculatorMetadata,
  generateFitnessFranchiseCalculatorStaticParams,
} from "@/components/franchise/FitnessFranchiseCalculatorPage";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return generateFitnessFranchiseCalculatorStaticParams();
}

export async function generateMetadata({ params }: Props) {
  return generateFitnessFranchiseCalculatorMetadata("crossfit", params);
}

export default async function Page({ params }: Props) {
  return <FitnessFranchiseCalculatorPage vertical="crossfit" params={params} />;
}
