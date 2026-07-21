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
  return generateFitnessFranchiseCalculatorMetadata("yoga", params);
}

export default async function Page({ params }: Props) {
  return <FitnessFranchiseCalculatorPage vertical="yoga" params={params} />;
}
