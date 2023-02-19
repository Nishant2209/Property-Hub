/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
      lxl: "1440px",
    },
    extend: {
      colors: {
        skin: "#F8F1F1",
        darkblue: "#11698E",
        brightRedSupLight: "hsl(12,88%,95%)",
        green: "#16C79A",
        lightgreen: "#9fefdbb5",
        darkBlue: "hsl(228,39%,23%)",
        darkGrayishBlue: "hsl(227,12%,61%)",
        veryDarkBlue: "#0C2D4A",
        veryPaleRed: "hsl(13,100%,96%)",
        veryLightGray: "hsl(0,0%,98%)",
        lightGray: "#cbcddc",
        orange: "#e53f19",
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Montserrat Alternates", "sans-serif"],
        cursive: ["Indie Flower", "cursive"],
      }
    },
  },
  plugins: [],
}
