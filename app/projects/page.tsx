import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { CallToAction } from "@/components/sections/CallToAction";
import { ProjectDesk } from "@/components/sections/ProjectDesk";
import { meta } from "@/content/copy";
import { localities, projects } from "@/content/projects";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: meta.projectsTitle,
  description: meta.projectsDescription,
  openGraph: {
    type: "website",
    siteName: site.businessName,
    locale: "en_IN",
    title: `${meta.projectsTitle} · ${site.businessName}`,
    description: meta.projectsDescription,
    images: [
      {
        url: projects[0].images[0].src,
        width: projects[0].images[0].width,
        height: projects[0].images[0].height,
        alt: projects[0].images[0].alt,
      },
    ],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow={site.city}
        title={meta.projectsTitle}
        intro={meta.projectsDescription}
      />
      <Section>
        <ProjectDesk projects={projects} localities={localities} />
      </Section>
      <CallToAction />
    </>
  );
}
