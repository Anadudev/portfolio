"use client";
import React from "react";
import Logo from "@/app/components/logo";
import { NavProps } from "@/app/types/types";
import { FullNav } from "@/app/components/fullNav";
import MobileNav from "@/app/components/mobileNav";
import ThemeToggle from "@/app/components/themeToggle";

const Nav = ({ theme, setTheme }: NavProps) => {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  if (typeof window !== "undefined") localStorage.setItem("theme", theme);

  return (
    <nav
      className={`fixed w-full top-0 left-0 p-6 bg-transparent tablet:flex justify-between items-center z-50`}
    >
      <div
        className={`glass rounded-3xl border dark:border-slate-700 border-slate-300 bg-opacity-15	 bg-white dark:bg-opacity-15 dark:bg-black flex justify-between items-center py-3 px-6 tablet-sm:gap-10`}
      >
        <Logo
          stye="text-2xl font-extrabold text-black dark:text-white"
          link="/"
        />
        <div className="flex gap-2 mobile:gap-7 items-center w-fit">
          <MobileNav />
          <FullNav />
          <span className="tablet:hidden">
            <ThemeToggle onClick={toggleTheme} theme={theme} />
          </span>
        </div>
      </div>
      <span className="tablet:block hidden">
        <ThemeToggle onClick={toggleTheme} theme={theme} />
      </span>
    </nav>
  );
};

export default Nav;
