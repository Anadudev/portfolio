import { categories } from "@/app//data/categories";
import { categoriesCountInterface } from "@/app/types/types";

const CategoryCardMobile = ({
  data,
  setter,
  categoryCounts,
}: {
  data?: number;
  setter: (arg0: number) => void;
  categoryCounts?: categoriesCountInterface;
}) => {
  return (
    <div className="grid gap-7 border tablet-lg:hidden rounded-tr-xl rounded-bl-xl p-4  border-slate-300 dark:border-slate-700">
      <div className="">
        <p className="text-2xl font-bold dark:text-white">Category </p>
      </div>
      <div className="">
        <ul className="flex gap-3 flex-wrap">
          {categories.map((category, index) => (
            <li
              onClick={() => setter(category.id)}
              key={index}
              className={`border  border-slate-300 dark:border-slate-700 text-sm capitalize rounded-lg px-3 py-1 cursor-pointer ${
                data === category.id && "bg-primary text-white font-semibold"
              } hover:bg-primary transition-all ease-in-out hover:text-black hover:border-primary flex gap-1`}
            >
              <p className="">{category.text}</p>
              <span>
                ({(categoryCounts && categoryCounts[category.id]?.count) || 0})
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryCardMobile;
