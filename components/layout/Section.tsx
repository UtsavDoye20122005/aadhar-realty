import { pageGutter } from "@/components/layout/container";
import { cn } from "@/lib/utils";

/**
 * The only vertical rhythm on the site. Every section top and bottom uses
 * these two values, and content is capped at one width, left-aligned to the
 * shared gutter so the left edge never moves between pages.
 */
export function Section({
  children,
  className,
  innerClassName,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-section lg:py-section-lg", className)}>
      <div className={pageGutter}>
        <div className={cn("max-w-page", innerClassName)}>{children}</div>
      </div>
    </section>
  );
}
