import { allMartialArtsCalculators } from "@/lib/industries/martial-arts-calculators-shared";

export const martialArtsHubLabels = {
  left: "Martial Arts School",
  breadcrumbHub: { label: "Martial Arts School", href: "/industries/martial-arts-school/" },
  exploreHub: { label: "Explore Martial Arts School Hub →", href: "/industries/martial-arts-school/" },
} as const;

export const martialArtsCalculators = allMartialArtsCalculators.map(({ label, href }) => ({
  label,
  href,
}));

export const martialArtsRelatedComparisons = [
  { label: "Martial Arts School vs Gym", href: "/comparisons/gym-vs-martial-arts-school/" },
  { label: "Martial Arts School vs Pilates Studio", href: "/comparisons/martial-arts-school-vs-pilates-studio/" },
  { label: "Martial Arts School vs Yoga Studio", href: "/comparisons/yoga-studio-vs-martial-arts-school/" },
  { label: "Martial Arts School vs Dance Studio", href: "/comparisons/martial-arts-school-vs-dance-studio/" },
  { label: "Martial Arts School vs Swim School", href: "/comparisons/martial-arts-school-vs-swim-school/" },
  { label: "Martial Arts School Hub", href: "/industries/martial-arts-school/" },
] as const;
