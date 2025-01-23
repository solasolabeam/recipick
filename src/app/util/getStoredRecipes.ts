import { recipeProps } from "../type/recipe";

// localStorage에서 아이템 가져오기
const getStoredRecipes = (): recipeProps[] => {
  const storedItem = localStorage.getItem("recipeItem");
  return storedItem ? JSON.parse(storedItem) : [];
};

export default getStoredRecipes;
