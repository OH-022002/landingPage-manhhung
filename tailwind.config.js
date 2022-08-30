/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      margin: {
        ml: "1px",
        97: "303px",
      },
      rotate: {
        10: "10deg",
        15: "20deg",
        80: "80deg",
      },
      fontFamily: {
        "architects-daughter": ["'Architects Daughter'", "sans-serif"],
      },
    },
  },
  variants: {
    display: ["group-hover"],
  },
  plugins: [],
};
