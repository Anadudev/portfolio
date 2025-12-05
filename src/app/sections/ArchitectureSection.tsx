import {
  ChartNoAxesCombined,
  Cpu,
  Database,
  HardDrive,
  Radiation,
  Receipt,
  Server,
} from "lucide-react";
import React from "react";
import ScrollReveal from "@/components/ScrollReveal";

const ArchitectureSection = () => {
  return (
    <section
      className="w-full bg-[#f9f9f9] py-24 dark:bg-[#1C1C1E] md:py-40"
      id="architecture"
    >
      <ScrollReveal className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-4">
        <div className="flex max-w-3xl flex-col items-center gap-4 text-center">
          <h2 className="sf-display text-5xl font-black tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] md:text-7xl">
            System Architecture.
          </h2>
          <p className="sf-display mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400 md:text-xl">
            Designing robust, scalable, and resilient distributed systems is at
            the core of my expertise. Below is a high-level overview of a
            typical event-driven microservices architecture I architect and
            implement.
          </p>
        </div>
        <div className="w-full rounded-lg border border-solid border-black/5 bg-white p-8 dark:border-white/10 dark:bg-background-dark">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h3 className="sf-display text-2xl font-semibold text-[#1D1D1F] dark:text-white">
                Event-Driven Microservices
              </h3>
              <p className="sf-display mt-2 text-base text-gray-600 dark:text-gray-400">
                This diagram illustrates a decoupled, asynchronous system where
                services communicate via an event bus, ensuring high
                availability and fault tolerance.
              </p>
              <div className="mt-8">
                <div className="flex w-full flex-col items-center justify-center space-y-4 rounded-lg bg-gray-100 p-6 dark:bg-black/20 md:flex-row md:space-x-4 md:space-y-0">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-gray-400 bg-white dark:border-gray-600 dark:bg-gray-800/50">
                      <Server />
                    </div>
                    <p className="sf-mono text-xs font-medium text-gray-600 dark:text-gray-400">
                      API Gateway
                    </p>
                  </div>
                  <div className="h-px w-10 border-t border-dashed border-gray-400 dark:border-gray-600 md:h-0 md:w-16"></div>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-gray-400 bg-white dark:border-gray-600 dark:bg-gray-800/50">
                      <Radiation />
                    </div>
                    <p className="sf-mono text-xs font-medium text-gray-600 dark:text-gray-400">
                      Event Bus (Kafka)
                    </p>
                  </div>
                  <div className="h-px w-10 border-t border-dashed border-gray-400 dark:border-gray-600 md:h-0 md:w-16"></div>
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center gap-2 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-gray-400 bg-white dark:border-gray-600 dark:bg-gray-800/50">
                        <HardDrive />
                      </div>
                      <p className="sf-mono text-xs font-medium text-gray-600 dark:text-gray-400">
                        Service A
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-gray-400 bg-white dark:border-gray-600 dark:bg-gray-800/50">
                        <Database />
                      </div>
                      <p className="sf-mono text-xs font-medium text-gray-600 dark:text-gray-400">
                        Service B
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-gray-400 bg-white dark:border-gray-600 dark:bg-gray-800/50">
                        <Cpu />
                      </div>
                      <p className="sf-mono text-xs font-medium text-gray-600 dark:text-gray-400">
                        Service C
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <h3 className="sf-display text-2xl font-semibold text-[#1D1D1F] dark:text-white">
                Core Principles
              </h3>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg border border-solid border-black/5 bg-gray-50 p-4 dark:border-white/5 dark:bg-background-dark/50">
                  <p className="sf-mono text-sm font-bold text-gray-800 dark:text-gray-200">
                    Decoupling
                  </p>
                  <p className="sf-display mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Services operate independently, reducing inter-service
                    dependencies.
                  </p>
                </div>
                <div className="rounded-lg border border-solid border-black/5 bg-gray-50 p-4 dark:border-white/5 dark:bg-background-dark/50">
                  <p className="sf-mono text-sm font-bold text-gray-800 dark:text-gray-200">
                    Asynchronicity
                  </p>
                  <p className="sf-display mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Non-blocking communication enhances system responsiveness.
                  </p>
                </div>
                <div className="rounded-lg border border-solid border-black/5 bg-gray-50 p-4 dark:border-white/5 dark:bg-background-dark/50">
                  <p className="sf-mono text-sm font-bold text-gray-800 dark:text-gray-200">
                    Scalability
                  </p>
                  <p className="sf-display mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Individual services can be scaled based on demand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ArchitectureSection;
