import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        background: "var(--background)",
        surface: "var(--surface)",
        text: "var(--text)",
        "text-secondary": "var(--text-secondary)",
      },

      scale: {
        '102': '1.02',
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
  }, }, },
  plugins: [],
};
export default config;