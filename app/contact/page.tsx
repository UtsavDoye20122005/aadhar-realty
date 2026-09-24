import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Reveal, staggerStep } from "@/components/motion/Reveal";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { TextLink } from "@/components/ui/text-link";
import { labels, meta, nav } from "@/content/copy";
import { photos } from "@/content/photos";
import { site } from "@/content/site";
import type { Weekday } from "@/content/types";

export const metadata: Metadata = {
  title: meta.contactTitle,
  description: meta.contactDescription,
  openGraph: {
    type: "website",
    siteName: site.businessName,
    locale: "en_IN",
    title: `${meta.contactTitle} · ${site.businessName}`,
    description: meta.contactDescription,
    images: [
      {
        url: photos.office.src,
        width: photos.office.width,
        height: photos.office.height,
        alt: photos.office.alt,
      },
    ],
  },
};

const dayNames: Record<Weekday, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

const weekdays = Object.keys(dayNames) as Weekday[];

const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  labels.whatsappPrefill,
)}`;

const factLabel = "text-xs tracking-label text-muted-foreground uppercase";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow={site.city}
        title={meta.contactTitle}
        intro={meta.contactDescription}
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <h2 className="text-3xl xl:text-4xl">{labels.enquiryHeading}</h2>
            <p className="mt-6 max-w-[52ch] text-lg text-pretty text-muted-foreground">
              {labels.enquiryBody}
            </p>
            <div className="mt-12">
              <EnquiryForm />
            </div>
          </Reveal>

          <Reveal delay={staggerStep}>
            <div className="border-t border-border pt-8 lg:border-t-0 lg:pt-0">
              <h2 className={factLabel}>{labels.footerTalk}</h2>
              <ul className="mt-6 flex flex-col gap-3 text-lg">
                <li>
                  <TextLink href={`tel:${site.phoneTel}`}>
                    {site.phoneDisplay}
                  </TextLink>
                </li>
                <li>
                  <TextLink href={whatsappHref}>
                    {nav.whatsapp} {site.whatsappDisplay}
                  </TextLink>
                </li>
                <li>
                  <TextLink href={`mailto:${site.email}`}>
                    {site.email}
                  </TextLink>
                </li>
              </ul>

              <h2 className={`${factLabel} mt-12`}>{labels.footerVisit}</h2>
              <address className="mt-6 not-italic">
                {site.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <p className="mt-4">
                <TextLink href={site.mapsDirectionsUrl}>
                  {labels.getDirections}
                </TextLink>
              </p>

              <h2 className={`${factLabel} mt-12`}>{labels.officeHours}</h2>
              <dl className="mt-6 flex flex-col">
                {weekdays.map((day) => {
                  const hours = site.openingHours[day];
                  return (
                    <div
                      key={day}
                      className="flex items-baseline justify-between gap-4 border-t border-border py-3"
                    >
                      <dt>{dayNames[day]}</dt>
                      <dd className="text-muted-foreground">
                        {hours.closed
                          ? labels.closedNow
                          : `${hours.open}–${hours.close}`}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-border" innerClassName="max-w-page">
        <Reveal>
          <h2 className="text-3xl xl:text-4xl">{labels.location}</h2>
          <div className="mt-12 aspect-16/9 w-full border border-border bg-muted">
            <iframe
              src={site.mapsEmbedUrl}
              title={site.addressOneLine}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
