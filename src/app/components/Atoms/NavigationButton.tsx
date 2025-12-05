import { LucideIcon } from "lucide-react";
import Link from "next/link";

const NavigationButton = ({
  href,
  title,
  Icon,
}: {
  href: string;
  title: string;
  Icon: LucideIcon;
}) => {
  return (
    <Link
      className="flex items-center flex-col rounded-full px-4 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-white hover:text-black dark:text-gray-400 dark:hover:bg-gray-700/80 dark:hover:text-white"
      href={href}
    >
      <Icon className="md:hidden" />
      {title}
    </Link>
  );
};

export default NavigationButton;
