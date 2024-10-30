import HeroSection from "@/app/sections/hero-section";
import ExtraSection from "@/app/sections/extra-section";
import AboutSection from "@/app/sections/about-section";
import ToolsSection from "@/app/sections/tools-section";
import WorksSection from "@/app/sections/works-section";

export default function Home() {
  return (
    <div className={`grid tablet-sm:grid-cols-2 tablet-lg:grid-cols-3`}>
      <div className="p-4 pt-36 text-black dark:text-slate-300">
        <HeroSection />
        <ExtraSection />
      </div>
      <div className=" pt-14 text-black tablet-lg:border-x border-slate-300 dark:border-slate-700">
        <AboutSection />
        <ToolsSection />
      </div>
      <div className="p-4 text-black tablet-lg:mt-14 dark:text-slate-300 tablet-sm:col-span-2 tablet-lg:col-span-1">
        <WorksSection />
      </div>
    </div>
  );
}
