"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { pageGutter } from "@/components/layout/container";
import { ActionLink } from "@/components/ui/action-link";
import { nav } from "@/content/copy";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Close on route change, so tapping a link does not leave the panel open.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="-mr-2 inline-flex min-h-11 items-center px-2 text-xs tracking-label uppercase"
      >
        {nav.menu}
      </button>

      {open ? (
        <div
          id="mobile-nav"
          ref={panelRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label={nav.menu}
          className="fixed inset-0 z-50 flex flex-col bg-background"
        >
          <div
            className={cn(
              pageGutter,
              "flex items-center justify-between border-b border-border py-5",
            )}
          >
            <span className="font-display text-xl">{site.shortName}</span>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                triggerRef.current?.focus();
              }}
              className="-mr-2 inline-flex min-h-11 items-center px-2 text-xs tracking-label uppercase"
            >
              {nav.closeMenu}
            </button>
          </div>

          <nav className={cn(pageGutter, "flex flex-col py-10")}>
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className="border-b border-border py-5 font-display text-2xl aria-[current=page]:text-brass"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={cn(pageGutter, "mt-auto flex flex-col gap-3 pb-12")}>
            <ActionLink href={`tel:${site.phoneTel}`}>
              {nav.call} {site.phoneDisplay}
            </ActionLink>
          </div>
        </div>
      ) : null}
    </div>
  );
}
