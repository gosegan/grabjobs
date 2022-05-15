const defaultTheme = require("tailwindcss/defaultTheme");
// const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      fontSize: {},
    },
    fontFamily: {
      sans: ["font name", ...defaultTheme.fontFamily.sans],
      serif: ["font name", ...defaultTheme.fontFamily.serif],
    },
    container: (theme) => ({
      center: true,
      padding: theme("spacing.4"),
    }),
  },
  plugins: [],
};
