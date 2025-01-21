import { create } from "zustand";
import { recipeProps, recipeStore } from "./type/recipe";

const useRecipeStore = create<recipeStore>((set) => ({
  selectedItem: {} as recipeProps,
  setSelectedItem: (item: recipeProps) => set({ selectedItem: item }),
}));

export default useRecipeStore;
