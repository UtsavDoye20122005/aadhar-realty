import Link from "next/link";

import { cn } from "@/lib/utils";

/**
 * Page-level actions. One hover, one active, one target size, everywhere.
 * Focus comes from the global :focus-visible rule in globals.css.
 */
const base =
  "inline-flex min-h-11 items-center justify-center px-7 text-xs tracking-label uppercase transition-colors active:translate-y-px";

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/85",
  outline: "border border-brass text-foreground hover:bg-secondary",
} as const;

export interface ActionLinkProps {
  href: string;
  variant?: keyof typeof variants;
  className?: string;
  children: React.ReactNode;
}

export function ActionLink({
  href,
  variant = "primary",
  className,
  children,
}: ActionLinkProps) {
  const classes = cn(base, variants[variant], className);

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
