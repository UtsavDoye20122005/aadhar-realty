import { pageGutter } from "@/components/layout/container";
import { TextLink } from "@/components/ui/text-link";
import { labels, nav } from "@/content/copy";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const columnHeading = "text-xs tracking-label text-brass-soft uppercase";

const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  labels.whatsappPrefill,
)}`;

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className={cn(pageGutter, "py-section lg:py-section-lg")}>
        <div className="max-w-page">
          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            <nav aria-labelledby="footer-quick">
              <h2 id="footer-quick" className={columnHeading}>
                {labels.footerQuick}
              </h2>
              <ul className="mt-6 flex flex-col gap-3">
                {nav.links.map((link) => (
                  <li key={link.href}>
                    <TextLink href={link.href} tone="onDark">
                      {link.label}
                    </TextLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className={columnHeading}>{labels.footerVisit}</h2>
              <address className="mt-6 not-italic">
                {site.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <p className="mt-4 text-ivory/70">{site.hoursSummary}</p>
              <p className="mt-4">
                <TextLink href={site.mapsDirectionsUrl} tone="onDark">
                  {labels.getDirections}
                </TextLink>
              </p>
            </div>

            <div>
              <h2 className={columnHeading}>{labels.footerTalk}</h2>
              <ul className="mt-6 flex flex-col gap-3">
                <li>
                  <TextLink href={`tel:${site.phoneTel}`} tone="onDark">
                    {site.phoneDisplay}
                  </TextLink>
                </li>
                <li>
                  <TextLink href={whatsappHref} tone="onDark">
                    {nav.whatsapp} {site.whatsappDisplay}
                  </TextLink>
                </li>
                <li>
                  <TextLink href={`mailto:${site.email}`} tone="onDark">
                    {site.email}
                  </TextLink>
                </li>
              </ul>

              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                {site.social.map((channel) => (
                  <li key={channel.name}>
                    <TextLink href={channel.href} tone="onDark">
                      {channel.name}
                    </TextLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 border-t border-ivory/15 pt-8">
            <p className="max-w-[80ch] text-sm text-ivory/70">
              {site.reraDisclaimer}
            </p>
            <p className="mt-6 flex flex-wrap gap-x-2 gap-y-1 text-xs tracking-label text-ivory/70 uppercase">
              <span className="whitespace-nowrap">{site.businessName}</span>
              <span aria-hidden="true">·</span>
              <span className="whitespace-nowrap">
                {labels.rera} {site.reraNumber}
              </span>
              <span aria-hidden="true">·</span>
              <span className="whitespace-nowrap">{site.credit}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
