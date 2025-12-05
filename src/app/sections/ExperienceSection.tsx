import React from "react";
import { experienceData } from "../data/experience";
import ExperienceCard from "../components/ExperienceCard";
import ScrollReveal from "@/components/ScrollReveal";

const ExperienceSection = () => {
  return (
    <section
      className="w-full bg-[#f9f9f9] py-24 dark:bg-[#1C1C1E] md:py-40"
      id="experience"
    >
      <ScrollReveal className="mx-auto flex max-w-4xl flex-col items-center gap-12 px-4 md:gap-16">
        <h2 className="text-center text-5xl font-black tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] md:text-7xl">
          Experience.
        </h2>
        <div className="w-full max-w-3xl space-y-16">
          {experienceData.map((experience) => (
            <ExperienceCard key={experience.title} experience={experience} />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ExperienceSection;
