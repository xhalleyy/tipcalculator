import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      cyan: '#26c0ab',
      darkCyan: '#00494d',
      gray: '#5e7a7d',
      lightGray: '#7f9c9f',
      offWhite: '#f4fafa',
      white: '#ffffff'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'space-mono': ['space-mono']
      },
    },
  },
  plugins: [],
};
export default config;
