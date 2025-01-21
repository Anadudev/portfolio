import React from "react";

interface ExperienceCardProps {
  experience: {
    id: number;
    company: string;
    role: string;
    date: string;
    summery: string;
    technologies: string[];
  };
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="border rounded-xl mobile-sm:border-2 dark:border-slate-700 border-slate-300 p-2 mobile-sm:p-4 space-y-2 flex flex-wrap max-w-[50rem]">
      <div className="mobile-sm:flex flex-wrap gap-2 flex-1 justify-between items-center">
        <div className="">
          <div className="flex gap-2">
            <span className="text-primary">Company:</span>
            <h2 className="text-nowrap">{experience.company}</h2>
          </div>
          <div className="flex gap-2">
            <span className="text-primary">Role:</span>
            <h3 className="text-nowrap">{experience.role}</h3>
          </div>
        </div>
        <div className="flex mobile-sm:block gap-2">
          <span className="text-primary">Date:</span>
          <div className="text-nowrap">{experience.date}</div>
        </div>
      </div>
      <div className="">
        <span className="text-primary text-sm">Summery:</span>
        <p className="">{experience.summery}</p>
      </div>
      <div className="">
        <span className="text-primary text-sm">Technologies:</span>
        <p className="">{experience.technologies?.join(" | ")}.</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
