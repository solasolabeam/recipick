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
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
