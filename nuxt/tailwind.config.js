const defaultTheme = require("tailwindcss/defaultTheme");
const { colors } = defaultTheme;

module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  variants: {},
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2.5rem",
      },
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
    },

    fontFamily: {
      // montserrat: ['Montserrat', 'sans-serif'],
    },

    extend: {
      colors: {},
    },
    plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/line-clamp"),
      require("@tailwindcss/aspect-ratio"),
    ],
  },
};
