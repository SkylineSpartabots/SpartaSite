/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      gray: colors.gray,
      pink: colors.pink,
      blue: colors.blue,
      slate: colors.slate,
      frcpink: "#fab4ff",
      frcyellow: "#ffca5f",
      frcpurple: "#fa5fff",
      frcblue: "#0099ff",
      redditorange: "#FF4604",
    },
    extend: {
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      backgroundImage: (theme) => ({
        notFound: "url('./img/404bg.png')",
        tempDiscuss: "url('./img/temp_discuss_bg.png')",
        homePage: "url('./img/homePage.JPG')",
        climb: "url('./img/climb.JPG')",
        intake: "url('./img/intake.JPG')",
      }),
      fontFamily: {
        productsans: ['"Product Sans"'],
        scout: ["Scout"],
        scoutcond: ["ScoutCond"],
        avenir: ['"Avenir Next LT Pro"'],
      },
      animation: {
        leftslide: "slidein 0.5s ease-in-out",
      },
      keyframes: {
        slidein: {
          "0%": { transform: "translateX(-30%)", opacity: "0" },
          "100%": { transform: "translateX(0%)", opacity: "100" },
        },
      },
    },
  },
  plugins: [],
};
