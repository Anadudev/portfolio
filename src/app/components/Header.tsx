import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex h-24 w-full items-center justify-center bg-background-light/80 px-4 backdrop-blur-sm dark:bg-background-dark/80 md:px-8">
      <nav className="flex w-full max-w-6xl items-center justify-between gap-8">
        <a className="flex items-center gap-4" href="#">
          <div className="h-8 w-8 text-[#1D1D1F] dark:text-[#F5F5F7]">
            <svg
              fill="currentColor"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
            AG
          </h2>
        </a>
        <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100/50 p-1 dark:border-gray-700/80 dark:bg-gray-800/50">
          <a
            className="rounded-full px-4 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-white hover:text-black dark:text-gray-400 dark:hover:bg-gray-700/80 dark:hover:text-white"
            href="#architecture"
          >
            Architecture
          </a>
          <a
            className="rounded-full px-4 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-white hover:text-black dark:text-gray-400 dark:hover:bg-gray-700/80 dark:hover:text-white"
            href="#stack"
          >
            Stack
          </a>
          <a
            className="rounded-full px-4 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-white hover:text-black dark:text-gray-400 dark:hover:bg-gray-700/80 dark:hover:text-white"
            href="#experience"
          >
            Experience
          </a>
        </div>
        <a
          className="rounded-full bg-black px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          href="#contact"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
