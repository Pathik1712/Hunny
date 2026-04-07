import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fredoka One"', "cursive"],
        body: ["Nunito", "sans-serif"],
        rowdies: ["Rowdies", "cursive"],
        dynapuff: ["DynaPuff", "cursive"],
      },
      colors: {
        brand: {
          red: "#E8223A",
          pink: "#F8A6C0",
          teal: "#5BBCB0",
          lavender: "#C8C5E8",
          blush: "#F6E2EC",
          yellow: "#F5C842",
          brown: "#3B1F0A",
        },
        section: {
          teal: "#74ACB0",
          pink: "#F6E0EB",
          purple: "#BFBEE3",
          gray: "#F2F7FB",
        },
        "button-pink": "#F8AFC9",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
      },
    },
  },
  plugins: [],
};
export default config;
