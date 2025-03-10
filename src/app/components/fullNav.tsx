import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiExternalLink } from "react-icons/fi";
import { navItems } from "@/app/data/nav";
import { NavItem } from "@/app/types/types";
import ButtonNew from "@/app/components/ButtonNew";

export const FullNav = () => {
  const pathName = usePathname();

  return (
    <div className="text-black dark:text-white tablet:block hidden">
      <div className={`bg-transparent  items-center flex justify-center`}>
        <ul className={`flex gap-5 w-full`}>
          {navItems.map((item: NavItem, index: number) => (
            <li className={`text-center capitalize  `} key={index}>
              {item.external ? (
                <Link
                  target="_blank"
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
              ) : (
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
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
