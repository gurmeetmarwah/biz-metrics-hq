import type { CategoryKey } from "@/lib/industry-styles";

export type DirectoryIndustry = {
  label: string;
  slug: string;
  href: string;
  comingSoon?: boolean;
};

export type DirectoryCategory = {
  name: string;
  key: CategoryKey;
  industries: DirectoryIndustry[];
};

/** Single source of truth for industry directory — used on home page and industries hub. */
export const industryDirectory: DirectoryCategory[] = [
  {
    name: "Home Services",
    key: "home-services",
    industries: [
      { label: "HVAC", slug: "hvac", href: "/industries/hvac/" },
      { label: "Plumbing", slug: "plumbing", href: "/industries/plumbing/" },
      { label: "Electrical", slug: "electrical", href: "/industries/electrical/" },
      { label: "Roofing", slug: "roofing", href: "/industries/roofing/" },
      { label: "Landscaping", slug: "landscaping", href: "/industries/landscaping/" },
      { label: "Pest Control", slug: "pest-control", href: "/industries/pest-control/" },
      { label: "Cleaning Business", slug: "cleaning-business", href: "/industries/cleaning-business/" },
      { label: "Painting", slug: "painting", href: "/industries/painting/", comingSoon: true },
      { label: "Tree Service", slug: "tree-service", href: "/industries/tree-service/", comingSoon: true },
      { label: "Pool Service", slug: "pool-service", href: "/industries/pool-service/", comingSoon: true },
    ],
  },
  {
    name: "Healthcare",
    key: "healthcare",
    industries: [
      { label: "Dental Practice", slug: "dental-practice", href: "/industries/healthcare/dental-practice/" },
      { label: "Veterinary Clinic", slug: "veterinary-clinic", href: "/industries/healthcare/veterinary-clinic/" },
      { label: "Optometry", slug: "optometry", href: "/industries/healthcare/optometry/", comingSoon: true },
      { label: "Physical Therapy Clinic", slug: "physical-therapy-clinic", href: "/industries/healthcare/physical-therapy-clinic/" },
      { label: "Chiropractic Clinic", slug: "chiropractic-clinic", href: "/industries/healthcare/chiropractic-clinic/" },
      { label: "Med Spa", slug: "med-spa", href: "/industries/healthcare/med-spa/", comingSoon: true },
    ],
  },
  {
    name: "Fitness & Wellness",
    key: "fitness",
    industries: [
      { label: "Gym", slug: "gym", href: "/industries/gym/" },
      { label: "Pilates Studio", slug: "pilates-studio", href: "/industries/pilates-studio/" },
      { label: "Yoga Studio", slug: "yoga-studio", href: "/industries/yoga-studio/" },
      { label: "Martial Arts School", slug: "martial-arts-school", href: "/industries/martial-arts-school/" },
      { label: "CrossFit Gym", slug: "crossfit-gym", href: "/industries/crossfit-gym/" },
    ],
  },
  {
    name: "Food & Beverage",
    key: "food",
    industries: [
      { label: "Coffee Shop", slug: "coffee-shop", href: "/industries/food-beverage/coffee-shop/" },
      { label: "Restaurant", slug: "restaurant", href: "/industries/restaurant/" },
      { label: "Bakery", slug: "bakery", href: "/industries/food-beverage/bakery/" },
      { label: "Food Truck", slug: "food-truck", href: "/industries/food-beverage/food-truck/" },
      { label: "Ice Cream Shop", slug: "ice-cream-shop", href: "/industries/food-beverage/ice-cream-shop/", comingSoon: true },
    ],
  },
];

export function countLiveIndustries() {
  return industryDirectory.reduce(
    (total, cat) => total + cat.industries.filter((i) => !i.comingSoon).length,
    0,
  );
}

export function countTotalIndustries() {
  return industryDirectory.reduce((total, cat) => total + cat.industries.length, 0);
}
