import Image from "next/image";
import HeroSection from "@/app/sections/HeroSection";
import ArchitectureSection from "./sections/ArchitectureSection";
import StackSection from "./sections/StackSection";
import ExperienceSection from "./sections/ExperienceSection";
import ContactSection from "./sections/ContactSection";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <main className="grow">
        {/* hero-section */}
        <HeroSection />
        {/* System Architecture section */}
        <ArchitectureSection />
        {/* Stack section */}
        <StackSection />
        {/* Experience section */}
        <ExperienceSection />
        {/* Contact section */}
        <ContactSection />
      </main>
    </div>
  );
}
