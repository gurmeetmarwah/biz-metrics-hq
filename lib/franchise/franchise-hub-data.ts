export type FranchiseCategoryIcon =
  | "beauty"
  | "home-services"
  | "fitness"
  | "healthcare"
  | "food"
  | "pet"
  | "education"
  | "automotive";

export type FranchiseItem = {
  label: string;
  slug: string;
  href: string;
  comingSoon?: boolean;
};

export type FranchiseCategory = {
  id: string;
  name: string;
  icon: FranchiseCategoryIcon;
  description: string;
  franchises: readonly FranchiseItem[];
};

export const franchiseHubMeta = {
  title: "Franchise Economics & Business Benchmarks",
  subtitle:
    "Startup costs, profit margins, ROI, owner salary, valuation, payback period, and revenue benchmarks — helping franchise buyers and operators compare franchise economics across industries.",
  dataVintage: "2025–2026",
} as const;

export const franchiseHeroTopics = [
  "Startup Costs",
  "Profit Margins",
  "ROI",
  "Owner Salary",
  "Valuation",
  "Payback Period",
  "Revenue Benchmarks",
] as const;

function franchiseHref(categoryId: string, slug: string) {
  return `/franchise/${categoryId}/${slug}/`;
}

export const franchiseCategories: readonly FranchiseCategory[] = [
  {
    id: "beauty",
    name: "Beauty",
    icon: "beauty",
    description: "Salon, spa, and grooming franchise economics.",
    franchises: [
      { label: "Hair Salon Franchise", slug: "hair-salon", href: franchiseHref("beauty", "hair-salon") },
      { label: "Medical Spa Franchise", slug: "medical-spa", href: franchiseHref("beauty", "medical-spa") },
      { label: "Massage Franchise", slug: "massage", href: franchiseHref("beauty", "massage") },
      { label: "Waxing Franchise", slug: "waxing", href: franchiseHref("beauty", "waxing") },
    ],
  },
  {
    id: "home-services",
    name: "Home Services",
    icon: "home-services",
    description: "Trade and property service franchise benchmarks.",
    franchises: [
      { label: "HVAC Franchise", slug: "hvac", href: franchiseHref("home-services", "hvac") },
      { label: "Plumbing Franchise", slug: "plumbing", href: franchiseHref("home-services", "plumbing") },
      { label: "Cleaning Franchise", slug: "cleaning", href: franchiseHref("home-services", "cleaning") },
      { label: "Pest Control Franchise", slug: "pest-control", href: franchiseHref("home-services", "pest-control") },
    ],
  },
  {
    id: "fitness",
    name: "Fitness",
    icon: "fitness",
    description: "Gym, studio, and wellness franchise economics.",
    franchises: [
      { label: "Gym Franchise", slug: "gym", href: franchiseHref("fitness", "gym") },
      { label: "Pilates Franchise", slug: "pilates", href: franchiseHref("fitness", "pilates") },
      { label: "Yoga Franchise", slug: "yoga", href: franchiseHref("fitness", "yoga") },
      { label: "CrossFit Affiliate", slug: "crossfit", href: franchiseHref("fitness", "crossfit") },
      { label: "Swim School Franchise", slug: "swim-school", href: franchiseHref("fitness", "swim-school") },
    ],
  },
  {
    id: "food",
    name: "Food",
    icon: "food",
    description: "Restaurant and food service franchise economics.",
    franchises: [
      { label: "Restaurant Franchise", slug: "restaurant-franchise", href: franchiseHref("food", "restaurant-franchise") },
      { label: "Coffee Shop Franchise", slug: "coffee-shop-franchise", href: franchiseHref("food", "coffee-shop-franchise"), comingSoon: true },
      { label: "Bakery Franchise", slug: "bakery-franchise", href: franchiseHref("food", "bakery-franchise"), comingSoon: true },
      { label: "Food Truck Franchise", slug: "food-truck-franchise", href: franchiseHref("food", "food-truck-franchise"), comingSoon: true },
      { label: "Ice Cream Franchise", slug: "ice-cream-franchise", href: franchiseHref("food", "ice-cream-franchise"), comingSoon: true },
      { label: "Fast Casual Franchise", slug: "fast-casual-franchise", href: franchiseHref("food", "fast-casual-franchise"), comingSoon: true },
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: "healthcare",
    description: "Clinical and wellness practice franchise benchmarks.",
    franchises: [
      { label: "Dental Practice Franchise", slug: "dental-practice-franchise", href: franchiseHref("healthcare", "dental-practice-franchise"), comingSoon: true },
      { label: "Veterinary Franchise", slug: "veterinary-franchise", href: franchiseHref("healthcare", "veterinary-franchise"), comingSoon: true },
      { label: "Physical Therapy Franchise", slug: "physical-therapy-franchise", href: franchiseHref("healthcare", "physical-therapy-franchise"), comingSoon: true },
      { label: "Chiropractic Franchise", slug: "chiropractic-franchise", href: franchiseHref("healthcare", "chiropractic-franchise"), comingSoon: true },
      { label: "Optometry Franchise", slug: "optometry-franchise", href: franchiseHref("healthcare", "optometry-franchise"), comingSoon: true },
      { label: "Urgent Care Franchise", slug: "urgent-care-franchise", href: franchiseHref("healthcare", "urgent-care-franchise"), comingSoon: true },
    ],
  },
  {
    id: "pet",
    name: "Pet",
    icon: "pet",
    description: "Pet care and services franchise benchmarks.",
    franchises: [
      { label: "Pet Grooming Franchise", slug: "pet-grooming-franchise", href: franchiseHref("pet", "pet-grooming-franchise"), comingSoon: true },
      { label: "Pet Boarding Franchise", slug: "pet-boarding-franchise", href: franchiseHref("pet", "pet-boarding-franchise"), comingSoon: true },
      { label: "Dog Training Franchise", slug: "dog-training-franchise", href: franchiseHref("pet", "dog-training-franchise"), comingSoon: true },
      { label: "Pet Supply Franchise", slug: "pet-supply-franchise", href: franchiseHref("pet", "pet-supply-franchise"), comingSoon: true },
    ],
  },
  {
    id: "education",
    name: "Education",
    icon: "education",
    description: "Tutoring, childcare, and learning franchise economics.",
    franchises: [
      { label: "Tutoring Franchise", slug: "tutoring-franchise", href: franchiseHref("education", "tutoring-franchise"), comingSoon: true },
      { label: "Childcare Franchise", slug: "childcare-franchise", href: franchiseHref("education", "childcare-franchise"), comingSoon: true },
      { label: "STEM Learning Franchise", slug: "stem-learning-franchise", href: franchiseHref("education", "stem-learning-franchise"), comingSoon: true },
      { label: "Test Prep Franchise", slug: "test-prep-franchise", href: franchiseHref("education", "test-prep-franchise"), comingSoon: true },
    ],
  },
  {
    id: "automotive",
    name: "Automotive",
    icon: "automotive",
    description: "Auto repair and car care franchise benchmarks.",
    franchises: [
      { label: "Auto Repair Franchise", slug: "auto-repair-franchise", href: franchiseHref("automotive", "auto-repair-franchise"), comingSoon: true },
      { label: "Oil Change Franchise", slug: "oil-change-franchise", href: franchiseHref("automotive", "oil-change-franchise"), comingSoon: true },
      { label: "Car Wash Franchise", slug: "car-wash-franchise", href: franchiseHref("automotive", "car-wash-franchise"), comingSoon: true },
      { label: "Tire Shop Franchise", slug: "tire-shop-franchise", href: franchiseHref("automotive", "tire-shop-franchise"), comingSoon: true },
    ],
  },
] as const;

export const franchiseBrowseCards = franchiseCategories.map((category) => ({
  id: category.id,
  label: category.name,
  href: `#${category.id}`,
  description: category.description,
  count: category.franchises.length,
}));
