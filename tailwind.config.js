module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "main-yellow": "#FBCC0A",
        "heading-yellow": "#FFAA17",
        "heading-color": "#1D2451",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
