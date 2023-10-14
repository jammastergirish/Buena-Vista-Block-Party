/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      backgroundColor: {
        pale: "#fdf1c8",
        "deep-blue": "#004081",
        "deep-blue-hover": "#00509E",
      },
      textColor: {
        "deep-blue": "#004081",
        orange: "#e68844",
      },
    },
  },
  plugins: [],
};