import type { ReactNode } from "react";
import type { IndustrySlug } from "@/lib/industry-styles";

type IndustryIconProps = {
  slug: IndustrySlug;
  className?: string;
};

export function IndustryIcon({ slug, className = "size-5" }: IndustryIconProps) {
  const icons: Record<IndustrySlug, ReactNode> = {
    restaurant: (
      <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.23 6 9.08 6 10.12v2.88c0 1.008.845 1.858 1.976 2.004C9.303 15.294 10.645 15.35 12 15.35m0-7.05c1.355 0 2.697.056 4.024.166C17.155 8.23 18 9.08 18 10.12v2.88c0 1.008-.845 1.858-1.976 2.004C14.697 15.294 13.355 15.35 12 15.35m0-7.05V6.75" />
      </svg>
    ),
    "coffee-shop": (
      <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17 9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z" />
      </svg>
    ),
    bakery: (
      <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.23 6 9.08 6 10.12v1.38c0 1.008.845 1.858 1.976 2.004C9.303 13.794 10.645 13.85 12 13.85m0-6.6c1.355 0 2.697.056 4.024.166C17.155 7.73 18 8.58 18 9.62v1.38c0 1.008-.845 1.858-1.976 2.004C14.697 13.794 13.355 13.85 12 13.85m0-6.6V3.75M9 18.75h6" />
      </svg>
    ),
    "food-truck": (
      <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    "dental-practice": (
      <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.5 2-3 4.5-3 7.5a3 3 0 0 0 6 0c0-3-1.5-5.5-3-7.5Zm0 0c1.5 2 3 4.5 3 7.5a3 3 0 0 1-6 0c0-3 1.5-5.5 3-7.5Zm-1.5 10.5h3M9 21c0-1.5 1.5-3 3-3s3 1.5 3 3" />
      </svg>
    ),
    "veterinary-clinic": (
      <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 4.5c.5-1 1.5-1.5 3.5-1.5s3 .5 3.5 1.5c.8 1.6.5 4-.5 5.5-1 1.5-2 2-3 2s-2-.5-3-2c-1-1.5-1.3-3.9-.5-5.5Z" />
      </svg>
    ),
    "physical-therapy-clinic": (
      <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    "chiropractic-clinic": (
      <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M8 7h8M9 12h6M10 17h4" />
      </svg>
    ),
    hvac: (
      <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25M12 18.75V21M4.5 12H2.25M21.75 12H19.5M5.636 5.636 7.05 7.05M16.95 16.95l1.414 1.414M5.636 18.364 7.05 16.95M16.95 7.05l1.414-1.414M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" />
      </svg>
    ),
    plumbing: (
      <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </svg>
    ),
    electrical: (
      <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
    roofing: (
      <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    landscaping: (
      <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M8.25 21h7.5M6.75 12.75h10.5M12 12.75V3m0 0c-2.5 2-4 4.5-4 6.75a4 4 0 0 0 8 0c0-2.25-1.5-4.75-4-6.75Z" />
      </svg>
    ),
    "pest-control": (
      <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.25-2.25c0-1.152-.26-2.243-.713-3.219-.252-.591-.63-1.134-1.108-1.607a48.554 48.554 0 0 0-10.027 0 8.969 8.969 0 0 0-1.108 1.607c-.453.976-.713 2.067-.713 3.219A2.25 2.25 0 0 0 12 12.75Z" />
      </svg>
    ),
    "cleaning-business": (
      <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  };

  return icons[slug] ?? icons.restaurant;
}
