import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        domine: ["var(--font-domine)"],
        rubik: ["var(--font-rubik)"],
      },
      colors: {
        red: "#d9595c",
        black: "#312F2F",
        yellow: "#260202",
        white: "#F8F7FF",
      },
    },
  },
  plugins: [],
};
export default config;
