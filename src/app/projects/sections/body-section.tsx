"use client";
import React, { useState, useEffect } from "react";
import {
  CategoryCardMobile,
  CategoryCardFull,
} from "@/app/components/categoryCard";
import { allWorks } from "@/app/data/projects";
import WorkCard from "@/app/components/project-card";
import { categories } from "@/app/data/categories";
import { project } from "@/app/types/types";
import { categoriesCountInterface } from "@/app/types/types";
import { countTags } from "@/app/lib/count-tags";
import { getWorkTags } from "@/app/lib/get-project-tags";
// import { frontendTechnologies, backendTechnologies, deploymentTechnologies } from "@/app/data/technologies";

const BodySection = () => {
  const [workFilter, setWorkFilter] = useState(1);
  const [projects, setWorks] = useState<project[]>([]);

  const filterSetter = (value: number) => setWorkFilter(value);
  const categoriesCount: categoriesCountInterface = {};

  useEffect(() => {
    /**
     * Function to filter allWorks based on the current category filter
     * and updates the projects state with the filtered array.
     */
    const handleWorks = () => {
      const worksFiltered = allWorks.filter((wk) => wk.tags.includes(workFilter));

      setWorks(worksFiltered);
    };
    handleWorks();
  }, [workFilter]);

  countTags(allWorks, categoriesCount);

  return (
    <div className="">
      <div className="flex flex-col gap-7 tablet-lg:gap-1 mt-7 tablet-lg:flex-row">
        <CategoryCardMobile
          setter={filterSetter}
          data={workFilter}
          categoryCounts={categoriesCount}
        />
        <CategoryCardFull
          setter={filterSetter}
          data={workFilter}
          categoryCounts={categoriesCount}
        />
        <div className="max-w-[80rem]">
          <div className="grid gap-7 px-3 sm:px-7 tablet-sm:grid-cols-2 pc-sm:grid-cols-3">
            {projects.map(
              (project, index) =>
                project.name && (
                  <WorkCard
                    key={index}
                    name={project.name}
                    liveLink={project.liveLink}
                    description={project.description}
                    githubLink={project.githubLink}
                    thumbnail={project.thumbnail}
                    tags={getWorkTags(project?.tags as number[], categories)}
                  />
                )
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-48 pt-12">
        <p className="font-bold text-transparent text-xl bg-clip-text bg-gradient-to-t from-slate-800 to-slate-300">
          MORE COMING SOON..
        </p>
      </div>
    </div>
  );
};

export default BodySection;
