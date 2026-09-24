import Link from "next/link";

import { cn } from "@/lib/utils";

/**
 * Inline and navigation links. The label keeps its full contrast on hover and
 * gains a brass underline, rather than fading to a lower-contrast colour.
 */
const base =
  "underline-offset-4 transition-colors hover:underline focus-visible:underline";

const tones = {
  default: "text-foreground decoration-brass",
  muted: "text-muted-foreground hover:text-foreground decoration-brass",
  onDark: "text-ivory decoration-brass-soft",
} as const;

export interface TextLinkProps {
  href: string;
  tone?: keyof typeof tones;
  className?: string;
  children: React.ReactNode;
}

export function TextLink({
  href,
  tone = "default",
  className,
  children,
}: TextLinkProps) {
  const classes = cn(base, tones[tone], className);

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
