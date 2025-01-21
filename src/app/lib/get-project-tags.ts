import { tags } from "@/app/types/types";

/**
 * Filters an array of tags based on the given array of project categories.
 *
 * @param {tags[]} categories - The array of tags to filter.
 * @param {number[]} workCategories - The array of category IDs of the project.
 * @returns {tags[]} A filtered array of tags that match the project categories.
 */
export const getWorkTags = (
  workCategories: Array<number>,
  categories: Array<tags>
): Array<tags> => {
  return categories.filter((category) => workCategories.includes(category.id));
};
