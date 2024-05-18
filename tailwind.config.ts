import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jakarta': 'Plus Jakarta Sans, sans-serif'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primaryPurple': "#635FC7",
        'lightPurple': "#A8A4FF",
        'black': "#000112",
        'darkBg': "#20212C",
        'lightBg':"#F4F7FD",
        'darkGrey': "#2B2C37",
        'mediumGrey': "#828FA3",
        'darkLines': "#3E3F4E",
        'lightLines': "#E4EBFA",
        'danger': "#EA5555",
        "lightRed":"#FF9898"
      },
      backgroundColor: {
        'dark': "#20212C",
        'light':"#F4F7FD"
      }
    },
  },
  plugins: [],
};
export default config;
