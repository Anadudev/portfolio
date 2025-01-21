import { project } from "@/app/types/types";
import { categoriesCountInterface } from "@/app/types/types";

export const countTags = (
    allWorks: project[],
    categoriesCount: categoriesCountInterface
) => {
    allWorks.forEach((project) => {
        if (project.name != "") {
            (project.tags as number[])?.forEach((categoryId) => {
                if (categoriesCount[categoryId]) {
                    categoriesCount[categoryId].count += 1;
                } else {
                    categoriesCount[categoryId] = { count: 1, id: categoryId };
                }
            });
        }
    });
};
