import React from "react";
import { navItems } from "../data/navbar";
import NavigationButton from "./Atoms/NavigationButton";

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center px-5 py-10">
      <p className="text-sm font-normal text-gray-500 dark:text-gray-500">
        Designed &amp; Engineered by Anadu Godwin.
      </p>
      <div className="fixed bottom-9 flex md:hidden items-center gap-2 rounded-full border border-gray-200 bg-gray-100/50 p-1 dark:border-gray-700/80 dark:bg-gray-800/50">
        {navItems.map((item) => (
          <NavigationButton
            key={item.title}
            href={item.href}
            title={item.title}
            Icon={item.icon}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
