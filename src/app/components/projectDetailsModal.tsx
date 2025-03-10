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
      className={`bg-slate-500/5 fixed w-screen h-screen top-0 left-0 flex justify-center items-center z-40 cursor-pointer  ${
        show ? "block" : "hidden"
      }`}
    >
      <div className=" border rounded-xl p-4 border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 min-h-40 w-4/5">
        <div className="flex">
          <h1 className="font-bold text-3xl">{data.name}</h1>
          <div className="relative aspect-video w-44">
            <Image
              className="rounded-xl justify-self-end"
              src={data.thumbnail || ""}
              fill
              alt={data.name}
            />
          </div>
        </div>
        <div className="border-t-2 border-slate-100">
          <p className="text-slate-600 dark:text-slate-300">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
