import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans] },
      boxShadow: { soft: "0 18px 45px rgba(15, 23, 42, 0.08)" },
    },
  },
  plugins: [],
};

export default config;
