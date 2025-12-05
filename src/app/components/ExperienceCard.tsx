import React from "react";
import ExperienceHighlight from "./Atoms/ExperienceHighlight";

declare interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  achievements: React.ReactNode[];
}

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-8">
      <div className="md:col-span-1">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-500">
          {experience.startDate} – {experience.endDate}
        </p>
      </div>
      <div className="md:col-span-3">
        <h3 className="sf-display text-xl font-bold text-[#1D1D1F] dark:text-[#FFFFFF]">
          {experience.title}
        </h3>
        <p className="sf-display mt-1 text-base font-medium text-gray-700 dark:text-gray-300">
          {experience.company}
        </p>
        <ul className="sf-display mt-4 list-disc space-y-3 pl-5 text-base text-gray-600 dark:text-gray-400">
          {experience.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
