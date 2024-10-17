/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1E2328",
        secondary: "#F7F7F2",
        tertiary: "#545248",
        "black-100": "#545248",
        "black-200": "#ce9601",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 10px 120px -25px #FED053",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero3bg.png')",
      },
    },
  },
  plugins: [],
};
