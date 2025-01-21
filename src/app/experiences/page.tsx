import React from "react";
import Title from "@/app/components/title";
import { experiences } from "@/app/data/experiences";
import ExperienceCard from "@/app/experiences/components/experience-card";

const ProjectPage = () => {
  return (
    <div className="p-4 pt-36 space-y-12 text-black dark:text-slate-300">
      <div className="w-full flex justify-center items-center">
        <Title text={"Experiences"} pulse={true} />
      </div>
      <div className="flex w-full justify-center items-center flex-wrap">
       {experiences.map((experience, index: number) => <ExperienceCard key={index} experience={experience} />)}
      </div>
      <div className="flex justify-center items-center h-48 pt-12">
        <p className="font-bold text-transparent text-xl bg-clip-text bg-gradient-to-t from-slate-800 to-slate-300">
          MORE COMING SOON..
        </p>
      </div>
    </div>
  );
};

export default ProjectPage;
