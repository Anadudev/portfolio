import React from "react";

const StackCapsule = ({ title }: { title: string }) => {
  return (
    <div className="flex h-10 items-center justify-center rounded-lg border border-black/10 bg-white px-5 shadow-sm dark:border-white/10 dark:bg-white/5">
      <p className="sf-display text-sm font-medium text-gray-800 dark:text-gray-200">
        {title}
      </p>
    </div>
  );
};

export default StackCapsule;
