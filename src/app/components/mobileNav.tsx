import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { navItems } from "@/app/data/nav";
import { NavItem } from "@/app/types/types";
import ButtonNew from "@/app/components/ButtonNew";

const MobileNav = () => {
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
              {item.external ? (
                <Link
                  target="_blank"
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
              ) : (
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
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
