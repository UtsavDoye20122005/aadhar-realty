import { Reveal, staggerStep } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { TextLink } from "@/components/ui/text-link";
import { home, labels } from "@/content/copy";
import { reviews } from "@/content/reviews";
import { site } from "@/content/site";

export function Reviews() {
  return (
    <Section className="border-t border-border">
      <Reveal>
        <h2 className="max-w-[20ch] text-3xl xl:text-4xl">
          {labels.reviewsHeading}
        </h2>
        <p className="mt-6 max-w-[62ch] text-lg text-pretty text-muted-foreground">
          {home.reviewsIntro}
        </p>
      </Reveal>

      <ul className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-2">
        {reviews.map((review, index) => (
          <li key={review.name}>
            <Reveal delay={index * staggerStep}>
              <figure className="flex h-full flex-col border-t border-border pt-6">
                <figcaption className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <span className="text-lg">{review.name}</span>
                  <span className="text-xs tracking-label text-muted-foreground uppercase">
                    {review.locality} · {review.date}
                  </span>
                </figcaption>
                <p
                  className="mt-2 text-xs tracking-label text-muted-foreground uppercase"
                  aria-label={`${review.rating} out of 5`}
                >
                  {"★".repeat(review.rating)}
                  <span className="text-border">
                    {"★".repeat(5 - review.rating)}
                  </span>
                </p>
                <blockquote className="mt-5 max-w-[56ch] text-pretty">
                  {review.body}
                </blockquote>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal>
        <p className="mt-14">
          <TextLink href={site.googleReviewsUrl}>
            {labels.seeAllReviews}
          </TextLink>
        </p>
      </Reveal>
    </Section>
  );
}
