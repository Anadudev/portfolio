"use client";
import React, { useState } from "react";
import { Stacks, StackCategory } from "../data/stack";
import StackCard from "../components/Atoms/StackCard";
import ScrollReveal from "@/components/ScrollReveal";

const categories: (StackCategory | "ALL")[] = [
  "ALL",
  "BACKEND",
  "FRONTEND",
  "DEVOPS",
  "AUTOMATION",
];

const StackSection = () => {
  const [activeCategory, setActiveCategory] = useState<StackCategory | "ALL">(
    "ALL",
  );

  const filteredStacks =
    activeCategory === "ALL"
      ? Stacks
      : Stacks.filter((stack) => stack.category === activeCategory);

  return (
    <section
      className="w-full items-center justify-center bg-black py-24 md:py-40"
      id="stack"
    >
      <ScrollReveal className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-4">
        <div className="flex w-full flex-col items-start gap-4">
          <h2 className="sf-display text-left text-5xl font-black tracking-tight text-white md:text-7xl">
            The Technical Stack.
          </h2>
          <p className="max-w-xl text-left text-lg text-gray-400 md:text-xl">
            Leveraging a curated suite of high-performance technologies to build
            resilient, scalable digital systems.
          </p>
        </div>

        <div className="flex w-full justify-start overflow-x-auto pb-4 md:justify-end">
          <div className="flex gap-2 rounded-full border border-white/5 bg-white/5 p-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-6 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-white text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {filteredStacks.map((stack, index) => (
            <StackCard
              key={stack.title}
              title={stack.title}
              description={stack.description}
              tags={stack.tags}
            />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default StackSection;
