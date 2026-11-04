import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#0e0f0c",
          50: "#1a1b18",
          100: "#242521",
          200: "#2e2f2b",
        },
        accent: {
          DEFAULT: "#8a9e90",
          soft: "#a8b8ae",
        },
        cream: "#f0ece3",
      },
    },
  },
  plugins: [],
};
export default config;
