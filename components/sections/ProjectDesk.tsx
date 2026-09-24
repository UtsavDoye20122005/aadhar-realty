"use client";

import { useMemo, useState } from "react";

import { Reveal, staggerStep } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/ui/project-card";
import { filterCopy, labels } from "@/content/copy";
import type { BhkOption, Project, ProjectStatus } from "@/content/types";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

type SortKey = "price-asc" | "price-desc" | "possession";

const BUDGET_BANDS = [6_000_000, 10_000_000, 15_000_000, 20_000_000, 35_000_000];
const BHK_CHOICES: BhkOption[] = [2, 3, 4];

const bhkLabel: Record<BhkOption, string> = {
  2: filterCopy.bhk2,
  3: filterCopy.bhk3,
  4: filterCopy.bhk4,
};

const statusChoices: { value: ProjectStatus; label: string }[] = [
  { value: "ready", label: labels.ready },
  { value: "under-construction", label: labels.underConstruction },
  { value: "new-launch", label: labels.newLaunch },
];

const fieldClass =
  "h-11 w-full border border-input bg-background px-3 text-sm text-foreground";
const fieldLabelClass =
  "block text-xs tracking-label text-muted-foreground uppercase";

export function ProjectDesk({
  projects,
  localities,
}: {
  projects: Project[];
  localities: string[];
}) {
  const [bhk, setBhk] = useState<BhkOption[]>([]);
  const [locality, setLocality] = useState("");
  const [status, setStatus] = useState("");
  const [budget, setBudget] = useState("");
  const [sort, setSort] = useState<SortKey>("price-asc");

  const isFiltered =
    bhk.length > 0 || locality !== "" || status !== "" || budget !== "";

  const visible = useMemo(() => {
    const maxBudget = budget === "" ? Infinity : Number(budget);

    const filtered = projects.filter((project) => {
      if (locality && project.locality !== locality) return false;
      if (status && project.status !== status) return false;
      if (project.priceMin > maxBudget) return false;
      if (bhk.length > 0 && !bhk.some((n) => project.bhkOptions.includes(n))) {
        return false;
      }
      return true;
    });

    return [...filtered].sort((a, b) => {
      if (sort === "price-desc") return b.priceMin - a.priceMin;
      if (sort === "possession") {
        return a.possessionDate.localeCompare(b.possessionDate);
      }
      return a.priceMin - b.priceMin;
    });
  }, [projects, bhk, locality, status, budget, sort]);

  function toggleBhk(value: BhkOption) {
    setBhk((current) =>
      current.includes(value)
        ? current.filter((n) => n !== value)
        : [...current, value],
    );
  }

  function clearAll() {
    setBhk([]);
    setLocality("");
    setStatus("");
    setBudget("");
  }

  return (
    <div>
      <div className="border-b border-border pb-10">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="text-xs tracking-label text-muted-foreground uppercase">
            {labels.filters}
          </h2>
          {isFiltered ? (
            <button
              type="button"
              onClick={clearAll}
              className="text-xs tracking-label text-foreground uppercase underline underline-offset-4 decoration-brass"
            >
              {labels.clearAll}
            </button>
          ) : null}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <fieldset>
            <legend className={fieldLabelClass}>{labels.bhk}</legend>
            <div className="mt-3 flex gap-2">
              {BHK_CHOICES.map((value) => {
                const active = bhk.includes(value);
                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => toggleBhk(value)}
                    aria-pressed={active}
                    className={cn(
                      "h-11 flex-1 border text-xs tracking-label uppercase transition-colors",
                      active
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-input text-foreground hover:bg-secondary",
                    )}
                  >
                    {bhkLabel[value]}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div>
            <label htmlFor="filter-locality" className={fieldLabelClass}>
              {labels.locality}
            </label>
            <select
              id="filter-locality"
              value={locality}
              onChange={(event) => setLocality(event.target.value)}
              className={cn(fieldClass, "mt-3")}
            >
              <option value="">{filterCopy.any}</option>
              {localities.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="filter-budget" className={fieldLabelClass}>
              {labels.budget}
            </label>
            <select
              id="filter-budget"
              value={budget}
              onChange={(event) => setBudget(event.target.value)}
              className={cn(fieldClass, "mt-3")}
            >
              <option value="">{filterCopy.any}</option>
              {BUDGET_BANDS.map((band) => (
                <option key={band} value={band}>
                  {filterCopy.upTo} {formatPrice(band)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="filter-status" className={fieldLabelClass}>
              {labels.possessionStatus}
            </label>
            <select
              id="filter-status"
              value={status}
              onChange={(event) => setStatus(event.target.value)}
              className={cn(fieldClass, "mt-3")}
            >
              <option value="">{filterCopy.any}</option>
              {statusChoices.map((choice) => (
                <option key={choice.value} value={choice.value}>
                  {choice.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
        <p aria-live="polite" className="text-sm text-muted-foreground">
          {labels.showing} {visible.length} {labels.of} {projects.length}{" "}
          {labels.projects}
        </p>
        <div className="flex items-center gap-3">
          <label
            htmlFor="sort"
            className="text-xs tracking-label text-muted-foreground uppercase"
          >
            {labels.sort}
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(event) => setSort(event.target.value as SortKey)}
            className="h-11 border border-input bg-background px-3 text-sm"
          >
            <option value="price-asc">{filterCopy.sortPriceAsc}</option>
            <option value="price-desc">{filterCopy.sortPriceDesc}</option>
            <option value="possession">{filterCopy.sortPossession}</option>
          </select>
        </div>
      </div>

      {visible.length === 0 ? (
        <div className="mt-20 border-t border-border pt-12">
          <h3 className="text-xl">{labels.emptyTitle}</h3>
          <p className="mt-4 max-w-[56ch] text-pretty text-muted-foreground">
            {labels.emptyBody}
          </p>
          <button
            type="button"
            onClick={clearAll}
            className="mt-8 inline-flex min-h-11 items-center bg-primary px-7 text-xs tracking-label text-primary-foreground uppercase transition-colors hover:bg-primary/85 active:translate-y-px"
          >
            {labels.clearAll}
          </button>
        </div>
      ) : (
        <ul className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => (
            <li key={project.slug}>
              <Reveal delay={Math.min(index, 5) * staggerStep}>
                <ProjectCard project={project} />
              </Reveal>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
