import { categories } from "@/app//data/categories";
import { categoriesCountInterface } from "@/app/types/types";

const CategoryCardFull = ({
  data,
  setter,
  categoryCounts,
}: {
  data?: number;
  setter: (arg0: number) => void;
  categoryCounts?: categoriesCountInterface;
}) => {
  return (
    <div className="hidden flex-grow tablet-lg:grid  tablet-lg:gap-4 gap-7 border rounded-tr-xl rounded-bl-xl p-4 border-slate-300 dark:border-slate-700  tablet-lg:h-fit max-w-52">
      <div className="">
        <p className="text-2xl font-bold dark:text-white">Category</p>
      </div>
      <div className="">
        <ul className="flex flex-col gap-1">
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => setter(category.id)}
              className={`font-semibold text-sm capitalize rounded-lg px-3 py-1 cursor-pointer w-full hover:bg-primary transition-all ease-in-out hover:text-black hover:border-primary flex justify-between ${
                data === category.id && "bg-primary text-white font-semibold"
              }`}
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
export default CategoryCardFull;
