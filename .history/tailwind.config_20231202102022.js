/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mb: "320px",
      sm: "640px",
      tabletAir: "820px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
