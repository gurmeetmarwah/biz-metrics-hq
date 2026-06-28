import { allCrossfitCalculators } from "@/lib/industries/crossfit-calculators-shared";

export const crossfitHubLabels = {
  left: "CrossFit",
  breadcrumbHub: { label: "CrossFit Gym", href: "/industries/crossfit-gym/" },
  exploreHub: { label: "Explore CrossFit Gym Hub →", href: "/industries/crossfit-gym/" },
} as const;

export const crossfitCalculators = allCrossfitCalculators.map(({ label, href }) => ({
  label,
  href,
}));

export const crossfitRelatedComparisons = [
  { label: "CrossFit vs Traditional Gym", href: "/comparisons/gym-vs-crossfit/" },
  { label: "CrossFit vs Pilates Studio", href: "/comparisons/pilates-studio-vs-crossfit/" },
  { label: "CrossFit vs Yoga Studio", href: "/comparisons/yoga-studio-vs-crossfit/" },
  { label: "CrossFit vs Martial Arts School", href: "/comparisons/crossfit-vs-martial-arts-school/" },
  { label: "CrossFit vs Personal Training Studio", href: "/comparisons/crossfit-vs-personal-training-studio/" },
  { label: "CrossFit Gym Hub", href: "/industries/crossfit-gym/" },
] as const;
