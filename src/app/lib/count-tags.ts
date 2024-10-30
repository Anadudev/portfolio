import { work } from "@/app/types/types";
import { categoriesCountInterface } from "@/app/types/types";

export const countTags = (
    allWorks: work[],
    categoriesCount: categoriesCountInterface
) => {
    allWorks.forEach((work) => {
        if (work.name != "") {
            (work.tags as number[])?.forEach((categoryId) => {
                if (categoriesCount[categoryId]) {
                    categoriesCount[categoryId].count += 1;
                } else {
                    categoriesCount[categoryId] = { count: 1, id: categoryId };
                }
            });
        }
    });
};
