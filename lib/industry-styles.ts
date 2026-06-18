export type IndustrySlug =
  | "restaurant"
  | "coffee-shop"
  | "bakery"
  | "food-truck"
  | "dental-practice"
  | "veterinary-clinic"
  | "physical-therapy-clinic"
  | "chiropractic-clinic"
  | "hvac"
  | "plumbing"
  | "electrical"
  | "roofing"
  | "landscaping"
  | "pest-control"
  | "cleaning-business";

export type CategoryKey = "food" | "healthcare" | "home-services";

export const categoryStyles: Record<
  CategoryKey,
  {
    name: string;
    accentClass: string;
    icon: "utensils" | "heart-pulse" | "home-wrench";
  }
> = {
  food: {
    name: "Food & Beverage",
    accentClass: "category-accent-food",
    icon: "utensils",
  },
  healthcare: {
    name: "Healthcare",
    accentClass: "category-accent-healthcare",
    icon: "heart-pulse",
  },
  "home-services": {
    name: "Home Services",
    accentClass: "category-accent-home",
    icon: "home-wrench",
  },
};

export const industryCategoryMap: Record<IndustrySlug, CategoryKey> = {
  restaurant: "food",
  "coffee-shop": "food",
  bakery: "food",
  "food-truck": "food",
  "dental-practice": "healthcare",
  "veterinary-clinic": "healthcare",
  "physical-therapy-clinic": "healthcare",
  "chiropractic-clinic": "healthcare",
  hvac: "home-services",
  plumbing: "home-services",
  electrical: "home-services",
  roofing: "home-services",
  landscaping: "home-services",
  "pest-control": "home-services",
  "cleaning-business": "home-services",
};

export function slugFromHref(href: string): IndustrySlug {
  const path = href.replace("/industries/", "").replace(/\/$/, "");
  const segment = path.includes("/") ? path.split("/").pop()! : path;
  return segment as IndustrySlug;
}
