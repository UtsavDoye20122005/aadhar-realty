import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Reveal, staggerStep } from "@/components/motion/Reveal";
import { CallToAction } from "@/components/sections/CallToAction";
import { EmiCalculator } from "@/components/sections/EmiCalculator";
import { ActionLink } from "@/components/ui/action-link";
import { TextLink } from "@/components/ui/text-link";
import { amenityLabels, labels, landmarkLabels, meta, nav } from "@/content/copy";
import { getProject, projects } from "@/content/projects";
import { site } from "@/content/site";
import {
  formatArea,
  formatBhk,
  formatPossession,
  formatPrice,
  formatPriceRange,
  statusLabel,
} from "@/lib/format";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: meta.projectsTitle };

  const [cover] = project.images;
  const description = project.excerpt;

  return {
    title: `${project.name}, ${project.locality}`,
    description,
    openGraph: {
      type: "website",
      siteName: site.businessName,
      locale: "en_IN",
      title: `${project.name}, ${project.locality} · ${site.businessName}`,
      description,
      images: [
        {
          url: cover.src,
          width: cover.width,
          height: cover.height,
          alt: cover.alt,
        },
      ],
    },
  };
}

const factLabel = "text-xs tracking-label text-muted-foreground uppercase";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const [cover, ...rest] = project.images;
  const siteVisitHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    labels.siteVisitPrefill(project.name),
  )}`;

  return (
    <>
      <PageHeader
        eyebrow={project.locality}
        title={project.name}
        intro={project.excerpt}
      />

      <Section>
        <Reveal>
          <div className="relative aspect-16/9 bg-muted">
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              priority
              sizes="(min-width: 1024px) 72rem, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal>
            <h2 className="sr-only">{project.name}</h2>
            {project.description.split("\n").map((para) => (
              <p key={para} className="max-w-[62ch] text-lg text-pretty">
                {para}
              </p>
            ))}

            <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3">
              <div>
                <dt className={factLabel}>{labels.price}</dt>
                <dd className="mt-2 font-display text-xl">
                  {formatPriceRange(project.priceMin, project.priceMax)}
                </dd>
              </div>
              <div>
                <dt className={factLabel}>{labels.bhk}</dt>
                <dd className="mt-2">{formatBhk(project.bhkOptions)}</dd>
              </div>
              <div>
                <dt className={factLabel}>{labels.possession}</dt>
                <dd className="mt-2">
                  {statusLabel(project.status)}
                  {project.status === "ready"
                    ? null
                    : ` · ${formatPossession(project.possessionDate)}`}
                </dd>
              </div>
              <div>
                <dt className={factLabel}>Units</dt>
                <dd className="mt-2">
                  {project.totalUnits} across {project.towers}
                </dd>
              </div>
              <div>
                <dt className={factLabel}>Floors</dt>
                <dd className="mt-2">{project.typicalFloors}</dd>
              </div>
              <div>
                <dt className={factLabel}>Land</dt>
                <dd className="mt-2">{project.landAcres} acres</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={staggerStep}>
            <div className="border-t border-border pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
              <p className={factLabel}>{labels.rera}</p>
              <p className="mt-2">{project.reraNumber}</p>

              <p className={`${factLabel} mt-8`}>{labels.locality}</p>
              <address className="mt-2 not-italic">{project.address}</address>

              <div className="mt-10 flex flex-col gap-3">
                <ActionLink href={siteVisitHref}>{nav.siteVisit}</ActionLink>
                <ActionLink href={`tel:${site.phoneTel}`} variant="outline">
                  {nav.call} {site.phoneDisplay}
                </ActionLink>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-border">
        <Reveal>
          <h2 className="text-3xl xl:text-4xl">{labels.gallery}</h2>
        </Reveal>
        <ul className="mt-12 grid gap-8 sm:grid-cols-3">
          {rest.map((image, index) => (
            <li key={image.src}>
              <Reveal delay={index * staggerStep}>
                <div className="relative aspect-4/3 bg-muted">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-border bg-ivory-deep">
        <Reveal>
          <h2 className="text-3xl xl:text-4xl">{labels.floorPlans}</h2>
        </Reveal>
        <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {project.floorPlans.map((floorPlan, index) => (
            <li key={floorPlan.bhk}>
              <Reveal delay={index * staggerStep}>
                <div className="relative aspect-3/2 bg-muted">
                  <Image
                    src={floorPlan.image.src}
                    alt={floorPlan.image.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 text-lg">
                  {floorPlan.bhk} {labels.bhk}
                </h3>
                <p className="mt-1 font-display text-xl">
                  {formatPrice(floorPlan.priceInr)}
                </p>
                <dl className="mt-3 flex flex-col gap-1 text-sm text-muted-foreground">
                  <div className="flex gap-2">
                    <dt>{labels.carpet}</dt>
                    <dd>{formatArea(floorPlan.carpetAreaSqFt)}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt>{labels.builtUp}</dt>
                    <dd>{formatArea(floorPlan.builtUpAreaSqFt)}</dd>
                  </div>
                </dl>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-border">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl xl:text-4xl">{labels.amenities}</h2>
            <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {project.amenities.map((amenity) => (
                <li key={amenity} className="border-t border-border pt-4">
                  {amenityLabels[amenity]}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={staggerStep}>
            <h2 className="text-3xl xl:text-4xl">{labels.progress}</h2>
            <ol className="mt-10 flex flex-col gap-6">
              {project.constructionProgress.map((phase) => (
                <li key={phase.name} className="border-t border-border pt-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="text-lg">{phase.name}</h3>
                    <span className={factLabel}>{phase.percent}%</span>
                  </div>
                  <div
                    role="progressbar"
                    aria-valuenow={phase.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={phase.name}
                    className="mt-3 h-px w-full bg-border"
                  >
                    <div
                      className="h-px bg-brass"
                      style={{ width: `${phase.percent}%` }}
                    />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {phase.note}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-border bg-ivory-deep">
        <Reveal>
          <h2 className="text-3xl xl:text-4xl">{labels.emiHeading}</h2>
        </Reveal>
        <div className="mt-12">
          <EmiCalculator defaultPrice={project.priceMin} />
        </div>
        <Reveal>
          <div className="mt-14 border-t border-border pt-8">
            <h3 className={factLabel}>{labels.approvedBanks}</h3>
            <p className="mt-3">{project.approvedBanks.join(" · ")}</p>
          </div>
        </Reveal>
      </Section>

      <Section className="border-t border-border">
        <Reveal>
          <h2 className="text-3xl xl:text-4xl">{labels.location}</h2>
        </Reveal>
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal>
            <div className="aspect-16/9 w-full border border-border bg-muted">
              <iframe
                src={project.mapEmbedUrl}
                title={`${project.name}, ${project.locality}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
            </div>
            <p className="mt-6">
              <TextLink href={project.mapDirectionsUrl}>
                {labels.getDirections}
              </TextLink>
            </p>
          </Reveal>

          <Reveal delay={staggerStep}>
            <h3 className={factLabel}>{labels.nearby}</h3>
            <ul className="mt-6 flex flex-col">
              {project.landmarks.map((landmark) => (
                <li
                  key={landmark.name}
                  className="flex flex-wrap items-baseline justify-between gap-3 border-t border-border py-4"
                >
                  <span>
                    {landmark.name}
                    <span className="block text-sm text-muted-foreground">
                      {landmarkLabels[landmark.kind]}
                    </span>
                  </span>
                  <span className={factLabel}>{landmark.distanceKm} km</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <CallToAction />
    </>
  );
}
