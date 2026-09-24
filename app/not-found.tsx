import { Section } from "@/components/layout/Section";
import { ActionLink } from "@/components/ui/action-link";
import { notFoundCopy } from "@/content/copy";

export default function NotFound() {
  return (
    <Section>
      <h1 className="max-w-[20ch] text-3xl xl:text-4xl">
        {notFoundCopy.title}
      </h1>
      <p className="mt-6 max-w-[56ch] text-lg text-pretty text-muted-foreground">
        {notFoundCopy.body}
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <ActionLink href="/projects">{notFoundCopy.action}</ActionLink>
        <ActionLink href="/" variant="outline">
          {notFoundCopy.home}
        </ActionLink>
      </div>
    </Section>
  );
}
