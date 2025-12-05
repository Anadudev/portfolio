import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-24 text-center md:py-32">
      <div className="flex max-w-5xl flex-col items-center gap-10">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
            ANADU GODWIN
          </p>
          <h1 className="text-6xl font-black leading-tight tracking-tighter text-[#1D1D1F] dark:text-[#FFFFFF] md:text-8xl lg:text-9xl">
            Engineering Scalability.
          </h1>
          <h2 className="mx-auto max-w-3xl text-lg font-normal leading-relaxed text-gray-600 dark:text-gray-400 md:text-xl">
            Senior Full-Stack Engineer specialized in distributed systems,
            atomic architecture, and high-performance backend solutions.
          </h2>
        </div>
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 text-base font-semibold leading-normal text-white transition-all bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
          <span>View Documentation</span>
        </button>
        <div className="mt-20 w-full px-4">
          <Image
            className="mx-auto w-full max-w-3xl rounded-xl"
            data-alt="An abstract, high-quality 3D rendering of interconnected metallic and crystalline structures, representing high-performance engineering concepts. The visual has no background and appears to float against the page."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5eQiKyo08HWksXuiUN7N4ck8TnNvLEpWzxfoBzgqFjXO1nZSflpH71dIdwnOHLBS6B9YTE_pYUIX6aMTOAdxZyRDoYdjxW73g4E5P6wY1TZNd3GdeKBrNDI8rJI_JofwuFc_qqEvUPt55CKrsQW-Mbz1ndQCCeoYNTh-Vn6Q36oZ1zbu065LWipfxdVUiW3Rn9uefNcfGVUN_0ihmB5RyWd6hV2PvN68luxJvdDVI2bw5CznZwm0-9XlOGBncALKUwbWQzUNE2ZQ"
            alt=""
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
