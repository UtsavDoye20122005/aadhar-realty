import { Reveal, staggerStep } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { about } from "@/content/copy";

/** Shared by the homepage and /about so the desk's promises read identically. */
export function Approach({ heading }: { heading: string }) {
  return (
    <Section className="border-t border-border bg-ivory-deep">
      <Reveal>
        <h2 className="max-w-[20ch] text-3xl xl:text-4xl">{heading}</h2>
      </Reveal>

      <ol className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2">
        {about.approach.map((item, index) => (
          <li key={item.title}>
            <Reveal delay={index * staggerStep}>
              <p className="text-xs tracking-label text-muted-foreground uppercase">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-xl">{item.title}</h3>
              <p className="mt-3 max-w-[52ch] text-pretty text-muted-foreground">
                {item.body}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
