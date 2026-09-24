import { Approach } from "@/components/sections/Approach";
import { CallToAction } from "@/components/sections/CallToAction";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { Reviews } from "@/components/sections/Reviews";
import { home } from "@/content/copy";
import { projects } from "@/content/projects";

const featured = [
  "gomti-courtyard",
  "vatika-riverside",
  "vibhuti-khand-residences",
];

export default function Home() {
  const shortlist = featured
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project) => project !== undefined);

  return (
    <>
      <Hero />
      <FeaturedProjects projects={shortlist} />
      <Approach heading={home.approachHeading} />
      <Reviews />
      <CallToAction />
    </>
  );
}
