import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type HashLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  children: ReactNode;
};

function hasHashFragment(href: string): boolean {
  return href.includes("#");
}

/** Native anchor for hash hrefs — avoids Next.js client navigation / RSC prefetch errors. */
export function HashLink({ href, children, prefetch, replace, scroll, ...rest }: HashLinkProps) {
  if (hasHashFragment(href)) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} prefetch={prefetch} replace={replace} scroll={scroll} {...rest}>
      {children}
    </Link>
  );
}
