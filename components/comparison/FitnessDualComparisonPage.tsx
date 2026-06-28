import { HomeServicesDualComparisonPage } from "@/components/comparison/HomeServicesDualComparisonPage";
import type { HealthcareDualComparisonData } from "@/lib/industries/comparisons/healthcare-comparison-types";

/** Fitness industry comparisons — reuses dual comparison layout with fitness variant labels. */
export function FitnessDualComparisonPage({ data }: { data: HealthcareDualComparisonData }) {
  return <HomeServicesDualComparisonPage data={data} variant="fitness" />;
}
