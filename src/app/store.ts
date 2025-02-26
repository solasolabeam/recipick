import { create } from "zustand";
import { recipeProps, recipeStore } from "./type/recipe";

const useRecipeStore = create<recipeStore>((set) => ({
  selectedItem: {} as recipeProps,
  setSelectedItem: (item: recipeProps) => set({ selectedItem: item }),
  selectedCategory: "",
  setSelectedCategory: (itemName: string) =>
    set({ selectedCategory: itemName }),
  selectedItemName: "",
  setSelectedItemName: (itemName: string) =>
    set({ selectedItemName: itemName }),
}));

export default useRecipeStore;
