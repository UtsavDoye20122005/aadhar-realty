import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { ActionLink } from "@/components/ui/action-link";
import { home, labels, nav } from "@/content/copy";
import { site } from "@/content/site";

const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  labels.whatsappPrefill,
)}`;

export function CallToAction() {
  return (
    <Section className="bg-charcoal text-ivory">
      <Reveal>
        <h2 className="max-w-[16ch] text-3xl xl:text-4xl">{home.ctaHeading}</h2>
        <p className="mt-6 max-w-[56ch] text-lg text-pretty text-ivory/70">
          {home.ctaBody}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <ActionLink
            href={`tel:${site.phoneTel}`}
            className="bg-ivory text-charcoal hover:bg-ivory/85"
          >
            {nav.call} {site.phoneDisplay}
          </ActionLink>
          <ActionLink
            href={whatsappHref}
            variant="outline"
            className="border-brass-soft text-ivory hover:bg-ivory/10"
          >
            {nav.whatsapp}
          </ActionLink>
          <ActionLink
            href="/contact"
            variant="outline"
            className="border-brass-soft text-ivory hover:bg-ivory/10"
          >
            {nav.siteVisit}
          </ActionLink>
        </div>
      </Reveal>
    </Section>
  );
}
