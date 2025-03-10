import React from "react";
import { project } from "@/app/types/types";
import Image from "next/image";

type ProjectDetailsModalProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  data: project;
};

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  show,
  setShow,
  data,
}) => {
  return (
    <div
      onClick={() => setShow(false)}
      className={`bg-slate-500/50 fixed w-screen h-screen top-0 left-0 flex justify-center items-center z-40 cursor-pointer  ${
        show ? "block" : "hidden"
      }`}
    >
      <div className=" border rounded-xl p-4 border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 min-h-40 w-4/5 space-y-4 max-h-[80vh] overflow-y-scroll max-w-4xl">
        <div className="flex justify-between items-center gap-4">
          <h1 className="flex-1 font-bold text-3xl text-center">{data.name}</h1>
          <div className="flex-1 relative aspect-video w-44">
            <Image
              className="rounded-xl justify-self-end"
              src={data.thumbnail || ""}
              fill
              alt={data.name}
            />
          </div>
        </div>
        <div className="border-t-2 border-slate-500 p-2 space-y-4">
          <div className="">
            <p className="text-slate-600 dark:text-slate-300">
              {data.description}
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              {/* todo: technologies hre */}
            </p>
          </div>
          <div className="tablet:flex  space-y-4  space-x-4">
            <div className="space-y-2">
              <div className="flex flex-col">
                <span className="text-primary">Key features: </span>
                {data?.keyFeatures?.map((feature, index) => (
                  <p key={index} className="ml-2">
                    {feature}
                  </p>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-semibold">Technical Challenges: </span>
                {data?.technicalChallenges?.map((challenge, index) => (
                  <div key={index} className="ml-2">
                    <p className="">Challenge: {challenge.challenge}</p>
                    <p className="ml-2">Solution: {challenge.solution}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex flex-col">
                <span className="text-primary font-semibold">Code Quality: </span>
                {data?.codeQuality?.standards?.map((feature, index) => (
                  <p key={index} className="ml-2">
                    {feature}
                  </p>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-semibold">Code Reviews: </span>
                {/* {.map((reviews, index) => ( */}
                <p className="ml-2">{data?.codeQuality?.codeReviews}</p>
                {/* ))} */}
              </div>
            </div>
          </div>
          <div className="">
            <span className="text-primary font-semibold">Lessons learned: </span>
            <ol className="list-decimal">
              {data.lessonsLearned?.map((lesson, index) => (
                <li key={index} className="ml-2">
                  {lesson}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="">{/* todo: Architecture here */}</div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
