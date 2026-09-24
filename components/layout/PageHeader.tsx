import { Reveal } from "@/components/motion/Reveal";
import { pageGutter } from "@/components/layout/container";
import { cn } from "@/lib/utils";

/**
 * Every page heading uses the same size step. A page does not get a larger
 * heading because it feels more important.
 */
export function PageHeader({
  title,
  intro,
  eyebrow,
}: {
  title: string;
  intro?: string;
  eyebrow?: string;
}) {
  return (
    <div className={cn(pageGutter, "border-b border-border pt-section pb-12")}>
      <div className="max-w-page">
        <Reveal>
          {eyebrow ? (
            <p className="mb-5 text-xs tracking-label text-muted-foreground uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-[20ch] text-3xl xl:text-4xl">{title}</h1>
          {intro ? (
            <p className="mt-6 max-w-[62ch] text-lg text-pretty text-muted-foreground">
              {intro}
            </p>
          ) : null}
        </Reveal>
      </div>
    </div>
  );
}
