import React from "react";

const ExperienceHighlight = ({ value }: { value: string }) => {
  return (
    <code className="sf-mono rounded bg-gray-200/50 px-1 py-0.5 text-sm font-medium text-gray-800 dark:bg-gray-700/50 dark:text-gray-200">
      {value}
    </code>
  );
};

export default ExperienceHighlight;
