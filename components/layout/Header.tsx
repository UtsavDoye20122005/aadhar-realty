import Link from "next/link";

import { pageGutter } from "@/components/layout/container";
import { MobileNav } from "@/components/layout/MobileNav";
import { ActionLink } from "@/components/ui/action-link";
import { TextLink } from "@/components/ui/text-link";
import { nav } from "@/content/copy";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-3 focus:bg-primary focus:px-4 focus:py-3 focus:text-xs focus:tracking-label focus:text-primary-foreground focus:uppercase"
      >
        {nav.skipToContent}
      </a>

      <div
        className={cn(
          pageGutter,
          "flex items-center justify-between gap-8 py-5",
        )}
      >
        <Link href="/" className="font-display text-xl">
          {site.businessName}
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {nav.links.map((link) => (
              <li key={link.href}>
                <TextLink href={link.href} className="text-sm">
                  {link.label}
                </TextLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <ActionLink href={`tel:${site.phoneTel}`} variant="outline">
            {nav.call}
          </ActionLink>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
