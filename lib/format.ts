import type { ProjectStatus } from "@/content/types";
import { labels } from "@/content/copy";

/** Indian price shorthand: ₹1.4 Cr, ₹85 L. */
export function formatPrice(value: number): string {
  if (value >= 10_000_000) {
    const cr = value / 10_000_000;
    return `₹${cr % 1 === 0 ? cr.toFixed(0) : cr.toFixed(2).replace(/0$/, "")} Cr`;
  }
  return `₹${Math.round(value / 100_000)} L`;
}

export function formatPriceRange(min: number, max: number): string {
  if (min === max) return formatPrice(min);
  return `${formatPrice(min)} ${labels.to} ${formatPrice(max)}`;
}

/** "2027-06-30" -> "June 2027" */
export function formatPossession(iso: string): string {
  const date = new Date(`${iso}T00:00:00Z`);
  return new Intl.DateTimeFormat("en-IN", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function formatArea(sqFt: number): string {
  return `${new Intl.NumberFormat("en-IN").format(sqFt)} ${labels.sqft}`;
}

export function statusLabel(status: ProjectStatus): string {
  if (status === "ready") return labels.ready;
  if (status === "new-launch") return labels.newLaunch;
  return labels.underConstruction;
}

export function formatBhk(options: readonly number[]): string {
  return `${options.join(", ")} ${labels.bhk}`;
}
