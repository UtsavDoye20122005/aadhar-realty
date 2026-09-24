import { Reveal, staggerStep } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { ActionLink } from "@/components/ui/action-link";
import { ProjectCard } from "@/components/ui/project-card";
import { home, labels } from "@/content/copy";
import type { Project } from "@/content/types";

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <Section className="border-t border-border">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-label text-muted-foreground uppercase">
              {labels.featured}
            </p>
            <h2 className="mt-5 max-w-[20ch] text-3xl xl:text-4xl">
              {home.featuredHeading}
            </h2>
          </div>
          <ActionLink href="/projects" variant="outline">
            {labels.viewAll}
          </ActionLink>
        </div>
        <p className="mt-6 max-w-[62ch] text-lg text-pretty text-muted-foreground">
          {home.featuredIntro}
        </p>
      </Reveal>

      <ul className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <li key={project.slug}>
            <Reveal delay={index * staggerStep}>
              <ProjectCard project={project} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
