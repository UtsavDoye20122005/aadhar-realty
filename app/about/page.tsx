import type { Metadata } from "next";
import Image from "next/image";

import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Reveal, staggerStep } from "@/components/motion/Reveal";
import { Approach } from "@/components/sections/Approach";
import { CallToAction } from "@/components/sections/CallToAction";
import { Reviews } from "@/components/sections/Reviews";
import { TextLink } from "@/components/ui/text-link";
import { about, labels, meta } from "@/content/copy";
import { photos } from "@/content/photos";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: meta.aboutTitle,
  description: meta.aboutDescription,
  openGraph: {
    type: "website",
    siteName: site.businessName,
    locale: "en_IN",
    title: `${meta.aboutTitle} · ${site.businessName}`,
    description: meta.aboutDescription,
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

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={`${site.city} · ${site.establishedYear}`}
        title={meta.aboutTitle}
        intro={about.lede}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <Reveal>
            <div className="flex flex-col gap-6">
              {about.body.map((para) => (
                <p key={para} className="max-w-[62ch] text-lg text-pretty">
                  {para}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={staggerStep}>
            <div className="relative aspect-4/5 bg-muted">
              <Image
                src={photos.aboutDesk.src}
                alt={photos.aboutDesk.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Approach heading={about.approachHeading} />

      <Section className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-3xl xl:text-4xl">{about.officeHeading}</h2>
            <p className="mt-6 max-w-[56ch] text-lg text-pretty text-muted-foreground">
              {about.officeBody}
            </p>

            <address className="mt-10 not-italic">
              {site.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>

            <p className="mt-4 text-muted-foreground">{site.hoursSummary}</p>

            <p className="mt-6">
              <TextLink href={site.mapsDirectionsUrl}>
                {labels.getDirections}
              </TextLink>
            </p>

            <p className="mt-10 border-t border-border pt-6 text-xs tracking-label text-muted-foreground uppercase">
              {labels.rera} {site.reraNumber}
            </p>
          </Reveal>

          <Reveal delay={staggerStep}>
            <div className="relative aspect-4/3 bg-muted">
              <Image
                src={photos.office.src}
                alt={photos.office.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Reviews />
      <CallToAction />
    </>
  );
}
