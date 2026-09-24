import Image from "next/image";
import Link from "next/link";

import { labels } from "@/content/copy";
import type { Project } from "@/content/types";
import {
  formatBhk,
  formatPossession,
  formatPriceRange,
  statusLabel,
} from "@/lib/format";
import { cn } from "@/lib/utils";

/**
 * Card hierarchy is fixed: photo, locality, price, configuration, possession,
 * RERA id. Price is the second thing the eye lands on, never the first.
 */
export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const [cover] = project.images;

  return (
    <article className={cn("group", className)}>
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-4/3 overflow-hidden bg-muted">
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>

        <p className="mt-5 text-xs tracking-label text-muted-foreground uppercase">
          {project.locality}
        </p>

        <h3 className="mt-2 text-lg group-hover:underline group-hover:decoration-brass group-hover:underline-offset-4">
          {project.name}
        </h3>

        <p className="mt-1 font-display text-xl">
          {formatPriceRange(project.priceMin, project.priceMax)}
        </p>

        <dl className="mt-4 flex flex-col gap-1 text-sm text-muted-foreground">
          <div className="flex gap-2">
            <dt className="sr-only">{labels.bhk}</dt>
            <dd>{formatBhk(project.bhkOptions)}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="sr-only">{labels.possession}</dt>
            <dd>
              {statusLabel(project.status)}
              {project.status === "ready"
                ? null
                : ` · ${formatPossession(project.possessionDate)}`}
            </dd>
          </div>
        </dl>

        <p className="mt-4 border-t border-border pt-4 text-xs tracking-label text-muted-foreground uppercase">
          {labels.rera} {project.reraNumber}
        </p>
      </Link>
    </article>
  );
}
