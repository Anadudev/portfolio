import React from "react";

interface StackCardProps {
  title: string;
  description: string;
  tags: string[];
}

const StackCard = ({ title, description, tags }: StackCardProps) => {
  return (
    <div className="group relative flex flex-col gap-4 rounded-2xl border border-white/5 bg-[#0D0D0E] p-8 transition-all hover:border-white/10 hover:bg-[#151516]">
      <div className="flex items-center justify-between">
        <h3 className="sf-display text-2xl font-bold text-white md:text-3xl">
          {title}
        </h3>
        <div className="flex gap-2">
          {tags.map((tag, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1"
            >
              <div
                className={`h-1.5 w-1.5 rounded-full ${
                  tag === "CURRENT FOCUS"
                    ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                    : "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                }`}
              />
              <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
      <p className="text-base leading-relaxed text-gray-400 md:text-lg">
        {description}
      </p>
    </div>
  );
};

export default StackCard;
