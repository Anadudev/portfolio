import React from "react";
import { Stacks } from "../data/stack";
import StackCapsule from "../components/Atoms/StackCapsule";
import ScrollReveal from "@/components/ScrollReveal";

const StackSection = () => {
  return (
    <section
      className="w-full items-center justify-center bg-background-light py-24 dark:bg-background-dark md:py-40"
      id="stack"
    >
      <ScrollReveal className="mx-auto flex max-w-4xl flex-col items-center gap-16 px-4">
        <h2 className="sf-display text-center text-5xl font-black tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] md:text-7xl">
          The Stack.
        </h2>
        <div className="flex max-w-3xl flex-wrap justify-center gap-3">
          {Stacks.map((stack, index) => (
            <StackCapsule key={index} title={stack.title} />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default StackSection;
