"use client";
import React, { useState } from "react";
import Logo from "@/app/components/logo";
import { ButtonNew, ThemeToggle } from "@/app/components/button";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { NavProps, NavItem } from "@/app/types/types";
import { navItems } from "@/app/data/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiExternalLink } from "react-icons/fi";

export const MobileNav = () => {
  const pathName = usePathname();
  const [toggle, setToggle] = useState(true);

  return (
    <div className="text-black dark:text-white tablet:hidden">
      {toggle ? (
        <RxHamburgerMenu
          className={`size-6 cursor-pointer font-extrabold`}
          onClick={() => setToggle(!toggle)}
        />
      ) : (
        <IoClose
          className={`size-7 cursor-pointer font-extrabold`}
          onClick={() => setToggle(!toggle)}
        />
      )}

      <div
        className={`border dark:border-slate-700 bg-white dark:bg-black rounded-xl -z-10 absolute top-0 min-h-fit left-0 w-full h-[30rem] items-center flex justify-center ${
          toggle ? `fade-out-up` : ` animate-fade-in-down`
        } `}
      >
        <ul className={`grid gap-7 w-full`}>
          {navItems.map((item: NavItem, index: number) => (
            <li
              className={`text-center capitalize  `}
              onClick={() => setToggle(!toggle)}
              key={index}
            >
              <Link
                href={item.link}
                className="w-full flex justify-center gap-2"
              >
                <span
                  className={` text-xl font-bold transition-colors ease-in-out  ${
                    pathName === item.link
                      ? `text-black dark:text-primary`
                      : `text-slate-600 dark:text-white  hover:text-black dark:hover:text-primary`
                  }`}
                >
                  {item.name}
                </span>
                {item.external && (
                  <sup>
                    <FiExternalLink size={10} />
                  </sup>
                )}
                {item.new && <ButtonNew />}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const FullNav = () => {
  const pathName = usePathname();

  return (
    <div className="text-black dark:text-white tablet:block hidden">
      <div className={`bg-transparent  items-center flex justify-center`}>
        <ul className={`flex gap-5 w-full`}>
          {navItems.map((item: NavItem, index: number) => (
            <li className={`text-center capitalize  `} key={index}>
              <Link
                href={item.link}
                className="w-full flex justify-center gap-2"
              >
                <span
                  className={`transition-colors ease-in-out text-sm font-bold ${
                    pathName === item.link
                      ? `text-black dark:text-primary`
                      : ` text-slate-600 dark:text-white hover:text-black dark:hover:text-primary `
                  }`}
                >
                  {item.name}
                </span>
                {item.external && (
                  <sup>
                    <FiExternalLink size={10} />
                  </sup>
                )}
                {item.new && <ButtonNew />}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

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
        className={`glass rounded-xl border dark:border-slate-700 border-slate-300 bg-opacity-15	 bg-white dark:bg-opacity-15 dark:bg-black flex justify-between items-center py-3 px-6 tablet-sm:gap-10`}
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
