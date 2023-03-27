/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Jua", "sans-serif"],
      },
      colors: {
        brand: "#000000",
        navBG: "#000000",
        navText: "#000000",
      },
    },
  },
  plugins: [],
};
