import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        inputGray: "#F1F1F1",
        materialGet: "#9A9A9A",
        recipeFind: "#FFA2A2",
        recipeSearch: "#B56D40",
        freezerSearch: "#BFB2A9",
        // 카테고리 배경
        rice: "#FDCD4F",
        soup: "#FFA86A",
        sideDish: "#C6BCA2",
        dessert: "#DCBDBD",
        best: "#818E6F",
        // 카테고리 텍스트
        riceText: "#A27500",
        soupText: "#AB4700",
        sideDishText: "#513A00",
        dessertText: "#A06262",
        bestText: "white",
      },
    },
  },
  plugins: [],
} satisfies Config;
