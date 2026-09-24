import Image from "next/image";

import { ActionLink } from "@/components/ui/action-link";
import { hero, labels, nav } from "@/content/copy";
import { photos } from "@/content/photos";
import { site } from "@/content/site";

const image = photos.vatikaExt;

const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  labels.whatsappPrefill,
)}`;

export function Hero() {
  return (
    <section className="grid lg:min-h-svh lg:grid-cols-12">
      <div className="order-2 flex flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:order-1 lg:col-span-6 lg:px-12 lg:py-24 xl:col-span-5 xl:pr-14 xl:pl-20">
        <h1 className="text-3xl xl:text-4xl">{site.tagline}</h1>

        <p className="mt-6 max-w-[46ch] text-lg text-pretty text-muted-foreground">
          {hero.subline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <ActionLink href={`tel:${site.phoneTel}`}>
            {nav.call} {site.phoneDisplay}
          </ActionLink>

          <ActionLink href={whatsappHref} variant="outline">
            {nav.whatsapp}
          </ActionLink>
        </div>

        <p className="mt-12 flex flex-wrap items-baseline gap-y-1 border-t border-border pt-6 text-xs tracking-label text-muted-foreground uppercase">
          <span className="whitespace-nowrap">
            {labels.rera} {site.reraNumber}
          </span>
          <span className="whitespace-nowrap before:mx-2 before:content-['\00B7']">
            {site.city} {hero.since} {site.establishedYear}
          </span>
        </p>
      </div>

      <div className="relative order-1 aspect-3/2 sm:aspect-16/9 lg:order-2 lg:col-span-6 lg:aspect-auto xl:col-span-7">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="(min-width: 1280px) 58vw, (min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
